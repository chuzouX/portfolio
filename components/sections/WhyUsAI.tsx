"use client";

import { motion } from "framer-motion";

export function WhyUsAI() {
  return (
    <section id="background" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <h2 className="font-display text-6xl font-black md:text-8xl mb-8">
            THE <span className="text-blue-500">CHUZOUX</span> JOURNEY
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From hobbies to tech expertise, exploring the path that shapes my digital journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent -translate-x-1/2" />

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm uppercase tracking-widest text-slate-400">
              Interests & Hobbies
            </div>

            <div className="space-y-4">
              {[
                "Rhythm Games (音游) Enthusiast",
                "Ecosystem Developer & Integrator",
                "Documenting daily study life",
                "Sandbox Games (Minecraft, Terraria)"
              ].map((item, i) => (
                <div key={i} className="glass rounded-2xl p-6 opacity-60 grayscale">
                  <p className="text-slate-400 font-mono text-sm">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
             <div className="inline-block rounded-full border border-blue-500/50 bg-blue-500/10 px-4 py-2 text-sm uppercase tracking-widest text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              Technical Focus
            </div>

            <div className="space-y-4">
              {[
                "Server Deployment & Operations",
                "AI Development & Integration",
                "CTF Competitions & Vulnerability Research",
                "Deals Hunting & Resource Optimization"
              ].map((item, i) => (
                <div key={i} className="glass-strong border-blue-500/30 rounded-2xl p-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="text-slate-100 font-mono text-sm font-bold relative z-10">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
