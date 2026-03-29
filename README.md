# 字母与拼音卡片

一个面向儿童的互动式字母与拼音学习网站，使用原生 HTML、CSS 和 JavaScript 构建。

## 功能

- 拼音学习：声母、韵母与发音示例
- 英文字母学习：大小写切换、发音播放
- 音频播放：字母和拼音均可直接试听
- 字体切换：内置多种适合儿童识读和书写的字体
- 响应式界面：支持桌面端和移动端

## 本地运行

```bash
git clone <your-repo-url>
cd alphabet-pinyin-cards
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

如果本机没有 Python，也可以使用：

```bash
npx serve
```

## 部署到 Cloudflare Pages

当前仓库采用 Cloudflare Pages 的 Git 自动部署方案。

1. 将代码推送到 GitHub。
2. 打开 [Cloudflare Dashboard](https://dash.cloudflare.com/)。
3. 进入 `Workers & Pages`。
4. 选择 `Create application` -> `Pages` -> `Connect to Git`。
5. 选择本仓库并使用以下配置：

- Project name: `alphabet-pinyin-cards`
- Production branch: `main`
- Framework preset: `None`
- Build command: 留空
- Build output directory: `.`

保存后部署。之后每次推送到 `main`，Cloudflare Pages 都会自动重新部署。

## 项目结构

```text
.
├── index.html
├── styles.css
├── app.js
├── audio/
├── fonts/
├── _headers
├── _redirects
├── wrangler.toml
├── package.json
├── .github/
└── README.md
```

## 常见问题

**Q: 推送到 GitHub 后没有自动部署？**  
A: 检查 Cloudflare Pages 项目是否已连接正确仓库，并确认生产分支为 `main`。

**Q: 音频或字体资源加载失败？**  
A: 检查 `audio/` 和 `fonts/` 目录是否完整提交到仓库。

**Q: 页面更新后看起来没有变化？**  
A: 先确认 Cloudflare Pages 新部署已成功，再尝试强制刷新浏览器缓存。

## 许可证

MIT
