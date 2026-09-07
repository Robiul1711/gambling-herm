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
      title: "Person harmed by someone else’s gambling presentation",
      content: (
        <>
          A patient presenting with new anxiety, sleep disturbance, depression
          or family-conflict stress related to a partner, parent, sibling or
          child may be harmed by someone else's gambling. They are entitled to specialist
          support in their own right, today, without waiting for the person who
          gambles to seek help.
        </>
      ),
    },
  ];

  return (
    <div className="w-full max-w-5xl px-4 sm:px-6 mx-auto py-12 md:py-16 bg-white text-gray-900">
      {/* Top Accent Blue Ribbon */}
      <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

      {/* Component Title */}
      <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
        Three clinical situations to watch
      </h2>

      {/* Row Containers */}
      <div className="flex flex-col gap-4">
        {situations.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-start border border-gray-200/90  p-6 md:p-8 gap-4 md:gap-6 bg-white shadow-xs"
          >
            {/* Left Column: Number Badge */}
            <div className="flex-shrink-0">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-[#0a6b94] rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base shadow-xs">
                {item.id}
              </div>
            </div>

            {/* Right Column: Title and Content Block */}
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-snug tracking-tight">
                {item.title}
              </h3>
              <div className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicalSituationsSection;
