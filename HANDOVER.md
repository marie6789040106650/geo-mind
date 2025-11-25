# GEO Mind - 项目交接与开发指南 (v1.0)

## 1. 项目概述

**GEO Mind** 是一个面向 AI 搜索引擎优化 (GEO - Generative Engine Optimization) 的高性能官网。
本项目目前处于 **原型完成阶段**，采用 React 19 + Tailwind CSS 开发。

*   **核心目标**：不仅面向人类用户提供高端视觉体验，更面向 AI 爬虫（GPTBot, Google-Extended）提供结构化数据和语义内容。
*   **当前状态**：纯前端代码，使用静态模拟数据 (`constants.ts`)。
*   **下一步计划**：迁移至本地 Vite 环境，并对接 Headless CMS (Strapi/Sanity)。

---

## 2. 环境迁移指南 (Migration Guide)

当前代码运行在浏览器端环境中（依赖 CDN）。请按照以下步骤迁移至标准的本地开发环境。

### 2.1 初始化项目
推荐使用 **Vite** 初始化项目：

```bash
npm create vite@latest geo-mind-web -- --template react-ts
cd geo-mind-web
npm install
```

### 2.2 安装依赖
请安装以下核心库：

```bash
npm install lucide-react clsx tailwind-merge
npm install -D tailwindcss postcss autoprefixer
```

### 2.3 配置 Tailwind CSS
1.  初始化配置：`npx tailwindcss init -p`
2.  修改 `tailwind.config.js`，**必须** 包含以下自定义主题配置（从原 `index.html` 提取）：

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#020617', // 主背景色
          900: '#0f172a', // 卡片背景
          800: '#1e293b', // 边框/Hover
        },
        primary: {
          400: '#818cf8',
          500: '#6366f1', // 品牌主色
          600: '#4f46e5',
        },
        accent: {
          cyan: '#22d3ee',
          purple: '#c084fc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'tilt': 'tilt 10s infinite linear',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        }
      }
    },
  },
  plugins: [],
}
```

### 2.4 文件结构迁移
请将源代码按以下结构放置：

```
src/
├── components/       # 存放 Header, Hero, Services, Analytics 等组件
├── constants.ts      # 静态数据（后续需替换为 API 调用）
├── types.ts          # TypeScript 类型定义
├── App.tsx           # 主应用入口
├── index.css         # 引入 @tailwind 指令
└── main.tsx          # 入口文件 (原 index.tsx)
```

---

## 3. GEO 开发核心规范 (严禁修改)

本项目包含针对 AI 爬虫的特殊优化代码，**请在二次开发时严格保留以下逻辑**：

### 3.1 结构化数据注入 (`SchemaScript.tsx`)
*   **位置**: `src/components/SchemaScript.tsx`
*   **作用**: 将 JSON-LD 数据动态注入到 `<head>` 中。
*   **规则**: `App.tsx` 中定义的 `websiteSchema`, `organizationSchema`, `serviceSchema`, `faqSchema` 必须保留，这是 GEO 的核心。

### 3.2 隐形文本 (Hidden Text)
为了让 AI 理解复杂的 SVG 图表，我们使用了 `sr-only` (Screen Reader Only) 类。
*   **位置**: `Hero.tsx` 和 `CaseStudies.tsx`
*   **示例**:
    ```html
    <div className="sr-only">
        图表描述：一张展示GEO技术原理的架构图...
    </div>
    ```
*   **注意**: **绝对不要删除这些看似不可见的文本**，它们是给 GPTBot 看的。

---

## 4. CMS 接口对接指南 (To-Do)

当前数据存储在 `src/constants.ts`。请对接 Headless CMS (推荐 Strapi 或 Sanity)，并替换为 API 调用。

*   **服务列表**: 映射到 Strapi Collection Type "Service"。
*   **FAQ**: 映射到 Strapi Collection Type "KnowledgeBase"。
*   **案例**: 映射到 Strapi Collection Type "CaseStudy"。

---

## 5. 字体与资源
*   **字体**: Google Fonts (Inter + JetBrains Mono)。
*   **图标**: lucide-react。

---

## 6. 后续待开发清单 (Remaining Tasks)

在实际上线前，请务必完成以下任务：

1.  **服务端渲染 (SSR) 改造**:
    *   建议迁移至 **Next.js** (App Router) 或 **Astro**。目前项目为纯客户端渲染 (CSR)，不利于 AI 爬虫的高效索引。
    
2.  **数据埋点配置**:
    *   文件: `src/components/Analytics.tsx`
    *   操作: 填入真实的 `GA_MEASUREMENT_ID` (Google Analytics) 和 `CLARITY_PROJECT_ID` (Microsoft Clarity)。

3.  **表单功能落地**:
    *   文件: `src/components/Footer.tsx`
    *   操作: 将模拟的 `setTimeout` 替换为真实的后端 API 调用（或对接 Zapier/飞书 Webhook）。

4.  **法律合规页面**:
    *   操作: 创建 `Privacy Policy` 和 `Terms of Service` 页面，并替换 Footer 中的 `#` 链接。

5.  **SEO 基础设施**:
    *   操作: 生成 `sitemap.xml` 和 `robots.txt` 文件，配置 CDN 缓存规则。

**© 2024 GEO Mind 开发组**