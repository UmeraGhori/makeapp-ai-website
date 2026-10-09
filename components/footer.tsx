import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t border-blush-200/60 pt-16 pb-12 text-plum-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-blush-100">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-block">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-xs ring-1 ring-blush-300/40">
                <Image
                  src="/logo.png"
                  alt="mesi.ai Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-1">
                <span className="font-display font-bold text-2xl tracking-tight text-plum-900">
                  mesi
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded-full bg-blush-100 text-blush-600 border border-blush-200">
                  .ai
                </span>
              </div>
            </Link>

            <p className="text-sm font-medium text-plum-600 tracking-wide">
              Beauty, personalized.
            </p>

            <p className="text-xs text-plum-500 max-w-sm leading-relaxed">
              AI-driven beauty intelligence designed to analyze your unique facial geometry, match verified styles, generate identity-preserving previews, and deliver tailored cosmetic guidance.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-plum-900">
              Product & Vision
            </h4>
            <ul className="space-y-2.5 text-sm text-plum-600">
              <li>
                <Link href="/" className="hover:text-blush-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="hover:text-blush-600 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="hover:text-blush-600 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#preview"
                  className="hover:text-blush-600 transition-colors"
                >
                  AI Preview
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-plum-900">
              Legal & Support
            </h4>
            <ul className="space-y-2.5 text-sm text-plum-600">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-blush-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-blush-600 transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/account/delete"
                  className="hover:text-blush-600 transition-colors"
                >
                  Manage / Delete Account
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-plum-500">
          <p>© 2026 mesi.ai. All rights reserved.</p>
          <div className="flex items-center gap-4 text-plum-400">
            <span>Pre-Launch Development Edition</span>
            <span>•</span>
            <span className="text-plum-600 font-medium">Coming Soon to iOS & Android</span>
          </div>
        </div>

        <p className="pt-6 text-center text-xs text-plum-500">
          <a
            href="mailto:khanumera51@gmail.com"
            className="font-medium text-plum-700 hover:text-blush-600 transition-colors"
          >
            khanumera51@gmail.com
          </a>
        </p>

      </div>
    </footer>
  );
}
