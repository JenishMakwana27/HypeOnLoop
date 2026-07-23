"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Portfolio() {
  const campaigns = [
    {
      client: "Peddi Movie",
      metric: "80M+ Reach",
      category: "Movie Promo",
      color: "from-blue-500",
      image: "/images/ramcharan.webp"
    },
    {
      client: "AA23 Music Campaign",
      metric: "50M+ Reach",
      category: "Reel & Song Marketing",
      color: "from-orange-500",
      image: "/images/allu-arjun_.jpeg"
    },
    {
      client: "Kaun Banega Crorepati",
      metric: "20M+ Reach",
      category: "TV Show PR",
      color: "from-yellow-500",
      image: "/images/kbc~3.jpg.jpeg"
    },
    {
      client: "Paradise Movie",
      metric: "60M+ Reach",
      category: "Movie Promo",
      color: "from-emerald-500",
      image: "/images/paradise.jpeg"
    },
  ];

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <FadeIn className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Our Work</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white">Campaigns That Broke The Internet</h3>
          </FadeIn>
          <FadeIn delay={0.2} direction="left">
            <Link href="#" className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-medium">
              View All Case Studies <ArrowUpRight size={18} />
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campaigns.map((campaign, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 0.98 }}
                className="group relative aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden bg-muted flex items-end p-8 cursor-pointer"
              >
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={campaign.image}
                    alt={campaign.client}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${campaign.color} to-transparent opacity-20 group-hover:opacity-10 transition-opacity duration-500`} />
                </div>
                
                {/* Content */}
                <div className="relative z-10 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-white mb-4">
                        {campaign.category}
                      </span>
                      <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{campaign.client}</h4>
                      <p className="text-primary font-bold text-lg">{campaign.metric}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="text-background" size={24} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
