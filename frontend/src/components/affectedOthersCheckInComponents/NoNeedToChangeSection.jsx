import React from "react";

const NoNeedToChangeSection = () => {
  return (
    <section className="w-full bg-[#181818] text-white py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Accent Bar */}
        <div className="w-12 h-[3px] bg-[#0082c3] mb-6" />

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          You do not need them to change first.
        </h2>

        {/* Main Text */}
        <div className="space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
          <p>
            You do not need the person you're worried about to change, to admit
            anything, or to accept help, before you get support for yourself. 
            Support is yours by right, today, whatever they decide to do.
          </p>

          <p>
            Call the{" "}
            <strong className="font-bold text-white">
              National Gambling Helpline
            </strong>{" "}
            on{" "}
            <a
              href="tel:08088020133"
              className="font-bold text-white hover:text-[#38bdf8] underline transition-colors"
            >
              0808 8020 133
            </a>
            . They support you directly, not only the person who gambles, and you
            don't need a diagnosis or a crisis to call.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NoNeedToChangeSection;
