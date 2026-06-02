"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  fork: boolean;
}

export function RepoGrid({ repos }: { repos: Repo[] }) {
  const [expanded, setExpanded] = useState(false);
  
  // Show 6 initially, or all if expanded
  const visibleRepos = expanded ? repos : repos.slice(0, 6);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {visibleRepos.map((repo, index) => (
            <motion.a
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: expanded ? index * 0.05 : 0 }}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group relative flex flex-col p-6 rounded-[24px] hover:border-blue-500/50 transition-colors duration-500 overflow-hidden h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-white text-lg truncate pr-4 group-hover:text-blue-400 transition-colors">{repo.name}</h4>
                  <svg className="h-5 w-5 text-slate-500 group-hover:text-blue-400 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                
                <p className="text-sm text-slate-400 font-light mb-6 flex-grow line-clamp-3">
                  {repo.description || "No description provided."}
                </p>
                
                <div className="flex items-center gap-4 mt-auto text-xs font-mono text-slate-500">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500/80 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                      <span>{repo.language}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>{repo.stargazers_count}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>

      {repos.length > 6 && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="group relative rounded-full border border-slate-700 bg-slate-800/50 px-8 py-3 text-sm font-bold tracking-widest text-white transition-all hover:border-blue-500/50 hover:bg-blue-500/10"
          >
            <span className="relative z-10 flex items-center gap-2">
              {expanded ? "Show Less" : `View All ${repos.length} Projects`}
              <svg 
                className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : "group-hover:translate-y-1"}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </div>
      )}
    </>
  );
}