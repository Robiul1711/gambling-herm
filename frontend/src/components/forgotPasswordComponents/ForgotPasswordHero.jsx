import React from "react";
import { Link } from "react-router-dom";

const ForgotPasswordHero = () => {
  return (
    <section className="bg-[#f2f9fd] py-16 md:py-24 border-b border-sky-100/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Tagline */}
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-5 h-[2.5px] bg-[#0093D0]"></span>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#0093D0]">
            FOR PROFESSIONALS
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#1e293b] leading-[1.18] tracking-tight mb-8">
          Reset your password
        </h1>

        {/* Lead Narrative Text */}
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] font-normal max-w-3xl">
          If you have forgotten your password or need to reset your access credentials
          for the GHUK members' area, enter your registered professional email address
          below. We will send you instructions and a secure link to reset it.
        </p>
      </div>
    </section>
  );
};

export default ForgotPasswordHero;
