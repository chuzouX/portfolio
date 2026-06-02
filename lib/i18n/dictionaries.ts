/**
 * UI strings (chrome / labels). Page *content* (name, projects, posts…)
 * lives in `content/*` as { en, zh } objects instead.
 *
 * `zh` is typed as `typeof en`, so the two language maps must stay in sync.
 */

const en = {
  nav: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    blog: "Blog",
    contact: "Contact",
    skip: "Skip to content",
    menu: "Menu",
  },
  hero: {
    greeting: "Hi, I'm",
    ctaWork: "View work",
    ctaContact: "Get in touch",
    scroll: "Scroll",
  },
  about: {
    title: "About",
    focusTitle: "Focus areas",
  },
  projects: {
    title: "Projects",
    subtitle: "Selected work and experiments.",
    all: "All",
    view: "Visit",
    code: "Code",
    featured: "Featured",
    close: "Close",
  },
  skills: {
    title: "Skills & Journey",
    skillsTitle: "Toolbox",
    expTitle: "Experience",
  },
  blog: {
    title: "Writing",
    subtitle: "Notes on building things.",
    readMore: "Read",
    all: "All posts",
    back: "Back to writing",
    minRead: "min read",
  },
  contact: {
    title: "Let's talk",
    subtitle: "Open to collaborations, freelance and a good conversation.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send message",
    sending: "Sending…",
    sent: "Thanks — your mail draft is ready!",
    namePh: "Your name",
    emailPh: "you@example.com",
    messagePh: "Tell me about your idea…",
    or: "or email me directly",
    errRequired: "This field is required",
    errEmail: "Please enter a valid email",
  },
  footer: {
    tagline: "Designed & built with a liquid-glass aesthetic.",
    backToTop: "Back to top",
    rights: "All rights reserved.",
  },
  theme: {
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
  },
  lang: {
    switch: "切换到中文",
  },
};

const zh: typeof en = {
  nav: {
    about: "关于",
    projects: "项目",
    skills: "技能",
    blog: "博客",
    contact: "联系",
    skip: "跳到主要内容",
    menu: "菜单",
  },
  hero: {
    greeting: "你好,我是",
    ctaWork: "查看作品",
    ctaContact: "与我联系",
    scroll: "向下滚动",
  },
  about: {
    title: "关于我",
    focusTitle: "专注方向",
  },
  projects: {
    title: "项目",
    subtitle: "精选作品与实验。",
    all: "全部",
    view: "访问",
    code: "源码",
    featured: "精选",
    close: "关闭",
  },
  skills: {
    title: "技能与历程",
    skillsTitle: "技术栈",
    expTitle: "经历",
  },
  blog: {
    title: "写作",
    subtitle: "一些关于做东西的笔记。",
    readMore: "阅读",
    all: "全部文章",
    back: "返回写作",
    minRead: "分钟阅读",
  },
  contact: {
    title: "聊聊吧",
    subtitle: "欢迎合作、外包,或只是聊聊天。",
    name: "称呼",
    email: "邮箱",
    message: "留言",
    send: "发送消息",
    sending: "发送中…",
    sent: "谢谢 —— 邮件草稿已为你准备好!",
    namePh: "你的名字",
    emailPh: "you@example.com",
    messagePh: "说说你的想法吧…",
    or: "或直接给我发邮件",
    errRequired: "此项为必填",
    errEmail: "请输入有效的邮箱",
  },
  footer: {
    tagline: "以液态玻璃美学设计并构建。",
    backToTop: "回到顶部",
    rights: "保留所有权利。",
  },
  theme: {
    toLight: "切换到浅色模式",
    toDark: "切换到深色模式",
  },
  lang: {
    switch: "Switch to English",
  },
};

export const dictionaries = { en, zh };

export type Dictionary = typeof en;
