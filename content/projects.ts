import type { Localized } from "@/lib/i18n/config";

export type ProjectCategory = "web" | "app" | "design" | "oss";

export type Project = {
  id: string;
  title: Localized;
  description: Localized;
  category: ProjectCategory;
  tags: string[];
  year: string;
  link?: string;
  repo?: string;
  featured?: boolean;
  /** CSS gradient used as the card cover (swap for <Image/> + /public asset). */
  cover: string;
};

export const projectCategories: { id: ProjectCategory | "all"; label: Localized }[] =
  [
    { id: "all", label: { en: "All", zh: "全部" } },
    { id: "web", label: { en: "Web", zh: "网页" } },
    { id: "app", label: { en: "App", zh: "应用" } },
    { id: "design", label: { en: "Design", zh: "设计" } },
    { id: "oss", label: { en: "Open source", zh: "开源" } },
  ];

/* ----------------------------------------------------------------
 * TODO: Replace with your real projects. `cover` is a CSS gradient
 * placeholder — drop an image into /public and use next/image instead.
 * ---------------------------------------------------------------- */
export const projects: Project[] = [
  {
    id: "aurora-ui",
    title: { en: "Aurora UI Kit", zh: "Aurora 组件库" },
    description: {
      en: "A liquid-glass component library with 40+ themeable, accessible primitives.",
      zh: "一套液态玻璃组件库,40+ 可主题化、可访问的基础组件。",
    },
    category: "design",
    tags: ["React", "Tailwind", "Design System"],
    year: "2025",
    link: "https://example.com",
    repo: "https://github.com/",
    featured: true,
    cover: "linear-gradient(135deg, #6366f1, #06b6d4)",
  },
  {
    id: "flow-notes",
    title: { en: "Flow Notes", zh: "Flow 笔记" },
    description: {
      en: "Offline-first note app with real-time sync and a command palette.",
      zh: "离线优先的笔记应用,支持实时同步与命令面板。",
    },
    category: "app",
    tags: ["Next.js", "SQLite", "PWA"],
    year: "2024",
    link: "https://example.com",
    featured: true,
    cover: "linear-gradient(135deg, #7c3aed, #db2777)",
  },
  {
    id: "pulse-dashboard",
    title: { en: "Pulse Dashboard", zh: "Pulse 仪表盘" },
    description: {
      en: "Real-time analytics dashboard visualizing millions of events a day.",
      zh: "实时分析仪表盘,可视化每天数百万条事件。",
    },
    category: "web",
    tags: ["React", "D3", "WebSocket"],
    year: "2024",
    link: "https://example.com",
    cover: "linear-gradient(135deg, #0ea5e9, #22d3ee)",
  },
  {
    id: "glassmorph",
    title: { en: "glassmorph", zh: "glassmorph" },
    description: {
      en: "A tiny CSS utility for production-ready glassmorphism effects.",
      zh: "一个小巧的 CSS 工具,生成可用于生产的玻璃拟态效果。",
    },
    category: "oss",
    tags: ["CSS", "OSS"],
    year: "2023",
    repo: "https://github.com/",
    cover: "linear-gradient(135deg, #f59e0b, #ef4444)",
  },
  {
    id: "wander",
    title: { en: "Wander", zh: "Wander 旅行" },
    description: {
      en: "Trip-planning app with collaborative itineraries and maps.",
      zh: "支持协作行程与地图的旅行规划应用。",
    },
    category: "app",
    tags: ["React Native", "Maps"],
    year: "2023",
    link: "https://example.com",
    cover: "linear-gradient(135deg, #10b981, #14b8a6)",
  },
  {
    id: "portfolio",
    title: { en: "This site", zh: "本站" },
    description: {
      en: "The liquid-glass portfolio you're looking at — open source.",
      zh: "你正在看的这个液态玻璃作品集 —— 已开源。",
    },
    category: "web",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    year: "2026",
    repo: "https://github.com/",
    cover: "linear-gradient(135deg, #818cf8, #c4b5fd)",
  },
];
