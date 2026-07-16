import React from'react';

const CYPPolicy = () => {
 const requests = [
 {
 id: 1,
 title:"Regulate gamblified products that fall outside the Gambling Act's current scope",
 content:"Loot boxes, in-game purchases with random rewards, casino-mechanic mobile games and social-casino apps reach children at scale and demonstrably function as gambling. They should be regulated as gambling, with age verification and harm-design constraints.",
 },
 {
 id: 2,
 title:"Restrict marketing in environments where children are present",
 content:"A statutory ban on gambling sponsorship in sport and broadcast. Stronger enforcement of CAP Code Rule 16.3.12, which prohibits non-broadcast gambling advertising with strong appeal to children. Ban on child-themed slot games (e.g. \"Jack and the Beanstalk\", \"Cinderella Ball\").",
 },
 {
 id: 3,
 title:"Ringfence CYP funding within the statutory levy",
 content:"Explicit allocation for (a) prevention and education in schools, (b) services for children of people experiencing gambling harm, and (c) the lived-experience-led CYP-specific support sector. The current allocation does not reflect the scale of CYP harm.",
 },
 {
 id: 4,
 title:"Add gambling to routine safeguarding",
 content:"Statutory recognition of children of people experiencing gambling harm as a distinct safeguarding population. Inclusion in the ACEs framework. Integration into local-authority children's services frameworks and the NHS routine safeguarding curriculum.",
 },

 ];

 return (
 <div className="w-full bg-[#222120] text-white py-16 px-4">
 <div className="max-w-5xl mx-auto">
 
 {/* Top Accent Blue Ribbon */}
 <div className="flex justify-center mb-4">
 <div className="w-12 h-[3px] bg-[#0082c3]"></div>
 </div>
 
 {/* Component Title & Subtitle */}
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-[38px] font-bold text-white tracking-tight mb-4">
 What we ask for in CYP policy
 </h2>
 <p className="text-sm md:text-[15px] text-gray-400 font-normal max-w-2xl mx-auto">
 Four specific changes that would reshape the UK CYP gambling-harm response.

 </p>
 </div>

 {/* Row Items Stack Container */}
 <div className="flex flex-col gap-5">
 {requests.map((item) => (
 <div
 key={item.id}
 className="flex flex-col sm:flex-row items-start bg-white p-6 md:p-8 gap-4 md:gap-6 shadow-md transition-transform duration-200 hover:-translate-y-[1px]"
 >
 {/* Left Side: Circular Blue Number Badge */}
 <div className="flex-shrink-0">
 <div className="w-9 h-9 md:w-10 md:h-10 bg-[#0a6b94] flex items-center justify-center text-white font-bold text-sm md:text-base">
 {item.id}
 </div>
 </div>

 {/* Right Side: Title and Dark Fluid Prose Text */}
 <div className="flex-1">
 <h3 className="text-base md:text-[17px] font-bold text-gray-900 mb-2.5 leading-snug">
 {item.title}
 </h3>
 <p className="text-[13.5px] md:text-[14.5px] text-gray-500 leading-relaxed font-normal">
 {item.content}
 </p>
 </div>
 </div>
 ))}
 </div>

 </div>
 </div>
 );
};

export default CYPPolicy;