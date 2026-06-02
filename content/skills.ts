import type { Localized } from "@/lib/i18n/config";

export type SkillGroup = {
  category: Localized;
  items: string[];
};

/* ----------------------------------------------------------------
 * TODO: Replace with your real toolbox.
 * ---------------------------------------------------------------- */
export const skills: SkillGroup[] = [
  {
    category: { en: "Languages", zh: "语言" },
    items: ["TypeScript", "JavaScript", "Python", "Go", "CSS"],
  },
  {
    category: { en: "Frameworks", zh: "框架" },
    items: ["React", "Next.js", "Vue", "Node.js", "Tailwind CSS"],
  },
  {
    category: { en: "Design", zh: "设计" },
    items: ["Figma", "Framer Motion", "Design Systems", "Prototyping"],
  },
  {
    category: { en: "Tooling", zh: "工具" },
    items: ["Git", "Vite", "Docker", "Vercel", "Playwright"],
  },
];
