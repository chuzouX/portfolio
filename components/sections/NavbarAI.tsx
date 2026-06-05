"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export function NavbarAI() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="glass-strong flex items-center justify-between rounded-[32px] px-6 py-4">
          <Link href="/" className="group relative flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
            <span className="font-display text-xl font-bold tracking-tight text-white">
              chuzouX<span className="text-blue-500">.</span>
            </span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm uppercase tracking-widest text-slate-300">
              {["Posts", "Projects", "Skills", "Background", "Blog"].map((item) => (
                <li key={item}>
                  <Link href={item === "Blog" ? "https://chuzoux.top/" : `#${item.toLowerCase()}`} className="hover:text-white hover:text-shadow-[0_0_10px_#fff] transition-all">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <motion.button
            onClick={() => window.location.href = 'https://chuzoux.top/'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black"
          >
            <span className="relative z-10">Read Blog</span>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 transition-opacity duration-300 hover:opacity-100" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
