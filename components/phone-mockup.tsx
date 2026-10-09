"use client";

import Image from "next/image";
import { Sparkles, Star, ShoppingBag, Wand2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]">
      {/* Ambient background glow behind the phone */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blush-400/25 via-lavender-400/30 to-rose-300/20 rounded-[50px] blur-2xl -z-10 animate-pulse-slow" />

      {/* Realistic Smartphone Frame (iPhone 16 Pro Style) */}
      <div className="relative rounded-[48px] p-3 bg-gradient-to-b from-[#4A3B4C] via-[#2A1D2B] to-[#1A0E1C] shadow-phone ring-1 ring-white/20">
        {/* Outer Titanium Bezel highlight */}
        <div className="relative rounded-[40px] overflow-hidden bg-plum-900 border border-plum-700/60 shadow-inner">
          
          {/* Top Speaker & Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
            <div className="w-24 h-5 bg-black rounded-full flex items-center justify-between px-2.5 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#1A1A1A] ring-1 ring-plum-800" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#0D1520] ring-1 ring-blue-900/30 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-500/40" />
              </div>
            </div>
          </div>

          {/* Status Bar inside the phone */}
          <div className="relative pt-3 px-6 flex justify-between items-center text-[11px] font-semibold text-white/80 z-20">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px]">5G</span>
              <div className="w-4 h-2 rounded-sm border border-white/70 p-0.5 flex items-center">
                <div className="w-full h-full bg-white rounded-2xs" />
              </div>
            </div>
          </div>

          {/* Phone Screen App Interface */}
          <div className="relative px-4 pt-3 pb-5 bg-gradient-to-b from-[#221325] via-[#1D101F] to-[#140816] text-white select-none">
            
            {/* App Header inside screen */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <div className="relative w-5 h-5 rounded-md overflow-hidden ring-1 ring-blush-400/50">
                  <Image src="/logo.png" alt="mesi.ai" fill className="object-cover" />
                </div>
                <span className="text-xs font-bold tracking-wider uppercase text-blush-200">
                  mesi.ai
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blush-500/20 text-blush-300 border border-blush-500/30">
                Face Scan
              </span>
            </div>

            <div className="text-center mb-3">
              <h4 className="text-base font-bold tracking-tight text-white">
                Find your perfect look
              </h4>
              <p className="text-[11px] text-plum-200">
                Biometric Face Analysis & Style Matching
              </p>
            </div>

            {/* Central Face Scan Camera Frame */}
            <div className="relative mx-auto w-full aspect-[4/4.2] rounded-2xl overflow-hidden bg-plum-950 border border-blush-400/30 shadow-lg">
              {/* The User Face Scan image */}
              <Image
                src="/images/face-scan-portrait.jpg"
                alt="Face Scan Preview"
                fill
                className="object-cover object-center"
              />

              {/* Biometric scanning overlay & landmarks mesh on right half */}
              <div className="absolute inset-0 bg-gradient-to-t from-plum-950/70 via-transparent to-plum-950/20 pointer-events-none" />

              {/* High-tech Face Mesh SVG overlay (covers right half of face like app logo) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
                viewBox="0 0 300 315"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Biometric grid lines */}
                <path
                  d="M150,50 L150,260 M150,90 L210,95 M150,120 L220,130 M150,150 L230,165 M150,180 L215,195 M150,210 L195,230 M150,235 L175,250"
                  stroke="#F472B6"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                  opacity="0.75"
                />
                <path
                  d="M150,90 L180,120 L210,95 M150,120 L185,150 L220,130 M150,150 L190,180 L230,165 M150,180 L185,210 L215,195 M150,210 L175,235 L195,230"
                  stroke="#E9D5FF"
                  strokeWidth="1"
                  opacity="0.6"
                />
                {/* Feature landmarks dots */}
                <circle cx="150" cy="115" r="3" fill="#FFFFFF" className="animate-pulse" />
                <circle cx="178" cy="118" r="2.5" fill="#FDA4AF" />
                <circle cx="198" cy="115" r="2.5" fill="#FDA4AF" />
                <circle cx="150" cy="155" r="2.5" fill="#FDA4AF" />
                <circle cx="165" cy="162" r="2.5" fill="#FDA4AF" />
                <circle cx="150" cy="188" r="3" fill="#FFFFFF" />
                <circle cx="175" cy="190" r="2.5" fill="#FDA4AF" />
                <circle cx="150" cy="245" r="3" fill="#F43F5E" />
              </svg>

              {/* Glowing Corner Scanner Brackets */}
              <div className="absolute top-2.5 left-2.5 w-6 h-6 border-t-2 border-l-2 border-blush-400 rounded-tl-md shadow-[0_0_8px_#F43F5E]" />
              <div className="absolute top-2.5 right-2.5 w-6 h-6 border-t-2 border-r-2 border-blush-400 rounded-tr-md shadow-[0_0_8px_#F43F5E]" />
              <div className="absolute bottom-2.5 left-2.5 w-6 h-6 border-b-2 border-l-2 border-blush-400 rounded-bl-md shadow-[0_0_8px_#F43F5E]" />
              <div className="absolute bottom-2.5 right-2.5 w-6 h-6 border-b-2 border-r-2 border-blush-400 rounded-br-md shadow-[0_0_8px_#F43F5E]" />

              {/* Live Scan Status Pill */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-plum-950/80 backdrop-blur-md border border-blush-400/40 text-[10px] font-medium text-blush-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>SCAN COMPLETE • 99.4%</span>
              </div>
            </div>

            {/* Analysis Metrics Grid */}
            <div className="grid grid-cols-3 gap-1.5 my-3">
              <div className="p-2 rounded-xl bg-white/[0.06] border border-white/10 text-center backdrop-blur-sm">
                <span className="text-[9px] uppercase tracking-wider text-plum-300 block">
                  Face Shape
                </span>
                <span className="text-xs font-bold text-blush-200">Oval</span>
              </div>
              <div className="p-2 rounded-xl bg-white/[0.06] border border-white/10 text-center backdrop-blur-sm">
                <span className="text-[9px] uppercase tracking-wider text-plum-300 block">
                  Undertone
                </span>
                <span className="text-xs font-bold text-amber-200">Warm</span>
              </div>
              <div className="p-2 rounded-xl bg-white/[0.06] border border-white/10 text-center backdrop-blur-sm">
                <span className="text-[9px] uppercase tracking-wider text-plum-300 block">
                  Skin Tone
                </span>
                <span className="text-xs font-bold text-rose-200">Medium</span>
              </div>
            </div>

            {/* Action CTA Button inside app */}
            <button
              type="button"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blush-600 via-blush-500 to-lavender-500 text-white text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Discover My Look</span>
            </button>

            {/* Home Indicator Bar */}
            <div className="w-28 h-1 bg-white/30 rounded-full mx-auto mt-3" />
          </div>
        </div>
      </div>

      {/* Floating Card 1: Recommended For You (Top Right) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute -top-4 -right-4 sm:-right-8 p-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-blush-200/80 shadow-card text-plum-900 flex items-center gap-3 z-30 animate-float"
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blush-500 to-rose-600 text-white flex items-center justify-center shadow-sm">
          <Star className="w-4 h-4 fill-white" />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blush-600">
              Curated Match
            </span>
          </div>
          <p className="text-xs font-bold text-plum-900 leading-tight">
            ⭐ Recommended for You
          </p>
          <span className="text-[10px] text-plum-500">
            Trending AI Look #1
          </span>
        </div>
      </motion.div>

      {/* Floating Card 2: AI Makeup Preview (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute -bottom-4 -left-4 sm:-left-8 p-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-blush-200/80 shadow-card text-plum-900 flex items-center gap-3 z-30 animate-float-delayed"
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-lavender-500 to-plum-600 text-white flex items-center justify-center shadow-sm">
          <Wand2 className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-lavender-500">
              Identity Engine
            </span>
          </div>
          <p className="text-xs font-bold text-plum-900 leading-tight">
            AI Makeup Preview
          </p>
          <span className="text-[10px] text-plum-500">
            Preserves your natural face
          </span>
        </div>
      </motion.div>

      {/* Floating Card 3: Personalized Products (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="hidden sm:flex absolute top-1/2 -right-10 translate-y-6 p-2.5 rounded-xl bg-white/90 backdrop-blur-xl border border-blush-200/80 shadow-card items-center gap-2.5 z-20 animate-float"
      >
        <div className="w-7 h-7 rounded-lg bg-blush-100 text-blush-600 flex items-center justify-center">
          <ShoppingBag className="w-3.5 h-3.5" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-plum-900 leading-none">
            Personalized Products
          </p>
          <span className="text-[9px] text-plum-500">
            Budget • Pro • Luxury
          </span>
        </div>
      </motion.div>
    </div>
  );
}
