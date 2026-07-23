import Link from "next/link";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-10 group transition-all duration-500 hover:scale-110">
              <div className="relative w-40 h-40 md:w-64 md:h-64 filter drop-shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                <Image
                  src="/images/BLogo.png"
                  alt="HypeOnLoop Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8">
              Media + Memes = Great Tool to Control the Mind of the Masses. We build viral campaigns that stick.
            </p>
            <div className="flex gap-4">
              <a 
                href="YOUR_TWITTER_LINK"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center text-white/70 hover:text-primary transition-all"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.instagram.com/hypeonloop.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center text-white/70 hover:text-primary transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="YOUR_LINKEDIN_LINK"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center text-white/70 hover:text-primary transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Meme Marketing</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">PR Publishing</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Twitter (X) Trending</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Influencer Marketing</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Business & Startup Pages Marketing</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Movie Pages Marketing</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Edit Pages Marketing</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">City Specific Pages Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-muted-foreground hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#work" className="text-muted-foreground hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#blog" className="text-muted-foreground hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-white transition-colors">Contact</Link></li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} /> marketing@hypeonloop.com
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} HypeOnLoop. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}