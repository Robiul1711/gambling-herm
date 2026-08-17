import React from "react";

const DeviceBrowserSection = () => {
  return (
    <section id="device-browser" className="scroll-mt-24 w-full py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Device and browser
        </h2>

        {/* Content Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
          <p>
            Ad-blocking browser extensions, and the tracker-blocking settings built into some browsers, cut down on the number of ads, including gambling ads, served to you on websites.
          </p>
          <p>
            They reach ads on the websites you visit in that browser. They don't reach ads inside separate apps, ads on someone else's screen, or sponsorship built into broadcast coverage, and no ad blocker can guarantee it catches everything.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeviceBrowserSection;
