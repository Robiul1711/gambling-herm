import React from 'react';
import OurWorkCommonContact from '@/components/common/OurWorkCommonContact';
import FindTreatmentNav from '@/components/findTreatmentComponents/FindTreatmentNav';
import AvailableEverywhere from '@/components/findTreatmentComponents/AvailableEverywhere';
import {
  ByUKRegion,
  OnlineOptions,
  ResidentialIntensive,
  SpecialistServices,
  FinancialSupport,
} from '@/components/findTreatmentComponents/TreatmentSections';

import useClient from '@/hooks/useClient';

const FindTreatment = () => {
  const { data: responseData, isLoading } = useClient({
    queryKey: ["about", "get-help-treatment"],
    url: "/about/get-help-treatment",
  });

  const bannerData = responseData?.data;

  return (
    <>
      {/* Centered Page Head Banner (FT4) */}
      <section
        className="w-full py-14 md:py-20 px-4 sm:px-6 border-b border-sky-100/60"
        style={{
          background:
            "linear-gradient(180deg, var(--teal-10) 0%, var(--paper) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Tagline */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-Primary"></span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-Primary2">
              {bannerData?.subtitle || "FIND TREATMENT"}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight tracking-tight mb-6 max-w-3xl">
            {bannerData?.title || "Treatment near you, and online."}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl">
            {bannerData?.description ||
              "UK gambling-harm services have expanded substantially in recent years. They are still unevenly distributed by region. This page sets out what is available where, with national fallbacks for anywhere services are not yet local."}
          </p>
        </div>
      </section>

      {/* Sticky tab navigation */}
      <FindTreatmentNav />

      {/* Sections — each has a matching id for scroll targeting */}
      <AvailableEverywhere />
      <ByUKRegion />
      <OnlineOptions />
      <ResidentialIntensive />
      <SpecialistServices />
      <FinancialSupport />

      {/* Footer CTA */}
      <OurWorkCommonContact
      className={"bg-white"}
      titleClass={"!text-black"}
      textClass={'!text-black'}
      primaryClass={"bg-Primary"}
      secondaryClass={"!text-black"}
        title="Not sure where to start?"
        description="Call the National Gambling Helpline. They will help you find the right route for your situation, today."
        primaryBtnText="Get help overview"
        primaryBtnLink="/get-help"
        secondaryBtnText="Urgent help"
        secondaryBtnLink="/urgent-help"
      />
    </>
  );
};

export default FindTreatment;


