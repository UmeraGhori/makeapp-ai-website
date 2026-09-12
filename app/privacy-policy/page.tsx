import Link from "next/link";
import { ArrowLeft, Shield, AlertTriangle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy — MakeApp.ai",
  description: "Privacy Policy for MakeApp.ai facial scan, AI makeup preview, and mobile application services.",
};

export default function PrivacyPolicyPage() {
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
                <Shield className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-plum-500">
                Legal Documentation
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-plum-900 mb-4">
              Privacy Policy
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
              This Privacy Policy is provided as a starting product policy and should be reviewed by qualified legal counsel before public launch.
            </div>
          </div>

          {/* Content Document */}
          <div className="prose prose-plum max-w-none space-y-10 text-plum-800 text-sm sm:text-base leading-relaxed">
            
            {/* 1. Introduction */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                1. Introduction
              </h2>
              <p>
                Welcome to MakeApp.ai (&ldquo;MakeApp.ai,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). MakeApp.ai is an artificial intelligence beauty technology company currently developing a personalized mobile application and companion web services. Our mission is to help individuals discover, preview, and recreate cosmetic looks tailored to their individual facial architecture, skin characteristics, and personal aesthetic preferences.
              </p>
              <p className="mt-3">
                This Privacy Policy describes how we collect, use, process, and disclose your personal information when you visit our website, interact with our preview services, or access any upcoming applications and digital tools operated by MakeApp.ai.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                2. Information We Collect
              </h2>
              <p>
                We collect information that you directly provide to us, as well as data generated automatically during your interaction with our services:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>
                  <strong>Contact and Communication Data:</strong> Your email address and message details when you voluntarily email our team or request product updates.
                </li>
                <li>
                  <strong>Device and Technical Information:</strong> IP address, operating system, browser type, device identifiers, and general geographic location derived from IP addresses.
                </li>
                <li>
                  <strong>Usage Information:</strong> Pages visited, duration of visits, interaction with visual demo controls, and referral sources.
                </li>
              </ul>
            </section>

            {/* 3. Face Photos and Beauty Profile Information */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                3. Face Photos and Beauty Profile Information
              </h2>
              <p>
                The primary purpose of MakeApp.ai is to deliver personalized cosmetic analysis and visual previews. In order to provide these core features in our upcoming mobile application and interactive tools, MakeApp.ai may process:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>
                  <strong>Face Photos:</strong> Selfies or portrait photographs that you take or upload into the application.
                </li>
                <li>
                  <strong>Facial Landmark Geometry:</strong> Mathematical representations and spatial coordinates of key facial features (e.g., eye contour, eyebrow arch, lip perimeter, jawline contours).
                </li>
                <li>
                  <strong>Complexion Attributes:</strong> Estimated skin tone, undertone classification (warm, cool, neutral, olive), and self-reported or detected skin characteristics.
                </li>
                <li>
                  <strong>Style & Product Preferences:</strong> Makeup aesthetics you select (e.g., natural, soft glam, bridal, editorial), favorite looks, and saved cosmetic inspirations.
                </li>
              </ul>
              <p className="mt-4 font-medium text-plum-900">
                Face photos submitted to MakeApp.ai are strictly used to execute the requested beauty analysis and visual preview features.
              </p>
            </section>

            {/* 4. How We Use Information */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                4. How We Use Information
              </h2>
              <p>We use the collected information for the following operational and developmental purposes:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>To deliver facial scanning, skin tone matching, and personalized cosmetic recommendations.</li>
                <li>To generate simulated before-and-after AI makeup previews based on selected reference styles.</li>
                <li>To respond to inbound inquiries and communicate product launch developments.</li>
                <li>To detect, prevent, and remediate technical faults, security vulnerabilities, or fraudulent activity.</li>
              </ul>
            </section>

            {/* 5. AI Processing */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                5. AI Processing & Third-Party AI Providers
              </h2>
              <p>
                MakeApp.ai utilizes cutting-edge computer vision algorithms and generative neural models (including advanced foundation models such as Google Gemini AI and proprietary beauty heuristics).
              </p>
              <p className="mt-3">
                To deliver real-time analysis and image generation, submitted photos and profile parameters may be transmitted to and processed by specialized third-party cloud AI service providers. These providers process data on our behalf under strict contractual confidentiality obligations to render the requested preview and return the rendered assets to your device.
              </p>
            </section>

            {/* 6. Pinterest Data and Content */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                6. Pinterest Data and Content
              </h2>
              <p>
                MakeApp.ai allows users to discover makeup inspirations sourced from Pinterest. Where integrated, Pinterest content and imagery are accessed and displayed through authorized Pinterest API connections. When you interact with Pinterest-linked content, Pinterest&rsquo;s own Terms of Service and Privacy Policy govern their platform. MakeApp.ai does not claim ownership over third-party inspirational imagery hosted on Pinterest.
              </p>
            </section>

            {/* 7. Product Suggestions */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                7. Product Suggestions
              </h2>
              <p>
                Our service suggests cosmetic shades and general makeup product categories matching your analyzed skin tone and chosen look. MakeApp.ai does not manufacture or sell cosmetic formulations directly.
              </p>
            </section>

            {/* 8. Cookies and Similar Technologies */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                8. Cookies and Similar Technologies
              </h2>
              <p>
                We use cookies, local browser storage, and related web technologies to maintain your session and evaluate landing page performance. You may control cookie preferences through your browser settings.
              </p>
            </section>

            {/* 9. Analytics */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                9. Analytics
              </h2>
              <p>
                We may use privacy-conscious analytics services to aggregate anonymous website traffic metrics. These tools evaluate aggregated metrics such as page views, device categories, and geographic regions to assist us in optimizing our interface and infrastructure before general availability.
              </p>
            </section>

            {/* 10. How We Store and Protect Information */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                10. How We Store and Protect Information
              </h2>
              <p>
                We implement commercially reasonable technical and organizational safeguards designed to protect personal information against unauthorized access, destruction, loss, or alteration. These measures include encrypted communication protocols (HTTPS/TLS) and secure database access controls.
              </p>
              <p className="mt-3 text-plum-700">
                While we strive to employ robust administrative and technical protections, no digital transmission over the internet or cloud storage infrastructure can be guaranteed as impenetrable.
              </p>
            </section>

            {/* 11. Data Retention */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                11. Data Retention
              </h2>
              <p>
                Contact email inquiries are retained for as long as necessary to answer inquiries and fulfill launch announcements. Users may request deletion of their communication records at any time by contacting us. Uploaded face images submitted during app sessions will be retained only as long as necessary to render the preview and provide user-saved look libraries in accordance with our ongoing data minimization standards.
              </p>
            </section>

            {/* 12. Sharing of Information */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                12. Sharing of Information
              </h2>
              <p>We do not sell your personal data. We may disclose your information under the following limited circumstances:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Trusted cloud infrastructure, email delivery, AI inference, and analytics vendors who assist in operating our platform.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> Where required by law, subpoena, or valid regulatory directive.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, restructuring, or asset transfer, user records may be transferred subject to this Privacy Policy.
                </li>
              </ul>
            </section>

            {/* 13. Third-Party Services */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                13. Third-Party Services
              </h2>
              <p>
                Our services may contain links to external third-party websites, including Pinterest and cosmetic platforms. We do not control and are not responsible for the privacy practices, content, or terms of third-party platforms. We encourage you to review their respective privacy policies.
              </p>
            </section>

            {/* 14. User Rights and Choices */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                14. User Rights and Choices
              </h2>
              <p>Depending on your jurisdiction (such as the EU/EEA, UK, or California), you may have specific statutory rights regarding your personal information, including:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>The right to access and receive a copy of the personal data we hold about you.</li>
                <li>The right to request rectification of inaccurate data.</li>
                <li>The right to request deletion (erasure) of your personal data or contact record.</li>
                <li>The right to withdraw consent for marketing or update notifications at any time.</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, please submit a written request to{" "}
                <a href="mailto:privacy@makeapp.ai" className="text-blush-600 underline font-semibold">
                  privacy@makeapp.ai
                </a>.
              </p>
            </section>

            {/* 15. Children's Privacy */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                15. Children&rsquo;s Privacy
              </h2>
              <p>
                MakeApp.ai is not directed to children under the age of 13 (or under 16 in the European Economic Area). We do not knowingly collect personal information or facial imagery from children. If you believe that a child has provided us with personal information, please contact us immediately so that we can take steps to remove such information.
              </p>
            </section>

            {/* 16. International Data Transfers */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                16. International Data Transfers
              </h2>
              <p>
                Your information may be transferred to, stored, and processed in servers located outside your country of residence, where data protection laws may differ from those in your jurisdiction. Where we transfer information internationally, we take reasonable steps to ensure appropriate safeguards are maintained.
              </p>
            </section>

            {/* 17. Changes to This Privacy Policy */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                17. Changes to This Privacy Policy
              </h2>
              <p>
                We may revise this Privacy Policy periodically as MakeApp.ai develops and introduces new capabilities. We will post any updates directly to this page along with an updated &ldquo;Last updated&rdquo; timestamp. We encourage you to review this policy periodically.
              </p>
            </section>

            {/* 18. Contact Us */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                18. Contact Us
              </h2>
              <p>
                If you have questions, comments, or requests regarding this Privacy Policy or our data handling practices, please contact our privacy team at:
              </p>
              <div className="mt-4 p-4 rounded-2xl bg-ivory-100 border border-blush-200/70">
                <p className="font-semibold text-plum-900">MakeApp.ai Privacy Operations</p>
                <p className="text-sm text-plum-600 mt-1">
                  Email:{" "}
                  <a
                    href="mailto:privacy@makeapp.ai"
                    className="text-blush-600 font-semibold underline"
                  >
                    privacy@makeapp.ai
                  </a>{" "}
                  <span className="text-xs text-plum-400 font-normal">
                    (Inquiries monitored for launch readiness)
                  </span>
                </p>
              </div>
            </section>

          </div>

          {/* Bottom Legal Disclaimer */}
          <div className="mt-14 pt-8 border-t border-blush-200/60 text-center text-xs text-plum-500">
            <p>
              This Privacy Policy is provided as a starting product policy and should be reviewed by qualified legal counsel before public launch.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
