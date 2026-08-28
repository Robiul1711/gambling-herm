import React from "react";
import ForgotPasswordHero from "../../components/forgotPasswordComponents/ForgotPasswordHero";
import ForgotPasswordFormSection from "../../components/forgotPasswordComponents/ForgotPasswordFormSection";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <ForgotPasswordHero />

      {/* 2. Forgot Password Form Section */}
      <ForgotPasswordFormSection />
    </main>
  );
}
