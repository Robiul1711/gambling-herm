import React from "react";
import { Link } from "react-router-dom";

export default function BlockingToolsPage() {
  const selfExclusionSchemes = [
    {
      id: "gamstop",
      title: "GAMSTOP (online gambling)",
      description:
        "GAMSTOP blocks every UK-licensed online gambling site and app, for a period you choose: 6 months, 1 year or 5 years. Registration takes about five minutes at gamstop.co.uk. It only reaches operators licensed in Great Britain, so it doesn't cover sites without a UK licence.",
      buttonText: "Register with GAMSTOP →",
      link: "https://www.gamstop.co.uk",
    },
    {
      id: "moses",
      title: "MOSES (betting shops)",
      description:
        "The Multi Operator Self Exclusion Scheme (MOSES) covers betting shops. Speak to staff in any participating shop, or register online, and you're excluded from participating betting shops in the area you choose.",
      buttonText: "Exclude from betting shops →",
      link: "https://self-exclusion.co.uk",
    },
    {
      id: "sense",
      title: "SENSE (casinos)",
      description:
        "The national self-exclusion scheme for casinos in Great Britain. Registering once covers participating casino venues, so you don't need to visit each one separately.",
      buttonText: "Register with SENSE →",
      link: "https://www.senseselfexclusion.com/",
    },
    {
      id: "bacta",
      title: "BACTA (adult gaming centres)",
      description:
        "Bacta's Self-Exclusion Scheme covers adult gaming centres (AGCs), the licensed premises with slot machines found on high streets and seafronts. Ask a member of staff to exclude yourself for an agreed period.",
      buttonText: "Exclude via BACTA →",
      link: "https://bacta.org.uk/self-exclusion",
    },
    {
      id: "bingo",
      title: "Bingo Association scheme (bingo premises)",
      description:
        "The Bingo Association runs a multi-operator self-exclusion scheme covering licensed bingo premises. Ask a member of staff at a participating club to be excluded.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 selection:bg-teal-500/20 min-h-screen">
      {/* Hero Banner Section */}
      <section className="bg-[#edf7fc] py-14 md:py-20 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:px-0">
          <div className="flex items-center space-x-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#166B94] mb-3">
            <span className="text-[#166B94] font-bold text-sm">—</span>
            <span>TOOLS TO TAKE ACTION</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            Put blocks in place.
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
            If you've decided you want the access shut off, here is how: national self-exclusion schemes, bank blocks, blocking software and the practical steps that go alongside them. None of this replaces talking to someone. It buys the time that makes talking to someone easier.
          </p>
        </div>
      </section>

      {/* On This Page Navigation Bar */}
      <section className="bg-[#f8fafc] py-8 border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 md:px-0">
          <div className="flex items-center space-x-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#166B94] mb-4">
            <span className="text-[#166B94] font-bold text-sm">—</span>
            <span>ON THIS PAGE</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-3 gap-x-6 text-sm font-medium">
            <a href="#self-exclusion" className="text-[#166B94] hover:text-[#005580] underline transition-colors">
              Self-exclusion schemes
            </a>
            <a href="#bank-blocks" className="text-[#166B94] hover:text-[#005580] underline transition-colors">
              Bank blocks
            </a>
            <a href="#blocking-software" className="text-[#166B94] hover:text-[#005580] underline transition-colors">
              Blocking software
            </a>
            <a href="#betblocker" className="text-[#166B94] hover:text-[#005580] underline transition-colors">
              BetBlocker
            </a>
            <a href="#beyond-software" className="text-[#166B94] hover:text-[#005580] underline transition-colors">
              Beyond software
            </a>
            <a href="#what-blocks-dont-do" className="text-[#166B94] hover:text-[#005580] underline transition-colors">
              What blocks don't do
            </a>
            <a href="#more-ways" className="text-[#166B94] hover:text-[#005580] underline transition-colors">
              More ways to get help
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-4 md:px-0 py-12 md:py-16 space-y-20">
        {/* Section 1: Self-exclusion schemes */}
        <section id="self-exclusion" className="scroll-mt-24">
          <div className="flex items-center space-x-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#166B94] mb-3">
            <span className="text-[#166B94] font-bold text-sm">—</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Self-exclusion schemes
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
            National schemes cover different parts of the gambling market. Registering with one blocks you from every participating operator in that category, not just a single site or venue, and most people combine more than one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-10">
            {selfExclusionSchemes.map((scheme) => (
              <div
                key={scheme.id}
                className="border border-gray-200 rounded-xl p-6 md:p-8 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                    {scheme.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                    {scheme.description}
                  </p>
                </div>

                {scheme.buttonText && (
                  <div className="pt-2">
                    <a
                      href={scheme.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-[#18181b] hover:bg-black text-white text-xs md:text-sm font-medium px-5 py-3 rounded-lg transition-colors"
                    >
                      {scheme.buttonText}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-[#edf7fc] border-l-[4px] border-[#166B94] rounded-r-xl p-6 md:p-8">
            <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">
              What these schemes don't cover
            </h4>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Each scheme only reaches the operators that participate in it. GAMSTOP covers sites licensed in Great Britain, so it doesn't reach gambling sites licensed elsewhere that are still reachable from the UK. Land-based schemes rely on venue staff recognising you and only cover participating premises. That's not a reason to skip them: most people put several blocks in place at once precisely because no single one closes every door on its own.
            </p>
          </div>
        </section>

        {/* Section 2: Bank blocks */}
        <section id="bank-blocks" className="scroll-mt-24">
          <div className="flex items-center space-x-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#166B94] mb-3">
            <span className="text-[#166B94] font-bold text-sm">—</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Bank blocks
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Most major UK banks, including Monzo, Starling, Barclays, Lloyds, HSBC and NatWest, let you switch on a gambling block on your debit card. It's usually free and usually sits in the banking app.
          </p>

          <div className="space-y-4 mb-8">
            <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#166B94] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                  Ask for the block
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Look for a "gambling block" or similar setting under card or spending controls in your banking app, or call your bank and ask. It normally takes a couple of minutes to switch on.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#166B94] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                  Expect a delay before it can be lifted
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Many banks build in a cooling-off period, often 48 hours, before a block can be removed once it's on. That delay is the point: it stops a block being switched off in the same moment someone decides to gamble.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#166B94] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                3
              </div>
              <div>
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                  Check exactly what it covers
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  A card block stops gambling transactions on that card. It doesn't reach cash, and it doesn't reach other cards or accounts you hold. Ask your bank what the block covers, since the detail differs between providers.
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://www.gamblingcommission.gov.uk/public-and-players/page/i-want-to-know-how-to-block-gambling-transactions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-gray-300 hover:border-gray-600 bg-white rounded-lg px-5 py-3 text-sm font-medium text-gray-900 transition-colors"
          >
            Gambling Commission: how to block gambling transactions &rarr;
          </a>
        </section>

        {/* Section 3: Blocking software */}
        <section id="blocking-software" className="scroll-mt-24">
          <div className="flex items-center space-x-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#166B94] mb-3">
            <span className="text-[#166B94] font-bold text-sm">—</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Blocking software
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Software blocks work at device level: they stop the device itself opening gambling sites and apps, rather than relying on an operator or a bank.
          </p>

          <div className="border border-gray-200 rounded-xl p-6 md:p-8 bg-white shadow-sm space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              Gamban
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Gamban blocks gambling sites and apps across phones, tablets and computers, and is often available free through GamCare (gamcare.org.uk) rather than paid for directly.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Device-level blocking only reaches the device it's installed on. It doesn't follow you to a friend's phone or a device you buy afterwards, and like any blocking software it can potentially be got round by someone determined enough, for example by uninstalling it. Setting a removal password that someone else holds closes some of that gap.
            </p>
          </div>
        </section>

        {/* Section 4: BetBlocker */}
        <section id="betblocker" className="scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            BetBlocker
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Free, open blocking software for phones, tablets and computers. It blocks gambling sites and apps without a subscription, and isn't run for profit.
          </p>

          <div className="border border-gray-200 rounded-xl p-6 md:p-8 bg-white shadow-sm space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              Set up BetBlocker
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Works across all your devices and takes only a few minutes to install. Like any blocking software, it reaches the devices it's installed on rather than every possible route back in, so many people pair it with a bank block or a self-exclusion scheme above.
            </p>
            <div>
              <a
                href="https://www.betblocker.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#166B94] hover:bg-[#005580] text-white font-medium text-sm px-5 py-3 rounded-lg transition-colors"
              >
                Set up BetBlocker &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Section 5: Beyond software */}
        <section id="beyond-software" className="scroll-mt-24">
          <div className="flex items-center space-x-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#166B94] mb-3">
            <span className="text-[#166B94] font-bold text-sm">—</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Beyond software
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Blocking software and self-exclusion work better alongside a few changes that don't need an app.
          </p>

          <div className="divide-y divide-gray-200 border-t border-b border-gray-200 space-y-0">
            <div className="py-5 text-sm md:text-base leading-relaxed text-gray-700">
              <span className="font-bold text-gray-900">Remove saved cards and passwords</span> from betting apps and browsers, so getting back in takes more than one tap.
            </div>

            <div className="py-5 text-sm md:text-base leading-relaxed text-gray-700">
              <span className="font-bold text-gray-900">Unsubscribe from operator marketing,</span> emails, texts and push notifications, so free-bet offers and "we miss you" messages stop arriving. See our guide to{" "}
              <Link to="/get-help/limit-gambling-ads" className="text-[#166B94] underline hover:text-[#005580]">
                limiting gambling ads and marketing
              </Link>.
            </div>

            <div className="py-5 text-sm md:text-base leading-relaxed text-gray-700">
              <span className="font-bold text-gray-900">Hand card control to someone trusted,</span> a partner, parent or friend, if you think you might find a way round your own blocks.
            </div>

            <div className="py-5 text-sm md:text-base leading-relaxed text-gray-700">
              <span className="font-bold text-gray-900">Close accounts rather than only self-excluding.</span> Self-exclusion stops an operator letting you play; closing the account removes stored card details too, and settles any account balance. Ask the operator to close the account and confirm any balance owed to you is returned.
            </div>
          </div>
        </section>

        {/* Section 6: What blocks don't do */}
        <section id="what-blocks-dont-do" className="scroll-mt-24">
          <div className="flex items-center space-x-2 text-xs md:text-sm font-bold uppercase tracking-wider text-[#166B94] mb-3">
            <span className="text-[#166B94] font-bold text-sm">—</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
            What blocks don't do
          </h2>

          <div className="bg-[#18181b] text-white rounded-xl p-6 md:p-8 border-l-[4px] border-[#166B94] shadow-xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] mb-3">
              BE CLEAR-EYED ABOUT THIS
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-normal">
              Blocks are not a cure. They buy time and cut down on impulsive access, and that time matters, but a determined workaround, another card, a borrowed device, a site outside a scheme's reach, can usually get round any single block. The gap a block creates, the pause between wanting to gamble and being able to, is exactly where support helps most. Put blocks in place, and use that gap to talk to someone.
            </p>
          </div>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl">
            Blocks also don't address the debt, or the reasons underneath the gambling. If money is the more pressing problem right now,{" "}
            <Link to="/get-help/spend-calculator" className="text-[#166B94] underline hover:text-[#005580] font-medium">
              get financial help &rarr;
            </Link>. If you want support with the gambling itself, beyond blocking access,{" "}
            <Link to="/get-help/treatment" className="text-[#166B94] underline hover:text-[#005580] font-medium">
              find treatment near you &rarr;
            </Link>.
          </p>
        </section>
      </div>

      {/* Section 7: More ways to get support Footer Banner */}
      <section id="more-ways" className="bg-[#18181b] text-white py-16 md:py-20 mt-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="w-12 h-[3px] bg-[#166B94] mx-auto mb-4" />

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            More ways to get support.
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Blocking access is one part of a wider picture. Talking to someone, treatment, and financial advice are all available alongside it, whenever you're ready.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="tel:08088020133"
              className="inline-flex items-center justify-center bg-[#166B94] hover:bg-[#005580] text-white font-semibold text-sm px-6 py-3.5 rounded-lg transition-colors"
            >
              0808 8020 133, National Gambling Helpline
            </a>
            <Link
              to="/get-help"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-semibold text-sm px-6 py-3.5 rounded-lg transition-colors"
            >
              More ways to get help
            </Link>
          </div>

          <p className="text-gray-400 text-xs sm:text-sm">
            Doing this on someone else's behalf?{" "}
            <Link to="/get-help/family-friends" className="text-white underline hover:text-gray-200">
              Our guide for family & friends
            </Link>{" "}
            covers blocking someone else's access, and the limits of your own role in it.
          </p>
        </div>
      </section>
    </div>
  );
}
