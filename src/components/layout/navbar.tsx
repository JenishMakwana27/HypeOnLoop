"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Campaign & PR", href: "#work" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between relative h-full">
        {/* Brand Container - Smooth transition from Logo to Text */}
        <Link href="/" className="relative flex items-center h-full group">
          <AnimatePresence mode="wait">
            {!isScrolled ? (
              <motion.div
                key="large-logo"
                initial={{ opacity: 0, scale: 0.7, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.7, y: -15, filter: "blur(12px)" }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="relative w-24 h-24 md:w-32 md:h-32"
              >
                <Image
                  src="/images/BLogo.png"
                  alt="HypeOnLoop Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            ) : (
              <motion.div
                key="text-title"
                initial={{ opacity: 0, y: 15, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 15, filter: "blur(12px)" }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="flex items-center"
              >
                <span className="text-xl md:text-2xl font-black tracking-tight text-white flex items-center">
                  HypeOnLoop
                  <motion.span 
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="ml-1 w-2 h-2 rounded-full bg-primary"
                  />
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>

        {/* Navigation - Minimal & Modern */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-[13px] font-medium text-white/60 hover:text-white transition-all duration-300 group/link"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover/link:w-full" />
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-4 bg-white text-black hover:bg-white/90 px-6 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 active:scale-95"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-4 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white/80 hover:text-white px-4 py-2"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary hover:bg-primary/90 text-white px-5 py-3 rounded-xl text-center font-bold mt-2"
            >
              Let&apos;s Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
