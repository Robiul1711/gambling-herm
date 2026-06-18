import React from 'react';

const AntiStigmaCampaignProblem = () => {
  return (
    <section id="anti-stigma-problem" className="">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Title */}
        <h2 className="text-3xl md:text-[40px] font-bold text-[#2d2d2d] leading-tight mb-6 tracking-tight">
          The "anti-stigma campaign" problem
        </h2>

        {/* Intro Text */}
        <p className="text-[#2d2d2d] text-[15px] md:text-base leading-7 md:leading-8  mb-10">
          Over the last decade, the largest UK-funded anti-stigma campaigns have been industry-aligned. The most 
          recent example, GambleAware's Let's Open Up About Gambling, was a sophisticated, well-produced 
          campaign whose framing was nevertheless built on assumptions we think are wrong.
        </p>

        {/* Industry-Aligned Framing White Card */}
        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white mb-10  shadow-sm">
          <h4 className="text-[#17a9df] text-[13px] font-semibold tracking-wider mb-5">
            Industry-Aligned Anti-Stigma Framing
          </h4>

          <p className="italic line-through text-xl text-gray-700 font-medium mb-6">
            "Talk about it. Open up. Seeking help is normal. Take action."
          </p>

          <div className="space-y-6 text-[#687076] text-[14px] md:text-[15px] leading-7">
            <p>
              None of those messages are wrong on their face. The problem is what they leave out. <strong className="text-[#2d2d2d] font-semibold">"Anti-Stigma" Framed Only 
              As Encouragement To Talk Locates The Change At The Individual Level, The Harmed Person Should Feel Less 
              Shame And Speak Up.</strong> It is silent on the system that produces the shame, sells the product, designs the marketing, 
              and operates the regulatory environment that allows all three. The implicit message is: <span className="italic">stigma is in you; talking is the 
              fix.</span>
            </p>

            <p>
              Industry funding for anti-stigma campaigns is also strategically convenient. It locates harm-reduction effort 
              downstream (at the help-seeking moment), keeps the spotlight off the product, and gives the industry a reputational 
              dividend.
            </p>
          </div>
        </div>

        {/* Dark Position Callout Card */}
        <div className="bg-[#262222] rounded-2xl overflow-hidden shadow-xl border-l-[6px] border-[#17a9df] ">
          <div className="p-8 md:p-10">
            <h4 className="text-[#17a9df] text-xs font-semibold uppercase tracking-wider mb-5">
              OUR POSITION
            </h4>
            
            <div className="space-y-6 text-gray-300 text-[14px] md:text-[15px] leading-7">
              <p>
                GHUK supports stigma reduction, we believe the social cost of disclosure is the most under-addressed 
                problem in UK gambling-harm policy. But we are explicit that "anti-stigma" cannot be the only or the primary 
                intervention. Stigma reduction without product safety, marketing restriction and treatment provision is a 
                half-measure that lets the industry off the hook for the conditions that produce the stigma in the first place.
              </p>

              <p>
                We also use language deliberately: <span className="italic">"people affected by gambling"</span> not <span className="italic">"problem gamblers"</span>. We say <span className="italic">"harm 
                caused by gambling"</span>, not <span className="italic font-sans">"a gambling problem"</span>. We don't use <span className="italic">"responsible gambling"</span>. The framing change is 
                part of the stigma work, not separate from it.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AntiStigmaCampaignProblem;