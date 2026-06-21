import React from 'react';

const PositionAndVideoSection = () => {
  return (
    <div className="w-full section-padding-y">
      {/* Responsive layout container:
        Stacks vertically on mobile (`flex-col`), shifts to side-by-side on large screens (`lg:flex-row`).
      */}
      <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
        
        {/* Left Column: Callout Box */}
        <div className="flex-1 flex">
          <div className="relative w-full bg-[#f0f9ff] rounded-r-xl p-8 md:p-10 flex flex-col justify-center">
            {/* Solid Left Border Element */}
            <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#0082c3] rounded-l-full"></div>
            
            {/* Tagline */}
            <span className="text-[#0082c3] text-sm font-semibold tracking-wide mb-4 inline-block">
              Our position
            </span>
            
            {/* Paragraph 1 */}
            <p className="text-[15px] md:text-16 text-gray-500 leading-relaxed mb-6">
              <span className="font-bold text-gray-800">
                Making Every Contact Count (MECC) should explicitly include gambling.
              </span>{" "}
              Brief, opportunistic, evidence-based conversation about gambling in routine 
              clinical contact is one of the cheapest, fastest, highest-yield public-health 
              interventions available, and one of the most neglected. Gambling deserves a place 
              alongside the standard MECC topics (smoking, alcohol, weight, physical activity, 
              mental wellbeing).
            </p>
            
            {/* Paragraph 2 */}
            <p className="text-[15px] md:text-16 text-gray-500 leading-relaxed">
              We also support routine NHS coding of gambling harm, integration into mandatory 
              undergraduate and postgraduate medical curricula, and dedicated MECC training 
              resources for primary and community care.
            </p>
          </div>
        </div>

        {/* Right Column: Custom Video Player Mock */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-[540px] bg-black rounded-xl overflow-hidden shadow-xl flex flex-col">
            
            {/* Video Grid & Custom Player UI */}
            <div className="relative aspect-[16/10] w-full bg-gray-900 group">
              {/* Background Mock Grid Video Frame */}
              <div className="grid grid-cols-4 grid-rows-2 h-full w-full gap-[2px] opacity-90">
                {/* Simulated Grid Faces (Using placeholders with varied gray tones) */}
                <div className="bg-gray-700 animate-pulse"></div>
                <div className="bg-gray-600"></div>
                <div className="bg-gray-700"></div>
                <div className="bg-gray-600"></div>
                <div className="bg-gray-600"></div>
                <div className="bg-gray-700"></div>
                <div className="bg-gray-600"></div>
                <div className="bg-gray-700"></div>
              </div>

              {/* Video Controls Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col gap-2">
                {/* Progress Bar Container */}
                <div className="w-full bg-gray-600/60 h-[3px] rounded-full overflow-hidden cursor-pointer">
                  <div className="bg-white h-full w-1/4"></div>
                </div>

                {/* Control Action Buttons */}
                <div className="flex items-center justify-between text-white text-xs font-mono px-1">
                  {/* Play & Time */}
                  <div className="flex items-center gap-4">
                    <button className="hover:text-gray-300 transition-colors">
                      {/* Play SVG Icon */}
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                    <span>0:00 / 0:49</span>
                  </div>

                  {/* Volume, Fullscreen, Options */}
                  <div className="flex items-center gap-4">
                    {/* Volume */}
                    <button className="hover:text-gray-300 transition-colors">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                      </svg>
                    </button>
                    {/* Maximize */}
                    <button className="hover:text-gray-300 transition-colors">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                      </svg>
                    </button>
                    {/* Options (Three dots) */}
                    <button className="hover:text-gray-300 transition-colors">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Meta Title Banner */}
            <div className="bg-[#141414] p-4 text-xs md:text-sm text-gray-300 border-t border-gray-800">
              <p className="leading-relaxed">
                <span className="font-bold text-white">MECC for gambling harm</span> —{" "}
                <span className="italic text-gray-400">GHUK's clinical training film. A 30–60-second opportunistic conversation, modelled in primary care.</span>
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default PositionAndVideoSection;