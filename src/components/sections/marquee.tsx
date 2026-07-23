"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Marquee() {
  const campaigns = [
    {
      title: "Peddie Movie",
      image: "/images/ramcharan.webp",
    },
    {
      title: "AA23 Music Campaign",
      image: "/images/allu-arjun_.jpeg",
    },
    {
      title: "Kaun Banega Crorepati",
      image: "/images/kbc~3.jpg.jpeg",
    },
    {
      title: "Paradise",
      image: "/images/paradise.jpeg",
    },
  ];

  // Extend the array for infinite scroll
  const items = [...campaigns, ...campaigns, ...campaigns];

  return (
    <div className="w-full py-12 overflow-hidden bg-background relative flex items-center border-y border-white/5">
      {/* Heavy fade edges for seamless loop */}
      <div className="absolute left-0 top-0 w-32 md:w-64 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 md:w-64 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: [0, -1500] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40,
        }}
        className="flex whitespace-nowrap gap-6 items-center px-6"
      >
        {items.map((item, i) => (
          <div 
            key={i} 
            className="group relative flex-shrink-0 w-[280px] md:w-[350px] h-[180px] md:h-[240px] rounded-3xl overflow-hidden cursor-pointer"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlays for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute inset-0 border border-white/10 rounded-3xl group-hover:border-primary/50 transition-colors duration-500" />
            </div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex items-end">
              <div className="relative z-10">
                <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> CAMPAIGN
                </p>
                <h4 className="text-lg md:text-xl font-black text-white group-hover:text-primary transition-colors whitespace-normal leading-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
