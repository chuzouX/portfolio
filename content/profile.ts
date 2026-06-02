import type { Localized } from "@/lib/i18n/config";

// Icon keys are mapped to lucide-react components in the components that render them.
export type SocialIcon =
  | "github"
  | "twitter"
  | "linkedin"
  | "mail"
  | "dribbble";

export type FocusIcon = "code" | "palette" | "rocket" | "sparkles";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
};

export type FocusArea = {
  icon: FocusIcon;
  title: Localized;
  description: Localized;
};

/* ----------------------------------------------------------------
 * TODO: Replace everything below with your real details.
 * ---------------------------------------------------------------- */
export const profile = {
  name: { en: "Your Name", zh: "你的名字" } satisfies Localized,
  /** Used for the nav logo / avatar fallback. */
  initials: "YN",
  role: {
    en: "Product Engineer & Designer",
    zh: "产品工程师 / 设计师",
  } satisfies Localized,
  tagline: {
    en: "I design and build fast, delightful web experiences — with a soft spot for motion and detail.",
    zh: "我设计并构建快速、愉悦的网页体验,尤其偏爱动效与细节。",
  } satisfies Localized,
  bio: {
    en: "I'm a maker working at the intersection of design and engineering. Over the past few years I've shipped products end-to-end — from the first sketch to production. When I'm not building, you'll find me sketching interfaces and chasing the perfect micro-interaction.",
    zh: "我是一名游走在设计与工程之间的创造者。过去几年里,我把产品从第一张草图一路做到上线。不写代码的时候,我会画画界面,顺便追求那个「刚刚好」的微交互。",
  } satisfies Localized,
  location: { en: "Shanghai, China", zh: "中国 · 上海" } satisfies Localized,
  email: "you@example.com",
  available: true,

  focus: [
    {
      icon: "code",
      title: { en: "Engineering", zh: "工程" },
      description: {
        en: "Type-safe full-stack apps with React, Next.js and a clean DX.",
        zh: "用 React、Next.js 打造类型安全的全栈应用,注重开发体验。",
      },
    },
    {
      icon: "palette",
      title: { en: "Design", zh: "设计" },
      description: {
        en: "Interfaces, design systems and the small details in between.",
        zh: "界面、设计系统,以及其间的每一处小细节。",
      },
    },
    {
      icon: "sparkles",
      title: { en: "Motion", zh: "动效" },
      description: {
        en: "Purposeful animation that makes products feel alive.",
        zh: "有意义的动效,让产品「活」起来。",
      },
    },
  ] satisfies FocusArea[],

  socials: [
    { label: "GitHub", href: "https://github.com/", icon: "github" },
    { label: "X", href: "https://x.com/", icon: "twitter" },
    { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
    { label: "Dribbble", href: "https://dribbble.com/", icon: "dribbble" },
  ] satisfies SocialLink[],
};
