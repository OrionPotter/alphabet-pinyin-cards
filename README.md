# 🎨 字母与拼音卡片 - 儿童学习网站

一个专为儿童设计的互动式字母和拼音学习网站，采用明亮活泼的色彩和有趣的动画效果，让学习变得更加有趣！

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

## ✨ 特色功能

### 📚 学习内容
- **汉语拼音**：完整的声母（23个）和韵母（24个）
  - 声母、单韵母、复韵母
  - 前鼻音、后鼻音韵母
  - 每个拼音配有示例汉字和标准发音
  
- **英文字母**：26个英文字母全覆盖
  - 大写、小写、大小写对照练习
  - 标准发音和书写指导

### 🎯 互动功能
- 🔊 **音频发音**：每个字母和拼音都配有标准发音
- 📏 **四线三格**：标准书写格式，帮助规范书写
- 🎨 **多种字体**：拼音（文楷、拼音体、笔画体）、英文（Andika、印刷体、练字本）
- ⌨️ **键盘快捷键**：`↑↓` 切换、`Space` 播放、`R` 随机、`F` 全屏
- 📖 **书写指导**：提供笔顺歌和书写规范

### 🎨 儿童友好设计
- 🌈 明亮柔和的渐变背景（粉红、天蓝、黄色）
- ✨ 流畅的动画效果（脉冲发光、弹跳、浮动）
- 🎪 大号清晰的字体显示
- 🎯 简单直观的操作界面
- 📱 完全响应式设计，支持手机、平板、电脑

## 🚀 快速开始

### 本地运行

```bash
# 克隆项目
git clone https://github.com/你的用户名/alphabet-pinyin-cards.git
cd alphabet-pinyin-cards

# 使用任意 HTTP 服务器运行
python -m http.server 8000
# 或
npx serve
# 或
php -S localhost:8000

# 在浏览器中打开
# http://localhost:8000
```

## ☁️ 部署到 Cloudflare Pages

### 方法一：Git 自动部署（推荐）

#### 使用 Cloudflare Pages Dashboard

1. 推送代码到 GitHub：
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/alphabet-pinyin-cards.git
git push -u origin main
```

2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)

3. 进入 **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**

4. 选择你的仓库并配置：
   - **项目名称**：alphabet-pinyin-cards
   - **生产分支**：main
   - **构建命令**：留空
   - **构建输出目录**：/

5. 点击 **Save and Deploy**，等待部署完成！

#### 使用 GitHub Actions（自动化）

项目已包含 GitHub Actions 配置！

1. 在 GitHub 仓库设置中添加 Secrets：
   - `CLOUDFLARE_API_TOKEN`：从 [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens) 获取
   - `CLOUDFLARE_ACCOUNT_ID`：从 Cloudflare Dashboard 获取

2. 推送代码后，GitHub Actions 会自动部署！

### 方法二：Wrangler CLI 部署

```bash
# 安装依赖
npm install

# 登录 Cloudflare
npx wrangler login

# 部署
npm run deploy

# 或使用脚本
# Windows: deploy.bat
# Linux/Mac: ./deploy.sh
```

### 方法三：直接上传

1. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. **Workers & Pages** → **Create application** → **Pages** → **Upload assets**
3. 上传项目文件（排除 node_modules、.git 等）
4. 点击 **Deploy site**

## 📦 项目结构

```
.
├── index.html          # 主页面
├── styles.css          # 样式文件（含动画效果）
├── app.js             # 交互逻辑
├── audio/             # 音频文件
│   ├── english/       # 英文字母发音（26个）
│   └── pinyin/        # 拼音发音（47个）
├── fonts/             # 字体文件
│   ├── andika-basic.ttf
│   ├── pinyin-regular.*
│   ├── pinyin-step.*
│   └── pinyin-wenkai-light.*
├── .github/
│   └── workflows/
│       └── deploy.yml # GitHub Actions 配置
├── _headers           # Cloudflare 缓存配置
├── _redirects         # 路由重定向规则
├── wrangler.toml      # Wrangler 配置
├── package.json       # NPM 配置
├── deploy.sh          # Linux/Mac 部署脚本
├── deploy.bat         # Windows 部署脚本
├── .gitignore         # Git 忽略规则
├── LICENSE            # MIT 许可证
└── README.md          # 项目说明
```

## 🎮 使用说明

### 基本操作
1. **选择学习内容**：在左侧面板选择"汉语拼音"或"英文字母"
2. **选择模式**：选择具体的学习模式（声母、韵母、大写、小写等）
3. **切换卡片**：
   - 点击卡片或按 `↓` 键切换到下一张
   - 按 `↑` 键返回上一张
   - 点击"随机一张"或按 `R` 键随机学习
4. **播放发音**：点击"播放发音"按钮或按 `Space` 键
5. **全屏学习**：点击"卡片全屏"按钮或按 `F` 键

### 键盘快捷键
- `↑` - 上一张卡片
- `↓` - 下一张卡片
- `Space` - 播放当前发音
- `R` - 随机一张卡片
- `F` - 切换全屏模式

### 字体选择
- **拼音**：文楷（日常阅读）、拼音体（标准）、笔画体（描红练习）
- **英文**：Andika（儿童友好）、印刷体（标准）、练字本（书写练习）

## 🛠️ 技术栈

- **纯前端**：HTML5 + CSS3 + Vanilla JavaScript
- **无依赖**：不需要任何框架或库
- **响应式设计**：适配手机、平板、电脑
- **Web Audio API**：音频播放
- **Fullscreen API**：全屏功能
- **CSS Grid & Flexbox**：现代布局
- **CSS Animations**：流畅动画效果

## 🎨 UI 优化亮点

### 色彩方案
- 主色调：珊瑚红 `#ff6b6b`、明黄色 `#ffd93d`
- 背景：粉红、天蓝、黄色渐变
- 动态背景动画，营造梦幻氛围

### 动画效果
- **脉冲发光**：激活按钮呼吸灯效果
- **弹跳动画**：选中项弹跳反馈
- **浮动效果**：标签和提示上下浮动
- **卡片摇摆**：悬停时轻微摇摆
- **光晕移动**：背景光晕缓慢移动

### 交互优化
- 所有按钮悬停放大 1.05-1.08 倍
- 点击时缩小到 0.98 倍，模拟按压感
- 平滑过渡动画（0.16-0.18 秒）
- 触摸友好，最小点击区域 44x44px

## 🌐 自定义域名

部署后可以绑定自己的域名：

1. 在 Cloudflare Pages 项目页面，点击 **Custom domains**
2. 点击 **Set up a custom domain**
3. 输入域名（如 `learn.example.com`）
4. 配置 DNS 记录（Cloudflare 域名自动配置）

## 🐛 常见问题

### 部署相关

**Q: 部署失败：Authentication error**  
A: 运行 `wrangler logout` 然后 `wrangler login` 重新登录

**Q: 音频文件无法播放**  
A: 确保 `audio/` 文件夹已完整上传，检查浏览器控制台错误

**Q: 字体显示异常**  
A: 确保 `fonts/` 文件夹已完整上传，等待字体加载完成

**Q: 更新后网站没变化**  
A: 按 `Ctrl+Shift+R`（Windows）或 `Cmd+Shift+R`（Mac）强制刷新

### 使用相关

**Q: 如何添加新的学习内容？**  
A: 编辑 `app.js` 中的 `deckRegistry` 对象

**Q: 如何修改颜色主题？**  
A: 编辑 `styles.css` 中的 CSS 变量（第 40-50 行）

**Q: 如何添加音频文件？**  
A: 将 MP3 文件放入 `audio/english/` 或 `audio/pinyin/` 目录

## 📊 性能优化

### 缓存策略
- 音频文件：缓存 1 年
- 字体文件：缓存 1 年
- CSS/JS：缓存 1 年
- HTML：不缓存，确保更新及时

### 加载优化
- 字体使用 woff2 格式（最小）
- 音频使用 MP3 格式（兼容性好）
- CSS 使用变量，避免重复
- 音频智能缓存，避免重复下载

## 📝 浏览器支持

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Android Chrome 90+

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- 字体来源：开源字体项目
- 音频素材：标准普通话发音
- 设计灵感：儿童教育最佳实践

## 📮 联系方式

如有问题或建议，欢迎通过 Issue 联系我们！

---

**让学习变得更有趣！🎉**

Made with ❤️ for children's education
