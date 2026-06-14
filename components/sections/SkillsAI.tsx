"use client";

import { motion } from "framer-motion";
import { Shield, Flag, Code, Server, Network, Bot } from "lucide-react";

const skillCategories = [
  {
    title: "Web Security",
    icon: Shield,
    skills: ["PHP Deserialization", "SQL Injection", "XSS / CSRF", "RCE Exploitation", "Burp Suite", "Vulnerability Research"],
    gradient: "from-blue-400 via-cyan-500 to-blue-600",
    bgGradient: "from-blue-500/20 via-cyan-500/10 to-blue-600/20",
    glowColor: "rgba(59, 130, 246, 0.4)",
    iconBg: "bg-blue-500/10"
  },
  {
    title: "CTF Expertise",
    icon: Flag,
    skills: ["Web Challenges", "Basic Misc", "Crypto Fundamentals", "Writeup Documentation", "CISCN / LitCTF Participant"],
    gradient: "from-purple-400 via-pink-500 to-purple-600",
    bgGradient: "from-purple-500/20 via-pink-500/10 to-purple-600/20",
    glowColor: "rgba(168, 85, 247, 0.4)",
    iconBg: "bg-purple-500/10"
  },
  {
    title: "Software Dev",
    icon: Code,
    skills: ["Python (Flask / Nonebot2)", "PHP", "JavaScript / TypeScript", "React / Next.js", "Git / GitHub"],
    gradient: "from-emerald-400 via-teal-500 to-emerald-600",
    bgGradient: "from-emerald-500/20 via-teal-500/10 to-emerald-600/20",
    glowColor: "rgba(16, 185, 129, 0.4)",
    iconBg: "bg-emerald-500/10"
  },
  {
    title: "Server Ops & Deploy",
    icon: Server,
    skills: ["Linux Server Management", "Nginx / Apache", "Server Monitoring", "System Optimization", "Backup & Recovery", "Security Hardening"],
    gradient: "from-amber-400 via-orange-500 to-amber-600",
    bgGradient: "from-amber-500/20 via-orange-500/10 to-amber-600/20",
    glowColor: "rgba(245, 158, 11, 0.4)",
    iconBg: "bg-amber-500/10"
  },
  {
    title: "Infrastructure",
    icon: Network,
    skills: ["Linux Admin (Ubuntu/Debian)", "Docker", "Web Deployment", "EdgeOne / Vercel", "Astro Framework"],
    gradient: "from-rose-400 via-red-500 to-rose-600",
    bgGradient: "from-rose-500/20 via-red-500/10 to-rose-600/20",
    glowColor: "rgba(244, 63, 94, 0.4)",
    iconBg: "bg-rose-500/10"
  },
  {
    title: "Automation",
    icon: Bot,
    skills: ["QQ Robot Development", "Nonebot2 Ecosystem", "Scrapy / Automation Scripts", "API Integration"],
    gradient: "from-cyan-400 via-blue-500 to-cyan-600",
    bgGradient: "from-cyan-500/20 via-blue-500/10 to-cyan-600/20",
    glowColor: "rgba(6, 182, 212, 0.4)",
    iconBg: "bg-cyan-500/10"
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
          className="mb-20 text-center"
        >
          <h2 className="font-display text-6xl font-black md:text-8xl mb-8">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">SKILLS</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Technical expertise across security, development, and infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  rotateY: 3,
                  rotateX: 3,
                  transition: { duration: 0.3 }
                }}
                className="relative h-full p-8 rounded-3xl border border-white/10 backdrop-blur-xl bg-white/5 transition-all duration-500 overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)"
                }}
              >
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{
                    filter: "blur(20px)"
                  }}
                />

                {/* Glow Effect */}
                <div
                  className="absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    background: `radial-gradient(circle at center, ${category.glowColor}, transparent 70%)`,
                    filter: "blur(15px)"
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-2xl ${category.iconBg} ring-1 ring-white/10 flex items-center justify-center group-hover:ring-white/20 transition-all duration-300`}
                    >
                      <category.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIndex) => (
                      <motion.span
                        key={sIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + sIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="relative group/tag px-3 py-1.5 rounded-full bg-slate-900/70 border border-slate-700/50 text-xs font-mono text-slate-300 transition-all duration-300 hover:border-white/30 hover:text-white hover:bg-slate-800/70 cursor-default"
                      >
                        {/* Tag Glow on Hover */}
                        <span
                          className="absolute inset-0 rounded-full opacity-0 group-hover/tag:opacity-50 transition-opacity duration-300 blur-md"
                          style={{
                            background: `linear-gradient(135deg, ${category.glowColor}, transparent)`
                          }}
                        />
                        <span className="relative z-10">{skill}</span>
                      </motion.span>
                    ))}
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="mt-auto pt-6">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      className={`h-1 rounded-full bg-gradient-to-r ${category.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
