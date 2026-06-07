"use client";

import { motion } from "framer-motion";

const sites = [
  {
    title: "Blog",
    description: "博客",
    url: "https://chuzoux.top/",
    icon: "📝",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "group-hover:border-blue-500/50"
  },
  {
    title: "EdgeOne Monitor",
    description: "EdgeOne数据",
    url: "https://eo-monitor.chuzoux.top/",
    icon: "📊",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "group-hover:border-purple-500/50"
  },
  {
    title: "Analytics",
    description: "网站统计",
    url: "https://umami.chuzoux.top/share/evQ07K61RINSSxXs",
    icon: "📈",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "group-hover:border-emerald-500/50"
  },
  {
    title: "Cloud Drive",
    description: "网盘",
    url: "https://pan.chuzoux.top/",
    icon: "☁️",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "group-hover:border-amber-500/50"
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
          className="mb-16"
        >
          <h2 className="font-display text-5xl font-black md:text-7xl">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">SITES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sites.map((site, index) => (
            <motion.a
              key={index}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`glass group relative p-8 rounded-[32px] border border-slate-800/50 transition-all duration-500 ${site.borderColor} cursor-pointer overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${site.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]`} />

              <div className="relative z-10 space-y-4">
                <div className="text-5xl mb-4">{site.icon}</div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-tight">{site.title}</h3>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{site.description}</p>
                </div>

                <div className="pt-4 flex items-center gap-2 text-blue-400 text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  Visit Site
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
