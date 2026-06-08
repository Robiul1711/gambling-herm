import React from 'react';
import homeBanner from '@/assets/images/homeBanner.png'
import { Link } from 'react-router-dom';
export default function Banner() {
  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24">
      <div className="section-padding-x">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Text Content & Actions (Takes 7 spans on desktop) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Pill Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#E0F2FE] text-Primary text-xs font-semibold px-3 py-1.5 rounded-md tracking-wide">
                Independent
              </span>
              <span className="bg-[#E0F2FE] text-Primary text-xs font-semibold px-3 py-1.5 rounded-md tracking-wide">
                Public-health-led
              </span>
              <span className="bg-[#E0F2FE] text-Primary text-xs font-semibold px-3 py-1.5 rounded-md tracking-wide">
                Lived-experience-informed
              </span>
            </div>

            {/* Main Catchy Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Gambling is a{" "}
              <span className="text-Primary">
                leading modifiable risk factor
              </span>{" "}
              for ill-health
            </h1>

            {/* Descriptive Body Copy */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              Industrial-scale harm. Millions affected. A regulatory environment shaped, for decades, by 
              the industry causing it. We're an independent voice for the people being harmed, the families 
              carrying the cost, and the change that prevents it.
            </p>

            {/* Action Buttons Row */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
  <Link
    to="/get-help"
    className="bg-Primary hover:bg-[#145c7e] text-white font-bold
               px-4 sm:px-6 py-3 sm:py-3.5
               rounded-xl transition-colors shadow-sm
               text-sm sm:text-base text-center
               min-w-[120px] sm:min-w-[140px]"
  >
    Get Help
  </Link>

  <Link
    to="/worried-about-someone"
    className="border-2 border-gray-400 hover:border-gray-900 text-gray-800 font-bold
               px-4 sm:px-6 py-3 sm:py-3.5
               rounded-xl transition-colors
               text-sm sm:text-base text-center"
  >
    I'm worried about someone
  </Link>
</div>
          </div>

          {/* RIGHT COLUMN: Graphical Layout / Frame Container (Takes 5 spans on desktop) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* The Custom Rounded Main Frame */}
            <div className="relative w-full max-w-[460px] aspect-[1.1/1] border border-gray-300 rounded-[60px] rounded-bl-none p-4 flex items-center justify-center bg-gray-50 overflow-visible">
              
              {/* Main Background Imagery Placeholder */}
              <div className="w-full h-full rounded-[48px] rounded-bl-none overflow-hidden bg-gray-200">
                <img 
                  src={homeBanner} 
                  alt="Presentation regarding public health risks" 
                  className="w-full h-full object-cover grayscale-[20%]"
                />
              </div>

              {/* OVERLAY CARD: "~1 In 5" Data Metric Badge */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 right-4 sm:right-auto sm:w-[360px] bg-[#222121] text-white p-6 rounded-3xl shadow-xl flex flex-col space-y-3 border-l-4 border-Primary">
                
                {/* Metric Header */}
                <h3 className="text-3xl font-extrabold tracking-tight">
                  ~1 In 5
                </h3>
                
                {/* Metric Secondary Content */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                  UK adults were harmed by gambling in the past year, counting both people who gamble and 
                  those around them. Harm isn't all-or-nothing. It builds up, spreads to families and friends, 
                  and can last long after the gambling ends.
                </p>

                {/* Internal Action Pointer */}
                <a 
                  href="#burden-of-harm" 
                  className="inline-flex items-center text-sm font-bold text-white hover:text-gray-200 transition-colors pt-1 group"
                >
                  Read the burden of harm 
                  <span className="ml-1 transform transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}