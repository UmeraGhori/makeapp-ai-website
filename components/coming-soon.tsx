"use client";

import Link from "next/link";
import { Cpu, UserCheck, Sparkles, Clock, ArrowRight } from "lucide-react";

export function ComingSoon() {
  return (
    <section id="coming-soon" className="py-16 md:py-20 bg-ivory-50 relative border-y border-blush-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Status Banner */}
        <div className="relative rounded-3xl p-8 md:p-12 bg-gradient-to-br from-white via-blush-50/40 to-lavender-50/40 border border-blush-200/70 shadow-sm overflow-hidden text-center max-w-4xl mx-auto">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-blush-200/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-lavender-200/30 rounded-full blur-2xl pointer-events-none" />

          {/* Status Chip */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100/80 border border-blush-300 text-xs font-semibold text-blush-700 uppercase tracking-wider mb-6">
            <Clock className="w-3.5 h-3.5 text-blush-600" />
            <span>Official Pre-Launch Status</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-plum-900 tracking-tight mb-4">
            MakeApp.ai is coming soon.
          </h2>

          <p className="text-base sm:text-lg text-plum-700 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            We’re building a smarter way to discover makeup that actually works for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#preview"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blush-600 to-lavender-500 hover:opacity-95 shadow-md hover:shadow-glow transition-all"
              id="coming-soon-cta"
            >
              <Sparkles className="w-4 h-4" />
              <span>Experience AI Preview</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-plum-800 bg-white hover:bg-blush-50/60 border border-blush-200 transition-all"
            >
              <span>Contact the Team</span>
            </Link>
          </div>

          {/* Authentic Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-blush-200/60 grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/60 border border-blush-100 shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-blush-100 flex items-center justify-center text-blush-600 mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <span className="font-display font-semibold text-sm text-plum-900">
                Currently in development
              </span>
              <span className="text-xs text-plum-500 mt-0.5">
                Private alpha testing & refinement
              </span>
            </div>

            <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/60 border border-blush-100 shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-lavender-100 flex items-center justify-center text-lavender-500 mb-2">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-display font-semibold text-sm text-plum-900">
                Built with AI
              </span>
              <span className="text-xs text-plum-500 mt-0.5">
                Advanced computer vision & generative tech
              </span>
            </div>

            <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/60 border border-blush-100 shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mb-2">
                <UserCheck className="w-5 h-5" />
              </div>
              <span className="font-display font-semibold text-sm text-plum-900">
                Personalized for you
              </span>
              <span className="text-xs text-plum-500 mt-0.5">
                Custom-tailored to your unique facial geometry
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
