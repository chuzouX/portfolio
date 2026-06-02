"use client";

import Image from "next/image";

export function ImageBackground() {
  return (
    <div className="fixed inset-0 -z-20 h-full w-full bg-[#030305]">
      <Image
        src="https://pic.chuzoux.top/pic?img=ua"
        alt="Background"
        fill
        className="object-cover opacity-30 mix-blend-luminosity"
        priority
        unoptimized
      />
      {/* Subtle vignette/noise overlay to ensure text remains readable */}
      <div 
        className="pointer-events-none absolute inset-0 z-10" 
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, #030305 120%)',
        }}
      />
    </div>
  );
}
