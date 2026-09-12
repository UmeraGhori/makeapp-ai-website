import Link from "next/link";
import { ArrowLeft, FileText, AlertTriangle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Terms of Service — MakeApp.ai",
  description: "Terms of Service and legal agreements for MakeApp.ai services and mobile app.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory-100 text-plum-900">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-blush-600 hover:text-blush-700 transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center gap-2.5 mb-3">
              <span className="p-2 rounded-xl bg-blush-100 text-blush-600">
                <FileText className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-plum-500">
                User Agreement
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-plum-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-sm text-plum-600">
              Last updated: September 2026 • Version 1.1 (Pre-Launch Edition)
            </p>
          </div>

          {/* Legal Disclaimer Box */}
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80 mb-12 flex items-start gap-3.5 text-amber-900 text-xs sm:text-sm leading-relaxed">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold block mb-1">
                Notice to Early Visitors & Partners:
              </strong>
              This Terms of Service is provided as a starting product policy and should be reviewed by qualified legal counsel before public launch.
            </div>
          </div>

          {/* Content Document */}
          <div className="prose prose-plum max-w-none space-y-10 text-plum-800 text-sm sm:text-base leading-relaxed">
            
            {/* 1. Acceptance of Terms */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the MakeApp.ai website, interacting with our digital previews, or using any current or future mobile applications (collectively, the &ldquo;Services&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to all of these Terms, you may not access or use the Services.
              </p>
            </section>

            {/* 2. Description of Service */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                2. Description of Service
              </h2>
              <p>
                MakeApp.ai is an artificial intelligence platform designed to assist users in exploring makeup aesthetics suited to their facial geometry, skin tones, and personal style. Features include biometric face scanning analysis, curated Pinterest-style look discovery, AI visual simulations, cosmetic product suggestions, and step-by-step application masterclasses.
              </p>
              <p className="mt-3 text-plum-600">
                Please note that the MakeApp.ai mobile application is currently under active development. Website demonstrations and previews represent intended software functionality for our upcoming commercial releases.
              </p>
            </section>

            {/* 3. AI-Generated Results & Visual Estimates */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                3. AI-Generated Results & Visual Estimates
              </h2>
              <div className="p-4 rounded-2xl bg-blush-50 border border-blush-200/60 mb-3 text-xs sm:text-sm text-plum-900">
                <strong>Important AI Disclaimer:</strong> AI-generated makeup previews are computerized visual estimates and simulations. They are intended for creative inspiration and personal aesthetic guidance, and may not perfectly represent real-world makeup results, physical textures, or lighting conditions.
              </div>
              <p>
                MakeApp.ai employs deep learning models to overlay makeup aesthetics onto uploaded portraits while striving to preserve individual facial features. However, variations in camera resolution, lighting, skin texture, and individual makeup skill will cause physical makeup results to differ from digital simulations.
              </p>
            </section>

            {/* 4. Beauty & Non-Medical Disclaimer */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                4. Beauty & Non-Medical Disclaimer
              </h2>
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200/60 mb-3 text-xs sm:text-sm text-rose-950">
                <strong>Non-Medical Notice:</strong> MakeApp.ai provides beauty and cosmetic recommendations solely for informational and personalization purposes. MakeApp.ai is NOT a medical, dermatological, health, or clinical diagnostic service.
              </div>
              <p>
                Any observations regarding skin tone, undertone, or general characteristics are purely algorithmic cosmetic matching aids. They do not constitute dermatological diagnoses, treatment plans, or health assessments. You should always perform patch tests before using new cosmetic products and consult a licensed dermatologist for any skin health concerns or allergic reactions.
              </p>
            </section>

            {/* 5. Product Suggestions */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                5. Product Suggestions
              </h2>
              <p>
                MakeApp.ai may showcase cosmetic styles and general shade palettes. We do not manufacture cosmetic products and are not responsible for the formulation, quality, safety, or availability of third-party products.
              </p>
            </section>

            {/* 6. User Responsibilities */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                6. User Responsibilities
              </h2>
              <p>When utilizing MakeApp.ai, you agree to:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Only upload photos of yourself or individuals who have provided explicit, informed consent for their likeness to be processed.</li>
                <li>Never upload offensive, explicit, infringing, or unlawful imagery.</li>
                <li>Provide accurate contact information when communicating with our team.</li>
                <li>Refrain from reverse-engineering, crawling, scraping, or compromising the security of the Services.</li>
              </ul>
            </section>

            {/* 7. Intellectual Property */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                7. Intellectual Property
              </h2>
              <p>
                The MakeApp.ai brand, logo, trademark, software code, user interface designs, custom iconography, and algorithms are the proprietary intellectual property of MakeApp.ai. All rights are reserved. You retain rights to your original photographs, granting MakeApp.ai a limited, non-exclusive license solely as necessary to render the requested beauty processing services.
              </p>
            </section>

            {/* 8. Third-Party Services & Pinterest Content */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                8. Third-Party Services & Pinterest Content
              </h2>
              <p>
                Our Services may incorporate integrations with third-party platforms such as Pinterest. We make no representations regarding third-party services and are not liable for their content, performance, or privacy policies.
              </p>
            </section>

            {/* 9. Service Availability & Pre-Launch Disclaimer */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                9. Service Availability & Pre-Launch Modifications
              </h2>
              <p>
                MakeApp.ai is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. As a pre-launch platform, we reserve the right to modify, suspend, or discontinue any feature or preview at our sole discretion without prior notice.
              </p>
            </section>

            {/* 10. Limitation of Liability */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                10. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, MakeApp.ai and its directors, officers, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill, arising from your access to or use of the Services.
              </p>
            </section>

            {/* 11. Changes to Terms */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                11. Changes to Terms
              </h2>
              <p>
                We may revise these Terms as our mobile application evolves. Any updates will be published with an updated version date. Your continued engagement with our Services following the posting of revised Terms constitutes acceptance of those changes.
              </p>
            </section>

            {/* 12. Contact */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                12. Contact
              </h2>
              <p>
                For questions regarding these Terms of Service or regulatory matters, please contact:
              </p>
              <div className="mt-4 p-4 rounded-2xl bg-ivory-100 border border-blush-200/70">
                <p className="font-semibold text-plum-900">MakeApp.ai Legal Team</p>
                <p className="text-sm text-plum-600 mt-1">
                  Email:{" "}
                  <a
                    href="mailto:hello@makeapp.ai"
                    className="text-blush-600 font-semibold underline"
                  >
                    hello@makeapp.ai
                  </a>
                </p>
              </div>
            </section>

          </div>

          {/* Bottom Legal Disclaimer */}
          <div className="mt-14 pt-8 border-t border-blush-200/60 text-center text-xs text-plum-500">
            <p>
              This Terms of Service is provided as a starting product policy and should be reviewed by qualified legal counsel before public launch.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
