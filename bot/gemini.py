import json
import logging
from typing import List, Dict, Any, Optional
import aiohttp
from bot.config import GEMINI_API_KEY, GEMINI_MODEL
from bot.knowledge import knowledge_base

logger = logging.getLogger(__name__)

SYSTEM_PROMPT = """Siz — "Muhammad al-Xorazmiy vorislari" o'quv dasturi bo'yicha 8-sinf o'quvchilarining virtual ustozi va AI yordamchisisiz.
Darsliklar muallifi va bosh ustoz: Kallibek Iskenderov (Kallibek aka).

QAT'IY QOIDALAR VA CHEGARALAR (BU QOIDALARNI BUZISH QAT'IYAN TAQIQLANADI):
1. FAQAT VA FAQAT quyida berilgan darslik materiallari (1-25 darslar va mundarija) ASOSIDA javob bering.
2. AGAR O'QUVCHI DARSLIK MAVZULARIGA ALOQADOR BO'LMAGAN SAVOL BERSA:
   (Masalan: video o'yinlar, boshqa maktab fanlari, sport, shaxsiy suhbatlar, siyosat, darslikda yo'q boshqa chet mavzular yoki dasturlar haqida):
   SIZ BOSHQA HECH QANDAY JAVOB BERMANG! QAT'IY VA MULOYIMLIK BILAN QUYIDAGICHA JAVOB BERING:
   "Kechirasiz, men faqat Al-Xorazmiy Vorislari darsliklari bo'yicha savollarga javob bera olaman. Sizga kompyuter arxitekturasi, Windows, axborot birliklari, algoritmlar yoki Flowgorithm kabi darslarimiz bo'yicha yordam bera olaman. Darslarimiz bo'yicha savolingiz bormi?"
3. Darslikda aytilmagan tashqi ma'lumotlarni qo'shmang va to'qimang.
4. Javoblaringiz 8-sinf o'quvchisiga mos, o'ta tushunarli, do'stona va sof o'zbek tilida (lotin alifbosida) bo'lsin.
5. Darslikdagi "Mentor" hayotiy o'xshatishlaridan (RAM — daftardagi yozuv, SSD — javon; algoritm — retsept) faol foydalaning.
6. Agar o'quvchi biror darsning uyga vazifasi yoki test savoli haqida so'rasa, to'g'ri tushuntirib, yechimini ko'rsating.
7. Telegram uchun javobni chiroyli qiling: muhim atamalarni qalin (**so'z**) qiling, ro'yxatlar va tartibli bo'limlardan foydalaning.
"""

# Foydalanuvchilar suhbat tarixi xotirasi (user_id -> list of {"role": "user"|"model", "text": "..."})
USER_HISTORY: Dict[int, List[Dict[str, str]]] = {}

def clear_user_history(user_id: int):
    """Foydalanuvchi tarixini tozalash."""
    if user_id in USER_HISTORY:
        del USER_HISTORY[user_id]

async def ask_gemini(user_id: int, user_query: str) -> str:
    """Gemini API ga so'rov yuborish va javob olish."""
    if not GEMINI_API_KEY:
        return (
            "⚠️ **Xatolik:** Gemini API kaliti kiritilmagan!\n\n"
            "Iltimos, `.env` faylida `GEMINI_API_KEY` ni to'ldiring."
        )

    # 1. Kontekstni tayyorlash
    context_text, matched_nums = knowledge_base.get_context_for_query(user_query)

    # 2. Foydalanuvchi tarixini olish (oxirgi 6 ta xabar)
    history = USER_HISTORY.get(user_id, [])

    # Gemini uchun contents tuzish
    contents: List[Dict[str, Any]] = []

    # Tarixni qo'shish
    for turn in history[-6:]:
        contents.append({
            "role": turn["role"],
            "parts": [{"text": turn["text"]}]
        })

    # Joriy savol bilan kontekstni birlashtirish
    current_prompt = (
        f"--- DARSLIK MA'LUMOTLARI VA KONTEKST ---\n"
        f"{context_text}\n\n"
        f"--- O'QUVCHI SAVOLI ---\n"
        f"{user_query}\n\n"
        f"Eslatma: Faqat yuqoridagi darslik ma'lumotlari doirasida o'quvchiga samimiy va to'liq javob bering!"
    )

    contents.append({
        "role": "user",
        "parts": [{"text": current_prompt}]
    })

    payload = {
        "system_instruction": {
            "parts": [{"text": SYSTEM_PROMPT}]
        },
        "contents": contents,
        "generationConfig": {
            "temperature": 0.2,
            "maxOutputTokens": 2048,
            "topP": 0.95
        }
    }

    # Model sinovlari (agar ko'rsatilgan model ishlamasa zaxira modellar)
    models_to_try = [GEMINI_MODEL, "gemini-3.8-flash", "gemini-3.7-flash", "gemini-3.5-flash", "gemini-2.5-flash"]
    # Duplikatlarni olib tashlash
    seen = set()
    models_to_try = [m for m in models_to_try if m and not (m in seen or seen.add(m))]

    async with aiohttp.ClientSession() as session:
        for model in models_to_try:
            url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={GEMINI_API_KEY}"
            try:
                async with session.post(
                    url,
                    headers={"Content-Type": "application/json"},
                    json=payload,
                    timeout=aiohttp.ClientTimeout(total=60)
                ) as response:
                    res_json = await response.json()

                    if response.status == 200:
                        candidates = res_json.get("candidates", [])
                        if candidates:
                            answer_parts = candidates[0].get("content", {}).get("parts", [])
                            if answer_parts:
                                full_text = answer_parts[0].get("text", "").strip()

                                # Tarixga yozib qo'yish
                                if user_id not in USER_HISTORY:
                                    USER_HISTORY[user_id] = []
                                USER_HISTORY[user_id].append({"role": "user", "text": user_query})
                                USER_HISTORY[user_id].append({"role": "model", "text": full_text})

                                # Tarix juda kattalashib ketmasin
                                if len(USER_HISTORY[user_id]) > 10:
                                    USER_HISTORY[user_id] = USER_HISTORY[user_id][-10:]

                                return full_text

                        return "Kechirasiz, javob shakllantirib bo'lmadi. Iltimos, savolingizni qaytadan yozing."

                    # Xato bo'lsa (masalan 404 - model not found)
                    error_info = res_json.get("error", {})
                    error_msg = error_info.get("message", "Noma'lum xatolik")
                    logger.warning(f"Model {model} xatolik berdi ({response.status}): {error_msg}")

                    if response.status == 404 and model != models_to_try[-1]:
                        # Keyingi modelni sinab ko'ramiz
                        continue

                    return f"⚠️ **API xatoligi ({model}):** {error_msg}"

            except Exception as e:
                logger.error(f"Gemini API so'rovida xatolik: {e}")
                if model != models_to_try[-1]:
                    continue
                return f"⚠️ Server bilan bog'lanishda xatolik yuz berdi: {str(e)}"

    return "Kechirasiz, serverdan javob olib bo'lmadi."
