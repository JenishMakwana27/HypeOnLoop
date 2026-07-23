"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import { Star, TrendingUp, Users, Heart, Zap, Globe,} from "lucide-react";
import Link from "next/link";

export function Services() {
  const services = [
    {
      icon: <TrendingUp size={32} />,
      title: "Viral Meme Marketing",
      type: "meme",
      description: "We speak the internet's language. Leverage our network of 400M+ followers to make your brand the next big trend.",
    },
    {
      icon: <Globe size={32} />,
      title: "PR Publishing",
      type: "pr",
      description: "Get featured on top-tier news sites. We ensure your narrative reaches national and global audiences.",
    },
    {
      icon: <Zap size={32} />,
      title: "Twitter (X) Trending",
      type: "twitter",
      description: "Host Twitter Spaces, create custom hashtags, and make your campaign organically trend on X.",
    },
    {
      icon: <Users size={32} />,
      title: "Influencer Outreach",
      type: "influencer",
      description: "Direct access to niche and top-tier influencers across tech, lifestyle, finance, and entertainment.",
    },
    {
      icon: <Star size={32} />,
      title: "Movie Pages Marketing ",
      type: "Promo",
      description: "From first look to final release, we build momentum that keeps audiences hooked and conversations alive.",
    },
    {
      icon: <Heart size={32} />,
      title: "Podcast & Music Promotion",
      type: "podcast",
      description: "Push your audio content natively through IG Music integration and massive podcast distribution channels.",
    },
    {
      icon: <Globe size={32} />,
      title: "Business & Startup Pages Marketing",
      type: "",
      description: "Build a powerful brand identity and scale your startup with strategic positioning, and high-impact campaigns that drive engagement, and rapid growth.",
    },
     {
      icon: <TrendingUp size={32} />,
      title: "Edit Pages Marketing",
      type: "",
      description: "We tap into fan communities and edit ecosystems to amplify content, boost reach, and turn moments into viral trends.",
    },
    {
      icon: <Globe size={32} />,
      title: "City Specific Pages Marketing",
      type: "",
      description: "We craft city-focused campaigns that connect with local audiences, driving relevance, engagement, and strong regional impact.",
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3 text-gradient">What We Do</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Services That Shift Culture</h3>
            <p className="text-muted-foreground text-lg">
              We don&apos;t just run ads. We create movements, shape narratives, and build cult followings for ambitious brands.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Link href={`/?service=${service.type}#contact`} className="h-full block">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all h-full flex flex-col items-start relative overflow-hidden"
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      Enquire Now <TrendingUp size={14} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
