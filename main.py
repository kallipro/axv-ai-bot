import asyncio
import logging
import sys
from aiogram import Bot, Dispatcher
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

from bot.config import BOT_TOKEN, GEMINI_MODEL, LESSONS_FILE
from bot.handlers import router
from bot.knowledge import knowledge_base

# Log sozlamalari
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(name)s - %(message)s"
)
logger = logging.getLogger(__name__)

async def main():
    print("=" * 60)
    print("🤖 AL-XORAZMIY VORISLARI — AI TELEGRAM BOT")
    print("=" * 60)

    # 1. Baza holatini tekshirish
    lessons_count = len(knowledge_base.lessons)
    print(f"📚 Bazadagi darslar soni: {lessons_count} ta")
    print(f"🧠 Sun'iy intellekt modeli: {GEMINI_MODEL}")

    if lessons_count == 0:
        print("⚠️ DIQQAT: data/lessons.json faylida darslar topilmadi!")
        print("Iltimos, avval 'node tools/extract_knowledge.mjs' ni ishga tushiring.")

    # 2. BOT_TOKEN tekshirish
    if not BOT_TOKEN or BOT_TOKEN == "YOUR_TELEGRAM_BOT_TOKEN_HERE":
        print("\n❌ XATOLIK: Telegram Bot Token kiritilmagan!")
        print("Iltimos, '.env' faylini oching va quyidagi qatorga bot tokeningizni yozing:")
        print("BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz\n")
        print("Tokenni @BotFather telegram botidan olishingiz mumkin.")
        print("=" * 60)
        return

    # 3. Bot va Dispatcher yaratish
    bot = Bot(
        token=BOT_TOKEN,
        default=DefaultBotProperties(parse_mode=ParseMode.HTML)
    )
    dp = Dispatcher()
    dp.include_router(router)

    try:
        me = await bot.get_me()
        print(f"\n✅ Bot muvaffaqiyatli ulandi: @{me.username} ({me.full_name})")
        print("🚀 Bot xabarlarni qabul qilishga tayyor...")
        print("Botni to'xtatish uchun: Ctrl + C bosing.")
        print("=" * 60 + "\n")

        # Eskirgan (kutayotgan) yangilanishlarni tashlab yuborish
        await bot.delete_webhook(drop_pending_updates=True)
        await dp.start_polling(bot)
    except Exception as e:
        logger.error(f"Botni ishga tushirishda xatolik: {e}")
    finally:
        await bot.session.close()

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except (KeyboardInterrupt, SystemExit):
        print("\n🛑 Bot to'xtatildi.")
