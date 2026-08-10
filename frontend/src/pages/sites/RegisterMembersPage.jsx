import React from "react";
import RegisterMembershipHero from "../../components/registerMembershipComponents/RegisterMembershipHero";
import RegisterMembershipForm from "../../components/registerMembershipComponents/RegisterMembershipForm";

export default function RegisterMembersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <RegisterMembershipHero />

      {/* 2. Full Registration Form Section */}
      <RegisterMembershipForm />
    </main>
  );
}
