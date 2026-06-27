import React, { useState } from "react";
import { Link } from "react-router-dom";
import useClient from "@/hooks/useClient";

const FILTERS = [
  "All",
  "Briefings",
  "Research",
  "Consultation responses",
  "Press",
  "Blog",
];

export default function ResourceGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Fetch all resources dynamically from CMS
  const { data: responseData, isLoading } = useClient({
    queryKey: ["resources"],
    url: "/blogs",
  });

  const resources = responseData?.data || [];

  // Normalize mapping for filtering logic
  const filteredCards = resources.filter((card) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Briefings") return card.category === "Briefing";
    if (activeFilter === "Consultation responses")
      return card.category === "Consultation response";
    return card.category === activeFilter;
  });

  // Date formatting helper
  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  // Render Loader / Skeleton
  if (isLoading) {
    return (
      <div className="selection:bg-teal-500/20 py-8 md:py-12 lg:py-16 ">
        <div className="section-padding-x">
          {/* Filter Pills Skeleton */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 items-center animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-9 w-24 bg-slate-100 rounded-full" />
            ))}
          </div>

          {/* Cards Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 animate-pulse">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[320px]"
              >
                <div>
                  <div className="h-4 bg-slate-100 rounded w-1/4 mb-2" />
                  <div className="h-3 bg-slate-100 rounded w-1/6 mb-4" />
                  <div className="h-6 bg-slate-100 rounded w-5/6 mb-3" />
                  <div className="h-6 bg-slate-100 rounded w-2/3 mb-4" />
                  <div className="space-y-2 mb-6">
                    <div className="h-3 bg-slate-100 rounded w-full" />
                    <div className="h-3 bg-slate-100 rounded w-full" />
                    <div className="h-3 bg-slate-100 rounded w-4/5" />
                  </div>
                </div>
                <div className="h-10 bg-slate-100 rounded w-28" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="selection:bg-teal-500/20 py-8 md:py-12 lg:py-16 max-w-5xl mx-auto px-4 md:px-0">
      <div className="">
        {/* Navigation / Filter Pills Container */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 items-center">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-200 whitespace-nowrap
                  ${
                    isActive
                      ? "bg-Primary text-white border-Primary shadow-sm"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:bg-slate-50"
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
              key={card._id}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-shadow duration-300 hover:shadow-md min-h-[320px]"
            >
              <div>
                {/* Meta Header */}
                <div className="flex flex-col gap-1 mb-4">
                  <span className="text-Primary font-medium text-sm sm:text-base">
                    {card.category}
                  </span>
                  <span className="text-slate-400 text-xs sm:text-sm">
                    {formatDate(card.publishDate)}
                  </span>
                </div>

                {/* Card Title */}
                <Link to={`/news-and-research/${card._id}`} className="block">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight leading-snug mb-3 hover:text-Primary cursor-pointer transition-colors">
                    {card.title}
                  </h3>
                </Link>

                {/* Card Description */}
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {card.description}
                </p>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  to={`/news-and-research/${card._id}`}
                  className="inline-flex items-center justify-center bg-Primary hover:bg-[#005580] text-white font-medium text-sm px-5 py-3 rounded-xl transition-colors duration-200 group"
                >
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
            <p className="text-slate-400 text-lg">
              No entries found under "{activeFilter}".
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
