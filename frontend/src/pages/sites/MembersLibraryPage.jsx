import React from "react";
import MembersLibraryHero from "../../components/membersLibraryComponents/MembersLibraryHero";
import MembersLibraryUpcoming from "../../components/membersLibraryComponents/MembersLibraryUpcoming";

export default function MembersLibraryPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <MembersLibraryHero />

      {/* 2. Upcoming Pages Section */}
      <MembersLibraryUpcoming />
    </main>
  );
}
