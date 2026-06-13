import React from "react";
import CommonBanner from "@/components/common/CommonBanner";
import bannerImg from "@/assets/images/banner.png";

const UnderstandingGamblingHarms = () => {
  return (
    <div className="bg-white">
      <CommonBanner
        image={bannerImg}
        title="Understanding Gambling Harms"
        tag="Topics In Focus"
        description="Exploring the broad spectrum of harm beyond financial loss, highlighting the psychological, emotional, and social consequences."
      />
      
      <div className="section-padding-x section-padding-y max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">A Multidimensional Crisis</h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
                Gambling harm is defined as any negative consequence arising from gambling behavior that affects individuals, families, communities, or society at large. Often, public discourse focuses narrowly on extreme financial loss or debt.
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                However, research demonstrates that harm manifests in multiple distinct domains, many of which can persist long after an individual has stopped gambling.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-150 p-6 rounded-2xl bg-gray-50/50">
                <h3 className="text-lg font-bold text-Primary mb-2">Mental Health &amp; Well-being</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Experiencing chronic stress, sleep deprivation, anxiety, depression, and severe feelings of shame or guilt. Gambling has one of the highest links to suicidal ideation of any addictive behavior.
                </p>
              </div>
              <div className="border border-gray-150 p-6 rounded-2xl bg-gray-50/50">
                <h3 className="text-lg font-bold text-Primary mb-2">Relationships &amp; Families</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Loss of trust, arguments, domestic tension, and emotional neglect of children or partners. The ripple effect means a single individual's struggle impacts an average of six close contacts.
                </p>
              </div>
              <div className="border border-gray-150 p-6 rounded-2xl bg-gray-50/50">
                <h3 className="text-lg font-bold text-Primary mb-2">Employment &amp; Study</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Decreased productivity at work or university, high absenteeism, distraction, and potential career disruption due to preoccupation with gambling or financial stress.
                </p>
              </div>
              <div className="border border-gray-150 p-6 rounded-2xl bg-gray-50/50">
                <h3 className="text-lg font-bold text-Primary mb-2">Financial Stability</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Depleted savings, severe credit rating damage, inability to pay basic household bills, and escalating reliance on payday loans or informal borrowing.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Shifting the Focus</h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
                Historically, support systems placed the entire responsibility on the individual, branding them a "problem gambler." Modern public health frameworks reject this framing.
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                By focusing on the products, advertisements, and environments that trigger these behaviors, we can design healthier public spaces and demand safer, more ethical products from commercial companies.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Seeking Support?</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                If you or a loved one are experiencing any of these harms, please reach out. There are independent organizations and helplines available to provide free, confidential advice.
              </p>
              <a
                href="/urgent-help"
                className="text-sm font-semibold text-[#C92525] hover:underline inline-flex items-center gap-1"
              >
                Access support resources <span>→</span>
              </a>
            </div>

            <div className="border border-gray-200 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <a href="/stigma-and-language" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Stigma &amp; Language
                </a>
                <a href="/inequality-and-gambling-harm" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Inequality &amp; Gambling Harm
                </a>
                <a href="/burden-of-harm" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • The Burden of Harm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderstandingGamblingHarms;
