import React from 'react';
import { MessageSquare, Headphones, BarChart3 } from 'lucide-react';

export default function OurMission() {
  const missions = [
    {
      icon: <MessageSquare className="w-5 h-5 text-Primary" />,
      title: "Support people",
      description: "Connect anyone affected by gambling themselves or someone they love with accurate information and routes to help, free of industry framing."
    },
    {
      icon: <Headphones className="w-5 h-5 text-Primary" />,
      title: "Change minds",
      description: "Shift the public conversation from \"responsible gambling\" and individual blame toward a public-health understanding of product, exposure and policy."
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-Primary" />,
      title: "Change policy",
      description: "Push for the regulatory and treatment system the evidence actually supports — independent of gambling-industry funding and influence.",
      link: { text: "Our Positions", url: "#positions" }
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="section-padding-x text-center">
        
        {/* 1. HEADER SECTION */}
        <div className="flex flex-col items-center space-y-3 mb-4">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-Primary" />
            <span className="text-Primary text-xs sm:text-sm font-bold uppercase tracking-wider">
              What We Believe
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Mission
          </h2>
        </div>

        {/* Sub-header context line */}
        <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed">
          Three things, in this order. Each shaped by the public-health evidence on 
          gambling harm, not by industry framings of it.
        </p>

        {/* 2. THREE-COLUMN MISSION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {missions.map((item, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between bg-white hover:shadow-md transition-shadow duration-200"
            >
              <div>
                {/* Micro Icon Badge Box */}
                <div className="w-9 h-9 bg-[#E0F2FE]/60 rounded-lg flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mb-4">
                  {item.title}
                </h3>

                {/* Card Main Body Copy */}
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Conditional Position Anchor Link (Renders on final card element) */}
              {item.link && (
                <div className="pt-6 mt-6 border-t border-gray-50">
                  <a 
                    href={item.link.url}
                    className="inline-flex items-center text-sm font-bold text-gray-900 hover:text-Primary transition-colors group underline underline-offset-4"
                  >
                    {item.link.text} 
                    <span className="inline-block transform translate-x-1 group-hover:translate-x-2 transition-transform duration-150 ml-1" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}