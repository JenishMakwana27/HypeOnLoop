"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />
      
      {/* Animated abstract shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-64 h-64 bg-primary/30 rounded-full blur-[100px] -z-10"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-[10%] w-80 h-80 bg-secondary/20 rounded-full blur-[120px] -z-10"
      />

      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-white/80">Leading Viral Marketing Agency</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-tight max-w-5xl">
            WE MAKE YOUR BRAND GO <span className="text-gradient italic">VIRAL</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            From trending memes to explosive PR campaigns, we capture attention in the scroll-first era. Join the 50M+ reach club.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(20,184,166,0.4)]"
          >
            <span className="relative z-10">Start a Campaign</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%_auto] animate-gradient" />
          </Link>
          
          <Link
            href="#work"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-all"
          >
            <Play fill="currentColor" size={16} className="text-white group-hover:text-primary transition-colors" />
            <span>See Our Work</span>
          </Link>
        </FadeIn>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[30px] h-[50px] border-2 border-white/20 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
