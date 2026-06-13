import React from "react";
import { Link } from "react-router-dom";

export default function CommonBanner({
  tag,
  title,
  description,
  buttonText,
  buttonLink,
  image,
}) {
  return (
    <section className="relative min-h-[400px] sm:min-h-[520px] md:min-h-[640px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full section-padding-x py-20 md:py-28">
        <div className="max-w-4xl flex flex-col gap-5">
          {/* Tag */}
          {tag && (
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-white" />
              <span className="text-sm md:text-base text-gray-200 font-semibold tracking-wider">
                {tag}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-200">
              {description}
            </p>
          )}

          {/* Button */}
          {buttonText && (
            <div>
              <Link
                to={buttonLink}
                className="inline-flex items-center gap-2 bg-[#C92525] hover:bg-[#B41F1F] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                {buttonText}
                <span>→</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}