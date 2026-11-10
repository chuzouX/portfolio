"use client";

import { RainbowBordersButton } from "@/components/ui/rainbow-borders-button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroAI() {
  return (
    <section className="relative flex min-h-screen items-center justify-center pt-24">
      <div className="container mx-auto px-6 text-center lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="animate-fade-up mb-8 flex flex-col items-center justify-center gap-6">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-widest text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              Technology Sharing and Practice
            </div>
            <Image
              src="https://q2.qlogo.cn/headimg_dl?dst_uin=3451860760&spec=0"
              alt="chuzouX Avatar"
              width={112}
              height={112}
              priority
              unoptimized
              className="rounded-full border-4 border-slate-800/50 object-cover shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-transform duration-500 hover:scale-105"
            />
          </div>

          <h1 className="font-display text-6xl font-black leading-[0.9] tracking-tighter sm:text-8xl lg:text-[8rem]">
            <span className="text-slate-100">chuzou</span>
            <span className="text-gradient">X</span>
          </h1>

          <p
            className="animate-fade-up mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-slate-400 sm:text-xl"
            style={{ animationDelay: "150ms" }}
          >
            欢迎大家光临本站，希望大家在这里可以找到自己想要的东西，祝大家玩的开心！！ <br/>
            I focus on Web Security, Server Deployment, Network Technology, and Vulnerability Research.
          </p>

          <div
            className="animate-fade-up mt-12 flex justify-center gap-6"
            style={{ animationDelay: "300ms" }}
          >
            <a href="https://chuzoux.top/" target="_blank" rel="noopener noreferrer">
              <RainbowBordersButton className="text-base uppercase tracking-widest">
                <span className="flex items-center gap-3">
                  Explore Blog
                  <ArrowRight className="h-5 w-5" />
                </span>
              </RainbowBordersButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
