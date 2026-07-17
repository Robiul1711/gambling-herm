import React from "react";
import { Link } from "react-router-dom";

const OurWorkCommonContact = ({
  className,
  title,
  description,
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink,
  secondaryClass,
  primaryClass,
  textClass,
  titleClass,
}) => {
  return (
    <div
      className={`w-full border-b border-gray-700/40 py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#2A2828] text-white ${className}`}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl ${textClass} font-extrabold tracking-tight leading-tight`}>
          {title}
        </h2>

        <p className={`${textClass} text-gray-400 text-sm sm:text-base font-medium leading-relaxed`}>
          {description}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            to={primaryBtnLink}
            className={`${primaryClass} w-full sm:w-auto text-center hover:bg-[#145c7e] text-white font-bold px-4 py-2 text-base transition-colors shadow-sm`}
          >
            {primaryBtnText}
          </Link>

          {secondaryBtnText && (
            <Link
              to={secondaryBtnLink}
              className={`${secondaryClass} w-full sm:w-auto text-center border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-bold px-4 py-2 text-base transition-all bg-transparent`}
            >
              {secondaryBtnText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurWorkCommonContact;
