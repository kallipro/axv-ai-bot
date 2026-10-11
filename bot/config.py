import os
from pathlib import Path
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / ".env")

BOT_TOKEN = os.getenv("BOT_TOKEN", "").strip()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "").strip()
GEMINI_MODEL = os.getenv("GEMINI_MODEL", "gemini-3.8-flash").strip()

# Adminlar (ixtiyoriy)
admin_ids_str = os.getenv("ADMIN_IDS", "").strip()
ADMIN_IDS = [int(x.strip()) for x in admin_ids_str.split(",") if x.strip().isdigit()]

DATA_DIR = BASE_DIR / "data"
LESSONS_FILE = DATA_DIR / "lessons.json"
SUMMARY_FILE = DATA_DIR / "lessons_summary.json"
