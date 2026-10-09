"use client";

import { motion } from "framer-motion";
import { ScanFace, Palette, Compass, Wand2, ShoppingBag, BookOpen } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Scan Your Face",
    description: "Understand your face shape, skin tone, undertone and beauty profile.",
    icon: ScanFace,
    badge: "Biometric Precision",
    gradient: "from-rose-500/10 to-blush-500/10",
    iconColor: "text-rose-600 bg-rose-100",
  },
  {
    number: "02",
    title: "Choose Your Style",
    description: "Explore makeup aesthetics from natural everyday looks to bold glam.",
    icon: Palette,
    badge: "Aesthetic Library",
    gradient: "from-blush-500/10 to-lavender-500/10",
    iconColor: "text-blush-600 bg-blush-100",
  },
  {
    number: "03",
    title: "Discover Your Look",
    description: "Browse the latest trending AI-powered makeup looks and get personalized recommendations.",
    icon: Compass,
    badge: "Trending AI Looks",
    gradient: "from-lavender-500/10 to-plum-500/10",
    iconColor: "text-lavender-600 bg-lavender-100",
  },
  {
    number: "04",
    title: "Preview With AI",
    description: "See how the selected makeup look could look on your own face.",
    icon: Wand2,
    badge: "Identity-Preserving",
    gradient: "from-blush-500/10 to-rose-500/10",
    iconColor: "text-blush-600 bg-blush-100",
  },
  {
    number: "05",
    title: "Find Your Products",
    description: "Get personalized product and shade recommendations across different budgets.",
    icon: ShoppingBag,
    badge: "Budget • Pro • Luxury",
    gradient: "from-lavender-500/10 to-blush-500/10",
    iconColor: "text-lavender-600 bg-lavender-100",
  },
  {
    number: "06",
    title: "Learn How To Apply",
    description: "Follow a personalized step-by-step guide to recreate the look.",
    icon: BookOpen,
    badge: "Masterclass Steps",
    gradient: "from-rose-500/10 to-lavender-500/10",
    iconColor: "text-rose-600 bg-rose-100",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-blush-600 bg-blush-50 border border-blush-200/80 px-4 py-1.5 rounded-full inline-block mb-4">
            The mesi.ai Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-plum-900 mb-5">
            From Face Scan to Finished Look
          </h2>
          <p className="text-base sm:text-lg text-plum-700 leading-relaxed">
            Everything you need to discover, preview, buy and recreate your perfect makeup look.
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-3xl p-8 bg-white border border-blush-200/60 shadow-card hover:shadow-xl hover:border-blush-300 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Row: Number & Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${step.iconColor} shadow-xs group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-display text-2xl font-black text-blush-300/80 tracking-tighter">
                      {step.number}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold tracking-wider uppercase text-blush-600 block mb-2">
                    {step.badge}
                  </span>

                  <h3 className="font-display text-xl font-bold text-plum-900 mb-3 group-hover:text-blush-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-plum-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-blush-100/60 flex items-center gap-2 text-xs font-medium text-plum-400 group-hover:text-blush-600 transition-colors">
                  <span>Step {step.number} of 06</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blush-300" />
                  <span>Mobile App Flow</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
