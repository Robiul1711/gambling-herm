import React from'react';
import { Link } from'react-router-dom';

const ReferralServicesSection = () => {
 return (
 <div className="w-full max-w-5xl px-4 sm:px-6 mx-auto bg-white text-gray-800">
 
 {/* Top Accent Line */}
 <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>
 
 {/* Heading Section */}
 <div className="mb-10">
 <h2 className="text-3xl md:text-[36px] font-bold text-gray-900 tracking-tight mb-4">
 Where to refer
 </h2>
 <p className="text-[15px] md:text-16 text-gray-600 leading-relaxed">
 UK gambling-harm services have expanded substantially since 2019. The pathways below are free at the point of use and accept self-referral.
 </p>
 </div>

 {/* Two Column Grid Container */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
 
 {/* Column 1: For the patient who gambles */}
 <div className="border border-gray-300 p-6 md:p-8 bg-white shadow-sm flex flex-col">
 <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2">
 For the patient who gambles
 </h3>
 
 <div className="space-y-6">
 {/* Item 1 */}
 <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed pb-6 border-b border-dashed border-gray-200">
 <span className="font-bold text-gray-800">NHS specialist gambling clinics,</span> the network has expanded to cover most English regions, plus services in Scotland and Wales. Self-referral or via primary care.{" "}
 <Link to="/get-help/treatment" className="text-[#0082c3] underline font-medium hover:text-[#006699]">
 Find your nearest.
 </Link>
 </p>

 {/* Item 2 */}
 <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed pb-6 border-b border-dashed border-gray-200">
 <span className="font-bold text-gray-800">National Gambling Helpline (GamCare),</span> 0808 8020 133, 24/7,{" "}
 <span className="text-gray-500">also offers structured treatment.</span>
 </p>

 {/* Item 3 */}
 <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed pb-6 border-b border-dashed border-gray-200">
 <span className="font-bold text-gray-800">Gordon Moody,</span> residential and intensive online treatment, free for those with severe gambling harm.
 </p>

 {/* Item 4 */}
 <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed pb-6 border-b border-dashed border-gray-200">
 <span className="font-bold text-gray-800">NHS Talking Therapies (IAPT),</span> for comorbid anxiety/depression. Self-referral.
 </p>

 {/* Item 5 */}
 <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed">
 <span className="font-bold text-gray-800">CBT</span> is the best-evidenced talking therapy for gambling harm.
 </p>
 </div>
 </div>

 {/* Column 2: For the affected other */}
 <div className="border border-gray-300 p-6 md:p-8 bg-white shadow-sm flex flex-col">
 <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2">
 For the affected other
 </h3>
 
 <div className="space-y-6">
 {/* Item 1 */}
 <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed pb-6 border-b border-dashed border-gray-200">
 <span className="font-bold text-gray-800">GamCare affected-others service,</span> one-to-one counselling, no waiting list.
 </p>

 {/* Item 2 */}
 <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed pb-6 border-b border-dashed border-gray-200">
 <span className="font-bold text-gray-800">Gam-Anon,</span> peer support for family and friends.
 </p>

 {/* Item 3 */}
 <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed pb-6 border-b border-dashed border-gray-200">
 <span className="font-bold text-gray-800">NHS Talking Therapies,</span> for the affected-other's own anxiety/depression (self-refer).
 </p>

 {/* Item 4 */}
 <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed pb-6 border-b border-dashed border-gray-200">
 <span className="font-bold text-gray-800">Gambling with Lives,</span> specialist bereavement support for families bereaved by gambling-related suicide.
 </p>

 {/* Item 5 / Footer Link */}
 <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed">
 See{" "}
 <Link to="/get-help/family-friends" className="text-[#0082c3] underline font-medium hover:text-[#006699]">
 our family-and-friends page
 </Link>{" "}
 for the full pathway.
 </p>
 </div>
 </div>

 </div>
 </div>
 );
};

export default ReferralServicesSection;