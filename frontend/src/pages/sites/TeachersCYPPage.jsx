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
import PageSectionNav from "@/components/common/PageSectionNav";

const sections = [
  { id: "cyp-stats", title: "1. Headline numbers" },
  { id: "cyp-position", title: "2. Our position" },
  { id: "cyp-films", title: "3. Safeguarding films" },
  { id: "cyp-misses-point", title: "4. Missing the point" },
  { id: "cyp-classroom", title: "5. Spotting the signs" },
  { id: "cyp-support-now", title: "6. Responding: what to do" },
  { id: "cyp-parents", title: "7. Parents & carers" },
  { id: "cyp-resources", title: "8. Resources & guides" },
];

export default function TeachersCYPPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <TeachersCypHero />

      {/* In-page Sticky Pill Navigation */}
      <PageSectionNav sections={sections} />

      {/* 2. Headline Numbers & Stats Grid Section */}
      <div id="cyp-stats" className="scroll-mt-24">
        <TeachersCypStatsSection />
      </div>

      {/* 3. Our Position Callout Card */}
      <div id="cyp-position" className="scroll-mt-24">
        <TeachersCypPosition />
      </div>

      {/* 4. Stills from GHUK's Safeguarding Films */}
      <div id="cyp-films" className="scroll-mt-24">
        <TeachersCypFilmStills />
      </div>

      {/* 5. Why "they're nearly adults" misses the point */}
      <div id="cyp-misses-point" className="scroll-mt-24">
        <TeachersCypMissesPoint />
      </div>

      {/* 6. In the classroom: spotting it and responding */}
      <div id="cyp-classroom" className="scroll-mt-24">
        <TeachersCypClassroomSigns />
      </div>

      {/* 7. Working with a young person who needs support now */}
      <div id="cyp-support-now" className="scroll-mt-24">
        <TeachersCypSupportNow />
      </div>

      {/* 8. For parents, carers and safeguarding leads */}
      <div id="cyp-parents" className="scroll-mt-24">
        <TeachersCypParentsSafeguarding />
      </div>

      {/* 9. Resources Section */}
      <div id="cyp-resources" className="scroll-mt-24">
        <TeachersCypResources />
      </div>

      {/* 10. Final CTA */}
      <TeachersCypCta />
    </main>
  );
}
