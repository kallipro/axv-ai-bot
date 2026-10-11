import json
import re
from typing import Optional, List, Dict, Any, Tuple
from bot.config import LESSONS_FILE, SUMMARY_FILE

class KnowledgeBase:
    def __init__(self):
        self.lessons: List[Dict[str, Any]] = []
        self.summaries: List[Dict[str, Any]] = []
        self.lesson_by_num: Dict[int, Dict[str, Any]] = {}
        self.load()

    def load(self):
        if LESSONS_FILE.exists():
            with open(LESSONS_FILE, "r", encoding="utf-8") as f:
                self.lessons = json.load(f)
                self.lesson_by_num = {d["raqam"]: d for d in self.lessons}

        if SUMMARY_FILE.exists():
            with open(SUMMARY_FILE, "r", encoding="utf-8") as f:
                self.summaries = json.load(f)

    def get_lesson(self, raqam: int) -> Optional[Dict[str, Any]]:
        return self.lesson_by_num.get(raqam)

    def get_all_summaries(self) -> List[Dict[str, Any]]:
        return self.summaries

    def get_catalog_text(self) -> str:
        """Barcha mavjud darslar ro'yxatini ixcham matn sifatida qaytaradi."""
        lines = []
        for s in self.summaries:
            atamalar = ", ".join(s.get("atamalar", []))
            lines.append(f"{s['raqam']}-dars: {s['sarlavha']} (Asosiy tushunchalar: {atamalar})")
        return "\n".join(lines)

    def find_lesson_number_in_query(self, query: str) -> Optional[int]:
        """Savol matnidan dars raqamini aniqlash (masalan '1-dars', 'dars 5', '20 dars')."""
        match = re.search(r'(\d+)\s*-\s*dars', query, re.IGNORECASE)
        if match:
            return int(match.group(1))

        match = re.search(r'dars\s*(\d+)', query, re.IGNORECASE)
        if match:
            return int(match.group(1))

        match = re.search(r'(\d+)\s+dars', query, re.IGNORECASE)
        if match:
            return int(match.group(1))

        return None

    @staticmethod
    def _extract_stems(word: str) -> List[str]:
        """O'zbek tili qo'shimchalarini ajratib o'zaklarni topish."""
        stems = {word}
        suffixes = [
            "larning", "larimiz", "laringiz", "lardan", "larda", "larga", "larni", "lari", "lar",
            "ning", "dagi", "dan", "da", "ga", "ka", "qa", "ni", "si", "lik", "li", "siz"
        ]
        for sfx in suffixes:
            if word.endswith(sfx) and len(word) - len(sfx) >= 3:
                stems.add(word[:-len(sfx)])
        return list(stems)

    def search_relevant_lessons(self, query: str, max_results: int = 2) -> List[Dict[str, Any]]:
        """Savolga eng mos darslarni topish."""
        # 1. Aniq dars raqami ko'rsatilgan bo'lsa
        num = self.find_lesson_number_in_query(query)
        if num and num in self.lesson_by_num:
            return [self.lesson_by_num[num]]

        # 2. Kalit so'zlar bo'yicha qidirish
        query_clean = re.sub(r'[^\w\s]', ' ', query.lower())
        raw_words = [w for w in query_clean.split() if len(w) > 2]
        if not raw_words:
            return []

        # Har bir so'zning o'zaklarini olish
        all_stems = set()
        for w in raw_words:
            for s in self._extract_stems(w):
                all_stems.add(s)

        scored = []
        for d in self.lessons:
            score = 0
            sarlavha_low = d.get("sarlavha", "").lower()
            toliq_low = d.get("toliq_matn", "").lower()
            sarlavha_words = set(re.sub(r'[^\w\s]', ' ', sarlavha_low).split())

            for stem in all_stems:
                # Sarlavhadagi so'zlar bilan to'liq yoki qisman moslik
                for tw in sarlavha_words:
                    if stem == tw or (len(stem) >= 4 and (stem in tw or tw in stem)):
                        score += 30

                # Lug'atdagi terminlar bilan moslik
                for lug in d.get("lugat", []):
                    lug_soz = lug.get("soz", "").lower()
                    if stem in lug_soz or lug_soz in stem:
                        score += 20

                # Umumiy to'liq matnda uchrashi
                count = toliq_low.count(stem)
                if count > 0:
                    score += min(count * 2, 20)

            if score > 0:
                scored.append((score, d))

        scored.sort(key=lambda x: x[0], reverse=True)
        return [item[1] for item in scored[:max_results]]

    def get_context_for_query(self, query: str) -> Tuple[str, List[int]]:
        """Gemini uchun kontekst tayyorlash."""
        matched_lessons = self.search_relevant_lessons(query, max_results=2)
        matched_nums = [d["raqam"] for d in matched_lessons]

        context_parts = []
        context_parts.append("### DARSLIK MAVZULARI MUNDARIJASI (1-25 darslar):")
        context_parts.append(self.get_catalog_text())
        context_parts.append("\n" + "=" * 50)

        if matched_lessons:
            context_parts.append("### SAVOLGA ENG MOS DARSLAR MATNI (DARSLIKDAN TO'G'RIDAN-TO'G'RI KO'CHIRILGAN):")
            for d in matched_lessons:
                context_parts.append(f"\n--- {d['raqam']}-DARS TAFSILOTLARI ---")
                context_parts.append(d["toliq_matn"])
        else:
            context_parts.append("### Eslatma: Savol bo'yicha aniq bitta dars topilmadi, umumiy mundarijaga qarab javob bering yoki o'quvchidan aniqlashtirishni so'rang.")

        return "\n\n".join(context_parts), matched_nums

knowledge_base = KnowledgeBase()
