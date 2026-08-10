import React from "react";

const QuestionsWantedSection = () => {
  const questions = [
    {
      title: "The coding gap.",
      content:
        "Gambling is barely recorded in NHS data: 30 years of linked Welsh records surfaced only 92 gambling-coded suicide decedents (Jones et al., 2025, BJPsych Open; a GHUK author is a co-author). What would routine coding (ICD-10 F63.0, Z72.6) unlock for surveillance, and how is it best implemented?",
    },
    {
      title: "Health economics.",
      content:
        "UK fiscal costings capture around a tenth of the full social cost on the Victorian method. What would a full UK social-cost study look like, and how should health-utility and cost evidence be combined without double-counting?",
    },
    {
      title: "People harmed by someone else's gambling.",
      content:
        "The direct disability-weight evidence rests on very few studies. UK validation of the GHS-AO instruments, and better measurement of household and legacy harm, are open fields.",
    },
    {
      title: "Suicide surveillance.",
      content:
        "England's 117 to 496 excess-suicide range exists because the counting has never been set up. What would real-time surveillance require?",
    },
    {
      title: "Emerging signals.",
      content:
        "Our 2026 YouGov survey on gambling and driving behaviour found associations that need independent replication. We would rather be tested than cited.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white section-padding-x">
      <div className="max-w-4xl mx-auto">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-gray-900 tracking-tight mb-8">
          The questions we most want answered
        </h2>

        {/* Questions List with dashed borders */}
        <div className="flex flex-col">
          {questions.map((item, index) => (
            <div
              key={index}
              className={`py-5 text-[14.5px] md:text-[15px] leading-relaxed text-gray-700 ${
                index !== questions.length - 1
                  ? "border-b border-dashed border-gray-200"
                  : ""
              }`}
            >
              <span className="font-bold text-gray-900 mr-1.5">
                {item.title}
              </span>
              <span>{item.content}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionsWantedSection;
