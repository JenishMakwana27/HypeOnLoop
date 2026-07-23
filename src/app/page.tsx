import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Clients } from "@/components/sections/clients";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <Marquee />
        <Services />
        <Portfolio />
        <Clients />
        <About />
        <Contact />
      </Suspense>
      <Footer />
    </main>
  );
}
