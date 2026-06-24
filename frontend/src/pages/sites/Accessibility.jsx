import React from "react";
import { Link } from "react-router-dom";

export default function Accessibility() {
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
              Accessibility
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              We want everyone to be able to use this site, including people who rely on assistive
              technology. This statement explains what we do, where we know we fall short, and how to tell
              us about a problem.
            </p>

            <span className="text-xs text-slate-400 block italic">
              Last updated: June 2026.
            </span>
          </div>

          {/* Content sections */}
          <div className="space-y-10">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Our commitment</h2>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                Gambling harm affects people in distress, in a hurry, and on every kind of device. We build
                this site to be usable by as many people as possible, and we aim to meet the international{" "}
                <span className="font-semibold text-slate-800">WCAG 2.1 AA</span> accessibility standard.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">What we do</h2>
              <div className="divide-y divide-gray-100 border-t border-b border-gray-100 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                <p className="py-4">
                  A "skip to main content" link and a clear, consistent heading structure on every page.
                </p>
                <p className="py-4">
                  A crisis helpline banner kept visible at the top of every page.
                </p>
                <p className="py-4">
                  Text alternatives for images, and captions or context for video and audio.
                </p>
                <p className="py-4">
                  Colour contrast tested against the AA standard, with body text and links checked for legibility.
                </p>
                <p className="py-4">
                  Full keyboard navigation, with visible focus, and touch targets sized for small screens.
                </p>
                <p className="py-4">
                  Layout that reflows for mobile, tablet and desktop, and respects your browser's text-size settings.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Where we know we fall short</h2>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                We are honest about the gaps. Some embedded third-party content (for example YouTube video
                players) is outside our direct control and may not fully meet the standard. Some downloadable
                documents (such as PDFs) may not yet be fully tagged for screen readers. We are working to
                address these.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Tell us about a problem</h2>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                If you find something you can't access, or you need information in a different format (for
                example large print, plain text or an alternative document), please email{" "}
                <a href="mailto:hello@gamblingharm.com" className="text-[#1B80C4] hover:underline">
                  hello@gamblingharm.com
                </a>. Tell us the page and what went wrong, and we will do our best to put it right and to
                get you what you need.
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
            <Link to="/cookies" className="text-[#1B80C4] hover:underline">
              Cookies
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
