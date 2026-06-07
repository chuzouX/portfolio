import { RepoGrid, type Repo } from "@/components/ui/RepoGrid";

const fallbackRepos: Repo[] = [
  {
    id: 1,
    name: "tphira-mp",
    description: "A Phira multiplayer server implementation using Express and WebSockets. High performance and real-time.",
    html_url: "https://github.com/chuzouX/tphira-mp",
    stargazers_count: 28,
    language: "JavaScript",
    fork: false,
  },
  {
    id: 2,
    name: "phira-mp-nodejsver",
    description: "Multiplayer backend service for Phira. Features room management and live status API.",
    html_url: "https://github.com/chuzouX/phira-mp-nodejsver",
    stargazers_count: 15,
    language: "JavaScript",
    fork: false,
  },
  {
    id: 3,
    name: "chuzoux-space",
    description: "My personal high-performance space page built with Next.js 15, Framer Motion and Tailwind CSS.",
    html_url: "https://github.com/chuzouX/portfolio",
    stargazers_count: 12,
    language: "TypeScript",
    fork: false,
  },
  {
    id: 4,
    name: "Nonebot-Plugins",
    description: "A collection of useful plugins for the Nonebot2 robot framework (QQ/Telegram).",
    html_url: "https://github.com/chuzouX",
    stargazers_count: 8,
    language: "Python",
    fork: false,
  },
  {
    id: 5,
    name: "CISCN-Writeups",
    description: "Detailed writeups for China Information Security National Competition (CISCN).",
    html_url: "https://github.com/chuzouX",
    stargazers_count: 7,
    language: "Markdown",
    fork: false,
  },
  {
    id: 6,
    name: "CyberSecurity-Tools",
    description: "Small automated scripts for web security research and vulnerability analysis.",
    html_url: "https://github.com/chuzouX",
    stargazers_count: 5,
    language: "Python",
    fork: false,
  }
];

async function fetchGithubRepos(): Promise<Repo[]> {
  const username = "chuzouX";
  const token = process.env.GITHUB_TOKEN;

  try {
    console.log(`[GitHub] Attempting to fetch repos for ${username}...`);
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`, {
      cache: "no-store",
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "chuzouX-Portfolio-NextJS",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(`GitHub API Error: ${res.status} - ${errorData.message || 'Unknown error'}`);
    }

    const repos = await res.json();
    if (!Array.isArray(repos)) throw new Error("Invalid response format from GitHub");

    console.log(`[GitHub] Successfully fetched ${repos.length} repos.`);

    // Filter out forks and sort by stars descending
    const filtered = repos
      .filter((repo: Repo) => !repo.fork)
      .sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count);

    return filtered;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.warn(`[GitHub] Fetch Failed: ${errorMessage}. Showing fallback data.`);
    return fallbackRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
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
