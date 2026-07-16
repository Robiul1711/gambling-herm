import React from"react";
import { Link } from"react-router-dom";

const UrgentHelpBereavement = () => {
 return (
 <div className="w-full">
 {/* 1. Bereaved by Gambling Section (Dark Background) */}
 <div className="bg-[#1C1A1A] text-white py-14 md:py-20 px-4">
 <div className="max-w-3xl mx-auto flex flex-col items-start text-left">
 {/* Blue accent indicator */}
 <div className="w-12 h-1 bg-Primary mb-6" />
 
 <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
 If you have been bereaved by gambling
 </h2>
 
 <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
 <strong>Gambling with Lives</strong> is the UK charity for families bereaved by gambling-related suicide. They provide specialist bereavement support, group meetings, and a community of people who understand.{" "}
 <a 
 href="https://www.gamblingwithlives.org" 
 target="_blank" 
 rel="noopener noreferrer" 
 className="text-Primary hover:underline font-semibold"
 >
 gamblingwithlives.org
 </a>.
 </p>
 
 <p className="text-gray-400 text-sm md:text-base italic leading-relaxed">
 Your loss matters, and you do not have to carry it alone.
 </p>
 </div>
 </div>

 {/* 2. Navigation Footer Section (White Background) */}
 <div className="bg-white py-14 md:py-20 px-4 text-center">
 <div className="max-w-2xl mx-auto flex flex-col items-center">
 <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
 When you're ready, more information and support is on our{" "}
 <Link to="/get-help" className="underline font-semibold text-gray-800 hover:text-Primary">
 Get Help
 </Link>
 ,{" "}
 <Link to="/get-help/treatment" className="underline font-semibold text-gray-800 hover:text-Primary">
 Find Treatment
 </Link>{" "}
 and{" "}
 <Link to="/get-help/family-friends" className="underline font-semibold text-gray-800 hover:text-Primary">
 Family &amp; Friends
 </Link>{" "}
 pages.
 </p>
 
 <Link 
 to="/" 
 className="bg-[#1C1A1A] hover:bg-[#2D2D2D] text-white font-bold py-3.5 px-8 shadow-md transition-colors text-sm md:text-base"
 >
 Back to the home page
 </Link>
 </div>
 </div>
 </div>
 );
};

export default UrgentHelpBereavement;
