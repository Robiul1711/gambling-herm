import React from "react";
import { Link } from "react-router-dom";

const MembersLibraryNotSignedIn = () => {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#edf7fd] border-l-[5px] border-[#0093D0] rounded-r-xl p-7 sm:p-9 md:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
          {/* Card Title */}
          <h2 className="text-[#1e293b] text-base sm:text-lg font-bold mb-2.5">
            You're not signed in
          </h2>

          {/* Description */}
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed md:leading-[1.7] font-normal">
            The library itself is only available to signed-in members. If you
            already have an account, sign in to view it. If you're not yet a
            member, you can register your interest.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Link
              to="/login"
              className="bg-Primary hover:bg-[#0076a8] text-white font-semibold text-xs sm:text-sm px-6 py-2.5  transition-colors shadow-sm inline-block"
            >
              Sign in
            </Link>

            <Link
              to="/register-keep-updated"
              className="border border-slate-800 hover:bg-slate-50 text-slate-900 font-semibold text-xs sm:text-sm px-6 py-2.5  transition-colors shadow-sm inline-block bg-transparent"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersLibraryNotSignedIn;
