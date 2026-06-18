import React from 'react';

const OurPositionCallout = () => {
  return (
    <div className="">  
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Light Blue Accent Card Container */}
        <div className="bg-[#edf7fd] rounded-r-2xl border-l-[4px] border-[#17a9df]  overflow-hidden">
          <div className="p-8 md:p-10">
            
            {/* Header Title */}
            <h4 className="text-[#17a9df] text-base font-semibold tracking-normal mb-5">
              Our position
            </h4>
            
            {/* Main Narrative Block */}
            <div className="space-y-6 text-[#687076] text-[15px] leading-7 md:leading-8">
              <p>
                Gambling harm is structurally produced. Where harm concentrates is where commercial determinants land 
                hardest, in places with more gambling venues, more targeted advertising, less tailored treatment, less 
                independent advice. <strong className="text-[#2d2d2d] font-bold">The Distribution Of Gambling Harm Is A Distribution Of Corporate And Regulatory 
                Choices, Not Personal Ones.</strong>
              </p>

              {/* Framework Footer Citation Text */}
              <p className="text-xs md:text-sm text-[#7b7b7b]/90 leading-relaxed pt-2">
                The framework on this page is adapted from the <span className="italic">Gambling Harms Inequalities Framework</span>, a GambleAware-funded 
                synthesis. We use its three-factor structure but sharpen the language around commercial 
                determinants and reject the "responsible gambling" framing carried elsewhere in the source material.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default OurPositionCallout;