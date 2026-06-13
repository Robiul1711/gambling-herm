import React from "react";
import CommonBanner from "@/components/common/CommonBanner";
import bannerImg from "@/assets/images/banner.png";

const MembersOnlyCampaign = () => {
  return (
    <div className="bg-white">
      <CommonBanner
        image={bannerImg}
        title="Members Only Campaign"
        tag="Campaigns &amp; Policy"
        description="Exclusive campaign assets, coordinated actions, and briefing documents for our network of active members."
      />
      
      <div className="section-padding-x section-padding-y max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Coordinated Action for Real Change</h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
                Our members are at the front lines of the movement to reduce gambling harm. This page provides access to coordinated campaign briefs, lobbying resources, and local organizing frameworks.
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                By organizing structured national actions, we increase pressure on politicians and regulatory agencies, making it impossible to ignore the urgent need for consumer protection.
              </p>
            </section>

            <section className="bg-gray-50 border border-gray-100 p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Current Initiatives</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-Primary pl-4">
                  <h4 className="font-bold text-gray-800 text-lg">Local Licensing Response</h4>
                  <p className="text-gray-600 text-sm mt-0.5">Providing toolkits to coordinate responses to new betting shop licenses and high-stakes gaming machines in your local council areas.</p>
                </div>
                <div className="border-l-4 border-Primary pl-4">
                  <h4 className="font-bold text-gray-800 text-lg">MP Lobbying Kits</h4>
                  <p className="text-gray-600 text-sm mt-0.5">Pre-drafted template letters, data briefings, and guides to schedule and conduct meetings with your local MPs to support gambling reform legislation.</p>
                </div>
                <div className="border-l-4 border-Primary pl-4">
                  <h4 className="font-bold text-gray-800 text-lg">Lived Experience Panels</h4>
                  <p className="text-gray-600 text-sm mt-0.5">A collaborative network for members to share their stories with media, academic researchers, and policy advisors in a safe, supported format.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Get Involved</h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
                Membership is open to anyone committed to seeing a public-health led approach to gambling regulation. Whether you have lived experience of gambling harms or are simply passionate about social justice, your voice is essential.
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                Sign up via our contact channels to receive invitations to campaign briefings, strategy meetings, and exclusive digital assets.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[#E0F2FE] p-6 rounded-2xl border border-blue-100">
              <h3 className="text-lg font-bold text-Primary mb-2">Member Sign Up</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Ready to take action? Sign up today to be added to our member-only mailing list and receive campaign toolkits.
              </p>
              <a
                href="/about#contact"
                className="text-sm font-semibold text-Primary hover:underline inline-flex items-center gap-1"
              >
                Register as a member <span>→</span>
              </a>
            </div>

            <div className="border border-gray-200 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <a href="/policy-and-advocacy" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Policy &amp; Advocacy
                </a>
                <a href="/gambling-explained" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Gambling Explained
                </a>
                <a href="/news-and-research" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • News &amp; Research
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersOnlyCampaign;
