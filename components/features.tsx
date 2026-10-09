"use client";

import { motion } from "framer-motion";
import {
  Scan,
  Sparkles,
  Wand2,
  Compass,
  ShoppingBag,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "AI Face Analysis",
    description: "Understand your unique face and skin characteristics.",
    tag: "Computer Vision",
    gradient: "from-rose-500 to-blush-500",
  },
  {
    icon: Sparkles,
    title: "Personalized Makeup Looks",
    description: "Discover styles selected specifically for you.",
    tag: "Algorithmic Styling",
    gradient: "from-blush-500 to-lavender-500",
  },
  {
    icon: Wand2,
    title: "AI Makeup Preview",
    description: "Visualize makeup looks on your own face.",
    tag: "Generative AI",
    gradient: "from-lavender-500 to-plum-600",
  },
  {
    icon: Compass,
    title: "Trending AI Looks",
    description: "Explore the latest trending AI-powered makeup looks.",
    tag: "Trend Intelligence",
    gradient: "from-rose-500 to-blush-600",
  },
  {
    icon: ShoppingBag,
    title: "Smart Product Recommendations",
    description: "Find products and shades that match your look.",
    tag: "Multi-Tier Matching",
    gradient: "from-blush-600 to-lavender-500",
  },
  {
    icon: GraduationCap,
    title: "Step-by-Step Tutorials",
    description: "Know exactly what to apply, where and how.",
    tag: "Technique Guidance",
    gradient: "from-lavender-500 to-plum-500",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-blush-600 bg-blush-50 border border-blush-200/80 px-4 py-1.5 rounded-full inline-block mb-4">
            Core Innovations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-plum-900 mb-5">
            Beauty advice, personalized.
          </h2>
          <p className="text-base sm:text-lg text-plum-700 leading-relaxed font-normal">
            Designed to bridge the gap between viral beauty inspiration and your real, unique facial features.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="group p-8 rounded-3xl bg-white border border-blush-200/60 shadow-card hover:shadow-xl hover:border-blush-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blush-50 text-blush-600 flex items-center justify-center border border-blush-200/60 group-hover:scale-110 transition-transform shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-ivory-200/70 text-plum-600 border border-plum-900/5">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-plum-900 mb-3 group-hover:text-blush-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-plum-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-blush-100/70 flex items-center text-xs font-semibold text-blush-600 group-hover:translate-x-1 transition-transform">
                  <span>Mobile App Feature &rarr;</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
