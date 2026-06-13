import React from "react";
import CommonBanner from "@/components/common/CommonBanner";
import bannerImg from "@/assets/images/banner.png";

const GamblingExplained = () => {
  return (
    <div className="bg-white">
      <CommonBanner
        image={bannerImg}
        title="Gambling Explained"
        tag="Evidence Base"
        description="Demystifying how modern gambling works, the algorithms behind online games, and the mechanisms of addiction."
      />
      
      <div className="section-padding-x section-padding-y max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding the Mechanics</h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
                To understand why gambling harm is so prevalent, we must look at how modern gambling products are designed. Today's gambling is no longer just about buying a lottery ticket or placing a simple bet on a weekend sports match.
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                Online slot machines, casino games, and live-odds sports betting systems use sophisticated digital architectures. These games are designed using psychological principles of reinforcement to keep players engaged for as long as possible.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-150 p-6 rounded-2xl bg-gray-50/50">
                <h3 className="text-lg font-bold text-Primary mb-2">Random Number Generators (RNG)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Online games run on RNGs that determine outcomes in milliseconds. While advertised as purely random, the math is always structured to ensure a mathematical edge for the operator over time.
                </p>
              </div>
              <div className="border border-gray-150 p-6 rounded-2xl bg-gray-50/50">
                <h3 className="text-lg font-bold text-Primary mb-2">Return to Player (RTP)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  RTP dictates the percentage of wagered money returned to players over millions of spins. However, RTP is a long-term statistical average, meaning individual sessions almost always result in a net loss.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Illusion of Control</h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
                Commercial gambling operators capitalize on the "illusion of control." By allowing players to select their own numbers, choose virtual decks, or cash out early during sports bets, operators make players feel that their skill determines the outcome.
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                In reality, the probability calculations are fixed. This psychological trick increases wagering frequency and sizes, leading to escalated financial risks for the user.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Terms</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">Near Misses</h4>
                  <p className="text-gray-500 text-xs mt-0.5">When reels stop just short of a win, triggering dopamine releases similar to an actual win.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">Losses Disguised as Wins (LDWs)</h4>
                  <p className="text-gray-500 text-xs mt-0.5">When a spin costs £1 and awards £0.20, celebrated with winning sounds despite a net loss.</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <a href="/burden-of-harm" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • The Burden of Harm
                </a>
                <a href="/gambling-tactics" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Gambling Tactics
                </a>
                <a href="/stigma-and-language" className="block text-sm font-medium text-gray-600 hover:text-Primary transition-colors">
                  • Stigma &amp; Language
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamblingExplained;
