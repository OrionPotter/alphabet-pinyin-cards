# 字母与拼音卡片

一个面向儿童启蒙学习的静态网页项目，提供英文字母、汉语拼音与英语音标卡片练习，支持发音播放、随机切换、全屏展示和字体切换。

项目使用原生 `HTML + CSS + JavaScript` 构建，无框架依赖，适合直接部署到 Cloudflare Pages。

## 在线部署方案

当前仓库使用 Cloudflare Pages 的 Git 自动部署方案。

推荐配置如下：

- Project name: `alphabet-pinyin-cards`
- Production branch: `main`
- Framework preset: `None`
- Build command: 留空
- Build output directory: `.`

完成首次接入后，后续每次推送到 `main` 分支都会自动触发重新部署。

## 功能概览

### 学习内容

- 英文字母学习
- 汉语拼音学习
- 英语音标学习
- 支持不同学习模式切换
- 支持卡片列表快速定位

### 交互能力

- 点击卡片切换下一张
- 上一张 / 下一张切换
- 随机抽取卡片
- 播放当前发音
- 卡片全屏展示
- 音标卡片支持本地 MP3 发音资源播放

### 展示能力

- 多种卡片字体切换
- 书写提示与规则展示
- 易混内容参考
- 桌面端与移动端适配

## 键盘快捷键

- `ArrowUp`: 上一张
- `ArrowDown`: 下一张
- `R`: 随机一张
- `F`: 切换全屏
- `Space`: 播放当前发音

## 本地运行

项目是纯静态资源，不需要构建。

### 方式一：Python

```bash
python -m http.server 8000
```

### 方式二：Node

```bash
npx serve
```

启动后访问：

```text
http://localhost:8000
```

## 项目结构

```text
.
├── index.html          # 页面结构
├── styles.css          # 页面样式
├── app.js              # 页面交互逻辑
├── audio/              # 发音音频资源
├── fonts/              # 字体资源
├── _headers            # Cloudflare Pages 响应头配置
├── _redirects          # Cloudflare Pages 路由/重定向配置
├── wrangler.toml       # Pages 项目配置
├── package.json        # 本地开发辅助配置
├── .github/            # GitHub Actions 配置
└── README.md
```

## Cloudflare Pages 部署步骤

1. 将仓库推送到 GitHub。
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)。
3. 进入 `Workers & Pages`。
4. 选择 `Create application` -> `Pages` -> `Connect to Git`。
5. 选择当前仓库。
6. 按以下参数填写：

```text
Framework preset: None
Build command: <留空>
Build output directory: .
```

7. 保存并部署。

说明：

- 本项目不需要执行 `wrangler deploy`
- 也不需要单独的构建脚本
- 这是一个直接发布静态资源的 Pages 项目

## 资源文件说明

### `audio/phonetic/`

英语音标使用独立的静态 MP3 资源目录，文件名与音标一一映射。
如需重新生成，可运行：

```bash
python scripts/generate_phonetic_audio.py
```

### `_headers`

用于给特定路径添加 HTTP 响应头，常见用途包括：

- 配置缓存策略
- 设置字体、音频、CSS、JS 的缓存时间
- 添加安全相关响应头

### `_redirects`

用于定义 Cloudflare Pages 的重定向或重写规则，常见用途包括：

- 老路径跳转到新路径
- 单页应用路由回退
- 路径别名映射

## 常见问题

### 推送到 GitHub 后没有自动部署

检查以下几项：

- Cloudflare Pages 是否连接到了正确仓库
- Production branch 是否为 `main`
- Cloudflare 项目是否仍然存在

### 音频或字体加载失败

检查以下目录是否完整提交：

- `audio/`
- `fonts/`

同时确认资源引用路径没有被修改。

### 页面更新后看起来没有变化

先确认 Cloudflare Pages 的最新部署已经成功，再尝试浏览器强制刷新。

### 本地直接打开 HTML 后部分功能异常

建议通过本地静态服务器访问，不要直接双击打开 `index.html`。

## 技术栈

- HTML5
- CSS3
- Vanilla JavaScript
- Cloudflare Pages

## 许可证

本项目使用 [MIT License](./LICENSE)。
