import html
from aiogram import Router, F
from aiogram.filters import CommandStart, Command
from aiogram.types import Message, CallbackQuery
from aiogram.enums import ChatAction

from bot.knowledge import knowledge_base
from bot.gemini import ask_gemini, clear_user_history
from bot.keyboards import (
    get_main_menu_keyboard,
    get_lessons_inline_keyboard,
    get_lesson_detail_keyboard
)

router = Router()

@router.message(CommandStart())
async def cmd_start(message: Message):
    """Start komandasi."""
    user_name = message.from_user.first_name if message.from_user else "O'quvchi"
    text = (
        f"Assalomu alaykum, <b>{html.escape(user_name)}</b>! 👋\n\n"
        f"Men <b>«Muhammad al-Xorazmiy vorislari»</b> o'quv dasturi bo'yicha "
        f"8-sinf o'quvchilari uchun <b>Virtual AI Ustoz</b>man 🤖\n\n"
        f"👨‍🏫 <b>Darslik muallifi va ustozingiz:</b> Kallibek Iskenderov\n\n"
        f"📚 <b>Nimalar bo'yicha yordam bera olaman?</b>\n"
        f"• 1-25 darslarimizdagi barcha mavzular\n"
        f"• Kompyuter arxitekturasi (CPU, RAM, SSD, ona plata...)\n"
        f"• Windows muhiti va klaviatura tezkor tugmalari\n"
        f"• Axborot o'lchov birliklari va fayl turlari\n"
        f"• Kiberxavfsizlik, parollar va shaxsiy ma'lumotlar\n"
        f"• Algoritmlar (chiziqli, tarmoqlanuvchi, takrorlanuvchi)\n"
        f"• Flowgorithm muhitida blok-sxemalar tuzish\n"
        f"• Uyga vazifalar, amaliy ishlar va test savollari\n\n"
        f"🔒 <i>Eslatma: Men FAQAT Al-Xorazmiy darsliklarimiz bo'yicha javob beraman.</i>\n\n"
        f"Istalgan savolingizni yozing yoki quyidagi menyudan foydalaning! 👇"
    )
    await message.answer(text, reply_markup=get_main_menu_keyboard(), parse_mode="HTML")

@router.message(Command("help"))
@router.message(F.text == "ℹ️ Bot haqida")
async def cmd_help(message: Message):
    """Bot haqida ma'lumot."""
    text = (
        f"ℹ️ <b>Al-Xorazmiy Vorislari — AI Ustoz Boti</b>\n\n"
        f"Ushbu bot 8-sinf o'quvchilariga Al-Xorazmiy darsliklari bo'yicha "
        f"o'rganishda 24/7 yordam berish uchun yaratilgan.\n\n"
        f"• <b>Muallif:</b> Kallibek Iskenderov\n"
        f"• <b>Mavjud darslar:</b> 1-25 darslar (Computer Science Foundation)\n"
        f"• <b>Sun'iy intellekt:</b> Gemini Flash AI\n\n"
        f"📌 <b>Asosiy buyruqlar:</b>\n"
        f"/start - Botni qayta ishga tushirish\n"
        f"/darslar - Barcha darslar ro'yxati\n"
        f"/tozalash - Suhbat tarixini tozalash (yangi mavzuga o'tish)\n"
        f"/help - Ushbu yordam oynasi"
    )
    await message.answer(text, reply_markup=get_main_menu_keyboard(), parse_mode="HTML")

@router.message(Command("tozalash"))
@router.message(Command("reset"))
@router.message(F.text == "🔄 Yangi mavzu (Tozalash)")
async def cmd_clear(message: Message):
    """Suhbat tarixini tozalash."""
    clear_user_history(message.from_user.id)
    await message.answer(
        "🔄 <b>Suhbat tarixi tozalandi!</b>\nEndi yangi mavzu bo'yicha savol berishingiz mumkin.",
        reply_markup=get_main_menu_keyboard(),
        parse_mode="HTML"
    )

@router.message(Command("darslar"))
@router.message(F.text == "📚 Darslar ro'yxati")
async def cmd_lessons(message: Message):
    """Darslar ro'yxatini chiqarish."""
    summaries = knowledge_base.get_all_summaries()
    text = (
        f"📚 <b>Al-Xorazmiy Vorislari — Darslar mundarijasi</b>\n"
        f"Hozirda <b>{len(summaries)} ta dars</b> bazaga kiritilgan.\n\n"
        f"Quyidagi tugmalardan birini tanlang yoki savolingizni to'g'ridan-to'g'ri yozing:"
    )
    kb = get_lessons_inline_keyboard(summaries, page=1)
    await message.answer(text, reply_markup=kb, parse_mode="HTML")

