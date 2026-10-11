# Al-Xorazmiy Vorislari — AI Telegram Ustoz Boti

Ushbu loyiha **"Muhammad al-Xorazmiy vorislari"** tizimidagi 8-sinf o'quvchilari uchun maxsus tayyorlangan **AI Telegram bot** hisoblanadi.

Muallif va ustoz: **Kallibek Iskenderov**

---

## 🎯 Botning asosiy xususiyatlari

1. **Faqat darslik doirasida javob beradi:**
   Botga qat'iy chegaraviy tizim ko'rsatmasi (Guardrail System Prompt) berilgan. U **faqat va faqat** Al-Xorazmiy Vorislari darsliklarida mavjud bo'lgan 1-25 darslar (va kelgusida qo'shiladigan darslar) ma'lumotlari asosida javob qaytaradi.
   - O'quvchi o'yinlar, boshqa maktab fanlari, shaxsiy yoki begona mavzularda savol bersa — bot muloyimlik bilan faqat Al-Xorazmiy darsliklari bo'yicha yordam bera olishini aytadi.
2. **Darslikdagi boy bilimlar bazasi:**
   - Har bir darsning mentor hayotiy tushuntirishlari (RAM vs SSD, algoritm tushunchasi va h.k.)
   - Nazariya, qoidalar, jadvallar
   - Kod namunalari (Flowgorithm, pseudo-kod, Python, Windows cmd)
   - Uyga vazifalar va ularning yechimlari
   - Test savollari va to'g'ri javob izohlari
   - Lug'at va atamalar
   - Ko'p uchraydigan xatolar va ularni to'g'rilash
3. **Google Gemini Flash AI:**
   Google AI Studio ning yuqori tezlikdagi Gemini Flash modelidan foydalanadi. O'quvchi savol berganda javob bir necha soniyada yetkaziladi.
4. **Qulay interfeys:**
   - `/start` — Kirish va yo'riqnoma
   - `/darslar` — 1-25 darslarni inline tugmalar orqali sahifalab ko'rish
   - `/tozalash` — Suhbat tarixini tozalash (yangi mavzuga o'tish)
   - Doimiy pastki menyu (Darslar ro'yxati, Namunaviy savollar, Yangi mavzu)

---

## 🚀 Ishga tushirish bo'yicha qo'llanma

### 1-qadam: Sozlamalarni kiritish (.env)
Loyihadagi `.env` faylini oching va quyidagi ikki kalitni kiriting:

```env
# 1. Telegram bot tokeni (@BotFather dan olinadi)
BOT_TOKEN=8123456789:AAH...

# 2. Google Gemini API kaliti (https://aistudio.google.com/app/apikey dan olinadi)
GEMINI_API_KEY=AIzaSy...

# 3. Model (standart: gemini-2.0-flash)
GEMINI_MODEL=gemini-2.0-flash
```

> **API Kalitlarni qayerdan olish mumkin?**
> - **BOT_TOKEN**: Telegramda [@BotFather](https://t.me/BotFather) botiga kiring, `/newbot` buyrug'ini bering, botga nom va username tanlang. Oxirida berilgan tokenni oling.
> - **GEMINI_API_KEY**: [Google AI Studio](https://aistudio.google.com/app/apikey) sahifasiga kiring (Google akkountingiz bilan) va "Create API key" tugmasini bosing. API mutlaqo bepul (Free tier mavjud).

### 2-qadam: Botni ishga tushirish
Shunchaki papkadagi **`run_bot.bat`** faylini ikki marta bosing!
Yoki terminalda:
```powershell
python main.py
```

### 3-qadam: Kelajakda yangi darslar yozilganda yangilash
Asl darslik loyihangizda (`C:\Users\kalli\Desktop\al-xorazmiy-vorislari`) 26-dars, 27-dars va hokazolar yozilganda, bot bazasini bitta tugma bilan yangilash uchun:
**`update_lessons.bat`** faylini bosing.
Bu skript asl loyihangizga umuman tegmasdan faqat yangi fayllarni bot xotirasiga o'tkazadi va bazani yangilaydi.

---

## 📁 Loyiha tuzilmasi

```
al-xorazmiy-bot/
├── bot/
│   ├── config.py         # Sozlamalar (.env dan yuklash)
│   ├── gemini.py         # Gemini API bilan aloqa va qat'iy ko'rsatmalar
│   ├── knowledge.py      # Darsliklarni qidirish va kontekst yig'ish
│   ├── keyboards.py      # Menyu va inline tugmalar
│   └── handlers.py       # Xabarlar va buyruqlarni boshqarish
├── data/
│   ├── raw_lessons/      # Darsliklarning xavfsiz nusxasi
│   ├── lessons.json      # Strukturalangan toza darslar bazasi (919 KB)
│   └── lessons_summary.json # Darslar mundarijasi
├── tools/
│   └── extract_knowledge.mjs # Darslarni tahlil qilish skripti
├── .env                  # Token va API kalitlar
├── main.py               # Botni ishga tushirish
├── run_bot.bat           # Bir klikda ishga tushirish
├── update_lessons.bat    # Bazani yangilash
└── requirements.txt
```
