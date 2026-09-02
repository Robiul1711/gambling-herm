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
  { id: "cyp-stats", title: "1. Headline Numbers" },
  { id: "cyp-position", title: "2. Our Position" },
  { id: "cyp-films", title: "3. Safeguarding Films" },
  { id: "cyp-misses-point", title: "4. Missing the Point" },
  { id: "cyp-support-now", title: "5. Support a Young Person" },
  { id: "cyp-parents", title: "6. Parents & Carers" },
  { id: "cyp-classroom", title: "7. In the Classroom" },
  { id: "cyp-policy", title: "8. Policy Asks" },
  { id: "cyp-resources", title: "9. Resources & Guides" },
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

      {/* 6. Working with a young person who needs support now */}
      <div id="cyp-support-now" className="scroll-mt-24">
        <TeachersCypSupportNow />
      </div>

      {/* 7. For parents, carers and safeguarding leads */}
      <div id="cyp-parents" className="scroll-mt-24">
        <TeachersCypParentsSafeguarding />
      </div>

      {/* 8. In the classroom: spotting it and responding */}
      <div id="cyp-classroom" className="scroll-mt-24">
        <TeachersCypClassroomSigns />
      </div>

      {/* 9. What we ask for in CYP policy */}
      <div id="cyp-policy" className="scroll-mt-24">
        <TeachersCypPolicyAsks />
      </div>

      {/* 10. Resources Section */}
      <div id="cyp-resources" className="scroll-mt-24">
        <TeachersCypResources />
      </div>

      {/* 11. Final CTA: Want to help us put this on the policy agenda? */}
      <TeachersCypCta />
    </main>
  );
}
