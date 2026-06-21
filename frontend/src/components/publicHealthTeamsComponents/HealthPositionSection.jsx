import React from "react";
import bannerImg from "@/assets/images/publichelth.png";

const HealthPositionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative bg-[#eaf5fb] rounded-sm overflow-hidden">
          {/* Left Blue Border */}
          <div className="absolute left-0 top-0 h-full w-[4px] bg-[#0093d0]" />

          <div className="flex flex-col md:flex-row items-center justify-between px-8 py-10 gap-8">
            {/* Content */}
            <div className="flex-1">
              <p className="text-[#0082c3] text-sm mb-5">Our position</p>

              <p className="text-[15px] leading-8 text-[#6c7884] mb-8">
                <span className="font-bold text-[#2b2f33]">
                  Gambling harm ranks among the top five modifiable risks to UK
                  population health,
                </span>{" "}
                comparable in burden to alcohol misuse and major depressive
                disorder. It is currently regulated, funded and addressed as if
                it were not. That is the central public-health failure we exist
                to correct.
              </p>

              <p className="text-[15px] leading-8 text-[#6c7884]">
                The framing of gambling harm should match the framing applied to
                tobacco, alcohol, and ultra-processed food: a{" "}
                <span className="font-bold text-[#2b2f33]">
                  commercial determinant of health
                </span>
                , governed by a regulator with population-health primacy,
                funded through a statutory levy scaled to harm, and integrated
                across the public-health system, not treated as a discretionary
                leisure issue at the periphery of the regulatory landscape.
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-[320px] flex justify-center shrink-0">
              <img
                src={bannerImg}
                alt="Public Health Diagram"
                className="w-full max-w-[320px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthPositionSection;