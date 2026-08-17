import React from"react";

const CYResources = () => {
 const childrenResources = [
 {
 id: 1,
 text: (
 <>
 Childline, <span className="text-[#7a7a99]">0800 1111</span>
 </>
 ),
 },
 {
 id: 2,
 text: (
 <>
 Big Deal (GamCare),{" "}
 <span className="text-[#7a7a99]">bigdeal.org.uk</span>
 </>
 ),
 },
 {
 id: 3,
 text: (
 <>
 Papyrus HOPELINE247{" "}
 <span className="text-[#7a7a99]">(under-35s)</span>{" "}
 <span className="text-[#7a7a99]">0800 068 4141</span>
 </>
 ),
 },
 {
 id: 4,
 text: (
 <>
 The Mix <span className="text-[#7a7a99]">(under-25s)</span>{" "}
 <span className="text-[#7a7a99]">0808 808 4994</span>
 </>
 ),
 },
 ];

 const adultResources = [
 {
 id: 1,
 text: (
 <>
 NSPCC, <span className="text-[#7a7a99]">0808 800 5000</span>
 </>
 ),
 },
 {
 id: 2,
 text: (
 <>
 YoungMinds Parents Helpline,{" "}
 <span className="text-[#7a7a99]">0808 802 5544</span>
 </>
 ),
 },
 {
 id: 3,
 text: (
 <>
 YGAM{" "}
 <span className="text-[#7a7a99]">
 (Young Gamers &amp; Gamblers Education Trust)
 </span>
 , <span className="underline">ygam.org</span>
 </>
 ),
 },
 {
 id: 4,
 text: (
 <>
 NHS gambling clinics,{" "}
 <span className="text-[#7a7a99]">
 accept under-18 referrals;
 </span>{" "}
 see <span className="underline">Find treatment</span>
 </>
 ),
 },
 {
 id: 5,
 text: (
 <>
 Gambling with Lives{" "}
 <span className="text-[#7a7a99]">(bereavement support)</span>
 <br />
 <span className="underline">gamblingwithlives.org</span>
 </>
 ),
 },
 ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 bg-white text-gray-900">
      {/* Blue Accent */}
      <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
        Resources
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="border border-gray-200/90  p-6 md:p-8 bg-white shadow-xs">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">
            For children themselves
          </h3>

          <div className="border-t border-dashed border-gray-200">
            {childrenResources.map((item) => (
              <div
                key={item.id}
                className="py-3.5 text-sm sm:text-base text-gray-700 border-b border-dashed border-gray-200 leading-relaxed font-normal last:border-none"
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div className="border border-gray-200/90  p-6 md:p-8 bg-white shadow-xs">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">
            For adults around them
          </h3>

          <div className="border-t border-dashed border-gray-200">
            {adultResources.map((item) => (
              <div
                key={item.id}
                className="py-3.5 text-sm sm:text-base text-gray-700 border-b border-dashed border-gray-200 leading-relaxed font-normal last:border-none"
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CYResources;