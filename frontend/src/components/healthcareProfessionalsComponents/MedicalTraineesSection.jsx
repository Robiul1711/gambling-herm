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
    <div className="w-full max-w-4xl mx-auto pb-4 md:pb-16 bg-white text-gray-800">
      
      {/* Centered Accent Line */}
      <div className="flex justify-center mb-4">
        <div className="w-12 h-[3px] bg-[#0082c3]"></div>
      </div>
      
      {/* Centered Main Headers */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-[36px] font-bold text-gray-950 tracking-tight mb-4">
          For medical students & specialty trainees
        </h2>
        <p className="text-[15px] md:text-16 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Gambling is largely absent from UK undergraduate medical curricula. We work with medical schools, foundation programmes and specialty curricula to change this.
        </p>
      </div>

      {/* Trainee Rows Container */}
      <div className="flex flex-col mb-10">
        {traineeTracks.map((track) => (
          <div
            key={track.id}
            className="py-5 border-b border-dashed border-gray-200/80 last:border-none"
          >
            <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed font-normal">
              <span className="font-bold text-gray-800">{track.role}:</span> {track.text}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Contact Callout */}
      <div className="pt-4 border-t border-gray-100">
        <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed">
          Contact{" "}
          <a 
            href="mailto:hello@gamblingharm.com" 
            className="text-gray-900 font-medium underline decoration-gray-400 hover:text-[#0082c3] hover:decoration-[#0082c3] transition-colors"
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