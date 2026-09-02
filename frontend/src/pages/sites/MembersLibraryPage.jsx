import React from "react";
import { useMemberAuth } from "@/context/MemberAuthContext";
import MembersLibraryHero from "../../components/membersLibraryComponents/MembersLibraryHero";
import MembersLibraryNotSignedIn from "../../components/membersLibraryComponents/MembersLibraryNotSignedIn";
import MembersLibraryWhatItHolds from "../../components/membersLibraryComponents/MembersLibraryWhatItHolds";
import MembersLibraryExampleCards from "../../components/membersLibraryComponents/MembersLibraryExampleCards";
import MembersLibraryUnlocked from "../../components/membersLibraryComponents/MembersLibraryUnlocked";

export default function MembersLibraryPage() {
  const { isAuthenticated } = useMemberAuth();

  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <MembersLibraryHero />

      {isAuthenticated ? (
        /* 2. UNLOCKED: Full Live Members Library with playable films, toolkits, data models */
        <MembersLibraryUnlocked />
      ) : (
        /* 2. LOCKED: Guest View with explanatory notes and preview */
        <>
          {/* You're not signed in Callout Card */}
          <MembersLibraryNotSignedIn />

          {/* What the library holds List */}
          <MembersLibraryWhatItHolds />

          {/* Example: what a signed-in member will see (Placeholder Cards) */}
          <MembersLibraryExampleCards />
        </>
      )}
    </main>
  );
}
