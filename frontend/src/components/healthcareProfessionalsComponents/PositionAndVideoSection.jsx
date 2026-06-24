import React from 'react';
import meccVideo from '@/assets/videos/mecc.mp4';

const PositionAndVideoSection = () => {
  return (
    <div className="w-full section-padding-y">
      {/* Responsive layout container:
        Stacks vertically on mobile (`flex-col`), shifts to side-by-side on large screens (`lg:flex-row`).
      */}
      <div className="flex flex-col lg:flex-row items-stretch gap-8 md:gap-12">
        
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
          <div className="w-full  bg-black rounded-xl overflow-hidden shadow-xl flex flex-col">
            
            {/* Video */}
          <video 
          src={meccVideo} 
          autoPlay 
          loop 
          muted
          controls
          className="w-full h-full object-cover"
          />
          

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