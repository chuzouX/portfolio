"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Web Security",
    icon: "🛡️",
    skills: ["PHP Deserialization", "SQL Injection", "XSS / CSRF", "RCE Exploitation", "Burp Suite", "Vulnerability Research"],
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "group-hover:border-blue-500/50"
  },
  {
    title: "CTF Expertise",
    icon: "🚩",
    skills: ["Web Challenges", "Basic Misc", "Crypto Fundamentals", "Writeup Documentation", "CISCN / LitCTF Participant"],
    color: "from-purple-500/10 to-pink-500/10",
    borderColor: "group-hover:border-purple-500/50"
  },
  {
    title: "Software Dev",
    icon: "💻",
    skills: ["Python (Flask / Nonebot2)", "PHP", "JavaScript / TypeScript", "React / Next.js", "Git / GitHub"],
    color: "from-emerald-500/10 to-teal-500/10",
    borderColor: "group-hover:border-emerald-500/50"
  },
  {
    title: "Server Ops & Deploy",
    icon: "🖥️",
    skills: ["Linux Server Management", "Nginx / Apache", "Server Monitoring", "System Optimization", "Backup & Recovery", "Security Hardening"],
    color: "from-amber-500/10 to-orange-500/10",
    borderColor: "group-hover:border-amber-500/50"
  },
  {
    title: "Infrastructure",
    icon: "🌐",
    skills: ["Linux Admin (Ubuntu/Debian)", "Docker", "Web Deployment", "EdgeOne / Vercel", "Astro Framework"],
    color: "from-rose-500/10 to-red-500/10",
    borderColor: "group-hover:border-rose-500/50"
  },
  {
    title: "Automation",
    icon: "🤖",
    skills: ["QQ Robot Development", "Nonebot2 Ecosystem", "Scrapy / Automation Scripts", "API Integration"],
    color: "from-cyan-500/10 to-blue-500/10",
    borderColor: "group-hover:border-cyan-500/50"
  }
];

export function SkillsAI() {
  return (
    <section id="skills" className="relative py-32 border-t border-slate-800/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-display text-5xl font-black md:text-7xl">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">SKILLS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass group relative p-8 rounded-[32px] border border-slate-800/50 transition-all duration-500 ${category.borderColor}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <span 
                      key={sIndex}
                      className="px-3 py-1.5 rounded-full bg-slate-900/50 border border-slate-700/50 text-xs font-mono text-slate-300 transition-colors group-hover:border-slate-500/50 group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
