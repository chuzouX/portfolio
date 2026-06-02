import { XMLParser } from "fast-xml-parser";
import { TiltCard, type Post } from "@/components/ui/TiltCard";

// Fallback posts just in case RSS fetch fails
const fallbackPosts: Post[] = [
  {
    title: "[反序列化靶场]PHPSerialize-lab系列全流程WriteUp",
    description: "适合刚接触反序列化的ctfer做，整体来说还是比较简单的，不过里面对于魔法函数以及字符串逃逸的题目有点潦草了...",
    date: "2026-03-30",
    url: "https://chuzoux.top/",
    span: "col-span-1 md:col-span-2 row-span-2",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "DNSLog在命令执行无回显下实现数据外带",
    description: "关于通过使用DnsLog在命令执行无回显下实现数据外带。",
    date: "2026-03-26",
    url: "https://chuzoux.top/",
    span: "col-span-1",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Adobe克星完美的genp让adobe原地升天",
    description: "Adobe genp使用教程，可以在Adobe Creative Cloud更新！！",
    date: "2026-02-25",
    url: "https://chuzoux.top/",
    span: "col-span-1",
    color: "from-rose-500/20 to-orange-500/20",
  },
  {
    title: "【CVE-2021-44228】log4j2漏洞的验证与利用",
    description: "log4j2未对字符合法性进行严格限制，执行JNDI协议加载的远程恶意脚本，造成RCE。",
    date: "2026-01-30",
    url: "https://chuzoux.top/",
    span: "col-span-1 md:col-span-2",
    color: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    title: "【易】【LitCTF-2023】Web题目WriteUp",
    description: "LitCTF-2023 Web题目的WriteUp，总体题目简单适合入门学习。",
    date: "2025-11-14",
    url: "https://chuzoux.top/",
    span: "col-span-1",
    color: "from-amber-500/20 to-red-500/20",
  },
  {
    title: "【难】【2025-CCB-CISCN-初赛】部分题目WriteUp",
    description: "第十九届全国大学生信息安全竞赛暨第三届“长城杯”初赛题目部分writeup。",
    date: "2026-01-06",
    url: "https://chuzoux.top/",
    span: "col-span-1 md:col-span-3",
    color: "from-cyan-500/20 to-blue-500/20",
  },
];

const spans = [
  "col-span-1 md:col-span-2 row-span-2",
  "col-span-1",
  "col-span-1",
  "col-span-1 md:col-span-2",
  "col-span-1",
  "col-span-1 md:col-span-3"
];

const colors = [
  "from-blue-500/20 to-purple-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-rose-500/20 to-orange-500/20",
  "from-violet-500/20 to-fuchsia-500/20",
  "from-amber-500/20 to-red-500/20",
  "from-cyan-500/20 to-blue-500/20"
];

function extractExcerpt(htmlContent: string) {
  if (!htmlContent) return "";
  // Strip HTML tags and return a short excerpt
  const stripped = htmlContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return stripped.length > 120 ? stripped.slice(0, 120) + '...' : stripped;
}

async function fetchLatestPosts(): Promise<Post[]> {
  try {
    const res = await fetch("https://chuzoux.top/rss.xml", { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Failed to fetch RSS");
    
    const xml = await res.text();
    const parser = new XMLParser();
    const parsed = parser.parse(xml);
    
    const items = parsed.rss.channel.item || [];
    // Ensure it's an array and take the first 6
    const topItems = (Array.isArray(items) ? items : [items]).slice(0, 6);

    return topItems.map((item: { title?: string, description?: string, "content:encoded"?: string, pubDate?: string, link?: string }, index: number) => {
      const rawContent = item["content:encoded"] || item.description || "";
      return {
        title: item.title || "Untitled",
        description: extractExcerpt(rawContent),
        date: item.pubDate ? new Date(item.pubDate).toISOString().split('T')[0] : "Recent",
        url: item.link || "https://chuzoux.top/",
        span: spans[index % spans.length],
        color: colors[index % colors.length],
        image: `https://pic.chuzoux.top/pic?img=ua&_t=${index}`, // Unique parameter to prevent browser caching the same image
      };
    });
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return fallbackPosts.map((post, index) => ({
      ...post,
      image: `https://pic.chuzoux.top/pic?img=ua&_t=fallback_${index}`
    }));
  }
}

export async function ServicesBento() {
  const posts = await fetchLatestPosts();

  return (
    <section id="posts" className="relative py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 flex justify-between items-end animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <h2 className="font-display text-5xl font-black md:text-7xl">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">POSTS</span>
          </h2>
          <a href="https://chuzoux.top/" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
            View All Posts
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {posts.map((post, index) => (
            <TiltCard key={index} post={post} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="https://chuzoux.top/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            View All Posts &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
