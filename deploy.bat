@echo off
REM 字母与拼音卡片 - Cloudflare Pages 部署脚本 (Windows)

echo 🚀 开始部署到 Cloudflare Pages...

REM 检查是否安装了 wrangler
where wrangler >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ 未找到 wrangler，正在安装...
    npm install -g wrangler
)

REM 检查是否已登录
echo 🔐 检查 Cloudflare 登录状态...
wrangler whoami >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo 📝 请登录 Cloudflare...
    wrangler login
)

REM 部署到 Cloudflare Pages
echo 📦 正在部署...
wrangler pages deploy . --project-name=alphabet-pinyin-cards

echo ✅ 部署完成！
echo 🌐 你的网站将在几分钟内上线
echo 📍 访问地址：https://alphabet-pinyin-cards.pages.dev

pause
