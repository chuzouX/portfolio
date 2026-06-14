"use client";

import { motion } from "framer-motion";
import { WebsiteStats } from "@/components/ui/WebsiteStats";

export function FooterAI() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#020203] to-black pt-32 pb-8">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Marquee Section */}
      <div className="relative mb-20">
        <div className="flex overflow-hidden whitespace-nowrap relative select-none">
          {/* Gradient overlays for smooth fade */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#020203] via-[#020203]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#020203] via-[#020203]/80 to-transparent z-10 pointer-events-none" />

          {/* Animated text */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            className="flex whitespace-nowrap font-display text-[6rem] md:text-[10rem] font-black tracking-tighter"
          >
            <span className="mx-8 bg-gradient-to-r from-slate-800/50 via-blue-500/30 to-slate-800/50 bg-clip-text text-transparent hover:from-blue-500/50 hover:via-purple-500/50 hover:to-blue-500/50 transition-all duration-700 cursor-default">
              TECHNOLOGY SHARING AND PRACTICE •
            </span>
            <span className="mx-8 bg-gradient-to-r from-slate-800/50 via-purple-500/30 to-slate-800/50 bg-clip-text text-transparent hover:from-purple-500/50 hover:via-pink-500/50 hover:to-purple-500/50 transition-all duration-700 cursor-default">
              TECHNOLOGY SHARING AND PRACTICE •
            </span>
            <span className="mx-8 bg-gradient-to-r from-slate-800/50 via-blue-500/30 to-slate-800/50 bg-clip-text text-transparent hover:from-blue-500/50 hover:via-purple-500/50 hover:to-blue-500/50 transition-all duration-700 cursor-default">
              TECHNOLOGY SHARING AND PRACTICE •
            </span>
            <span className="mx-8 bg-gradient-to-r from-slate-800/50 via-purple-500/30 to-slate-800/50 bg-clip-text text-transparent hover:from-purple-500/50 hover:via-pink-500/50 hover:to-purple-500/50 transition-all duration-700 cursor-default">
              TECHNOLOGY SHARING AND PRACTICE •
            </span>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 text-slate-400 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-display text-3xl font-bold tracking-tight text-white mb-6 block group cursor-default">
                chuzouX<span className="text-blue-500 group-hover:text-purple-500 transition-colors duration-300">.</span>
              </span>
              <p className="max-w-sm font-light leading-relaxed text-slate-400 mb-4">
                Cybersecurity enthusiast, CTF player, and developer. Building tools and exploring the web.
              </p>
              <div className="flex gap-3 mt-6">
                <a href="https://github.com/chuzouX" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300 group">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Navigation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-6 font-display tracking-widest uppercase text-sm flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-blue-500 to-transparent"></span>
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#posts" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block duration-300">Posts</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block duration-300">Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block duration-300">Skills</a></li>
              <li><a href="#background" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block duration-300">Background</a></li>
              <li><a href="https://chuzoux.top/" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block duration-300">Blog</a></li>
            </ul>
          </motion.div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-6 font-display tracking-widest uppercase text-sm flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-purple-500 to-transparent"></span>
              Links
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="https://chuzoux.top/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors hover:translate-x-1 inline-block duration-300">Blog</a></li>
              <li><a href="https://eo-monitor.chuzoux.top/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors hover:translate-x-1 inline-block duration-300">EdgeOne Monitor</a></li>
              <li><a href="https://umami.chuzoux.top/share/evQ07K61RINSSxXs" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors hover:translate-x-1 inline-block duration-300">Analytics</a></li>
              <li><a href="https://pan.chuzoux.top/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors hover:translate-x-1 inline-block duration-300">Cloud Drive</a></li>
              <li><a href="https://github.com/chuzouX" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors hover:translate-x-1 inline-block duration-300">Github</a></li>
              <li><a href="https://chuzoux.top/sponsors/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors hover:translate-x-1 inline-block duration-300">Sponsor</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-slate-800/50 relative"
        >
          {/* Gradient line on top of border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
            <p className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} chuzouX.</span>
              <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                鲁ICP备2025189837号-1
              </a>
            </p>

            <div className="flex items-center gap-4">
              <WebsiteStats />
              <span className="hidden md:inline text-slate-700">•</span>
              <p className="hidden md:flex items-center gap-2">
                <span>SYSTEM.STATUS</span>
                <span className="text-slate-700">[</span>
                <span className="relative flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-green-500 font-bold">ONLINE</span>
                </span>
                <span className="text-slate-700">]</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
