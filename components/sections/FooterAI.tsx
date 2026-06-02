"use client";

import { motion } from "framer-motion";

export function FooterAI() {
  return (
    <footer className="relative overflow-hidden bg-[#020203] pt-32 pb-12 border-t border-slate-800/50">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      {/* Marquee */}
      <div className="flex overflow-hidden whitespace-nowrap mb-24 relative select-none">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020203] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020203] to-transparent z-10" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex whitespace-nowrap font-display text-[8rem] md:text-[12rem] font-black tracking-tighter text-slate-800/50"
        >
          <span className="mx-8 hover:text-blue-500/80 transition-colors duration-500 cursor-default">TECHNOLOGY SHARING AND PRACTICE •</span>
          <span className="mx-8 hover:text-purple-500/80 transition-colors duration-500 cursor-default">TECHNOLOGY SHARING AND PRACTICE •</span>
          <span className="mx-8 hover:text-blue-500/80 transition-colors duration-500 cursor-default">TECHNOLOGY SHARING AND PRACTICE •</span>
          <span className="mx-8 hover:text-purple-500/80 transition-colors duration-500 cursor-default">TECHNOLOGY SHARING AND PRACTICE •</span>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-slate-400">
        <div className="md:col-span-2">
           <span className="font-display text-2xl font-bold tracking-tight text-white mb-6 block">
              chuzouX<span className="text-blue-500">.</span>
            </span>
            <p className="max-w-sm font-light leading-relaxed">
              Cybersecurity enthusiast, CTF player, and developer. Building tools and exploring the web.
            </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 font-display tracking-widest uppercase text-sm">Navigation</h4>
          <ul className="space-y-4 text-sm font-light">
            <li><a href="#posts" className="hover:text-blue-400 transition-colors">Posts</a></li>
            <li><a href="#background" className="hover:text-blue-400 transition-colors">Background</a></li>
            <li><a href="https://chuzoux.top/" className="hover:text-blue-400 transition-colors">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 font-display tracking-widest uppercase text-sm">Links</h4>
          <ul className="space-y-4 text-sm font-light">
            <li><a href="https://chuzoux.top/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">chuzouX Blog</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">GitHub</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">十年之约 (Ten Year Promise)</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 mt-24 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-mono">
        <p>© {new Date().getFullYear()} chuzouX. 鲁ICP备2025189837号-1</p>
        <p>SYSTEM.STATUS [ <span className="text-green-500">ONLINE</span> ]</p>
      </div>
    </footer>
  );
}
