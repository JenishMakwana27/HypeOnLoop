"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

export function Clients() {
  const row1 = [
    { name: "Client 1", src: "/images/logo1.jpeg" },
    { name: "Client 2", src: "/images/logo2.jpeg" },
    { name: "Client 3", src: "/images/logo3.jpeg" },
    { name: "Client 4", src: "/images/logo4.jpeg" },
  ];

  const row2 = [
    { name: "Client 5", src: "/images/logo5.jpeg" },
    { name: "Client 6", src: "/images/logo6.jpeg" },
    { name: "Client 7", src: "/images/logo7.jpeg" },
    { name: "Client 8", src: "/images/logo8.jpeg" },
  ];

  const row3 = [
    { name: "Client 9", src: "/images/logo9.jpeg" },
    { name: "Client 10", src: "/images/logo10.jpeg" },
    { name: "Client 11", src: "/images/logo11.jpeg" },
    { name: "Client 12", src: "/images/logo12.jpeg" },
  ];

  // Duplicate for infinite effect
  const extendedRow1 = [...row1, ...row1, ...row1, ...row1];
  const extendedRow2 = [...row2, ...row2, ...row2, ...row2];
  const extendedRow3 = [...row3, ...row3, ...row3, ...row3];

  return (
    <section id="clients" className="py-24 relative bg-background overflow-hidden border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Partnerships</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white">Brands That Loop With Us</h3>
          </FadeIn>
        </div>
      </div>

      {/* Row 1 - Sliding Right */}
      <div className="relative flex overflow-hidden py-12">
        <motion.div
          animate={{ x: [-1200, 0] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" },
          }}
          className="flex gap-12 whitespace-nowrap px-8"
        >
          {extendedRow1.map((client, index) => (
            <motion.div
              key={`row1-${index}`}
              animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
              transition={{ duration: 3 + (index % 3), repeat: Infinity, ease: "easeInOut" }}
              className="flex-shrink-0 w-32 h-32 rounded-full bg-white shadow-[0_10px_40px_rgba(255,255,255,0.1)] flex items-center justify-center p-6 hover:scale-110 transition-transform duration-300"
            >
              <div className="relative w-full h-full">
                <Image src={client.src} alt={client.name} fill className="object-contain" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />
      </div>

      {/* Row 2 - Sliding Right (offset) */}
      <div className="relative flex overflow-hidden py-12 -mt-8">
        <motion.div
          animate={{ x: [-1800, -600] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 45, ease: "linear" },
          }}
          className="flex gap-16 whitespace-nowrap px-8"
        >
          {extendedRow2.map((client, index) => (
            <motion.div
              key={`row2-${index}`}
              animate={{ y: [0, index % 2 === 0 ? 10 : -10, 0] }}
              transition={{ duration: 4 + (index % 2), repeat: Infinity, ease: "easeInOut" }}
              className="flex-shrink-0 w-40 h-40 rounded-full bg-white shadow-[0_10px_50px_rgba(255,255,255,0.15)] flex items-center justify-center p-8 hover:scale-110 transition-transform duration-300"
            >
              <div className="relative w-full h-full">
                <Image src={client.src} alt={client.name} fill className="object-contain" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />
      </div>

      {/* Row 3 - Sliding Left (opposite direction) */}
      <div className="relative flex overflow-hidden py-12 -mt-8">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" },
          }}
          className="flex gap-12 whitespace-nowrap px-8"
        >
          {extendedRow3.map((client, index) => (
            <motion.div
              key={`row3-${index}`}
              animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
              transition={{ duration: 3.5 + (index % 3), repeat: Infinity, ease: "easeInOut" }}
              className="flex-shrink-0 w-36 h-36 rounded-full bg-white shadow-[0_10px_40px_rgba(255,255,255,0.1)] flex items-center justify-center p-7 hover:scale-110 transition-transform duration-300"
            >
              <div className="relative w-full h-full">
                <Image src={client.src} alt={client.name} fill className="object-contain" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />
      </div>
    </section>
  );
}