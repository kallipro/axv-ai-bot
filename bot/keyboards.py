from aiogram.types import (
    ReplyKeyboardMarkup,
    KeyboardButton,
    InlineKeyboardMarkup,
    InlineKeyboardButton
)
from typing import List, Dict, Any

def get_main_menu_keyboard() -> ReplyKeyboardMarkup:
    """Asosiy pastki menyu klaviaturasi."""
    keyboard = [
        [KeyboardButton(text="📚 Darslar ro'yxati"), KeyboardButton(text="💡 Namunaviy savollar")],
        [KeyboardButton(text="🔄 Yangi mavzu (Tozalash)"), KeyboardButton(text="ℹ️ Bot haqida")]
    ]
    return ReplyKeyboardMarkup(
        keyboard=keyboard,
        resize_keyboard=True,
        persistent=True
    )

def get_lessons_inline_keyboard(lessons: List[Dict[str, Any]], page: int = 1, per_page: int = 8) -> InlineKeyboardMarkup:
    """Darslarni sahifalab ko'rsatish inline klaviaturasi."""
    total_lessons = len(lessons)
    total_pages = (total_lessons + per_page - 1) // per_page
    start_idx = (page - 1) * per_page
    end_idx = min(start_idx + per_page, total_lessons)

    inline_keyboard = []
    # Dars tugmalari (har qatorda 2 tadan)
    row = []
    for item in lessons[start_idx:end_idx]:
        row.append(
            InlineKeyboardButton(
                text=f"📖 {item['raqam']}-dars",
                callback_data=f"lesson:{item['raqam']}"
            )
        )
        if len(row) == 2:
            inline_keyboard.append(row)
            row = []
    if row:
        inline_keyboard.append(row)

    # Navigatsiya tugmalari
    nav_row = []
    if page > 1:
        nav_row.append(InlineKeyboardButton(text="⬅️ Oldingi", callback_data=f"page:{page - 1}"))
    nav_row.append(InlineKeyboardButton(text=f"📄 {page}/{total_pages}", callback_data="noop"))
    if page < total_pages:
        nav_row.append(InlineKeyboardButton(text="Keyingi ➡️", callback_data=f"page:{page + 1}"))

    inline_keyboard.append(nav_row)
    return InlineKeyboardMarkup(inline_keyboard=inline_keyboard)

def get_lesson_detail_keyboard(raqam: int) -> InlineKeyboardMarkup:
    """Aniq dars ochilganda chiqadigan tugmalar."""
    buttons = [
        [
            InlineKeyboardButton(text="❓ Test savollari", callback_data=f"ask_test:{raqam}"),
            InlineKeyboardButton(text="📝 Uyga vazifasi", callback_data=f"ask_hw:{raqam}")
        ],
        [
            InlineKeyboardButton(text="⚠️ Ko'p uchraydigan xatolar", callback_data=f"ask_err:{raqam}")
        ],
        [
            InlineKeyboardButton(text="🔙 Darslar ro'yxatiga qaytish", callback_data="page:1")
        ]
    ]
    return InlineKeyboardMarkup(inline_keyboard=buttons)
