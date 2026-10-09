"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal, ShieldCheck } from "lucide-react";

export function AiPreviewShowcase() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 3) percentage = 3;
    if (percentage > 97) percentage = 97;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  return (
    <section id="preview" className="py-24 md:py-32 bg-ivory-50 relative border-t border-blush-200/50 overflow-hidden">
      {/* Soft background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-blush-200/25 via-lavender-200/25 to-rose-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blush-300 shadow-2xs text-xs font-semibold text-blush-600 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blush-500" />
            <span>Interactive Virtual Try-On</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-plum-900 mb-5">
            See the look before you create it.
          </h2>

          <p className="text-base sm:text-lg text-plum-700 leading-relaxed font-normal">
            Upload your face scan, choose a makeup inspiration, and let AI create a personalized preview while keeping your natural facial identity.
          </p>
        </div>

        {/* Interactive Comparison Container (Square / 4:5 aspect ratio for ideal facial framing) */}
        <div className="max-w-lg mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            className="relative w-full aspect-square sm:aspect-[4/4.6] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white select-none cursor-ew-resize touch-none group"
            id="interactive-before-after-slider"
          >
            {/* Background Image: AI PREVIEW (GLAM) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/after-glam.jpg"
                alt="AI Makeup Preview"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 px-3 py-1.5 rounded-full bg-plum-950/80 backdrop-blur-md border border-blush-400/40 text-xs font-bold text-white shadow-lg flex items-center gap-1.5 z-20">
                <span className="w-2 h-2 rounded-full bg-blush-500 animate-pulse" />
                <span>AI PREVIEW</span>
              </div>
            </div>

            {/* Foreground Clipped Image: BEFORE (NATURAL) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="relative h-full"
                style={{
                  width: containerWidth > 0 ? `${containerWidth}px` : "100%",
                }}
              >
                <Image
                  src="/images/before-natural.jpg"
                  alt="Natural Face Scan Before"
                  fill
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-plum-200/60 text-xs font-bold text-plum-900 shadow-lg flex items-center gap-1.5 z-20">
                  <span className="w-2 h-2 rounded-full bg-plum-400" />
                  <span>BEFORE</span>
                </div>
              </div>
            </div>

            {/* Vertical Divider Line with Draggable Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-lg border-2 border-blush-500 flex items-center justify-center text-blush-600 slider-handle-glow cursor-ew-resize group-hover:scale-110 transition-transform">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>

            {/* Drag hint overlay at bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-plum-950/75 backdrop-blur-md text-white text-[11px] font-medium pointer-events-none flex items-center gap-2 z-20">
              <MoveHorizontal className="w-3.5 h-3.5 text-blush-400" />
              <span>Drag to compare before & after</span>
            </div>
          </div>

          {/* Quick presets for mobile/accessibility */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            <button
              onClick={() => setSliderPosition(15)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                sliderPosition < 30
                  ? "bg-plum-900 text-white shadow-sm"
                  : "bg-white text-plum-700 border border-blush-200 hover:bg-blush-50"
              }`}
            >
              See AI Preview (85%)
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                sliderPosition >= 30 && sliderPosition <= 70
                  ? "bg-plum-900 text-white shadow-sm"
                  : "bg-white text-plum-700 border border-blush-200 hover:bg-blush-50"
              }`}
            >
              Split View (50 / 50)
            </button>
            <button
              onClick={() => setSliderPosition(85)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                sliderPosition > 70
                  ? "bg-plum-900 text-white shadow-sm"
                  : "bg-white text-plum-700 border border-blush-200 hover:bg-blush-50"
              }`}
            >
              See Natural Scan (85%)
            </button>
          </div>

          {/* Mandatory Realistic Disclaimer */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-blush-200/80 flex items-start gap-3.5 text-left shadow-2xs">
            <ShieldCheck className="w-5 h-5 text-blush-600 shrink-0 mt-0.5" />
            <div className="text-xs text-plum-600 leading-relaxed">
              <strong className="text-plum-900 font-semibold">
                Technology Disclosure:
              </strong>{" "}
              mesi.ai utilizes advanced generative neural models to simulate makeup aesthetics onto your facial portrait. These previews are visual estimations designed to provide style direction and inspiration while retaining your authentic bone structure; real-world cosmetic application results will naturally vary based on ambient lighting, skin texture, and specific application techniques.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
