import React from 'react';
import man from "@/assets/images/man.png";

const TrusteesAndTeam = () => {
  return (
    <section className="bg-white py-16 ">
      <div className="section-padding-x flex flex-col md:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
        
        {/* Left Side: Image Container */}
        <div className="w-full md:w-5/12 max-w-sm md:max-w-none flex justify-center">
          <div className="relative">
            <img 
              src={man} 
              alt="Dr Kishan Patel" 
              className="w-full h-auto object-cover"
            />
            {/* Soft fade-out at the bottom to match the image style */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-8/12 flex flex-col text-left">
          {/* Top Accent Line */}
          <div className="w-10 h-[3px] bg-Primary mb-4"></div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2d2d] tracking-tight mb-6">
            Trustees &amp; Team
          </h2>

          {/* Subtitle / Intro paragraph */}
          <p className="text-[#8a92a3] text-sm sm:text-base mb-6 leading-relaxed">
            GHUK was founded in November 2020 by individuals with lived experience of gambling harm. Full trustee biographies will be added here. Below is our CEO and Founder.
          </p>

          {/* Name & Title */}
          <h3 className="text-lg sm:text-xl font-bold text-[#2d2d2d] mb-4">
            Dr Kishan Patel &mdash; CEO &amp; Founder
          </h3>

          {/* Biography Body */}
          <div className="text-[#8a92a3] text-sm sm:text-base space-y-4 leading-relaxed mb-6">
            <p>
              Medical doctor trained at Imperial College London (MBBS BSc). MSc in Global Health Science and Epidemiology from the University of Oxford. Diploma of the Faculty of Public Health (DFPH). UK Public Health Specialty Registrar.
            </p>
            <p>
              Kishan founded GHUK in 2020 following lived experience as an affected other: his father had an undiagnosed gambling disorder and died prematurely, with gambling unrecorded in the coroner's account &mdash; an experience that informs GHUK's emphasis on routine NHS coding, affected-others recognition, and the visibility of legacy harms.
            </p>
            <p>
              Kishan is lead author of GHUK's APPG submission (February 2026) and Gambling Explained (2021). He has provided written and oral evidence to UK parliament on gambling harm, public-health framing and lived experience.
            </p>
          </div>

          {/* Declared Interests Footer */}
          <p className="text-sm sm:text-base text-[#8a92a3] leading-relaxed mb-3">
            <span className="text-[#2d2d2d] font-semibold">Declared interests:</span> No financial conflicts of interest with the gambling industry. Has never accepted funding, remuneration or gifts from the gambling industry. Contact:
          </p>

          {/* Email Link */}
          <a 
            href="mailto:kishan@gamblingharm.com" 
            className="text-[#2d2d2d] font-medium italic text-sm sm:text-base hover:text-Primary transition-colors self-start"
          >
            kishan@gamblingharm.com
          </a>
        </div>

      </div>
    </section>
  );
};

export default TrusteesAndTeam;