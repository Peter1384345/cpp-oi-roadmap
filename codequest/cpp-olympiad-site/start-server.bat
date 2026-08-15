@echo off
chcp 65001 >nul
title CodeQuest - C++ 竞赛学习平台
echo.
echo   ========================================
echo     CodeQuest - C++ 竞赛学习平台
echo     正在启动本地服务器...
echo   ========================================
echo.

:: 检查 node 是否可用
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [提示] 未检测到 Node.js，正在尝试使用 Python...
    where python >nul 2>nul
    if %errorlevel% neq 0 (
        echo [错误] 未检测到 Python 或 Node.js，请先安装其中之一。
        echo.
        pause
        exit /b 1
    )
    echo 使用 Python 启动服务器...
    echo 访问地址: http://localhost:8080
    echo.
    start http://localhost:8080
    python -m http.server 8080
    pause
    exit /b 0
)

:: 使用 Node.js 启动
echo 使用 Node.js 启动服务器...
echo 访问地址: http://localhost:8080
echo.

:: 延迟打开浏览器（等服务器启动）
start /b cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:8080"

:: 启动服务器
node "%~dp0server.js"

pause
