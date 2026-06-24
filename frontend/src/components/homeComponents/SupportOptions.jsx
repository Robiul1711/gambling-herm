import React from "react";
import { Link } from "react-router-dom";

export default function SupportOptions() {
  return (
    <section className="w-full bg-white py-12 md:py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* CARD 1: For Me */}
          <div className="border border-Primary/30 hover:border-Primary rounded-3xl p-8 sm:p-10 bg-white flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md group">
            <div className="flex flex-col space-y-4">
              {/* Top Accent Category Bar */}
              <div className="flex items-center space-x-3">
                <span className="w-8 h-[2px] bg-Primary" />
                <span className="text-Primary text-sm font-bold tracking-wide">
                  For Me
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Gambling is harming me
              </h3>

              {/* Body */}
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
                You don't have to be at &quot;rock bottom&quot; to deserve help.
                There are routes that work, and a way out that does not depend
                on willpower.
              </p>
            </div>

            {/* Call to Action Link */}
            <div className="pt-8">
              <Link to={"/get-help"}
                className="inline-flex items-center font-bold text-Primary hover:text-[#145c7e] text-base transition-colors"
              >
                Find Help
                <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* CARD 2: For Someone Else */}
          <div className="border border-gray-200 hover:border-Primary/50 rounded-3xl p-8 sm:p-10 bg-white flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md group">
            <div className="flex flex-col space-y-4">
              {/* Top Accent Category Bar */}
              <div className="flex items-center space-x-3">
                <span className="w-8 h-[2px] bg-Primary" />
                <span className="text-Primary text-sm font-bold tracking-wide">
                  For Someone Else
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                I'm worried about someone
              </h3>

              {/* Body */}
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
                Partners, siblings, parents, children, friends, you are not
                collateral damage to someone else's problem. You are a direct
                victim of a product you didn't choose to interact with, and you
                deserve support of your own.
              </p>
            </div>

            {/* Call to Action Link */}
            <div className="pt-8">
              <Link to={"/get-help/family-friends"}
                className="inline-flex items-center font-bold text-Primary hover:text-[#145c7e] text-base transition-colors"
              >
                Support For You
                <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
