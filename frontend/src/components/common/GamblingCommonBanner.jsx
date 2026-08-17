import React from "react";
import { Link } from "react-router-dom";

const GamblingCommonBanner = ({
  section = "",
  title = "",
  description = "",
  image,
  to,
  titleClassName = "",
  buttonText,
  imageClassName = "",
  isLoading = false,
  showBg = true,
  bg = true,
  className = "",
}) => {
  const isBgActive = showBg && bg;
  const bgStyle = isBgActive
    ? {
        background:
          "linear-gradient(180deg, var(--teal-10) 0%, var(--paper) 100%)",
      }
    : {};

  if (isLoading) {
    return (
      <section
        className={`w-full py-8 sm:py-12 md:py-20 animate-pulse section-padding-x ${className} `}
        style={bgStyle}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8  items-center ">
          {/* Left skeleton */}
          <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-[2px] bg-slate-200 rounded" />
              <div className="h-3.5 w-32 bg-slate-200 rounded" />
            </div>
            {/* Title */}
            <div className="space-y-3">
              <div className="h-10 sm:h-12 w-[90%] bg-slate-200 rounded" />
              <div className="h-10 sm:h-12 w-[75%] bg-slate-200 rounded" />
              <div className="h-10 sm:h-12 w-[55%] bg-slate-200 rounded" />
            </div>
            {/* Description */}
            <div className="space-y-2 pt-1">
              <div className="h-4 w-full bg-slate-200 rounded" />
              <div className="h-4 w-[95%] bg-slate-200 rounded" />
              <div className="h-4 w-[80%] bg-slate-200 rounded" />
            </div>
            {/* Button (optional) */}
            <div className="h-10 w-36 bg-slate-200 rounded" />
          </div>
          {/* Right image skeleton */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-xl aspect-[4/3] bg-slate-200 rounded" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`w-full py-8 sm:py-12 md:py-20 section-padding-x ${className}`}
      style={bgStyle}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8  items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 space-y-4 md:space-y-6 order-2 lg:order-1">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm md:text-base font-medium text-slate-600">
            <span className="w-6 h-[2px] bg-Primary block"></span>
            <p className="text-Primary2">{section}</p>
          </div>

          {/* Title */}
          <h1
            className={`${titleClassName} text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 tracking-tight`}
          >
            {title}
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl">
            {description}
          </p>
          {to && (
            <Link
              to={to}
              className="text-sm md:text-base text-Primary font-semibold px-4 py-2 border border-Primary hover:bg-Primary hover:text-white transition-colors"
            >
              {buttonText}
            </Link>
          )}
        </div>

        {/* Right Image */}
        <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="w-full h-full max-w-xl shadow-sm">
            <img
              src={image}
              alt={title}
              className={`w-full h-auto object-cover ${imageClassName}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamblingCommonBanner;
