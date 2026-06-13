import React from "react";
import CommonBanner from "@/components/common/CommonBanner";
import bannerImg from "@/assets/images/banner.png";

const InequalityAndGamblingHarm = () => {
  return (
    <div className="bg-white">
      <CommonBanner
        image={bannerImg}
        title="Inequality &amp; Gambling Harm"
        tag="Topics In Focus"
        description="Investigating how gambling operators disproportionately target and extract wealth from low-income and marginalized communities."
      />
      
      <div className="section-padding-x section-padding-y max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">An Inequality Accelerator</h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
                Gambling harm does not occur in a vacuum. It is deeply intertwined with existing socio-economic inequalities. While anyone can experience gambling harms, those living in more deprived areas are far more vulnerable to their worst effects.
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                Research shows that bookmakers and online betting operations concentrate their marketing and physical premises in areas of higher deprivation, extracting resources from communities that can least afford it.
              </p>
            </section>

            <section className="bg-gray-50 border border-gray-100 p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Key Areas of Impact</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-Primary text-lg mb-1">Geographic Targeting</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Physical betting shops and high-stakes gaming terminals are disproportionately located in towns and neighborhoods with lower average incomes and higher unemployment rates.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-Primary text-lg mb-1">Disproportionate Financial Harm</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A loss of £100 represents a much larger percentage of household income for a low-income family than a wealthy one. This can immediately lead to housing instability, food insecurity, and debt cycles.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-Primary text-lg mb-1">Healthcare Access Disparities</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Vulnerable populations often face longer waiting times and greater barriers when attempting to access specialized mental health and addiction services.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Advocating for Spatial Justice</h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
                Addressing gambling harm requires a focus on spatial and economic justice. Local authorities need greater powers to control the clustering of gambling premises in high streets, and online operators must face strict limits on targeted marketing to low-income postcodes.
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                We support policies that address these systemic geographic and economic imbalances, protecting the financial security and health of local communities.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[#E0F2FE] p-6 rounded-2xl border border-blue-100">
              <h3 className="text-lg font-bold text-Primary mb-2">Research and Data</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Read our detailed spatial mapping reports analyzing the concentration of gambling licenses across different regions in the UK.
              </p>
              <a
                href="/news-and-research"
                className="text-sm font-semibold text-Primary hover:underline inline-flex items-center gap-1"
              >
                View our reports <span>→</span>
              </a>
            </div>

            <div className="border border-gray-200 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <a href="/understanding-gambling-harms" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Understanding gambling harms
                </a>
                <a href="/stigma-and-language" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Stigma &amp; Language
                </a>
                <a href="/policy-and-advocacy" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Policy &amp; Advocacy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InequalityAndGamblingHarm;
