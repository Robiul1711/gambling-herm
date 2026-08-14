import React from "react";

const items = [
  {
    title: "No-one will judge you.",
    description:
      "The people on the other end of these phone lines have heard everything. They don't think you're weak, stupid, or 'should have known better'. They're trained to help.",
  },
  {
    title: "No-one will tell your family.",
    description:
      "All these services are confidential. Talking to a helpline does not get reported to your bank, your employer, or anyone in your life. You're in control of who knows.",
  },
  {
    title: "No-one will charge you.",
    description:
      "Every route on this page is free at the point of use. The helpline, GAMSTOP, NHS clinics, Gamblers Anonymous, Gordon Moody, all free.",
  },
  {
    title: "No-one will push you into one box.",
    description:
      "You'll be helped to find what fits your situation. Not everyone needs the same thing, and being 'ready to change' is not a precondition for getting support.",
  },
];

const ReachOutSection = () => {
  return (
    <section className="bg-[#262323] py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-[#00AEEF]" />
          <span className="text-[#00AEEF] text-sm font-medium">Routes</span>
        </div>

        {/* Heading */}
        <h2 className="text-white text-2xl  sm:text-[30px] md:text-[48px] font-bold leading-tight">
          When you reach out, here's what won't happen.
        </h2>

        {/* Description */}
        <p className="mt-8 text-[#D3D3D3] text-lg leading-9 max-w-5xl">
          Lots of people aren't. Harm exists on a spectrum, and many people
          who'd benefit from support don't think of themselves as having a
          "problem". A short, private set of questions can help you reflect on
          where you are.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14 mt-14">
          {items.map((item, index) => (
            <div key={index}>
              <h3 className="text-white text-[28px] font-bold leading-tight mb-5">
                {item.title}
              </h3>

              <p className="text-[#D0D0D0] text-lg leading-9">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReachOutSection;
