import React from "react";
import { Link } from "react-router-dom";
import PageSectionNav from "@/components/common/PageSectionNav";

const sections = [
  { id: "our-approach", title: "1. Our Approach" },
  { id: "strictly-necessary", title: "2. Strictly Necessary" },
  { id: "analytics", title: "3. Analytics" },
  { id: "embedded-content", title: "4. Embedded Content" },
  { id: "managing-cookies", title: "5. Managing Cookies" },
];

export default function Cookies() {
  return (
    <section className="w-full text-[#1f2937] py-12 md:py-20">
      <div className="section-padding-x">
        <div className="max-w-5xl mx-auto text-left">
          {/* Header block */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            {/* Top Label */}
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-Primary mb-4">
              <span className="w-6 h-[2px] bg-Primary" />
              <span>Legal</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-slate-900 tracking-tight leading-tight mb-5">
              Cookies
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-4 max-w-4xl font-normal">
              Cookies are small files a website can store on your device. We use
              as few as possible, and none for advertising or cross-site
              tracking.
            </p>

            <span className="text-xs sm:text-sm text-slate-400 block italic">
              Last updated: June 2026.
            </span>
          </div>

          {/* Sticky In-page Navigation */}
          <PageSectionNav sections={sections} />

          {/* Content sections */}
          <div className="space-y-12">
            {/* Section 1 */}
            <div id="our-approach" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Our approach
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                We do not use advertising cookies, and we do not track you
                across other websites. We do not sell data to anyone, and never
                to the gambling industry. The only cookies or similar
                technologies in use are those needed to make the site work and,
                where enabled, to understand in aggregate how the site is used.
              </p>
            </div>

            {/* Section 2 */}
            <div id="strictly-necessary" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Strictly necessary
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                These keep the site secure and functioning, for example
                remembering accessibility preferences or keeping the site
                stable. They do not identify you and cannot be switched off
                without affecting how the site works.
              </p>
            </div>

            {/* Section 3 */}
            <div id="analytics" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Analytics
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                If we measure how the site is used, we do so with a
                privacy-friendly analytics tool configured to collect aggregate,
                anonymised information only, without advertising profiles or
                cross-site tracking. This kind of analytics is typically
                cookieless. We will keep this page updated to reflect the tool
                in use.
              </p>
            </div>

            {/* Section 4 */}
            <div id="embedded-content" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Embedded content from other sites
              </h2>
              <div className="space-y-5">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-semibold">YouTube (videos).</strong>{" "}
                  Our films are embedded using YouTube's privacy-enhanced mode (
                  <span className="italic">youtube-nocookie</span>). YouTube
                  only sets cookies if you click play on a video.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-semibold">Google Fonts.</strong> We
                  load our typeface from Google Fonts. This does not set
                  cookies, but Google receives your IP address when the font is
                  requested.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Other linked services (for example self-exclusion schemes, the
                  NHS, or our newsletter provider) set their own cookies under
                  their own policies once you visit them.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div id="managing-cookies" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Managing cookies
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                You can control or delete cookies through your browser settings,
                and set most browsers to refuse them. Doing so may affect how
                some embedded content behaves. Guidance for all major browsers
                is available at{" "}
                <a
                  href="https://www.aboutcookies.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-Primary hover:text-Primary2 hover:underline font-medium transition-colors"
                >
                  aboutcookies.org
                </a>
                .
              </p>
            </div>
          </div>

          {/* Footer compliance links */}
          <div className="mt-14 pt-8 border-t border-gray-200 flex items-center space-x-3 text-sm text-slate-500 font-medium">
            <span>Related:</span>
            <Link to="/privacy" className="text-Primary hover:text-Primary2 hover:underline transition-colors">
              Privacy notice
            </Link>
            <span>·</span>
            <Link
              to="/accessibility"
              className="text-Primary hover:text-Primary2 hover:underline transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
