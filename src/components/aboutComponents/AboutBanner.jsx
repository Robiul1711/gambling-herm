import React from 'react';
import aboutBannerImg from "@/assets/images/banner.png";
export default function AboutBanner() {
  return (
    <section className="w-full relative min-h-[400px] sm:min-h-[520px] md:min-h-[640px] flex items-center bg-[#2A2828] overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE ENGINE LAYER */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={aboutBannerImg} // Replace with your actual project asset path
          alt="Gambling Harm UK independent team representatives" 
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Exact low-opacity dark gradient mask overlay to guarantee optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/20 md:bg-black/30" />
      </div>

      {/* 2. CORE INTERACTIVE CONTENT CONTAINER */}
      <div className="w-full section-padding-x relative z-10 py-20 md:py-28 text-left">
        <div className="max-w-5xl flex flex-col space-y-4 md:space-y-6">
          
          {/* Top Custom Dynamic Identity Tag Line */}
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-white shrink-0" />
            <span className="text-gray-200 text-sm md:text-base font-semibold tracking-wider drop-shadow-sm">
              Who We Are
            </span>
          </div>

          {/* Primary High-Impact Typography Header Statement */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-wider leading-[1.1] drop-shadow-md">
            An independent voice on gambling harm.
          </h1>

          {/* Detailed Informational Sub-Paragraph Column */}
          <p className="text-gray-200 text-sm sm:text-base md:text-lg  max-w-2xl font-medium drop-shadow-sm opacity-95">
            We exist because gambling causes preventable, industrial-scale harm in the UK, and the 
            people affected deserve accurate information, real support, and a regulatory response that 
            takes them seriously.
          </p>

        </div>
      </div>

    </section>
  );
}