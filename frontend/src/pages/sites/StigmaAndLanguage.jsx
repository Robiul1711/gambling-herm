import React from "react";
import CommonBanner from "@/components/common/CommonBanner";
import bannerImg from "@/assets/images/banner.png";

const StigmaAndLanguage = () => {
  return (
    <div className="bg-white">
      <CommonBanner
        image={bannerImg}
        title="Stigma &amp; Language"
        tag="Topics In Focus"
        description="Examining how terms like 'problem gambler' create barriers to help, and why we advocate for person-first language."
      />
      
      <div className="section-padding-x section-padding-y max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Power of Words</h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
                Language matters. For decades, terms like "problem gambler" or "pathological gambler" have dominated policy, medical, and public discourse. These labels place the source of the issue entirely within the individual's character or biology.
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                This framing shifts focus away from the industry's predatory tactics and product designs, and creates a deep sense of shame and stigma that discourages people from seeking help or speaking out.
              </p>
            </section>

            <section className="bg-gray-50 border border-gray-100 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-Primary mb-4">Changing the Narrative</h3>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-6">
                We advocate for a transition to "person-first" language. This matches standards across other healthcare areas and helps de-stigmatize the experience of gambling harm.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-200 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase text-red-600 tracking-wider">Avoid Labels</span>
                    <p className="font-semibold text-gray-800">"Problem Gambler" / "Addict"</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-green-600 tracking-wider">Prefer Person-First</span>
                    <p className="font-semibold text-gray-800">"Person experiencing gambling harms"</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-200 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase text-red-600 tracking-wider">Avoid Labels</span>
                    <p className="font-semibold text-gray-800">"Responsible Gambling"</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-green-600 tracking-wider">Prefer Person-First</span>
                    <p className="font-semibold text-gray-800">"Product safety and consumer protection"</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase text-red-600 tracking-wider">Avoid Labels</span>
                    <p className="font-semibold text-gray-800">"Gambling behavior"</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-green-600 tracking-wider">Prefer Person-First</span>
                    <p className="font-semibold text-gray-800">"Interaction with addictive systems"</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Breaking Down Stigma</h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
                Stigma is a powerful tool for commercial operators because it silences those who have suffered. By making harm feel like a personal failing, operators avoid responsibility for the safety of their software and services.
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                By removing derogatory terms and adopting supportive, descriptive language, we make it easier for people to reach out, share their lived experiences, and demand regulatory accountability.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[#E0F2FE] p-6 rounded-2xl border border-blue-100">
              <h3 className="text-lg font-bold text-Primary mb-2">Language Guide</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                We publish resources for journalists, clinicians, and researchers to encourage non-stigmatizing communications.
              </p>
              <a
                href="/news-and-research"
                className="text-sm font-semibold text-Primary hover:underline inline-flex items-center gap-1"
              >
                Read our reports <span>→</span>
              </a>
            </div>

            <div className="border border-gray-200 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <a href="/understanding-gambling-harms" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Understanding gambling harms
                </a>
                <a href="/inequality-and-gambling-harm" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Inequality &amp; Gambling Harm
                </a>
                <a href="/gambling-explained" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Gambling Explained
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StigmaAndLanguage;
