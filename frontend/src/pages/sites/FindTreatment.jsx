import GamblingCommonBanner from '@/components/common/GamblingCommonBanner';
import React from 'react';
import bannerImg from "@/assets/images/FindTreatment.png";
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

const FindTreatment = () => {
  return (
    <>
      {/* Banner */}
      <div className="section-padding-x">
        <GamblingCommonBanner
          section="Find treatment"
          title="Treatment near you, and online."
          description="UK gambling-harm services have expanded substantially in recent years. They are still unevenly distributed by region. This page sets out what is available where, with national fallbacks for anywhere services are not yet local."
          image={bannerImg}
        />
      </div>

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


