import type { Localized } from "@/lib/i18n/config";

export type ExperienceItem = {
  id: string;
  kind: "work" | "education";
  role: Localized;
  org: Localized;
  period: string;
  description: Localized;
  tags?: string[];
};

/* ----------------------------------------------------------------
 * TODO: Replace with your real experience & education.
 * Items render top-to-bottom, so keep them in reverse-chronological order.
 * ---------------------------------------------------------------- */
export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    kind: "work",
    role: { en: "Senior Product Engineer", zh: "高级产品工程师" },
    org: { en: "Acme Studio", zh: "Acme 工作室" },
    period: "2023 — Now",
    description: {
      en: "Lead the web platform — design system, performance and DX. Ship features end-to-end across the stack.",
      zh: "主导 Web 平台 —— 设计系统、性能与开发体验,全栈端到端交付功能。",
    },
    tags: ["Next.js", "Design Systems", "Team Lead"],
  },
  {
    id: "exp-2",
    kind: "work",
    role: { en: "Frontend Engineer", zh: "前端工程师" },
    org: { en: "Nimbus Inc.", zh: "Nimbus 公司" },
    period: "2021 — 2023",
    description: {
      en: "Built customer-facing dashboards and a reusable component library used across products.",
      zh: "构建面向客户的仪表盘,以及跨产品复用的组件库。",
    },
    tags: ["React", "TypeScript", "Charts"],
  },
  {
    id: "exp-3",
    kind: "work",
    role: { en: "Product Design Intern", zh: "产品设计实习生" },
    org: { en: "Loom Labs", zh: "Loom 实验室" },
    period: "2020 — 2021",
    description: {
      en: "Prototyped and tested new interaction patterns for a mobile-first product.",
      zh: "为移动优先的产品设计原型并测试新的交互模式。",
    },
    tags: ["Figma", "Prototyping"],
  },
  {
    id: "edu-1",
    kind: "education",
    role: { en: "B.Sc. Computer Science", zh: "计算机科学 学士" },
    org: { en: "State University", zh: "某大学" },
    period: "2016 — 2020",
    description: {
      en: "Focused on human-computer interaction and graphics.",
      zh: "主修人机交互与图形学方向。",
    },
  },
];
