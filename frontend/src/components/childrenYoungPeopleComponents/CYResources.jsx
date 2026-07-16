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
 <section className="w-full max-w-5xl mx-auto py-12 bg-white text-gray-800">
 {/* Blue Accent */}
 <div className="w-8 h-[3px] bg-[#0082c3] mb-4"></div>

 {/* Title */}
 <h2 className="text-[36px] font-bold text-[#222] mb-10">
 Resources
 </h2>

 {/* Cards */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {/* Left Card */}
 <div className="border border-[#d9d9d9] p-6 md:p-8 bg-white">
 <h3 className="text-[22px] font-bold text-[#222] mb-4">
 For children themselves
 </h3>

 <div className="border-t border-dashed border-[#cfcfcf]">
 {childrenResources.map((item) => (
 <div
 key={item.id}
 className="py-8 text-[15px] text-[#333] border-b border-dashed border-[#cfcfcf] leading-7"
 >
 {item.text}
 </div>
 ))}
 </div>
 </div>

 {/* Right Card */}
 <div className="border border-[#d9d9d9] p-6 md:p-8 bg-white">
 <h3 className="text-[22px] font-bold text-[#222] mb-4">
 For adults around them
 </h3>

 <div className="border-t border-dashed border-[#cfcfcf]">
 {adultResources.map((item) => (
 <div
 key={item.id}
 className="py-8 text-[15px] text-[#333] border-b border-dashed border-[#cfcfcf] leading-7"
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