"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

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
      className={`glass group relative flex flex-col justify-end overflow-hidden rounded-[32px] p-8 transition-colors duration-500 hover:border-blue-500/50 block h-full ${post.span}`}
    >
      {post.image && (
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40" 
        />
      )}
      <div className={`absolute inset-0 z-0 bg-gradient-to-br opacity-50 transition-opacity duration-500 group-hover:opacity-100 ${post.color}`} />
      
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10 mt-auto">
        <span className="text-blue-400 text-xs font-mono mb-2 block tracking-widest">{post.date}</span>
        <h3 className="font-display text-2xl font-bold text-white mb-2 leading-tight drop-shadow-md">{post.title}</h3>
        <p className="text-slate-300 font-light text-sm line-clamp-3 drop-shadow" dangerouslySetInnerHTML={{ __html: post.description }}></p>
      </div>
    </motion.a>
  );
}
