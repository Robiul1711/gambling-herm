import React, { useState } from "react";
import anjanetteImg from "@/assets/team/anjanette-stokes.jpg";
import ailbheImg from "@/assets/team/ailbhe-kazounis.jpg";
import lucyImg from "@/assets/team/lucy-hays.jpg";
import fayImg from "@/assets/team/fay-laidler.jpg";
import { X } from "lucide-react";

const teamMembers = [
  {
    id: "kishan-patel",
    name: "Dr Kishan Patel",
    role: "CEO & FOUNDER",
    initials: "KP",
    bio: [
      "Medical doctor trained at Imperial College London (MBBS BSc). MSc in Global Health Science and Epidemiology from Oxford. Diploma of the Faculty of Public Health. UK Public Health Specialty Registrar.",
      "Kishan founded GHUK in 2020 following lived experience as an affected other: his father had an undiagnosed gambling disorder and died prematurely, with gambling unrecorded in the coroner's account. That experience informs GHUK's emphasis on routine NHS coding, affected-others recognition, and the visibility of legacy harms.",
      "Lead author of GHUK's APPG submission (February 2026) and Gambling Explained (2021). Has provided written and oral evidence to UK parliament on gambling harm, public-health framing and lived experience."
    ],
    declaredInterests: "No financial conflicts of interest with the gambling industry. Has never accepted funding, remuneration or gifts from the gambling industry.",
    email: "kishan@gamblingharm.com"
  },
  {
    id: "ben",
    name: "Ben",
    role: "TEAM MEMBER",
    initials: "B",
    bio: [
      "Full bio in preparation. Please email hello@gamblingharm.com in the meantime."
    ],
    declaredInterests: "",
    email: "hello@gamblingharm.com"
  },
  {
    id: "anjanette-stokes",
    name: "Anjanette Stokes",
    role: "SYSTEMS LEAD",
    image: anjanetteImg,
    bio: [
      "Anji has over 22 years' experience across the health sector, with expertise spanning community development, young people's sexual health services, commissioning, population health management, and the delivery of integrated models of care. She is deeply committed to reducing health inequalities, advancing health equity, and promoting social justice.",
      "Throughout her career, Anji has worked collaboratively with clinical colleagues, statutory services, and community partners to design and deliver innovative projects that address health inequalities in areas of high deprivation. She also serves as a trustee for an arts and culture charity in Morecambe.",
      "\"I am honoured to be part of Gambling Harm UK and to work alongside such motivated and exceptional people. I look forward to helping drive meaningful system change that makes a real difference to people harmed by their own gambling, and for the partners, children, and families who are often among those most severely harmed.\""
    ]
  },
  {
    id: "ailbhe-kazounis",
    name: "Ailbhe Kazounis",
    role: "SYSTEMS LEAD",
    image: ailbheImg,
    bio: [
      "Ailbhe is a UKPHR-registered Public Health Practitioner with over 15 years of experience delivering evidence-based health-improvement programmes across the NHS and local government. She specialises in applying Health in All Policies and whole-systems approaches to address the wider determinants of health, advance healthy placemaking, and reduce health inequalities.",
      "\"I'm excited to be working with Gambling Harm UK and exploring how whole-systems approaches can be applied to preventing and reducing gambling harms. This is a vital opportunity to address gambling harm as a public health issue through partnership working, prevention, and action on its social, commercial, and structural determinants.\""
    ]
  },
  {
    id: "lucy-hays",
    name: "Lucy Hays",
    role: "SYSTEMS LEAD",
    image: lucyImg,
    bio: [
      "Lucy has spent her career working at the intersection of people and systems, understanding what gets in the way of people living well and focusing on how to change it.",
      "She began in social housing, spending over a decade working with individuals, families and communities to improve housing, opportunity and aspiration. Her work during this period centred on domestic abuse, community investment and community development, rooting her practice in deep relationship-building and a grounded understanding of complex lives.",
      "Moving into the charitable sector, Lucy shifted her focus to health inequalities and systems change. She combines a data-driven approach (using evidence and insight to identify barriers and structural issues) with hands-on service design, translating analysis into practical, meaningful change. At the heart of Lucy's work is a belief in a kinder, gentler way of doing things."
    ]
  },
  {
    id: "fay-laidler",
    name: "Fay Laidler",
    role: "LIVED EXPERIENCE & QUALITY LEAD",
    image: fayImg,
    bio: [
      "Fay is the Lived Experience and Quality Lead at GHUK, joining the organisation in May 2026. She completed her PhD at the University of Glasgow in 2025, focusing on the role of women experiencing harm in gambling policy, and brings a background in education and coaching.",
      "Fay combines professional expertise with lived experience, having been affected by gambling harm both as an impacted other and through her own experiences. She has contributed to national research and policy work, including the Gambling Commission's Lived Experience Advisory Panel and an NIHR-funded project at the University of Lincoln. Fay is passionate about embedding lived experience in policy and practice."
    ]
  }
];

export default function TrusteesAndTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-100">
      <div className="section-padding-x">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-left mb-12">
            <div className="w-12 h-[3px] bg-[#1B80C4] mb-5" />
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-800 tracking-tight mb-4">
              Our team
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
              GHUK was founded in November 2020 by individuals with lived experience of gambling harm.
              The current team is below.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="border border-gray-200 rounded-2xl p-5 flex flex-col justify-between bg-white hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  {/* Photo or Initials Avatar */}
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-sky-50 flex items-center justify-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-[#1B80C4] text-5xl font-bold tracking-tight">
                        {member.initials}
                      </div>
                    )}
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-lg font-bold text-slate-800">{member.name}</h3>
                  <span className="text-[11px] font-bold text-[#1B80C4] tracking-wider uppercase block mb-3">
                    {member.role}
                  </span>

                  {/* Biography Preview (Truncated) */}
                  <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                    <p className="line-clamp-6">
                      {member.bio[0]}
                    </p>
                  </div>
                </div>

                {/* See More Link */}
                <div className="pt-4 mt-4 border-t border-gray-100 flex justify-between items-center">
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="text-xs font-bold text-[#1B80C4] hover:underline"
                  >
                    Read full bio &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal View */}
      {selectedMember && (
        <div 
          onClick={() => setSelectedMember(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative p-6 sm:p-8 md:p-10 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1.5 rounded-full hover:bg-slate-100"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-sky-50 flex items-center justify-center shrink-0 border border-slate-100">
                {selectedMember.image ? (
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-[#1B80C4] text-3xl font-bold">
                    {selectedMember.initials}
                  </div>
                )}
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-slate-800">{selectedMember.name}</h3>
                <span className="text-xs font-bold text-[#1B80C4] tracking-wider uppercase">
                  {selectedMember.role}
                </span>
              </div>
            </div>

            {/* Bio Body */}
            <div className="text-slate-600 text-sm md:text-base space-y-4 leading-relaxed border-t border-gray-100 pt-6">
              {selectedMember.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Declared Interests (Conditional) */}
            {selectedMember.declaredInterests && (
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-slate-500 leading-relaxed">
                  <span className="font-semibold text-slate-700">Declared interests:</span>{" "}
                  {selectedMember.declaredInterests}
                </p>
              </div>
            )}

            {/* Email (Conditional) */}
            {selectedMember.email && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs font-semibold text-slate-700 block mb-1">Contact:</span>
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="text-[#1B80C4] text-sm hover:underline italic"
                >
                  {selectedMember.email}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}