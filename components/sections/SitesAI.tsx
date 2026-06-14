"use client";

import { motion } from "framer-motion";
import { BookOpen, Activity, BarChart3, Cloud, ExternalLink } from "lucide-react";

const sites = [
  {
    title: "Blog",
    description: "博客",
    url: "https://chuzoux.top/",
    icon: BookOpen,
    gradient: "from-blue-400 via-cyan-500 to-blue-600",
    bgGradient: "from-blue-500/20 via-cyan-500/10 to-blue-600/20",
    glowColor: "rgba(59, 130, 246, 0.4)",
    iconBg: "bg-blue-500/10"
  },
  {
    title: "EdgeOne Monitor",
    description: "EdgeOne数据",
    url: "https://eo-monitor.chuzoux.top/",
    icon: Activity,
    gradient: "from-purple-400 via-pink-500 to-purple-600",
    bgGradient: "from-purple-500/20 via-pink-500/10 to-purple-600/20",
    glowColor: "rgba(168, 85, 247, 0.4)",
    iconBg: "bg-purple-500/10"
  },
  {
    title: "Analytics",
    description: "网站统计",
    url: "https://umami.chuzoux.top/share/evQ07K61RINSSxXs",
    icon: BarChart3,
    gradient: "from-emerald-400 via-teal-500 to-emerald-600",
    bgGradient: "from-emerald-500/20 via-teal-500/10 to-emerald-600/20",
    glowColor: "rgba(16, 185, 129, 0.4)",
    iconBg: "bg-emerald-500/10"
  },
  {
    title: "Cloud Drive",
    description: "网盘",
    url: "https://pan.chuzoux.top/",
    icon: Cloud,
    gradient: "from-amber-400 via-orange-500 to-amber-600",
    bgGradient: "from-amber-500/20 via-orange-500/10 to-amber-600/20",
    glowColor: "rgba(245, 158, 11, 0.4)",
    iconBg: "bg-amber-500/10"
  }
];

export function SitesAI() {
  return (
    <section id="sites" className="relative py-32 border-t border-slate-800/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-6xl font-black md:text-8xl mb-8">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">SITES</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Quick access to my blog, analytics, monitoring, and cloud services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sites.map((site, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <motion.a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.97 }}
                className="relative flex flex-col h-full min-h-[280px] p-6 sm:p-8 rounded-3xl border border-white/10 backdrop-blur-xl bg-white/5 transition-all duration-500 overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)"
                }}
              >
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${site.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{
                    filter: "blur(20px)"
                  }}
                />

                {/* Glow Effect */}
                <div
                  className="absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    background: `radial-gradient(circle at center, ${site.glowColor}, transparent 70%)`,
                    filter: "blur(15px)"
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full space-y-4 sm:space-y-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${site.iconBg} ring-1 ring-white/10 flex items-center justify-center group-hover:ring-white/20 transition-all duration-300`}
                  >
                    <site.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </motion.div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                      {site.title}
                    </h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {site.description}
                    </p>
                  </div>

                  {/* Visit Link with Icon */}
                  <div className="flex items-center gap-2 text-sm font-mono opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className={`bg-gradient-to-r ${site.gradient} bg-clip-text text-transparent font-semibold`}>
                      Visit Site
                    </span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    className={`h-1 rounded-full bg-gradient-to-r ${site.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
