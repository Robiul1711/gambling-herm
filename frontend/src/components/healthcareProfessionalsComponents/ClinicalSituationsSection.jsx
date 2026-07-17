import React from "react";

const ClinicalSituationsSection = () => {
  const situations = [
    {
      id: 1,
      title: "Suididality presentation",
      content: (
        <>
          Gambling carries one of the highest suicide rates of any addiction.
          Sweden's national study found people aged 20–49 with gambling disorder
          were 19.3 times more likely to die by suicide than the general
          population. Ask about gambling explicitly in any suicide-risk
          assessment, especially after recent financial loss.
        </>
      ),
    },
    {
      id: 2,
      title: "Acute financial stress / fraud / theft",
      content: (
        <>
          People presenting with relationship breakdown, debt crisis,
          criminal-justice contact for acquisitive offending, or sudden housing
          loss have elevated prior probability of gambling harm. Asking is
          appropriate and useful.
        </>
      ),
    },
    {
      id: 3,
      title: "Affected-other presentation",
      content: (
        <>
          A patient presenting with new anxiety, sleep disturbance, depression
          or family-conflict stress related to a partner, parent, sibling or
          child may be an affected other. They are entitled to specialist
          support in their own right, today, without waiting for the person who
          gambles to seek help.
        </>
      ),
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto section-padding-y bg-white text-gray-800">
      {/* Top Accent Blue Ribbon */}
      <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

      {/* Component Title */}
      <h2 className="text-3xl md:text-[36px] font-bold text-gray-900 tracking-tight mb-8">
        Three clinical situations to watch
      </h2>

      {/* Row Containers */}
      <div className="flex flex-col gap-5">
        {situations.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-start border border-gray-300 p-6 md:p-8 gap-4 md:gap-6 bg-white shadow-sm"
          >
            {/* Left Column: Number Badge */}
            <div className="flex-shrink-0">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-[#0a6b94] flex items-center justify-center text-white font-bold text-sm md:text-base">
                {item.id}
              </div>
            </div>

            {/* Right Column: Title and Content Block */}
            <div className="flex-1">
              <h3 className="text-lg md:text-[19px] font-bold text-gray-800 mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-800  font-normal">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicalSituationsSection;
