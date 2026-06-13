import React from 'react';

export default function SubmissionFeatured() {
  return (
    <section className="w-full bg-[#2A2828] text-white py-16 md:py-24 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Container with Left Border Accent */}
        <div className="border-l-4 border-Primary pl-6 md:pl-10 flex flex-col space-y-4 md:space-y-6">
          
          {/* Section Subtitle Tag */}
          <p className="flex items-center space-x-3">
          <span className="text-Primary text-sm md:text-base font-medium">
           Submission · Featured  

          </span>
          <span className="text-gray-400 text-sm md:text-base font-medium">
           25 February 2026 · APPG on Gambling Reform

          </span>
          </p>

          {/* Main Statement Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.25] max-w-4xl">
            Gambling harm is a leading modifiable risk factor for ill-health in the UK. 
            It is treated as if it isn't.
          </h2>

          {/* Body Paragraph Content Block */}
          <div className="flex flex-col space-y-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-normal">
            <p>
           Our flagship 2026 submission to the All-Party Parliamentary Group on Gambling Reform. UK burden modelling, the £4.1–£6.1bn QALY-cost band (40–60× current statutory levy), and a structured recommendations package covering levy, advertising, product safety, MECC, NHS coding and DHSC regulatory consolidation. Authored by Dr Kishan Patel (CEO & Founder).
            </p>
            
            {/* Mission Statement Accent Text */}
            <p className="font-semibold text-white pt-2">
              We exist to change that.
            </p>
          
          </div>

        </div>

      </div>
    </section>  
  );
}