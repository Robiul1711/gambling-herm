import React from "react";

const GamblingCommonBanner = ({
  section = "",
  title = "",
  description = "",
  image,
}) => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 space-y-4 md:space-y-6 order-2 lg:order-1">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm md:text-base font-medium text-slate-600">
            <span className="w-6 h-[2px] bg-Primary block"></span>
            <p className="text-Primary2">{section}</p>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 tracking-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="w-full h-full max-w-xl rounded-xl shadow-sm">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamblingCommonBanner;
