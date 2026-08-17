import React from 'react';

const GamblingMeccSection = () => {
  const features = [
    {
      id: "scale",
      label: "Scale",
      content: (
        <>
          Approximately <span className="font-bold text-gray-800">1 in 5 UK</span> adults experienced gambling-related harm in the past year when both individuals who gamble and affected others are included. The prevalence-paradox means most of the population-level harm sits in the moderate-risk band where targeted treatment alone cannot address it.
        </>
      ),
    },
    {
      id: "comorbidity",
      label: "Comorbidity",
      content: (
        <>
          Gambling harm clusters with depression, anxiety, sleep disorder, alcohol use, financial stress and suicidality. A patient presenting with any of those has elevated prior probability of unrecognised gambling harm. Asking surfaces what is otherwise missed.
        </>
      ),
    },
    {
      id: "stigma",
      label: "Stigma",
      content: (
        <>
          Self-disclosure rates are very low. Most people experiencing gambling harm do not raise it spontaneously. A trained clinician asking directly (once) can be the moment that opens treatment.
        </>
      ),
    },
    {
      id: "coding-gap",
      label: "Coding gap",
      content: (
        <>
          Gambling is not routinely captured in NHS coding, contributing to systematic under-recognition of gambling-related morbidity and mortality. The MECC contact is, in practice, often the only point at which the question gets asked at all.
        </>
      ),
    },
  ];

  return (
    <div className="w-full max-w-5xl px-4 sm:px-6 mx-auto">
      {/* Top Heading Section */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-[38px] font-bold text-gray-900 tracking-tight mb-4">
          Why gambling fits MECC
        </h2>
        <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed">
          Three features of gambling harm make it especially well-suited to opportunistic, contact-based intervention:
        </p>
      </div>

      {/* Feature Rows Container */}
      <div className="flex flex-col border-t border-gray-100">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col md:flex-row pt-6 pb-8 border-b border-gray-200/80 gap-2 md:gap-12"
          >
            {/* Left Column: Label */}
            <div className="w-full md:w-1/4 lg:w-1/5 shrink-0">
              <span className="text-[#0082c3] font-medium text-[15px] md:text-16 hover:underline cursor-pointer block md:inline">
                {feature.label}
              </span>
            </div>

            {/* Right Column: Description Text */}
            <div className="w-full md:w-3/4 lg:w-4/5">
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed font-normal">
                {feature.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamblingMeccSection;