"use client";

import { motion } from "framer-motion";

export function ContactAI() {
  const contactMethods = [
    {
      icon: "💚",
      label: "WeChat",
      value: "chuzouX520",
      href: "#",
      color: "from-green-500/10 to-emerald-500/10",
      borderColor: "group-hover:border-green-500/50"
    },
    {
      icon: "🐧",
      label: "QQ",
      value: "3451860760",
      href: "tencent://message/?uin=3451860760",
      color: "from-purple-500/10 to-pink-500/10",
      borderColor: "group-hover:border-purple-500/50"
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "@chuzouX",
      href: "https://github.com/chuzouX",
      color: "from-slate-500/10 to-gray-500/10",
      borderColor: "group-hover:border-slate-500/50"
    },
    {
      icon: "🐦",
      label: "Twitter",
      value: "@chuzouX",
      href: "https://twitter.com/chuzouX",
      color: "from-sky-500/10 to-blue-500/10",
      borderColor: "group-hover:border-sky-500/50"
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
          className="mb-20"
        >
          <h2 className="font-display text-5xl font-black md:text-7xl">
            CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">ME</span>
          </h2>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl">
            Feel free to reach out for collaboration, questions, or just to say hi!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`glass group relative p-8 rounded-[32px] border border-slate-800/50 transition-all duration-500 ${method.borderColor} cursor-pointer`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]`} />

              <div className="relative z-10 text-center space-y-4">
                <div className="text-5xl">{method.icon}</div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">{method.label}</h3>
                  <p className="text-sm font-mono text-slate-400 group-hover:text-slate-300 transition-colors">
                    {method.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
