@echo off
chcp 65001 > nul
title Darsliklar bazasini yangilash
cls
echo ===================================================
echo   Al-Xorazmiy Vorislari - Darsliklar yangilash
echo ===================================================
echo.
echo 1. Asl darslik loyihasidan yangi darslar nusxalanmoqda...
xcopy /E /I /Y "..\al-xorazmiy-vorislari\lessons\*" "data\raw_lessons\lessons\" > nul
copy /Y "..\al-xorazmiy-vorislari\data\syllabus.js" "data\raw_lessons\syllabus.js" > nul

echo 2. Yangi darslar sun'iy intellekt bazasiga o'tkazilmoqda...
node tools\extract_knowledge.mjs

echo.
echo ===================================================
echo   Baza muvaffaqiyatli yangilandi!
echo ===================================================
echo.
pause
