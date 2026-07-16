import React from"react";

const CheckInInfoCard = () => {
 return (
 <section className="py-12 md:py-20">
 <div className="max-w-5xl mx-auto">
 <div className="bg-[#eaf6fb] border-l-4 border-[#0097d7] px-6 py-8 md:px-10 md:py-10">
 {/* Heading */}
 <h3 className="text-[#008bc8] text-lg font-medium">
 About this check-in
 </h3>

 {/* Content */}
 <div className="mt-6 space-y-8 text-[#6c7184] text-base md:text-[18px] leading-9">
 <p>
 Our short check-ins draw on the{" "}
 <span className="font-semibold text-[#333]">
 GHSI Holistic Framework Of Harm
 </span>{" "}
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
 href="#"
 className="text-[#333] underline hover:text-[#008bc8] transition-colors"
 >
 our note on language and measurement.
 </a>
 </p>
 </div>
 </div>
 </div>
 </section>
 );
};

export default CheckInInfoCard;