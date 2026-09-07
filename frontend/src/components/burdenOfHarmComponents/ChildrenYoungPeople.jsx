import React from "react";

const ChildrenYoungPeople = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-10 h-[3px] bg-[#0093D0] mb-4" />

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
          4. Children and young people
        </h2>

        {/* Sub-header tagline */}
        <p className="text-base md:text-lg text-gray-500 mb-8 font-normal">
          Two populations consistently understated in policy debate.
        </p>

        {/* Sub-section 1: As direct customers */}
        <div className="my-10 space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            As direct customers
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            <strong className="font-bold text-gray-900">3.4% of 11 to 17-year-olds</strong> in Great Britain scored 2 or more on the DSM-IV-MR-J screen in 2025, indicating gambling-related harms within the past year (Gambling Commission, Young People & Gambling 2025). That figure comes from a screening tool adapted from adult criteria and almost certainly undercounts.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            For scale against other risks at the same ages: <strong className="font-bold text-gray-900">gambling in the past week among 11 to 16-year-olds (11%) exceeds tobacco cigarettes (6%), e-cigarettes (7%) and drug-taking (5%)</strong>.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            There is currently no age restriction on private or non-commercial betting, equal-chance gaming, prize gaming at fairs, Category D gaming machines, or loot boxes and skins in video games. A survey of 16 to 18-year-olds found a moderate-to-large association between loot-box spending and gambling harm, stronger in adolescents than adults (Zendle, Meyer & Over, 2019), and a 2022 systematic review confirmed consistent associations and concluded that policy action on loot boxes could reduce harm (Spicer et al.).
          </p>

          {/* Callout Quote Box: Convergence is not equivalence */}
          <div className="border-l-4 border-gray-400 pl-4 sm:pl-6 my-6 py-2">
            <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">
              Convergence is not equivalence
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              The industry's habit of describing slot and casino products as "gaming", together with the blurred line loot boxes create, can imply that gambling harm and video-gaming harm are the same thing. They are not. Gambling stakes monetary value, and it is that financial dimension that drives debt, insolvency, relationship breakdown and suicide. Loot boxes matter precisely because they import monetary, chance-based staking into games, not because gaming and gambling are interchangeable.
            </p>
          </div>
        </div>

        {/* Sub-section 2: Harmed by someone else’s gambling */}
        <div className="my-10 space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            Harmed by someone else's gambling
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            Around <strong className="font-bold text-gray-900">912,805 children in England live in a household where an adult may benefit from gambling treatment or support</strong> (Office for Health Improvement and Disparities, 2023; 95% confidence interval 754,864 to 1,116,074, roughly 7 to 8% of the child population). This is the most methodologically grounded estimate available and the figure we recommend citing. Separate household modelling for GambleAware suggests up to 2.2 million children in Great Britain may live with an adult experiencing severe gambling harm; that carries significant uncertainty and should be read as an upper bound, not as a prevalence estimate with equivalent confidence.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            Among 11 to 17-year-olds who have seen a family member they live with gamble (29% of all 11 to 17s), in the past year <strong className="font-bold text-gray-900">12% reported losing sleep due to worry, 7% reported increased arguments or tension at home, and 2% reported it stopped them having enough food</strong>, down from 4% in 2024 (Young People & Gambling 2025). Food insecurity and disrupted sleep in a child are welfare issues that should trigger a response, whether or not gambling is named as the cause. These impacts align with recognised Adverse Childhood Experiences.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            UK public conversation on gambling and children focuses overwhelmingly on the first group and almost ignores the second. Policy attention is inverted relative to where the burden sits.
          </p>
        </div>

        {/* Sub-section 3: The safeguarding gap */}
        <div className="my-10 space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            The safeguarding gap
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            Gambling harm is rarely identified as a factor in safeguarding referrals or child protection plans. Social workers, health visitors and school nurses are not routinely trained to identify it, and there is no standardised pathway for referring children in gambling-affected households to support. A useful test of how embedded gambling is in safeguarding instinct: a 14-year-old found with an online betting account would rarely prompt the same professional response as a 14-year-old found with a bottle of beer, though the potential for harm is comparable.
          </p>
        </div>

        {/* Our Position Dark Box */}
        <div className="border-l-4 border-[#0093D0] bg-[#1c1d1f] text-white p-6 md:p-8 rounded-r-sm my-8">
          <h4 className="text-[#0093D0] font-bold text-xs tracking-wider uppercase mb-3">
            OUR POSITION
          </h4>
          <p className="text-sm md:text-base leading-relaxed text-gray-200 font-medium">
            Gambling policy that takes children seriously requires explicit regulation of gamblified products that fall outside the Gambling Act's current scope, restrictions on advertising in environments where children are present, statutory recognition and support for children of people who gamble excessively, and gambling included by default in local safeguarding training, assessment frameworks and referral pathways.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChildrenYoungPeople;
