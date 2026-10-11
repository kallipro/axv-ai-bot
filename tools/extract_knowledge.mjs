/**
 * Al-Xorazmiy Vorislari darsliklarini JSON formatga o'tkazish skripti.
 * Bu skript faqat mahalliy nusxadan o'qiydi (asl loyihaga tegmaydi).
 */

import { readFileSync, readdirSync, existsSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const RAW_DIR = join(ROOT, "data", "raw_lessons");
const OUT_DIR = join(ROOT, "data");

if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true });
}

// HTML teglarni tozalash funksiyasi
function stripHtml(html) {
  if (!html || typeof html !== "string") return html;
  return html
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&rarr;/g, "->")
    .replace(/&larr;/g, "<-")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&hellip;/g, "...")
    .replace(/&#215;/g, "×")
    .replace(/<br\s*[\/]?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<\/li>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const sandbox = {
  window: {},
  console: console,
  localStorage: { getItem: () => null, setItem: () => {} }
};
sandbox.globalThis = sandbox;

const DARSLAR = {};
sandbox.window.AVX = {
  dars: (o) => {
    DARSLAR[o.id] = o;
  }
};
sandbox.AVX = sandbox.window.AVX;

function yukla(faylYoli) {
  if (!existsSync(faylYoli)) return;
  const kod = readFileSync(faylYoli, "utf8");
  try {
    const fn = new Function("window", "AVX", "console", "localStorage", kod);
    fn(sandbox.window, sandbox.window.AVX, console, sandbox.localStorage);
  } catch (err) {
    console.error(`Xatolik faylni yuklashda: ${faylYoli}`, err.message);
  }
}

// 1. Syllabusni yuklash
const syllabusFayl = join(RAW_DIR, "syllabus.js");
if (existsSync(syllabusFayl)) {
  yukla(syllabusFayl);
}

// 2. Darslarni yuklash
const lessonsDir = join(RAW_DIR, "lessons");
if (existsSync(lessonsDir)) {
  const fayllar = readdirSync(lessonsDir).filter(f => f.endsWith(".js")).sort();
  for (const f of fayllar) {
    yukla(join(lessonsDir, f));
  }
}

console.log(`Yuklangan darslar soni: ${Object.keys(DARSLAR).length}`);

// 3. Tozalangan va strukturalangan darslar ro'yxatini shakllantirish
const tozaDarslar = [];
const summaryList = [];

for (const [id, d] of Object.entries(DARSLAR)) {
  // Dars raqamini olish (masalan, cs8-001 -> 1)
  const numMatch = id.match(/(\d+)$/);
  const darsRaqami = numMatch ? parseInt(numMatch[1], 10) : 0;

  // Matnli xulosa tuzish
  const mentorMatnlari = (d.mentor || []).map(m => {
    const matnlar = Array.isArray(m.matn) ? m.matn.map(stripHtml).join(" ") : stripHtml(m.matn);
    return `${stripHtml(m.sarlavha)}: ${matnlar}`;
  });

  const nazariyaMatnlari = (d.nazariya || []).map(n => {
    let qism = `${stripHtml(n.sarlavha)}:\n`;
    if (n.matn) {
      const m = Array.isArray(n.matn) ? n.matn.map(stripHtml).join("\n") : stripHtml(n.matn);
      qism += m + "\n";
    }
    if (n.royhat) {
      qism += n.royhat.map(r => "- " + stripHtml(r)).join("\n") + "\n";
    }
    if (n.jadval) {
      qism += "Jadval:\n" + n.jadval.map(row => row.map(stripHtml).join(" | ")).join("\n") + "\n";
    }
    return qism.trim();
  });

  const kodlarMatni = (d.kodlar || []).map(k => {
    return `Misol: ${stripHtml(k.sarlavha)} (${k.til || 'kod'})\nIzoh: ${stripHtml(k.izoh || k.tushuntirish || '')}\nKod:\n${k.kod}\nNatija:\n${k.natija || ''}`;
  });

  const uygaMatni = (d.uyga || []).map((u, idx) => {
    return `${idx + 1}-vazifa: ${stripHtml(u.savol)}\nJavob: ${stripHtml(u.javob)}`;
  });

  const testMatni = (d.test || []).map((t, idx) => {
    const togriVariant = t.variantlar && t.variantlar[t.togri] ? t.variantlar[t.togri] : "";
    return `Savol ${idx + 1}: ${stripHtml(t.savol)}\nVariantlar: ${t.variantlar.join(", ")}\nTo'g'ri javob: ${togriVariant}\nIzoh: ${stripHtml(t.izoh || '')}`;
  });

  const lugatMatni = (d.lugat || []).map(l => `${stripHtml(l.soz)}: ${stripHtml(l.izoh)}`);
  const xatolarMatni = (d.xatolar || []).map(x => typeof x === "string" ? stripHtml(x) : `${stripHtml(x.xato || '')} -> ${stripHtml(x.yechim || '')}`);

  const toliqMatn = [
    `DARS ${darsRaqami}: ${stripHtml(d.sarlavha)}`,
    `KIRITISH: ${stripHtml(d.kiritish || '')}`,
    `MAQSAD: ${(d.maqsad || []).map(stripHtml).join("; ")}`,
    `MENTOR TUSHUNTIRISHLARI:\n${mentorMatnlari.join("\n\n")}`,
    `NAZARIYA VA QOIDALAR:\n${nazariyaMatnlari.join("\n\n")}`,
    kodlarMatni.length > 0 ? `KOD VA AMALIY MISOLLAR:\n${kodlarMatni.join("\n\n")}` : "",
    uygaMatni.length > 0 ? `UYGA VAZIFALAR VA YECHIMLARI:\n${uygaMatni.join("\n\n")}` : "",
    testMatni.length > 0 ? `TEST SAVOLLARI VA JAVOBLARI:\n${testMatni.join("\n\n")}` : "",
    lugatMatni.length > 0 ? `LUG'AT (ATAMALAR):\n${lugatMatni.join("\n")}` : "",
    xatolarMatni.length > 0 ? `KO'P UCHRAYDIGAN XATOLAR:\n${xatolarMatni.join("\n")}` : "",
  ].filter(Boolean).join("\n\n" + "=".repeat(40) + "\n\n");

  const darsObj = {
    id: d.id,
    raqam: darsRaqami,
    sarlavha: stripHtml(d.sarlavha),
    kiritish: stripHtml(d.kiritish || ''),
    maqsad: (d.maqsad || []).map(stripHtml),
    mentor: (d.mentor || []).map(m => ({
      sarlavha: stripHtml(m.sarlavha),
      matn: Array.isArray(m.matn) ? m.matn.map(stripHtml) : [stripHtml(m.matn)]
    })),
    nazariya: (d.nazariya || []).map(n => ({
      sarlavha: stripHtml(n.sarlavha),
      matn: Array.isArray(n.matn) ? n.matn.map(stripHtml) : [stripHtml(n.matn || '')],
      jadval: n.jadval || null,
      royhat: n.royhat ? n.royhat.map(stripHtml) : null
    })),
    kodlar: (d.kodlar || []).map(k => ({
      sarlavha: stripHtml(k.sarlavha),
      til: k.til || 'text',
      izoh: stripHtml(k.izoh || k.tushuntirish || ''),
      kod: k.kod,
      natija: k.natija || ''
    })),
    uyga: (d.uyga || []).map(u => ({
      savol: stripHtml(u.savol),
      javob: stripHtml(u.javob)
    })),
    test: (d.test || []).map(t => ({
      savol: stripHtml(t.savol),
      variantlar: t.variantlar || [],
      togri: t.togri,
      izoh: stripHtml(t.izoh || '')
    })),
    lugat: (d.lugat || []).map(l => ({
      soz: stripHtml(l.soz),
      izoh: stripHtml(l.izoh)
    })),
    xatolar: xatolarMatni,
    toliq_matn: toliqMatn
  };

  tozaDarslar.push(darsObj);

  summaryList.push({
    raqam: darsRaqami,
    id: d.id,
    sarlavha: stripHtml(d.sarlavha),
    qisqacha: stripHtml(d.kiritish || '').slice(0, 160) + "...",
    atamalar: (d.lugat || []).map(l => stripHtml(l.soz)).slice(0, 8)
  });
}

// Tartiblash
tozaDarslar.sort((a, b) => a.raqam - b.raqam);
summaryList.sort((a, b) => a.raqam - b.raqam);

// Fayllarga yozish
writeFileSync(join(OUT_DIR, "lessons.json"), JSON.stringify(tozaDarslar, null, 2), "utf8");
writeFileSync(join(OUT_DIR, "lessons_summary.json"), JSON.stringify(summaryList, null, 2), "utf8");

console.log(`Muvaffaqiyatli saqlandi!`);
console.log(`- ${tozaDarslar.length} ta dars -> data/lessons.json`);
console.log(`- ${summaryList.length} ta dars ro'yxati -> data/lessons_summary.json`);
