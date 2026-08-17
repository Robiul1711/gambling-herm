import React from "react";
import { Link } from "react-router-dom";
import brothersVid from "@/assets/videos/safeguarding-brothers.mp4";
import fatherDaughterVid from "@/assets/videos/safeguarding-father-daughter.mp4";
import motherDaughterVid from "@/assets/videos/safeguarding-mother-daughter.mp4";
import useClient from "@/hooks/useClient";

export default function WhatHarmLooksLike() {
  const { data: headerResponse } = useClient({
    queryKey: ["about", "get-help-harm-header"],
    url: "/about/get-help-harm-header",
  });

  const { data: video1Response } = useClient({
    queryKey: ["about", "get-help-harm-video-1"],
    url: "/about/get-help-harm-video-1",
  });

  const { data: video2Response } = useClient({
    queryKey: ["about", "get-help-harm-video-2"],
    url: "/about/get-help-harm-video-2",
  });

  const { data: video3Response } = useClient({
    queryKey: ["about", "get-help-harm-video-3"],
    url: "/about/get-help-harm-video-3",
  });

  const headerData = headerResponse?.data;
  const video1Data = video1Response?.data;
  const video2Data = video2Response?.data;
  const video3Data = video3Response?.data;

  const sectionTitle =
    headerData?.title || "What gambling harm looks like inside a home.";
  const sectionDescription =
    headerData?.description ||
    "Three short films, each made with affected others. Used in our medical-school teaching, safeguarding training and public-health work. Watch them in any order.";

  const films = [
    {
      category: video1Data?.subtitle || "Brothers",
      title: video1Data?.title || "Brothers Gambling Harm",
      video: video1Data?.videoUrl || brothersVid,
      description:
        video1Data?.description ||
        "An older brother's gambling lands on a younger sibling who didn't choose it. A film about how harm travels sideways inside a family.",
    },
    {
      category: video2Data?.subtitle || "Father & Daughter",
      title: video2Data?.title || "Father and Daughter Gambling Harm",
      video: video2Data?.videoUrl || fatherDaughterVid,
      description:
        video2Data?.description ||
        "A daughter carries the weight of a father's gambling at home. The harm a parent rarely sees themselves.",
    },
    {
      category: video3Data?.subtitle || "Mother & Daughter",
      title: video3Data?.title || "Mother and Daughter Gambling Harm",
      video: video3Data?.videoUrl || motherDaughterVid,
      description:
        video3Data?.description ||
        "A mother gambling on her phone, a daughter watching, a household quietly changing shape.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-[#222120] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-6 h-[2px] bg-[#0092D0] shrink-0" />
          <span className="text-[#0092D0] text-xs font-bold uppercase tracking-wider">
            Our position
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-white leading-tight tracking-tight">
            {sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            {sectionDescription}
          </p>
        </div>

        {/* Films Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {films.map((film, index) => (
            <div key={index} className="flex flex-col">
              {/* Video Player */}
              <div className="mb-4 aspect-[16/9] w-full overflow-hidden  bg-black border border-gray-800 shadow-xs">
                <video
                  src={film.video}
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                />
              </div>

              {/* Film Description Content */}
              <div className="flex flex-col">
                <span className="text-[#0092D0] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
                  {film.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {film.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  {film.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-xs sm:text-sm leading-relaxed text-gray-400">
          All three films are also used in our{" "}
          <Link
            to="/professionals/healthcare"
            className="text-[#0092D0] hover:underline font-semibold"
          >
            MECC clinical training
          </Link>
          . To request the films for teaching, contact{" "}
          <a
            href="mailto:hello@gamblingharm.com"
            className="text-[#0092D0] hover:underline font-semibold"
          >
            hello@gamblingharm.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
