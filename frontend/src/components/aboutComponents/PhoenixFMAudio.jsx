import React from "react";
import useClient from "@/hooks/useClient";
import scaleOfHarm from "@/assets/audio/scale-of-harm.mp3";
import shameStigma from "@/assets/audio/shame-stigma-language.mp3";
import youngPeopleChildren from "@/assets/audio/young-people-children.mp3";
import advertisingRetriggering from "@/assets/audio/advertising-retriggering.mp3";
import charityOrigins from "@/assets/audio/charity-origins.mp3";

const staticAudioClips = [
  {
    tag: "SCALE",
    title: "1.6 million UK adults in the more severe bands: the scale of harm",
    audio: scaleOfHarm,
  },
  {
    tag: "STIGMA",
    title: "Shame, stigma and the language we use",
    audio: shameStigma,
  },
  {
    tag: "CHILDREN",
    title: "Young people and the 900,000 children experiencing measurable harm",
    audio: youngPeopleChildren,
  },
  {
    tag: "INDUSTRY",
    title: "Advertising and the re-triggering of harm",
    audio: advertisingRetriggering,
  },
  {
    tag: "ORIGINS",
    title: "Charity origins and Covid",
    audio: charityOrigins,
  },
];

export default function PhoenixFMAudio() {
  const { data: settingsResponse } = useClient({
    queryKey: ["newsResearchSettings"],
    url: "/news-research/settings",
  });
  const settings = settingsResponse?.data;

  const { data: clipsResponse } = useClient({
    queryKey: ["phoenixAudios"],
    url: "/news-research/audio",
  });
  const dbClips = clipsResponse?.data || [];

  const clipsToShow = dbClips.length > 0 
    ? dbClips.map((clip) => ({
        tag: clip.tag,
        title: clip.title,
        audio: clip.audioUrl,
      }))
    : staticAudioClips;

  return (
    <section className="w-full py-16 bg-white text-[#1f2937] border-t border-gray-100">
      <div className="px-4 md:px-0">
        <div className="max-w-5xl mx-auto">
          {/* Tagline / Date */}
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
            <span className="w-6 h-[2px] bg-[#1B80C4]" />
            <span>{settings?.audioDateText || "Audio · May 2026"}</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-[40px] font-bold text-slate-800 tracking-tight leading-tight mb-4">
            {settings?.audioTitle || "On PhoenixFM with John Gilham"}
          </h2>

          {/* Description */}
          <div className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl mb-10">
            {settings?.audioDescription ? (
              <p>{settings.audioDescription}</p>
            ) : (
              <p>
                John Gilham, speaking from lived experience, was interviewed on Phoenix FM's{" "}
                <span className="italic">123 Friday</span> show in May 2026. Five clips from across the
                conversation, each one a different facet of UK gambling harm.
              </p>
            )}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clipsToShow.map((clip, index) => (
              <div
                key={index}
                className="bg-[#f7f9fa] border-l-4 border-[#1B80C4] rounded-r-xl p-5 md:p-6 flex flex-col justify-between hover:shadow-sm transition-shadow duration-300"
              >
                <div>
                  {/* Tag */}
                  <span className="text-[11px] font-bold text-[#1B80C4] uppercase tracking-wider block mb-2">
                    {clip.tag}
                  </span>
                  {/* Title */}
                  <h3 className="text-sm md:text-base font-bold text-slate-800 leading-snug mb-4">
                    {clip.title}
                  </h3>
                </div>

                {/* Audio player */}
                <div className="w-full mt-auto">
                  <audio
                    src={clip.audio}
                    controls
                    className="w-full h-8 accent-[#1B80C4]"
                  >
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
