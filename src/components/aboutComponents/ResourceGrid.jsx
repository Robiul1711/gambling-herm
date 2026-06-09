import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock data based on the image
const CARDS_DATA = [
  {
    id: 1,
    type: 'Briefing',
    date: '02 May 2026',
    title: "The PGSI-8 Threshold And Why The UK's Headline Gambling-Harm Figure Understates Harm",
    description: 'A short technical note on how the conventional PGSI cut-off has produced a thirty-year underestimate of the UK gambling-harm population, and what fuller measurement looks like.',
  },
  {
    id: 2,
    type: 'Research',
    date: '28 April 2026',
    title: 'Affected Others: The 6–10× Multiplier And Why It Still Understates The Problem',
    description: 'A working paper on the methodology behind the "six to ten affected others per person who gambles" figure and the structural reasons we believe it is conservative, particularly for children and bereaved families.',
  },
  {
    id: 3,
    type: 'Research',
    date: '28 April 2026',
    title: 'Affected Others: The 6–10× Multiplier And Why It Still Understates The Problem',
    description: 'A working paper on the methodology behind the "six to ten affected others per person who gambles" figure and the structural reasons we believe it is conservative, particularly for children and bereaved families.',
  },
  {
    id: 4,
    type: 'Briefing',
    date: '02 May 2026',
    title: "The PGSI-8 Threshold And Why The UK's Headline Gambling-Harm Figure Understates Harm",
    description: 'A short technical note on how the conventional PGSI cut-off has produced a thirty-year underestimate of the UK gambling-harm population, and what fuller measurement looks like.',
  },
  {
    id: 5,
    type: 'Briefing',
    date: '02 May 2026',
    title: "The PGSI-8 Threshold And Why The UK's Headline Gambling-Harm Figure Understates Harm",
    description: 'A short technical note on how the conventional PGSI cut-off has produced a thirty-year underestimate of the UK gambling-harm population, and what fuller measurement looks like.',
  },
  {
    id: 6,
    type: 'Research',
    date: '28 April 2026',
    title: 'Affected Others: The 6–10× Multiplier And Why It Still Understates The Problem',
    description: 'A working paper on the methodology behind the "six to ten affected others per person who gambles" figure and the structural reasons we believe it is conservative, particularly for children and bereaved families.',
  },
];

const FILTERS = ['All', 'Briefings', 'Research', 'Consultation responses', 'Press', 'Blog'];

export default function ResourceGrid() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Normalize mapping for filtering logic
  const filteredCards = CARDS_DATA.filter((card) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Briefings' && card.type === 'Briefing') return true;
    return card.type.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div className="selection:bg-teal-500/20 py-8 md:py-12 lg:py-16">
      <div className="section-padding-x ">
        
        {/* Navigation / Filter Pills Container */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 items-center">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-200 whitespace-nowrap
                  ${isActive 
                    ? 'bg-Primary text-white border-Primary shadow-sm' 
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:bg-slate-50'
                  }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-shadow duration-300 hover:shadow-md min-h-[320px]"
            >
              <div>
                {/* Meta Header */}
                <div className="flex flex-col gap-1 mb-4">
                  <span className="text-Primary font-medium text-sm sm:text-base">
                    {card.type}
                  </span>
                  <span className="text-slate-400 text-xs sm:text-sm">
                    {card.date}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight leading-snug mb-3 hover:text-Primary cursor-pointer transition-colors">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {card.description}
                </p>
              </div>

              {/* Action Button */}
              <div>
                <Link to={`/news-and-research/${card.id}`} className="inline-flex items-center justify-center bg-Primary hover:bg-[#005580] text-white font-medium text-sm px-5 py-3 rounded-xl transition-colors duration-200 group">
                  Read More
                  <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State when filter yields no results */}
        {filteredCards.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <p className="text-slate-400 text-lg">No entries found under "{activeFilter}".</p>
          </div>
        )}

      </div>
    </div>
  );
}