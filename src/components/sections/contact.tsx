"use client";
import emailjs from "@emailjs/browser";
import { useState, useEffect, useRef } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Send, CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState("meme");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const service = searchParams.get("service");
    if (service) setSelectedService(service);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Save to Firestore (backup)
      await addDoc(collection(db, "contacts"), {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        service: selectedService,
        message: messageRef.current?.value,
        createdAt: new Date(),
      });

      // Send email via EmailJS
      await emailjs.send(
        "marketing@hypeonloop.com",
        "template_m2neztq",
        {
          from_name: nameRef.current?.value,
          from_email: emailRef.current?.value,
          service: selectedService,
          message: messageRef.current?.value,
        },
        "eGTQW3Aj3xO93huHV"
      );

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);

      // Reset form
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
      setSelectedService("meme");

    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Ready to go viral?</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Let&apos;s Build Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Big Campaign</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Whether you need meme marketing, a PR blitz, or top-tier influencers, our team is ready to scale your reach to millions.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <span className="font-bold">01</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">Concept & Strategy</h4>
                  <p className="text-sm text-muted-foreground">We decode your audience.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <span className="font-bold">02</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">Viral Execution</h4>
                  <p className="text-sm text-muted-foreground">We launch via our 800M+ network.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-3xl relative backdrop-blur-sm">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <CheckCircle2 className="text-green-500 mb-6" size={64} />
                  <h4 className="text-2xl font-bold text-white mb-3">Message Received!</h4>
                  <p className="text-muted-foreground">
                    Our team will review your inquiry and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
                      <input
                        ref={nameRef}
                        type="text"
                        id="name"
                        required
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                      <input
                        ref={emailRef}
                        type="email"
                        id="email"
                        required
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-sm font-medium text-white/80">Service of Interest</label>
                    <select
                      id="service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                    >
                      <option value="meme" className="bg-gray-900">Meme Marketing & Seeding</option>
                      <option value="pr" className="bg-gray-900">PR Publishing & Campaigns</option>
                      <option value="twitter" className="bg-gray-900">Twitter Trending</option>
                      <option value="influencer" className="bg-gray-900">Influencer Marketing</option>
                      <option value="imdb" className="bg-gray-900">IMDb & BMS Optimization</option>
                      <option value="podcast" className="bg-gray-900">Podcast & Music Promo</option>
                      <option value="other" className="bg-gray-900">Other / Consultation</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                    <textarea
                      ref={messageRef}
                      id="message"
                      required
                      rows={4}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                      placeholder="Tell us about your brand and campaign goals..."
                    ></textarea>
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}