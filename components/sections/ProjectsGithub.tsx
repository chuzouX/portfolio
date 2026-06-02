import { RepoGrid, type Repo } from "@/components/ui/RepoGrid";

const fallbackRepos: Repo[] = [
  {
    id: 1,
    name: "chuzouX-space",
    description: "My personal homepage and portfolio, built with Next.js, Framer Motion, and Tailwind CSS. Features dynamic RSS fetching and a dark-void aesthetic.",
    html_url: "https://github.com/chuzouX",
    stargazers_count: 5,
    language: "TypeScript",
    fork: false,
  },
  {
    id: 2,
    name: "CTF-Writeups",
    description: "Collection of my CTF writeups including Web Security, Reverse Engineering, and Crypto.",
    html_url: "https://github.com/chuzouX",
    stargazers_count: 12,
    language: "Python",
    fork: false,
  },
  {
    id: 3,
    name: "Nonebot-Plugins",
    description: "Custom plugins developed for the Nonebot2 ecosystem.",
    html_url: "https://github.com/chuzouX",
    stargazers_count: 8,
    language: "Python",
    fork: false,
  }
];

async function fetchGithubRepos(): Promise<Repo[]> {
  try {
    const res = await fetch("https://api.github.com/users/chuzouX/repos?sort=updated&per_page=100", {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });
    
    if (!res.ok) throw new Error("Failed to fetch GitHub repos");
    
    const repos: Repo[] = await res.json();
    if (!Array.isArray(repos)) throw new Error("Invalid response format");
    
    // Filter out forks and return all
    return repos.filter((repo: Repo) => !repo.fork);
  } catch (error) {
    // Use console.warn instead of console.error to prevent Next.js from throwing a hard error overlay in dev mode
    console.warn("Network error fetching GitHub repos, using fallback data.");
    return fallbackRepos;
  }
}

export async function ProjectsGithub() {
  const repos = await fetchGithubRepos();

  return (
    <section id="projects" className="relative py-32 border-t border-slate-800/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 flex justify-between items-end">
          <h2 className="font-display text-5xl font-black md:text-7xl">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">PROJECTS</span>
          </h2>
          <a href="https://github.com/chuzouX" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
            View GitHub
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Contribution Graph */}
        <div className="mb-12 glass-strong rounded-[32px] p-8 overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-50" />
          <h3 className="font-display text-xl font-bold text-white mb-6 relative z-10 flex items-center gap-2">
            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Contribution Wall
          </h3>
          <div className="relative z-10 w-full overflow-x-auto pb-4 custom-scrollbar">
            <div className="min-w-[700px] flex justify-center">
               <img 
                 src="https://ghchart.rshah.org/3b82f6/chuzouX" 
                 alt="chuzouX's Github Chart" 
                 className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
               />
            </div>
          </div>
        </div>

        {/* Repositories Grid via Client Component */}
        <RepoGrid repos={repos} />
      </div>
    </section>
  );
}
