"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowUpRight } from "lucide-react";

export interface Post {
  title: string;
  description: string;
  date: string;
  url: string;
  span: string;
  color: string;
  image?: string;
}

export function TiltCard({ post }: { post: Post }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * 20);
    y.set(yPct * -20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      className={`glass group relative flex flex-col overflow-hidden rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:border-blue-500/50 border border-white/10 backdrop-blur-xl bg-white/5 ${post.span}`}
    >
      {/* Background Image with Enhanced Overlay */}
      {post.image && (
        <>
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 z-0 h-full w-full object-cover opacity-30 transition-all duration-700 group-hover:scale-110 group-hover:opacity-50"
          />
        </>
      )}

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 z-0 bg-gradient-to-br opacity-40 transition-opacity duration-500 group-hover:opacity-70 ${post.color}`} />

      {/* Glow Effect */}
      <div className="absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl" />

      {/* Content - Fixed positioning with proper spacing */}
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10 mt-auto flex flex-col gap-2 sm:gap-3 min-h-0">
        {/* Date Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit flex-shrink-0">
          <Calendar className="w-3 h-3 text-blue-400 flex-shrink-0" />
          <span className="text-blue-400 text-xs font-mono tracking-wider whitespace-nowrap">{post.date}</span>
        </div>

        {/* Title - with proper line clamping */}
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-lg line-clamp-2 group-hover:text-blue-300 transition-colors duration-300 flex-shrink-0">
          {post.title}
        </h3>

        {/* Description - flexible height */}
        <p
          className="text-slate-300 font-light text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 drop-shadow flex-shrink min-h-0 overflow-hidden"
          dangerouslySetInnerHTML={{ __html: post.description }}
        />

        {/* Read More Link */}
        <div className="flex items-center gap-2 text-sm font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
          <span>Read More</span>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>

      {/* Decorative Corner Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.a>
  );
}
