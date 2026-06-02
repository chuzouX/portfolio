import type { Localized } from "@/lib/i18n/config";

export type Post = {
  slug: string;
  title: Localized;
  excerpt: Localized;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  tags: string[];
  readingMinutes: number;
  /** MDX source per language. NOTE: avoid backticks here (TS template literal). */
  content: Localized;
};

/* ----------------------------------------------------------------
 * TODO: Replace with your real posts. Body is MDX (markdown + JSX).
 * ---------------------------------------------------------------- */
export const posts: Post[] = [
  {
    slug: "why-liquid-glass",
    title: {
      en: "Why liquid glass works",
      zh: "为什么液态玻璃好用",
    },
    excerpt: {
      en: "Translucency, light and restraint — a short note on the aesthetic behind this site.",
      zh: "半透明、光与克制 —— 聊聊这个网站背后的美学。",
    },
    date: "2026-05-20",
    tags: ["Design", "CSS"],
    readingMinutes: 4,
    content: {
      en: `## Borrowing light

Glass surfaces borrow color and light from whatever sits behind them. That single idea gives you depth without heavy drop shadows, and it keeps the focus on content rather than chrome.

- Depth without heavy shadows
- Content first, chrome second
- A premium, tactile feel

> Good motion is invisible — you feel it before you notice it.

The trick is restraint: blur **just enough**, keep text on a solid color for contrast, and let the animated background do the heavy lifting.`,
      zh: `## 借来的光

玻璃表面会从它背后的一切「借」来颜色与光线。仅凭这一点,你就能在不依赖厚重阴影的情况下营造层次感,并让注意力回到内容本身,而非装饰。

- 不靠重阴影也有层次
- 内容优先,装饰其次
- 高级、可触摸的质感

> 好的动效是隐形的 —— 你先感受到它,然后才注意到它。

诀窍在于克制:模糊得**恰到好处**,正文用实色保证对比度,把重活交给会动的背景。`,
    },
  },
  {
    slug: "shipping-side-projects",
    title: {
      en: "Shipping side projects",
      zh: "把副业项目做完上线",
    },
    excerpt: {
      en: "A few habits that helped me actually finish the things I start.",
      zh: "几个让我真正把项目做完的习惯。",
    },
    date: "2026-03-08",
    tags: ["Process"],
    readingMinutes: 3,
    content: {
      en: `## Finish, then polish

The hardest part of a side project isn't the code — it's getting to *done*. A few habits help:

1. Ship an ugly version first.
2. Cut scope ruthlessly.
3. Set a deadline you'd be a little embarrassed to miss.

Momentum beats motivation. **Small, visible progress** every day keeps the project alive.`,
      zh: `## 先完成,再打磨

副业项目最难的不是写代码,而是抵达「**完成**」。几个习惯很有帮助:

1. 先上线一个丑版本。
2. 狠心砍需求。
3. 给自己定一个「错过会有点尴尬」的截止日期。

势头胜过动力。每天**看得见的小进展**,才能让项目活下去。`,
    },
  },
];

/** Newest first. */
export const sortedPosts = [...posts].sort((a, b) =>
  a.date < b.date ? 1 : -1,
);

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
