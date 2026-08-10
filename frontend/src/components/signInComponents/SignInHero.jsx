import React from "react";
import { Link } from "react-router-dom";

const SignInHero = () => {
  return (
    <section className="bg-[#f2f9fd] py-16 md:py-24 px-4 md:px-8 border-b border-sky-100/60">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Tagline */}
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-5 h-[2.5px] bg-[#0093D0]"></span>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#0093D0]">
            FOR PROFESSIONALS
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#1e293b] leading-[1.18] tracking-tight mb-8">
          Sign in
        </h1>

        {/* Lead Narrative Text */}
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] max-w-4xl font-normal">
          The members' area is for the professional audiences GHUK works with:
          NHS and other healthcare teams, local authority and public health
          colleagues, teachers and safeguarding leads, researchers, and
          third-sector partners. Membership and the members' area are being
          rolled out in stages. If you already have an account, sign in below. If
          you're not yet a member, you can register your interest instead.
        </p>
      </div>
    </section>
  );
};

export default SignInHero;
