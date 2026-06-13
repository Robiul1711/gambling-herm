import React from "react";
import CommonBanner from "@/components/common/CommonBanner";
import bannerImg from "@/assets/images/banner.png";

const PolicyAndAdvocacy = () => {
  return (
    <div className="bg-white">
      <CommonBanner
        image={bannerImg}
        title="Policy &amp; Advocacy"
        tag="Campaigns &amp; Policy"
        description="Lobbying for evidence-based legislation, stronger regulations, and a public health approach to gambling in the UK."
      />
      
      <div className="section-padding-x section-padding-y max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Policy Framework</h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
                We believe that the current system of self-regulation and industry-funded support is fundamentally flawed. To protect consumers and reduce harm, we need independent, statutory regulation and enforcement.
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                Our policy work is guided by the latest scientific research and the lived experiences of those affected by gambling harms.
              </p>
            </section>

            <section className="bg-gray-50 border border-gray-100 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-Primary mb-4">Our Legislative Demands</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-Primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Statutory Levy</h4>
                    <p className="text-gray-600 text-sm mt-0.5">A mandatory percentage tax on gambling operator yields to fund independent research, education, and treatment, removing industry influence from healthcare funding.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-Primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Advertising Ban</h4>
                    <p className="text-gray-600 text-sm mt-0.5">A complete ban on all gambling advertising, sponsorships on sports kits, and promotional bonuses to protect children and vulnerable adults from constant exposure.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-Primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Product Safety Limits</h4>
                    <p className="text-gray-600 text-sm mt-0.5">Mandatory stake and speed limits on highly addictive online slot machines, along with standardized affordability checks before users can deposit large sums.</p>
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Engagement</h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
                We work closely with Members of Parliament, health departments, local authorities, and peer charities to introduce progressive legislative changes. By submitting evidence to parliamentary consultations, we ensure the public's voice is heard over the industry's lobbying power.
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                Through our work, we aim to shape a fairer, safer regulatory environment where consumer protection is the absolute priority.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[#E0F2FE] p-6 rounded-2xl border border-blue-100">
              <h3 className="text-lg font-bold text-Primary mb-2">Campaign With Us</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Join our network of advocates and help us contact local representatives, share campaign materials, and demand action.
              </p>
              <a
                href="/about#contact"
                className="text-sm font-semibold text-Primary hover:underline inline-flex items-center gap-1"
              >
                Get in touch to campaign <span>→</span>
              </a>
            </div>

            <div className="border border-gray-200 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <a href="/members-only-campaign" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Members Only Campaign
                </a>
                <a href="/gambling-tactics" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Gambling Tactics
                </a>
                <a href="/inequality-and-gambling-harm" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Inequality &amp; Gambling Harm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyAndAdvocacy;
