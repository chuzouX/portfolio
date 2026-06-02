"use client";

import { motion, Variants } from "framer-motion";

export function HeroAI() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center pt-24">
      <div className="container mx-auto px-6 text-center lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl"
        >
          <motion.div variants={itemVariants} className="mb-8 flex flex-col items-center justify-center gap-6">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-widest text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              Technology Sharing and Practice
            </div>
            <img 
              src="https://q2.qlogo.cn/headimg_dl?dst_uin=3451860760&spec=0" 
              alt="chuzouX Avatar" 
              className="h-28 w-28 rounded-full border-4 border-slate-800/50 object-cover shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-6xl font-black leading-[0.9] tracking-tighter sm:text-8xl lg:text-[8rem]"
          >
            <span className="text-slate-100">chuzou</span>
            <span className="text-gradient">X</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-slate-400 sm:text-xl"
          >
            欢迎大家光临本站，希望大家在这里可以找到自己想要的东西，祝大家玩的开心！！ <br/>
            I focus on Web Security, CTF Competitions, and Software Development.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 flex justify-center gap-6">
            <motion.button
              onClick={() => window.location.href = 'https://chuzoux.top/'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative rounded-full bg-blue-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-50 blur transition duration-500 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-2">
                Explore Blog
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
