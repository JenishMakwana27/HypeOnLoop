"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";

// Local GIF memes from public/memes/
const localMemes = [
  "/memes/meme1.gif",
  "/memes/meme2.gif",
  "/memes/meme3.gif",
  "/memes/meme4.gif",
  "/memes/meme5.gif",
  "/memes/meme6.gif",
  "/memes/meme7.gif",
  "/memes/meme8.gif",
  "/memes/meme9.gif",
];

// Distribute into 3 columns
const col1 = localMemes.filter((_, i) => i % 3 === 0);
const col2 = localMemes.filter((_, i) => i % 3 === 1);
const col3 = localMemes.filter((_, i) => i % 3 === 2);

const MemeItem = ({ src, index }: { src: string; index: number }) => (
  <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/10 bg-black/50 aspect-square">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={src}
      alt={`Meme ${index + 1}`}
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />
  </div>
);

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Background Element */}
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <FadeIn className="lg:w-1/2">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Meme Marketing Magic</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Where Culture Meets<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Viral Marketing Success.</span>
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                From viral movie campaigns like <strong className="text-white">Peddi</strong> and <strong className="text-white">Paradise</strong>, to meme driven moments – we know exactly how to trigger the internet&apos;s pulse.
              </p>
              <p>
                Our expertise isn&apos;t just in making memes; it&apos;s in controlling the narrative. Every campaign is designed to hit trending charts and stay there. <strong className="text-white">&quot;Media + Memes = The ultimate tool for mind-share.&quot;</strong>
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-10">
              <div>
                <h4 className="text-4xl font-black text-white mb-2">800M+</h4>
                <p className="text-primary font-medium">Network Reach</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-white mb-2">120+</h4>
                <p className="text-primary font-medium">Campaign Executed</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="lg:w-1/2 w-full" delay={0.2} direction="left">
             <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 p-3 md:p-4 flex gap-3">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-[100px] -z-10" />
                
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background via-background/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background via-background/80 to-transparent z-20 pointer-events-none" />

                {/* Column 1 - Scrolling Up */}
                <div className="w-1/3 overflow-hidden h-full">
                  <motion.div
                    animate={{ y: [0, -400] }}
                    transition={{ repeat: Infinity, repeatType: "loop", duration: 12, ease: "linear" }}
                    className="flex flex-col gap-3"
                  >
                    {[...col1, ...col1].map((src, i) => (
                      <MemeItem key={`col1-${i}`} src={src} index={i} />
                    ))}
                  </motion.div>
                </div>

                {/* Column 2 - Scrolling Down */}
                <div className="w-1/3 overflow-hidden h-full">
                  <motion.div
                    animate={{ y: [-400, 0] }}
                    transition={{ repeat: Infinity, repeatType: "loop", duration: 14, ease: "linear" }}
                    className="flex flex-col gap-3"
                  >
                    {[...col2, ...col2].map((src, i) => (
                      <MemeItem key={`col2-${i}`} src={src} index={i} />
                    ))}
                  </motion.div>
                </div>

                {/* Column 3 - Scrolling Up */}
                <div className="w-1/3 overflow-hidden h-full">
                  <motion.div
                    animate={{ y: [0, -400] }}
                    transition={{ repeat: Infinity, repeatType: "loop", duration: 10, ease: "linear" }}
                    className="flex flex-col gap-3"
                  >
                    {[...col3, ...col3].map((src, i) => (
                      <MemeItem key={`col3-${i}`} src={src} index={i} />
                    ))}
                  </motion.div>
                </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}