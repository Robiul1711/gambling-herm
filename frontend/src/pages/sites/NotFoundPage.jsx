import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft, HelpCircle, Compass, BookOpen } from "lucide-react";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-[75vh] flex items-center justify-center py-16 md:py-24 ">
      <div className="section-padding-x w-full max-w-4xl mx-auto text-center">
        {/* 404 Visual Header */}
        <div className="flex flex-col items-center justify-center mb-6">
          <span className="text-7xl sm:text-8xl md:text-9xl font-black text-Primary tracking-tight drop-shadow-xs">
            404
          </span>
          <span className="inline-block mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-Primary2 bg-blue-50/80 px-4 py-1.5 rounded-full border border-blue-100">
            Error · Page Not Found
          </span>
        </div>

        {/* Heading & Subtitle */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 tracking-tight mb-4">
          The page you are looking for doesn't exist or has been moved.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          The link you followed may be broken, or the page may have been
          removed. Here are some helpful links to get you back on track:
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-slate-700 bg-white border border-slate-300  hover:bg-slate-50 transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-Primary  hover:bg-[#0f5370] transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Quick Links Grid */}
        <div className="border-t border-slate-200/80 pt-10 mt-8">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link
              to="/get-help"
              className="p-4  border border-slate-200/60 bg-white hover:border-Primary/40 hover:shadow-md transition-all text-left group"
            >
              <div className="w-9 h-9  bg-blue-50 text-Primary flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-800 group-hover:text-Primary transition-colors text-sm">
                Get Help Now
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Support services and guidance
              </p>
            </Link>

            <Link
              to="/burden-of-harm"
              className="p-4  border border-slate-200/60 bg-white hover:border-Primary/40 hover:shadow-md transition-all text-left group"
            >
              <div className="w-9 h-9  bg-blue-50 text-Primary flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-800 group-hover:text-Primary transition-colors text-sm">
                Evidence & Research
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Burden of harm & publications
              </p>
            </Link>

            <Link
              to="/about"
              className="p-4  border border-slate-200/60 bg-white hover:border-Primary/40 hover:shadow-md transition-all text-left group"
            >
              <div className="w-9 h-9  bg-blue-50 text-Primary flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-800 group-hover:text-Primary transition-colors text-sm">
                About GHUK
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Our mission, vision and team
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
