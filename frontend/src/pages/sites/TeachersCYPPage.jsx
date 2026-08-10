import React from "react";
import TeachersCypHero from "@/components/teachersCypComponents/TeachersCypHero";
import TeachersCypStatsSection from "@/components/teachersCypComponents/TeachersCypStatsSection";
import TeachersCypPosition from "@/components/teachersCypComponents/TeachersCypPosition";
import TeachersCypFilmStills from "@/components/teachersCypComponents/TeachersCypFilmStills";
import TeachersCypMissesPoint from "@/components/teachersCypComponents/TeachersCypMissesPoint";
import TeachersCypSupportNow from "@/components/teachersCypComponents/TeachersCypSupportNow";
import TeachersCypParentsSafeguarding from "@/components/teachersCypComponents/TeachersCypParentsSafeguarding";
import TeachersCypClassroomSigns from "@/components/teachersCypComponents/TeachersCypClassroomSigns";
import TeachersCypPolicyAsks from "@/components/teachersCypComponents/TeachersCypPolicyAsks";
import TeachersCypResources from "@/components/teachersCypComponents/TeachersCypResources";
import TeachersCypCta from "@/components/teachersCypComponents/TeachersCypCta";

export default function TeachersCYPPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <TeachersCypHero />

      {/* 2. Headline Numbers & Stats Grid Section */}
      <TeachersCypStatsSection />

      {/* 3. Our Position Callout Card */}
      <TeachersCypPosition />

      {/* 4. Stills from GHUK's Safeguarding Films */}
      <TeachersCypFilmStills />

      {/* 5. Why "they're nearly adults" misses the point */}
      <TeachersCypMissesPoint />

      {/* 6. Working with a young person who needs support now */}
      <TeachersCypSupportNow />

      {/* 7. For parents, carers and safeguarding leads */}
      <TeachersCypParentsSafeguarding />

      {/* 8. In the classroom: spotting it and responding */}
      <TeachersCypClassroomSigns />

      {/* 9. What we ask for in CYP policy */}
      <TeachersCypPolicyAsks />

      {/* 10. Resources Section */}
      <TeachersCypResources />

      {/* 11. Final CTA: Want to help us put this on the policy agenda? */}
      <TeachersCypCta />
    </main>
  );
}
