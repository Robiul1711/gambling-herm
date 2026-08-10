import React from "react";
import MembersLibraryHero from "../../components/membersLibraryComponents/MembersLibraryHero";
import MembersLibraryNotSignedIn from "../../components/membersLibraryComponents/MembersLibraryNotSignedIn";
import MembersLibraryWhatItHolds from "../../components/membersLibraryComponents/MembersLibraryWhatItHolds";
import MembersLibraryExampleCards from "../../components/membersLibraryComponents/MembersLibraryExampleCards";

export default function MembersLibraryPage() {
  return (
    <main className="min-h-screen ">
      {/* 1. Hero Section */}
      <MembersLibraryHero />

      {/* 2. You're not signed in Callout Card */}
      <MembersLibraryNotSignedIn />

      {/* 3. What the library holds List */}
      <MembersLibraryWhatItHolds />

      {/* 4. Example: what a signed-in member will see (Placeholder Cards) */}
      <MembersLibraryExampleCards />
    </main>
  );
}
