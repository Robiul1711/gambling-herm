import React from "react";
import SignInHero from "../../components/signInComponents/SignInHero";
import SignInFormSection from "../../components/signInComponents/SignInFormSection";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <SignInHero />

      {/* 2. Sign In Form Section */}
      <SignInFormSection />
    </main>
  );
}
