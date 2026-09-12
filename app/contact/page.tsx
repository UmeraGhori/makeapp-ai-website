import Link from "next/link";
import { ArrowLeft, Mail, Shield, Sparkles } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Contact Us — MakeApp.ai",
  description: "Get in touch with the MakeApp.ai founding team for partnerships, press, or early inquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory-100 text-plum-900">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 mesh-subtle">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-blush-600 hover:text-blush-700 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          {/* Heading */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blush-300 shadow-2xs text-xs font-semibold text-blush-600 uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blush-500" />
              <span>Direct Inquiries</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-plum-900 mb-4">
              Let&rsquo;s talk.
            </h1>

            <p className="text-base sm:text-lg text-plum-700 max-w-xl mx-auto leading-relaxed">
              We&rsquo;re preparing MakeApp.ai for public release. Whether you&rsquo;re a creator, cosmetics brand, beauty tech journalist, or interested early tester, we&rsquo;d love to connect.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            
            {/* General Contact Card */}
            <div className="p-8 rounded-3xl bg-white border border-blush-200/70 shadow-card hover:shadow-lg transition-all text-center flex flex-col items-center justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blush-100 text-blush-600 flex items-center justify-center mb-5">
                  <Mail className="w-7 h-7" />
                </div>
                <h2 className="font-display text-xl font-bold text-plum-900 mb-2">
                  General & Press
                </h2>
                <p className="text-xs text-plum-600 mb-6 leading-relaxed">
                  For brand collaborations, partnership inquiries, and press questions.
                </p>
              </div>

              <a
                href="mailto:hello@makeapp.ai"
                className="w-full py-3 px-5 rounded-2xl bg-plum-900 text-white text-sm font-semibold hover:bg-plum-800 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>hello@makeapp.ai</span>
              </a>
            </div>

            {/* Privacy Inquiries Card */}
            <div className="p-8 rounded-3xl bg-white border border-blush-200/70 shadow-card hover:shadow-lg transition-all text-center flex flex-col items-center justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-lavender-100 text-lavender-600 flex items-center justify-center mb-5">
                  <Shield className="w-7 h-7" />
                </div>
                <h2 className="font-display text-xl font-bold text-plum-900 mb-2">
                  Privacy & Legal
                </h2>
                <p className="text-xs text-plum-600 mb-6 leading-relaxed">
                  For data requests, regulatory questions, and privacy-related matters.
                </p>
              </div>

              <a
                href="mailto:privacy@makeapp.ai"
                className="w-full py-3 px-5 rounded-2xl bg-white border border-blush-300 text-plum-900 text-sm font-semibold hover:bg-blush-50 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Shield className="w-4 h-4 text-blush-600" />
                <span>privacy@makeapp.ai</span>
              </a>
            </div>

          </div>

          {/* Pre-launch Status Note */}
          <div className="p-6 rounded-2xl bg-white/70 border border-blush-200/60 text-center text-xs text-plum-600 leading-relaxed">
            <p className="font-medium text-plum-900 mb-1">
              Interested in partnership or early previews?
            </p>
            <p>
              Feel free to email our team directly at{" "}
              <a
                href="mailto:hello@makeapp.ai"
                className="text-blush-600 underline font-semibold"
              >
                hello@makeapp.ai
              </a>.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
