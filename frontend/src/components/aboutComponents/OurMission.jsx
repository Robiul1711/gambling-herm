import React from "react";
import { MessageSquare, Headphones, LineChart } from "lucide-react";
import aboutBannerImg from "@/assets/images/ourmission.png";
import charityOrigins from "@/assets/audio/charity-origins.mp3";
import useClient from "@/hooks/useClient";

export default function OurMission() {
  const { data: responseData } = useClient({
    queryKey: ["aboutOurMission"],
    url: "/about/our-mission",
  });

  const missionData = responseData?.data;

  return (
    <section className="w-full py-16 bg-white text-[#1f2937] border-b border-gray-100">
      <div className="section-padding-x">
        <div className="max-w-5xl mx-auto">
          {/* Top Grid: Content & Illustration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              {/* Top Accent Line */}
              <div className="w-12 h-[3px] bg-[#1B80C4]" />

              <h2 className="text-3xl md:text-[40px] font-bold text-slate-800 tracking-tight leading-none mb-4">
                {missionData?.title || "Our mission"}
              </h2>

              <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed max-w-2xl mb-8">
                {missionData?.description ||
                  "Our mission rests on three commitments, each grounded in the public-health evidence on gambling harm: research, then knowledge, then action."}
              </p>

              {/* Audio Card */}
              <div className="bg-[#f7f9fa] border-l-4 border-[#1B80C4] p-5 max-w-[500px]">
                <span className="text-[10px] font-bold text-[#1B80C4] tracking-widest uppercase block mb-1">
                  {missionData?.audioSource || "PhoenixFM, May 2026"}
                </span>
                <h4 className="text-sm font-bold text-slate-800 mb-4 leading-snug">
                  {missionData?.audioTitle ||
                    "How GHUK started, and why: charity origins and Covid"}
                </h4>
                <audio
                  src={missionData?.audioUrl || charityOrigins}
                  controls
                  className="w-full h-8 accent-[#1B80C4]"
                >
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>

            {/* Right Illustration Column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img
                src={missionData?.image || aboutBannerImg}
                alt="Systems Produce Action Illustration"
                className="w-full max-w-[340px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Bottom Grid: 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {/* Pillar 1 */}
            <div className="border border-gray-100 p-6 bg-white hover:shadow-sm transition-shadow duration-200 text-left flex flex-col justify-start">
              <div className="w-9 h-9 bg-sky-50 flex items-center justify-center text-[#1B80C4] mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                Support people
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect anyone harmed by gambling (themselves or someone they
                love) with accurate information and routes to help, free of
                industry framing.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="border border-gray-100 p-6 bg-white hover:shadow-sm transition-shadow duration-200 text-left flex flex-col justify-start">
              <div className="w-9 h-9 bg-sky-50 flex items-center justify-center text-[#1B80C4] mb-4">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                Change minds
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Shift the public conversation from "responsible gambling" and
                individual blame toward a public-health understanding of
                product, exposure and policy.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="border border-gray-100 p-6 bg-white hover:shadow-sm transition-shadow duration-200 text-left flex flex-col justify-start">
              <div className="w-9 h-9 bg-sky-50 flex items-center justify-center text-[#1B80C4] mb-4">
                <LineChart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                Change policy
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
               Push for the evidence-based, whole-system response needed to address gambling harm, independent of gambling-industry funding and influence.{" "}
                <a
                  href="#positions"
                  className="underline text-slate-800 font-medium hover:text-[#1B80C4] transition-colors"
                >
                  Our positions &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
