import React from "react";
import { Link } from "react-router-dom";

export default function Cookies() {
  return (
    <section className="w-full text-[#1f2937] py-12 md:py-20">
      <div className="section-padding-x">
        <div className="max-w-3xl mx-auto text-left">
          
          {/* Header block */}
          <div className="mb-10 pb-8 border-b border-gray-100">
            {/* Top Label */}
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#1B80C4] mb-4">
              <span className="w-6 h-[2px] bg-[#1B80C4]" />
              <span>Legal</span>
            </div>

            <h1 className="text-3xl sm:text-[44px] font-bold text-slate-800 tracking-tight leading-tight mb-4">
              Cookies
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              Cookies are small files a website can store on your device. We use as few as possible, and
              none for advertising or cross-site tracking.
            </p>

            <span className="text-xs text-slate-400 block italic">
              Last updated: June 2026.
            </span>
          </div>

          {/* Content sections */}
          <div className="space-y-10">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Our approach</h2>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                We do not use advertising cookies, and we do not track you across other websites. We do
                not sell data to anyone, and never to the gambling industry. The only cookies or similar
                technologies in use are those needed to make the site work and, where enabled, to
                understand in aggregate how the site is used.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Strictly necessary</h2>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                These keep the site secure and functioning, for example remembering accessibility
                preferences or keeping the site stable. They do not identify you and cannot be switched
                off without affecting how the site works.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Analytics</h2>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                If we measure how the site is used, we do so with a privacy-friendly analytics tool
                configured to collect aggregate, anonymised information only, without advertising
                profiles or cross-site tracking. This kind of analytics is typically cookieless. We will
                keep this page updated to reflect the tool in use.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3 font-sans">
                Embedded content from other sites
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">YouTube (videos).</strong> Our films are embedded using
                  YouTube's privacy-enhanced mode (<span className="italic">youtube-nocookie</span>). YouTube only
                  sets cookies if you click play on a video.
                </p>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Google Fonts.</strong> We load our typeface from Google
                  Fonts. This does not set cookies, but Google receives your IP address when the font is
                  requested.
                </p>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                  Other linked services (for example self-exclusion schemes, the NHS, or our newsletter provider)
                  set their own cookies under their own policies once you visit them.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Managing cookies</h2>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                You can control or delete cookies through your browser settings, and set most browsers to
                refuse them. Doing so may affect how some embedded content behaves. Guidance for all major
                browsers is available at{" "}
                <a
                  href="https://www.aboutcookies.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1B80C4] hover:underline"
                >
                  aboutcookies.org
                </a>.
              </p>
            </div>
          </div>

          {/* Footer compliance links */}
          <div className="mt-12 pt-6 border-t border-gray-100 flex items-center space-x-2 text-xs text-slate-400">
            <span>Related:</span>
            <Link to="/privacy" className="text-[#1B80C4] hover:underline">
              Privacy notice
            </Link>
            <span>·</span>
            <Link to="/accessibility" className="text-[#1B80C4] hover:underline">
              Accessibility
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