@router.message(F.text == "💡 Namunaviy savollar")
async def cmd_examples(message: Message):
    """Namunaviy savollar ro'yxati."""
    text = (
        f"💡 <b>Namunaviy savollar:</b>\n\n"
        f"Quyidagi savollarni nusxalab yoki o'zingiz xohlagancha yozib so'rashingiz mumkin:\n\n"
        f"1️⃣ <i>1-darsdagi RAM va SSD farqini tushuntirib bering</i>\n"
        f"2️⃣ <i>Windowsda Ctrl+Shift+Esc qanday oynani ochadi?</i>\n"
        f"3️⃣ <i>1 kilobayt necha baytga teng?</i>\n"
        f"4️⃣ <i>Kuchli parol qanday tuziladi?</i>\n"
        f"5️⃣ <i>Algoritmning 5 ta xossasi nima?</i>\n"
        f"6️⃣ <i>Blok-sxemada romb va oval shakllari nimani bildiradi?</i>\n"
        f"7️⃣ <i>Flowgorithmda tarmoqlanuvchi algoritm qanday chiziladi?</i>\n"
        f"8️⃣ <i>1-darsning test savollarini ber</i>\n"
        f"9️⃣ <i>20-darsning uyga vazifasini tushuntirib ber</i>"
    )
    await message.answer(text, reply_markup=get_main_menu_keyboard(), parse_mode="HTML")

# --- Inline Callback Handlers ---

@router.callback_query(F.data.startswith("page:"))
async def cb_page(callback: CallbackQuery):
    """Sahifani almashtirish."""
    page = int(callback.data.split(":")[1])
    summaries = knowledge_base.get_all_summaries()
    kb = get_lessons_inline_keyboard(summaries, page=page)
    await callback.message.edit_reply_markup(reply_markup=kb)
    await callback.answer()

@router.callback_query(F.data == "noop")
async def cb_noop(callback: CallbackQuery):
    await callback.answer()

@router.callback_query(F.data.startswith("lesson:"))
async def cb_lesson_detail(callback: CallbackQuery):
    """Dars haqida qisqacha ma'lumot."""
    raqam = int(callback.data.split(":")[1])
    dars = knowledge_base.get_lesson(raqam)
    if not dars:
        await callback.answer("Dars topilmadi", show_alert=True)
        return

    maqsadlar = "\n".join([f"• {m}" for m in dars.get("maqsad", [])[:4]])
    text = (
        f"📖 <b>{dars['raqam']}-dars: {html.escape(dars['sarlavha'])}</b>\n\n"
        f"📝 <b>Mavzu haqida:</b>\n{html.escape(dars.get('kiritish', ''))}\n\n"
        f"🎯 <b>Asosiy maqsadlar:</b>\n{html.escape(maqsadlar)}\n\n"
        f"Quyidagi tugmalar orqali ushbu darsning testlari, uyga vazifasi yoki "
        f"xatolarini ko'rishingiz mumkin:"
    )
    await callback.message.edit_text(
        text,
        reply_markup=get_lesson_detail_keyboard(raqam),
        parse_mode="HTML"
    )
    await callback.answer()

@router.callback_query(F.data.startswith("ask_test:"))
async def cb_ask_test(callback: CallbackQuery):
    raqam = int(callback.data.split(":")[1])
    await callback.answer()
    query = f"{raqam}-darsning test savollari va to'g'ri javoblari tushuntirishi bilan qanday?"
    await process_ai_query(callback.message, callback.from_user.id, query)

@router.callback_query(F.data.startswith("ask_hw:"))
async def cb_ask_hw(callback: CallbackQuery):
    raqam = int(callback.data.split(":")[1])
    await callback.answer()
    query = f"{raqam}-darsning uyga vazifalari va ularning yechimi qanday?"
    await process_ai_query(callback.message, callback.from_user.id, query)

@router.callback_query(F.data.startswith("ask_err:"))
async def cb_ask_err(callback: CallbackQuery):
    raqam = int(callback.data.split(":")[1])
    await callback.answer()
    query = f"{raqam}-darsda o'quvchilar eng ko'p qiladigan xatolar va ularning to'g'rilanishi qanday?"
    await process_ai_query(callback.message, callback.from_user.id, query)

# --- Matnli Savollarga Javob Berish ---

async def process_ai_query(message: Message, user_id: int, user_query: str):
    """AI orqali savolga javob berish umumiy funksiyasi."""
    # Typing animatsiyasi
    await message.bot.send_chat_action(chat_id=message.chat.id, action=ChatAction.TYPING)

    # Gemini orqali javob olish
    answer = await ask_gemini(user_id, user_query)

    # Telegram xabari 4096 belgidan oshmasligi kerak, agar oshsa bo'lib yuborish
    if len(answer) <= 4000:
        await message.answer(answer, parse_mode=None)
    else:
        chunks = [answer[i:i+4000] for i in range(0, len(answer), 4000)]
        for chunk in chunks:
            await message.answer(chunk, parse_mode=None)

@router.message(F.text)
async def handle_user_question(message: Message):
    """Har qanday erkin savol matni kelganda."""
    await process_ai_query(message, message.from_user.id, message.text)
