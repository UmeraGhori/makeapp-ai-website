"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, Compass, Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import { PhoneMockup } from "./phone-mockup";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden mesh-bg">
      {/* Decorative ambient background blur lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blush-200/40 via-lavender-200/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* AI-Powered Beauty Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-blush-300/60 shadow-sm text-xs font-semibold text-blush-600 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blush-500 animate-pulse" />
              <span>AI-Powered Beauty</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-plum-900 leading-[1.12]">
              Your Face.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blush-600 via-rose-500 to-lavender-500">
                Your Style.
              </span>
              <br />
              Your Perfect Makeup.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-plum-700/90 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Discover makeup looks that are personalized to your face, preview
              them with AI, and learn exactly how to recreate the look.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-blush-600 via-blush-500 to-lavender-500 shadow-md hover:shadow-glow hover:opacity-95 transition-all active:scale-[0.98]"
                id="hero-primary-cta"
              >
                <span>See How It Works</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Coming Soon reassurance note */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs font-medium text-plum-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blush-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blush-500"></span>
              </span>
              <span>mesi.ai mobile app is coming soon.</span>
            </div>
          </motion.div>

          {/* Right Hero Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <PhoneMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
