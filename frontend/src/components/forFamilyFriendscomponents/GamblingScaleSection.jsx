import React from 'react';
import ourPositionImage from "@/assets/images/ourposition1.png";
import scaleImage from "@/assets/images/scale.png";

export default function GamblingScaleSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white text-[#1f2937] border-b border-gray-100">
      <div className="section-padding-x">
        <div className="max-w-5xl mx-auto font-sans">
          
          {/* Top Split Layout: Text Content & Illustration */}
          <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
            
            {/* Left Column: Text Content (Spans 2 columns on medium+ screens) */}
            <div className="md:col-span-2 space-y-5">
              {/* Top light blue accent line */}
              <div className="w-12 h-[3px] bg-[#67b1cb]"></div>
              
              <h2 className="text-3xl md:text-[34px] font-bold text-[#111827] leading-tight tracking-tight">
                The scale: you are not the only one
              </h2>
              
              <div className="text-[#6b7280] text-[15px] leading-relaxed space-y-4">
                <p>
                  For every person in the UK experiencing severe gambling harm, an estimated{' '}
                  <strong className="text-gray-900 font-semibold">Six To Ten Others</strong> (partners, 
                  parents, children, siblings, close friends) carry significant harm of their own. That puts 
                  the affected-others population, conservatively, in the region of{' '}
                  <strong className="text-gray-900 font-semibold">2.4 Million People In The UK</strong> at any given time.
                </p>
                
                <p>
                  It is common to be experiencing some or all of the following: anxiety that doesn't switch off, 
                  financial fear, sleep loss, hyper-vigilance about phones and post and bank balances, walking on 
                  eggshells, isolation from friends, shame about even talking about it, and a quiet sense that 
                  you must be doing something wrong because nothing you've tried has fixed it.
                </p>
                
                <p className="pt-2">
                  None of that is your fault. And none of it means you're failing.
                </p>
              </div>
            </div>

            {/* Right Column: Illustration Graphic */}
            <div className="flex justify-center md:justify-end">
              <img 
                src={ourPositionImage} 
                alt="Realities of gambling harm illustration - Honest Truth" 
                className="w-full max-w-[280px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Bottom Section: Feature Video Still / Photograph */}
          <div className="space-y-3">
            <div className="overflow-hidden rounded-[24px]">
              <img 
                src={scaleImage} 
                alt="Still from GHUK's Brothers Gambling Harm safeguarding film" 
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
            
            {/* Caption text matching the styling in image_6cd649.jpg */}
            <p className="text-xs md:text-sm text-gray-500 italic pl-1">
              Still from GHUK's Brothers Gambling Harm safeguarding film — a younger sibling sits with what they're carrying.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}