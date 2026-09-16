import React, { useState } from "react";
import { FiDownload, FiExternalLink, FiFileText, FiZoomIn, FiX } from "react-icons/fi";
import posterImg from "../../assets/images/GHUK Road Safety Poster.jpeg";

const REPORT_LINK =
  "https://gamblingharm.sharepoint.com/:b:/g/IQCl7512FvaYT6zW60m11T24AZXu835KtqOI2iIl4IlXn7Y?e=4LIPkW";
const POSTER_LINK =
  "https://gamblingharm.sharepoint.com/:i:/g/IQBuU5l28H5PSb_gg-RGbV_RAet8BRzenNHmGOV4aucjR5s?e=gycrY5";

const RoadSafetyPoster = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mb-7"></div>

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0093D0]">
                AWARENESS &amp; WORKPLACE RESOURCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#1e293b] tracking-tight">
              Road Safety Campaign Poster
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-normal leading-relaxed">
              Download and display our official infographic poster designed for
              transport workplaces, breakrooms, depot noticeboards, and digital
              displays.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={POSTER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0093D0] hover:bg-[#0076a8] text-white font-semibold text-xs sm:text-sm px-5 py-3 transition-colors shadow-sm"
            >
              <FiExternalLink className="text-base" />
              <span>Open Poster</span>
            </a>
            <a
              href={POSTER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-xs sm:text-sm px-5 py-3 transition-colors shadow-sm"
            >
              <FiDownload className="text-base" />
              <span>Download Poster</span>
            </a>
          </div>
        </div>

        {/* Poster Feature Showcase Card */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual Preview Side (Actual Poster Image) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 flex flex-col items-center justify-center relative group">
              <div
                onClick={() => setModalOpen(true)}
                className="relative cursor-pointer overflow-hidden rounded-xl shadow-2xl border border-white/20 transition-transform duration-300 group-hover:scale-[1.02]"
              >
                <img
                  src={posterImg}
                  alt="Gambling Harm - A Road Safety Risk Poster"
                  className="w-full max-w-[320px] h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-sm backdrop-blur-[2px]">
                  <FiZoomIn className="text-xl" />
                  <span>Click to Preview</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-300 mt-3 text-center">
                Official GHUK Road Safety Risk Poster
              </p>
            </div>

            {/* Poster Details & Actions Side */}
            <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="text-lg sm:text-xl font-bold text-[#1e293b]">
                  Three Ways Risk Can Build Behind The Wheel:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5">
                    <span className="text-[11px] font-bold text-[#0093D0] uppercase block mb-1">
                      A &bull; Sleep Deprivation
                    </span>
                    <p className="text-xs text-slate-600 leading-snug">
                      Late-night gambling reduces sleep quality and reaction time.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5">
                    <span className="text-[11px] font-bold text-[#0093D0] uppercase block mb-1">
                      B &bull; Cognitive Overload
                    </span>
                    <p className="text-xs text-slate-600 leading-snug">
                      Stress and financial pressure reduce on-road focus.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5">
                    <span className="text-[11px] font-bold text-[#0093D0] uppercase block mb-1">
                      C &bull; Digital Distraction
                    </span>
                    <p className="text-xs text-slate-600 leading-snug">
                      Apps and live updates pull attention away from driving.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/70 rounded-xl p-4 mt-4">
                  <p className="text-xs sm:text-sm text-amber-900 font-medium leading-relaxed">
                    💡 <strong>Workplace Tip:</strong> Transport managers can print this poster in high resolution (A4/A3) or distribute digitally to support driver health and fatigue management.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-slate-100">
                <a
                  href={POSTER_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-Primary hover:bg-[#0076a8] text-white font-semibold text-xs sm:text-sm px-5 py-2.5 transition-colors shadow-sm inline-flex items-center gap-2"
                >
                  <FiExternalLink />
                  <span>View Poster Online</span>
                </a>

                <a
                  href={POSTER_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-xs sm:text-sm px-5 py-2.5 transition-colors shadow-sm inline-flex items-center gap-2"
                >
                  <FiDownload />
                  <span>Download Poster File</span>
                </a>

                <a
                  href={REPORT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0093D0] hover:text-[#0076a8] hover:underline font-semibold text-xs sm:text-sm px-3 py-2.5 inline-flex items-center gap-1.5"
                >
                  <FiFileText />
                  <span>Read the full report &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Lightbox for Poster Preview */}
        {modalOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs"
            onClick={() => setModalOpen(false)}
          >
            <div
              className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-3 border-b border-slate-100">
                <h3 className="text-sm font-bold text-slate-800">
                  GHUK Road Safety Poster Preview
                </h3>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  <FiX size={18} />
                </button>
              </div>
              <div className="p-2 max-h-[80vh] overflow-auto flex justify-center">
                <img
                  src={posterImg}
                  alt="Road Safety Poster Full Preview"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
                <a
                  href={POSTER_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-Primary hover:bg-[#0076a8] text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors"
                >
                  Open in SharePoint
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RoadSafetyPoster;
