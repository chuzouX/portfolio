"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HoverButton } from "@/components/ui/hover-button";

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
        <div className="glass-strong flex items-center justify-between rounded-[32px] px-8 py-4 border border-white/10">
          {/* Logo */}
          <Link href="/" className="group relative flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 h-3 w-3 rounded-full bg-blue-500 blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
              chuzouX<span className="text-blue-500 group-hover:text-purple-500">.</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm uppercase tracking-widest text-slate-300">
              {["Posts", "Sites", "Projects", "Skills", "Background", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition-all duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Visit Blog Button */}
          <motion.a
            href="https://chuzoux.top/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HoverButton className="text-sm font-bold tracking-wide text-white px-6 py-2.5">
              <span className="flex items-center gap-2">
                Visit Blog
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:scale-110 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </HoverButton>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
