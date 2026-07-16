import React from'react';

export default function PositionStatement() {
 return (
 <section className="w-full max-w-5xl mx-auto section-padding-y">
 <div className="relative bg-[#EBF7FC] dark:bg-zinc-900/40 border-y border-r border-dashed border-[#0091CD] pl-6 pr-6 py-8 sm:p-10 md:p-12 overflow-hidden">
 
 {/* Thick Solid Left Accent Border */}
 <div className="absolute left-0 top-0 bottom-0 w-[4px] sm:w-[5px] bg-[#0091CD]" />

 {/* Content Wrapper */}
 <div className="flex flex-col gap-5 max-w-4xl">
 
 {/* Section Header */}
 <h4 className="text-[#1A739E] font-medium text-base tracking-wide">
 Our position
 </h4>

 {/* Main Statement Paragraph */}
 <p className="text-[#333333] dark:text-gray-200 text-base sm:text-[17px] leading-relaxed">
 <span className="font-bold text-gray-900 dark:text-white">
 Children of someone with gambling harm are a distinct, statutorily-invisible affected-others population.
 </span>{" "}
 <span className="text-gray-500 dark:text-gray-400">
 They are the larger CYP group affected, but receive a fraction of the attention given to children-as-gamblers in current policy debate. That is the wrong shape for the actual burden.
 </span>
 </p>

 {/* Secondary Supporting Paragraph */}
 <p className="text-gray-500 dark:text-gray-400 text-base sm:text-[17px] leading-relaxed">
 The harms reported (lost sleep, household tension, money missing for food) align directly with recognised{" "}
 <span className="font-bold text-gray-900 dark:text-white">
 Adverse Childhood Experiences (ACEs)
 </span>{" "}
 and carry long-term health and developmental consequences.
 </p>

 </div>
 </div>
 </section>
 );
}