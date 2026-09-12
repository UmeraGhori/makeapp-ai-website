"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-ivory-50/85 backdrop-blur-md shadow-sm border-b border-blush-200/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            id="nav-brand-link"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-sm ring-1 ring-blush-300/40 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="MakeApp.ai Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-plum-900">
                  Make<span className="text-blush-600">app</span>
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded-full bg-blush-100 text-blush-600 border border-blush-200">
                  .ai
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase font-medium text-plum-400 hidden sm:inline">
                Beauty Personalized
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-plum-700">
            <Link
              href="/#how-it-works"
              className="hover:text-blush-600 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#features"
              className="hover:text-blush-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#preview"
              className="hover:text-blush-600 transition-colors"
            >
              AI Preview
            </Link>
            <Link
              href="/#coming-soon"
              className="hover:text-blush-600 transition-colors inline-flex items-center gap-1.5"
            >
              <span>Coming Soon</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blush-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blush-500"></span>
              </span>
            </Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blush-600 via-blush-500 to-lavender-500 hover:opacity-95 hover:shadow-glow transition-all active:scale-95"
              id="navbar-contact-cta"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Contact Us</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-plum-800 hover:bg-blush-100/60 focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-button"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-plum-900" />
              ) : (
                <Menu className="w-6 h-6 text-plum-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-blush-200/60 bg-ivory-50/98 backdrop-blur-xl px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-plum-800">
            <Link
              href="/#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 hover:text-blush-600 border-b border-blush-100"
            >
              How It Works
            </Link>
            <Link
              href="/#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 hover:text-blush-600 border-b border-blush-100"
            >
              Features
            </Link>
            <Link
              href="/#preview"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 hover:text-blush-600 border-b border-blush-100"
            >
              AI Makeup Preview
            </Link>
            <Link
              href="/#coming-soon"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 hover:text-blush-600 border-b border-blush-100 flex items-center justify-between"
            >
              <span>Coming Soon Status</span>
              <span className="text-xs bg-blush-100 text-blush-700 px-2 py-0.5 rounded-full font-semibold">
                In Development
              </span>
            </Link>
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blush-600 to-lavender-500 shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Contact Us</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
