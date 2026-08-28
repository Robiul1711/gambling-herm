import React from "react";

const RecoverySection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Top line */}
      <div className="w-12 h-[3px] bg-[#0092D0] mb-5" />

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
        Recovery is real
      </h2>

      {/* Intro */}
      <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
        People do recover, and the right support makes that more likely. It
        rarely happens overnight, and it rarely looks like a film. It usually
        begins with one small step, a phone call, a block put in place, a friend
        told, and builds from there, with patience, over months. Relapse doesn't
        mean you've failed. Support is there whenever you need it.
      </p>
    </div>
  );
};

export default RecoverySection;
