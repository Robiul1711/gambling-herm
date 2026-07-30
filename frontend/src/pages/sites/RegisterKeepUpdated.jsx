import React from "react";
import RegisterHeroSection from "../../components/registerKeepUpdatedComponents/RegisterHeroSection";
import RegisterFormSection from "../../components/registerKeepUpdatedComponents/RegisterFormSection";

export default function RegisterKeepUpdated() {
  return (
    <main className="min-h-screen bg-white">
      <RegisterHeroSection />
      <RegisterFormSection />
    </main>
  );
}

