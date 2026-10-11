@echo off
chcp 65001 > nul
title GitHub'ga yuklash
cls
echo ===================================================
echo   Al-Xorazmiy AI Bot - GitHub'ga yuklash
echo ===================================================
echo.

git remote -v > nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo GitHub'dagi yangi repozitoriy havolasini kiriting
    echo Masalan: https://github.com/kalliprodev/axv-ai-bot.git
    echo.
    set /p REPO_URL="Havola: "
    if "%REPO_URL%"=="" (
        echo Xatolik: Havola kiritilmadi!
        pause
        exit /b
    )
    git remote add origin %REPO_URL%
)

echo.
echo O'zgarishlar GitHub'ga yuborilmoqda...
git branch -M main
git push -u origin main

echo.
pause
