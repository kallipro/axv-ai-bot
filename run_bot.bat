@echo off
chcp 65001 > nul
title Al-Xorazmiy Vorislari - AI Bot
cls
echo ===================================================
echo   Al-Xorazmiy Vorislari - AI Telegram Bot
echo   Muallif: Kallibek Iskenderov
echo ===================================================
echo.

python main.py

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ---------------------------------------------------
    echo Dasturda xatolik yuz berdi.
    echo ---------------------------------------------------
)

echo.
pause
