import React, { useState } from "react";
import { X } from "lucide-react";
import useClient from "@/hooks/useClient";

export default function TrusteesAndTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  // Fetch team members dynamically from CMS
  const { data: responseData, isLoading } = useClient({
    queryKey: ["teamMembers"],
    url: "/team",
  });

  const teamMembers = responseData?.data || [];

  const getBioParagraphs = (bio) => {
    if (typeof bio === "string") {
      return bio.split("\n").filter(Boolean);
    }
    if (Array.isArray(bio)) {
      return bio;
    }
    return [];
  };

  const getInitials = (member) => {
    if (member.initials) return member.initials;
    if (!member.name) return "TM";
    const parts = member.name.split("").filter(Boolean);
    if (parts.length > 1) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return member.name.substring(0, 2).toUpperCase();
  };

  // Render Loader / Skeleton
  if (isLoading) {
    return (
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="section-padding-x">
          <div className="max-w-5xl mx-auto">
            {/* Header Skeleton */}
            <div className="text-left mb-12 animate-pulse">
              <div className="w-12 h-[3px] bg-[#1B80C4]/40 mb-5" />
              <div className="h-10 bg-slate-100 w-48 mb-4" />
              <div className="h-4 bg-slate-100 w-96 max-w-full" />
            </div>

            {/* Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="border border-gray-200 p-5 flex flex-col justify-between bg-white animate-pulse"
                >
                  <div>
                    <div className="w-full aspect-[4/3] bg-slate-100 mb-4" />
                    <div className="h-5 bg-slate-100 w-2/3 mb-2" />
                    <div className="h-3 bg-slate-100 w-1/3 mb-4" />
                    <div className="space-y-2">
                      <div className="h-3 bg-slate-100 w-full" />
                      <div className="h-3 bg-slate-100 w-full" />
                      <div className="h-3 bg-slate-100 w-4/5" />
                    </div>
                  </div>
                  <div className="pt-4 mt-6 border-t border-gray-100 flex justify-between items-center">
                    <div className="h-3 bg-slate-100 w-1/4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const operationalMembers = teamMembers.filter(
    (member) => member.type === "operational" || member.type === "team" || !member.type
  );
  const trusteeMembers = teamMembers.filter(
    (member) => member.type === "trustee"
  );

  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-100">
      <div className="section-padding-x">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-left mb-12">
            <div className="w-12 h-[3px] bg-[#1B80C4] mb-5" />
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-800 tracking-tight mb-4">
              Our operational team
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
              GHUK was founded in 2020 by individuals with lived
              experience of gambling harm. The current team is below.
            </p>
          </div>

          {/* Team Grid */}
          {operationalMembers.length === 0 ? (
            <div className="text-center py-12 text-slate-500 border border-dashed border-gray-200">
              <p>No operational team members added yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {operationalMembers.map((member) => (
                <div
                  key={member._id || member.id}
                  className="border border-gray-200 p-5 flex flex-col justify-between bg-white hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    {/* Photo or Initials Avatar */}
                    <div className="w-full aspect-[4/3] overflow-hidden mb-4 bg-sky-50 flex items-center justify-center border border-slate-100">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-[#1B80C4] text-5xl font-bold tracking-tight">
                          {getInitials(member)}
                        </div>
                      )}
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-lg font-bold text-slate-800">
                      {member.name}
                    </h3>
                    <span className="text-[11px] font-bold text-[#1B80C4] tracking-wider uppercase block mb-3">
                      {member.role}
                    </span>

                    {/* Biography Preview (Truncated) */}
                    <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                      <p className="line-clamp-6">
                        {getBioParagraphs(member.bio)[0]}
                      </p>
                    </div>
                  </div>

                  {/* See More Link */}
                  <div className="pt-4 mt-4 border-t border-gray-100 flex justify-between items-center">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="text-xs font-bold text-[#1B80C4] hover:underline"
                    >
                      Read full bio &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="pt-16 md:pt-24 section-padding-x">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-left mb-12">
            <div className="w-12 h-[3px] bg-[#1B80C4] mb-5" />
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-800 tracking-tight mb-4">
              Our trustees
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
              GHUK is governed by a board of dedicated trustees. The current trustees are below.
            </p>
          </div>

          {/* Team Grid */}
          {trusteeMembers.length === 0 ? (
            <div className="text-center py-12 text-slate-500 border border-dashed border-gray-200">
              <p>No trustees added yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trusteeMembers.map((member) => (
                <div
                  key={member._id || member.id}
                  className="border border-gray-200 p-5 flex flex-col justify-between bg-white hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    {/* Photo or Initials Avatar */}
                    <div className="w-full aspect-[4/3] overflow-hidden mb-4 bg-sky-50 flex items-center justify-center border border-slate-100">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-[#1B80C4] text-5xl font-bold tracking-tight">
                          {getInitials(member)}
                        </div>
                      )}
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-lg font-bold text-slate-800">
                      {member.name}
                    </h3>
                    <span className="text-[11px] font-bold text-[#1B80C4] tracking-wider uppercase block mb-3">
                      {member.role}
                    </span>

                    {/* Biography Preview (Truncated) */}
                    <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                      <p className="line-clamp-6">
                        {getBioParagraphs(member.bio)[0]}
                      </p>
                    </div>
                  </div>

                  {/* See More Link */}
                  <div className="pt-4 mt-4 border-t border-gray-100 flex justify-between items-center">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="text-xs font-bold text-[#1B80C4] hover:underline"
                    >
                      Read full bio &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal View */}
      {selectedMember && (
        <div
          onClick={() => setSelectedMember(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-2xl w-full max-h-[85vh] overflow-y-auto relative p-6 sm:p-8 md:p-10 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1.5 hover:bg-slate-100"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              <div className="w-24 h-24 overflow-hidden bg-sky-50 flex items-center justify-center shrink-0 border border-slate-100">
                {selectedMember.image ? (
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-[#1B80C4] text-3xl font-bold">
                    {getInitials(selectedMember)}
                  </div>
                )}
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-slate-800">
                  {selectedMember.name}
                </h3>
                <span className="text-xs font-bold text-[#1B80C4] tracking-wider uppercase">
                  {selectedMember.role}
                </span>
              </div>
            </div>

            {/* Bio Body */}
            <div className="text-slate-600 text-sm md:text-base space-y-4 leading-relaxed border-t border-gray-100 pt-6">
              {getBioParagraphs(selectedMember.bio).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Declared Interests (Conditional) */}
            {selectedMember.declaredInterests && (
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-slate-500 leading-relaxed">
                  <span className="font-semibold text-slate-700">
                    Declared interests:
                  </span>
                  {" "}
                  {selectedMember.declaredInterests}
                </p>
              </div>
            )}

            {/* Email (Conditional) */}
            {selectedMember.email && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs font-semibold text-slate-700 block mb-1">
                  Contact:
                </span>
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="text-[#1B80C4] text-sm hover:underline italic"
                >
                  {selectedMember.email}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
