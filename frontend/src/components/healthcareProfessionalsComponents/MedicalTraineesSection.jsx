import React from 'react';

const MedicalTraineesSection = () => {
  const traineeTracks = [
    {
      id: 1,
      role: "Public Health Specialty Trainees",
      text: "gambling fits naturally within the FPH curriculum (public health risk factors, CDOH, behavioural epidemiology). We can support FPH dissertation topics and OSPHE/HCS preparation.",
    },
    {
      id: 2,
      role: "Psychiatry trainees",
      text: "the Royal College of Psychiatrists' gambling sub-group runs CPD and curriculum-linked sessions. We collaborate on training delivery.",
    },
    {
      id: 3,
      role: "GP trainees",
      text: "MECC for gambling, financial harm safeguarding, and onward referral pathways. Quick-reference card available on request.",
    },
    {
      id: 4,
      role: "Medical students",
      text: "intercalated BSc projects, electives and SSCs welcomed, particularly in clinical epidemiology, health economics, and CDOH.",
    },
  ];

  return (
    <div className="w-full max-w-5xl px-4 sm:px-6 mx-auto py-12 md:py-16 bg-white text-gray-900">
      {/* Centered Accent Line */}
      <div className="flex justify-center mb-4">
        <div className="w-12 h-[3px] bg-[#0082c3]"></div>
      </div>
      
      {/* Centered Main Headers */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
          For medical students & specialty trainees
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mx-auto leading-relaxed font-normal">
          Gambling is largely absent from UK undergraduate medical curricula. We work with medical schools, foundation programmes and specialty curricula to change this.
        </p>
      </div>

      {/* Trainee Rows Container */}
      <div className="flex flex-col mb-10">
        {traineeTracks.map((track) => (
          <div
            key={track.id}
            className="py-4 border-b border-dashed border-gray-200 last:border-none"
          >
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              <strong className="font-bold text-gray-900 mr-1.5">{track.role}:</strong>
              {track.text}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Contact Callout */}
      <div className="pt-4 border-t border-gray-100">
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
          Contact{" "}
          <a 
            href="mailto:hello@gamblingharm.com" 
            className="text-gray-900 font-semibold underline decoration-gray-400 hover:text-[#0082c3] hover:decoration-[#0082c3] transition-colors"
          >
            hello@gamblingharm.com
          </a>{" "}
          for teaching slides, OSCE stations, screening checklists, and referral-pathway diagrams.
        </p>
      </div>
    </div>
  );
};

export default MedicalTraineesSection;