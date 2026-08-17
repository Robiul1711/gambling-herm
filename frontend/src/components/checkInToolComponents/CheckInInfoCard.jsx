import React from "react";

const CheckInInfoCard = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#edf7fd] border-l-4 border-[#0093D0] rounded-r-xl p-7 sm:p-9 md:p-10 shadow-xs">
          {/* Heading */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[#0093D0]"></span>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0093D0]">
              About this check-in
            </h3>
          </div>

          {/* Content */}
          <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Our short check-ins draw on the{" "}
              <strong className="font-semibold text-gray-900">
                GHSI Holistic Framework Of Harm
              </strong>{" "}
              (NatCen, 2025), the newer UK measurement framework that captures
              gambling-related harm across multiple domains (financial,
              relationships, mental health, physical health, work/study,
              criminal-legal) and explicitly recognises that harm to affected
              others is the same scale of harm as harm to the person who
              gambles.
            </p>

            <p>
              This is a deliberate move on from the older PGSI-only screen,
              which has been the dominant UK measure for two decades but was
              designed only for the person who gambles, and uses a threshold
              (PGSI 8+) that the public-health evidence does not support as the
              right line to draw. See{" "}
              <a
                href="/understanding-gambling-harms#note-on-language"
                className="text-gray-900 underline hover:text-[#0093D0] font-medium transition-colors"
              >
                our note on language and measurement
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckInInfoCard;
