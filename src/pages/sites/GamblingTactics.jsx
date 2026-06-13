import React from "react";
import CommonBanner from "@/components/common/CommonBanner";
import bannerImg from "@/assets/images/banner.png";

const GamblingTactics = () => {
  return (
    <div className="bg-white">
      <CommonBanner
        image={bannerImg}
        title="Gambling Tactics Exposed"
        tag="Evidence Base"
        description="Analyzing the marketing practices, algorithmic nudges, VIP schemes, and product design features that drive excessive play."
      />
      
      <div className="section-padding-x section-padding-y max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Design to Hook</h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
                The gambling industry employs a wide array of sophisticated marketing and engineering tactics designed to acquire new users and maximize player lifetime value. Many of these tactics operate below the conscious awareness of consumers.
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                By exposing these tactics, we aim to empower the public and build an unassailable body of evidence for regulators to restrict harmful practices.
              </p>
            </section>

            <section className="bg-gray-50 border border-gray-100 p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Industry Strategies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-Primary text-lg mb-1">VIP Schemes</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Personalized account managers, free bets, and luxury gifts are offered to high-depositing players, often specifically targeting those showing clear signs of addiction to ensure they continue wagering.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-Primary text-lg mb-1">Free Bet Nudges</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Push notifications and time-limited "free bets" are strategically timed during moments of vulnerability or major matches to lure customers back into play.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-Primary text-lg mb-1">Gamification</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Incorporating video-game mechanics like levels, badges, leaderboard challenges, and animations to normalize constant interaction with gambling products.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-Primary text-lg mb-1">Sponsorships</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Heavy branding on football jerseys, stadium boards, and TV broadcasts to ensure continuous visibility and positive association for young children and fans.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Protecting Vulnerable Users</h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
                These design tactics are especially harmful to young audiences and recovering gamblers. Our research shows that advertising and predatory product designs are key factors in relapses.
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                We advocate for total bans on sports gambling advertising, the abolition of VIP schemes, and mandatory safety features on all online gaming platforms.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[#E0F2FE] p-6 rounded-2xl border border-blue-100">
              <h3 className="text-lg font-bold text-Primary mb-2">Support &amp; Advocacy</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                If you have been impacted by unfair industry practices or are seeking help to self-exclude, we have resources available to guide you.
              </p>
              <a
                href="/urgent-help"
                className="text-sm font-semibold text-Primary hover:underline inline-flex items-center gap-1"
              >
                Get Support Now <span>→</span>
              </a>
            </div>

            <div className="border border-gray-200 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <a href="/burden-of-harm" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • The Burden of Harm
                </a>
                <a href="/gambling-explained" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Gambling Explained
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

export default GamblingTactics;
