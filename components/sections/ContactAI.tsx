"use client";

import { motion } from "framer-motion";
import { MessageCircle, Github, Twitter, Mail } from "lucide-react";

export function ContactAI() {
  const contactMethods = [
    {
      icon: MessageCircle,
      label: "WeChat",
      value: "chuzouX520",
      href: "#",
      gradient: "from-green-400 via-emerald-500 to-green-600",
      bgGradient: "from-green-500/20 via-emerald-500/10 to-green-600/20",
      glowColor: "rgba(34, 197, 94, 0.4)"
    },
    {
      icon: Mail,
      label: "QQ",
      value: "3451860760",
      href: "tencent://message/?uin=3451860760",
      gradient: "from-purple-400 via-pink-500 to-purple-600",
      bgGradient: "from-purple-500/20 via-pink-500/10 to-purple-600/20",
      glowColor: "rgba(168, 85, 247, 0.4)"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@chuzouX",
      href: "https://github.com/chuzouX",
      gradient: "from-slate-400 via-gray-500 to-slate-600",
      bgGradient: "from-slate-500/20 via-gray-500/10 to-slate-600/20",
      glowColor: "rgba(148, 163, 184, 0.4)"
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@chuzouX",
      href: "https://twitter.com/chuzouX",
      gradient: "from-sky-400 via-blue-500 to-sky-600",
      bgGradient: "from-sky-500/20 via-blue-500/10 to-sky-600/20",
      glowColor: "rgba(56, 189, 248, 0.4)"
    }
  ];

  return (
    <section id="contact" className="relative py-32 border-t border-slate-800/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-5xl font-black md:text-7xl">
            CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">ME</span>
          </h2>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaboration, questions, or just to say hi!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
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
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="relative block p-8 rounded-3xl border border-white/10 backdrop-blur-xl bg-white/5 transition-all duration-500 overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)"
                }}
              >
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{
                    filter: "blur(20px)"
                  }}
                />

                {/* Glow Effect */}
                <div
                  className="absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    background: `radial-gradient(circle at center, ${method.glowColor}, transparent 70%)`,
                    filter: "blur(15px)"
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center space-y-5">
                  {/* Icon Container */}
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.gradient} p-0.5`}
                    >
                      <div className="w-full h-full rounded-2xl bg-slate-900/90 backdrop-blur-sm flex items-center justify-center">
                        <method.icon className="w-7 h-7 text-white" />
                      </div>
                    </motion.div>

                    {/* Icon Glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl"
                      style={{
                        background: `linear-gradient(135deg, ${method.glowColor}, transparent)`
                      }}
                    />
                  </div>

                  {/* Text */}
                  <div className="text-center space-y-2">
                    <h3 className="font-display text-xl font-bold text-white tracking-tight">
                      {method.label}
                    </h3>
                    <p className="text-sm font-mono text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {method.value}
                    </p>
                  </div>

                  {/* Hover Indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className={`h-1 rounded-full bg-gradient-to-r ${method.gradient}`}
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
