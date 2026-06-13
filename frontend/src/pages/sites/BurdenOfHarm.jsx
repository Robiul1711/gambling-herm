import React from "react";
import CommonBanner from "@/components/common/CommonBanner";
import bannerImg from "@/assets/images/banner.png";

const BurdenOfHarm = () => {
  return (
    <div className="bg-white">
      <CommonBanner
        image={bannerImg}
        title="The Burden of Gambling Harm"
        tag="Evidence Base"
        description="Understanding the scale, depth, and wider impacts of gambling harms on individuals, families, and communities across the UK."
      />
      
      <div className="section-padding-x section-padding-y max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">A Major Public Health Issue</h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
                Gambling harm is not limited to financial loss. It is a complex public health challenge that affects physical health, mental well-being, relationships, and societal productivity. For every person who experiences gambling problems, several others around them are directly impacted.
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                By treating gambling harm as a public health issue rather than a matter of individual failure, we can address the root systemic causes, including aggressive industry practices and insufficient regulatory protections.
              </p>
            </section>

            <section className="bg-gray-50 border border-gray-100 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-Primary mb-4">Key Statistics &amp; Insights</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-Primary font-bold text-lg mt-0.5">•</span>
                  <div>
                    <strong className="text-gray-800">Wide Reach:</strong> Millions of people in the UK are affected by someone else's gambling, experiencing relationship breakdown, emotional distress, and financial strain.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-Primary font-bold text-lg mt-0.5">•</span>
                  <div>
                    <strong className="text-gray-800">Health Impacts:</strong> Strong links exist between high-risk gambling and severe mental health difficulties, including clinical depression, anxiety, and suicide.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-Primary font-bold text-lg mt-0.5">•</span>
                  <div>
                    <strong className="text-gray-800">Economic Cost:</strong> The social and economic cost of gambling-related harms to the UK public purse is estimated to be in the billions annually, spanning healthcare, housing, and justice systems.
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why We Need Action</h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
                The current regulatory frameworks are insufficient to protect people from modern, highly addictive digital gambling products. Continuous 24/7 access via smartphones, combined with sophisticated algorithms designed to encourage prolonged play, has accelerated the rate and severity of harm.
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                We campaign for evidence-based policies that put public health first, ensuring that industry profit never takes precedence over the well-being of individuals and communities.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[#E0F2FE] p-6 rounded-2xl border border-blue-100">
              <h3 className="text-lg font-bold text-Primary mb-2">Our Mission</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                We work to expose the systemic drivers of gambling harm and lobby for policy changes that protect children, young people, and vulnerable adults.
              </p>
              <a
                href="/about"
                className="text-sm font-semibold text-Primary hover:underline inline-flex items-center gap-1"
              >
                Learn more about us <span>→</span>
              </a>
            </div>

            <div className="border border-gray-200 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <a href="/gambling-explained" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Gambling Explained
                </a>
                <a href="/gambling-tactics" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Gambling Tactics
                </a>
                <a href="/understanding-gambling-harms" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Understanding gambling harms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurdenOfHarm;
