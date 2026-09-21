import React from "react";
import { Headphones, ExternalLink, Radio, Clock, ShieldCheck, Zap, HeartPulse } from "lucide-react";
import johnGilhamImg from "@/assets/trustees/JohnGilham.png";

const PODCAST_URL = "https://player.captivate.fm/episode/803b84eb-1877-4cb4-a576-7c33e78b2fa1/";
const LINKEDIN_POST_URL = "https://lnkd.in/ePnFMNqy";

const RoadSafetyPodcast = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mb-6"></div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-100/80 text-[#0093D0] text-xs font-bold uppercase tracking-wider rounded-full">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                Featured Podcast Episode
              </span>
              <span className="text-xs text-slate-500 font-medium">ProjectEDWARD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#1e293b] tracking-tight leading-tight">
              The Hidden Road Risk You Aren’t Tracking
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5 max-w-2xl font-normal leading-relaxed">
              In this episode of <span className="font-semibold text-slate-800">“My Role in the Safe System”</span>, 
              ProjectEDWARD sits down with John Gilham from Gambling Harm UK to explore the overlooked threat behind the wheel.
            </p>
          </div>

          {/* Quick Action Links */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={PODCAST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0093D0] hover:bg-[#0076a8] text-white font-semibold text-xs sm:text-sm px-5 py-3 transition-colors shadow-sm rounded-lg"
            >
              <Headphones className="w-4 h-4" />
              <span>Listen to Episode</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Main Podcast Showcase Card */}
        <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Col: Speaker Profile & Episode Meta */}
            <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 text-white flex flex-col justify-between">
              <div>
                {/* Speaker Photo */}
                <div className="relative mb-6">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl mx-auto lg:mx-0">
                    <img
                      src={johnGilhamImg}
                      alt="John Gilham - Trustee and Systems Lead at Gambling Harm UK"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 lg:left-16 px-3 py-1 bg-[#0093D0] text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md whitespace-nowrap">
                    Featured Guest
                  </div>
                </div>

                {/* Speaker Details */}
                <div className="text-center lg:text-left mt-4">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    John Gilham
                  </h3>
                  <p className="text-sky-300 text-xs font-medium uppercase tracking-wider mt-0.5">
                    Trustee &amp; Systems Lead
                  </p>
                  <p className="text-slate-300 text-xs mt-1 font-normal">
                    Gambling Harm UK
                  </p>
                </div>

                {/* Episode Meta Box */}
                <div className="mt-6 pt-5 border-t border-slate-700/80 space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Series: <strong className="text-white">My Role in the Safe System</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Host: <strong className="text-white">ProjectEDWARD</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Broadcast: <strong className="text-white">September 2026</strong></span>
                  </div>
                </div>
              </div>

              {/* LinkedIn Post Discussion Link */}
              <div className="mt-8 pt-4 border-t border-slate-700/80">
                <a
                  href={LINKEDIN_POST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-sky-200 transition-colors"
                >
                  <span>View discussion on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Col: Interactive Audio Player & Key Takeaways */}
            <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between bg-white">
              <div>
                {/* Intro summary */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  When discussing road safety, fatigue, cognitive distraction, and mobile phone usage are top of mind. 
                  This episode investigates how these dangerous behaviors are frequently triggered by an unseen addiction: 
                  <strong> gambling harm and late-night betting apps</strong>.
                </p>

                {/* Embedded Captivate Podcast Player */}
                <div className="mb-6 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-inner">
                  <iframe
                    title="ProjectEDWARD Podcast - The Hidden Road Risk You Aren't Tracking"
                    src="https://player.captivate.fm/episode/803b84eb-1877-4cb4-a576-7c33e78b2fa1/"
                    width="100%"
                    height="190"
                    frameBorder="0"
                    scrolling="no"
                    seamless
                    allow="autoplay"
                    className="w-full"
                    style={{ border: "none", overflow: "hidden" }}
                  />
                </div>

                {/* Key Insights List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Key Topics Covered in This Episode:
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-100 flex flex-col justify-start">
                      <div className="flex items-center gap-2 mb-1.5 text-amber-600 font-bold text-xs">
                        <Zap className="w-4 h-4 shrink-0" />
                        <span>Driver Fatigue</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-normal">
                        How late-night in-app gambling disrupts circadian rhythms and leads to severe micro-sleeps behind the wheel.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-100 flex flex-col justify-start">
                      <div className="flex items-center gap-2 mb-1.5 text-[#0093D0] font-bold text-xs">
                        <HeartPulse className="w-4 h-4 shrink-0" />
                        <span>Cognitive Load</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-normal">
                        The debilitating impact of financial stress and chasing losses on driver reaction times and focus.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-100 flex flex-col justify-start">
                      <div className="flex items-center gap-2 mb-1.5 text-emerald-600 font-bold text-xs">
                        <ShieldCheck className="w-4 h-4 shrink-0" />
                        <span>Fleet Solutions</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-normal">
                        Actionable protocols for transport managers, employers, and safety officers to safeguard drivers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                <span>Free to listen · Available across all major podcast directories</span>
                <a
                  href={PODCAST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#0093D0] hover:underline inline-flex items-center gap-1"
                >
                  Open in Captivate Player <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadSafetyPodcast;
