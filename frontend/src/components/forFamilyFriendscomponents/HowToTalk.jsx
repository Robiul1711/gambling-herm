import React from"react";

const steps = [
 {
 number: 1,
 title:"Pick the right moment",
 description:
"Not in the middle of a relapse, not after a big loss, not when they're drinking. A neutral evening, with privacy, when neither of you is rushed. If you're worried about safety, do not delay.",
 },
 {
 number: 2,
 title:"Lead with care, not accusation",
 description:
'"I\'ve been worried about you" lands better than"You\'ve been gambling again, haven\'t you". The first opens a door. The second closes one.',
 },
 {
 number: 3,
 title:'Use"I" statements',
 description:
'"I\'ve noticed you\'ve not been sleeping.""I\'m scared about the money.""I miss the version of you that was around six months ago." Specifics are harder to dismiss than generalisations.',
 },
 {
 number: 4,
 title:"Have one concrete suggestion ready",
 description: (
 <>
 Not five. One. The simplest is usually best:{" "}
 <strong className="text-gray-900 font-bold">
"Will you call the National Gambling Helpline with me? 0808 8020 133."
 </strong>{" "}
 Or:"Will you let me sit with you while you set up GAMSTOP?"
 </>
 ),
 },
 {
 number: 5,
 title:"Expect denial, and don't take it personally",
 description:
"Denial is not a personal rejection of you, it is a feature of how addiction protects itself. The fact that you've raised it stays with them, even if they argue with you in the moment.",
 },
 {
 number: 6,
 title:"Don't issue ultimatums on the first conversation",
 description:
"Unless you are prepared to follow through (and there are situations where you should) first conversations tend to land best when they're an invitation, not a threat. Save ultimatums for when you genuinely need them.",
 },
 {
 number: 7,
 title:"Know the line between supporting and enabling",
 description:
"Paying their gambling debts directly, lying for them, or covering up the harm tends to make recovery less likely, not more. Specialist counsellors can help you find your line.",
 },
];

export default function HowToTalk() {
 return (
 <section className="w-full py-16 md:py-24 bg-white text-[#1f2937]">
 <div className="section-padding-x">
 <div className="max-w-5xl mx-auto">
 {/* Top Accent Line */}
 <div className="w-12 h-[3px] bg-[#67b1cb] mb-5"></div>

 {/* Header */}
 <div className="mb-12">
 <h2 className="text-3xl md:text-[34px] font-bold text-[#111827] leading-tight tracking-tight mb-4">
 How to talk to someone, gently
 </h2>
 <p className="text-[#6b7280] text-[15px] sm:text-base leading-relaxed max-w-3xl">
 There is no perfect script. There is no conversation that"fixes"
 this in one go. But there are choices that make a conversation
 more likely to land.
 </p>
 </div>

 {/* Guide Steps Cards */}
 <div className="space-y-4">
 {steps.map((step) => (
 <div
 key={step.number}
 className="flex items-start gap-4 sm:gap-6 p-5 sm:p-6 bg-white border border-gray-200 hover:shadow-sm transition-shadow duration-300"
 >
 {/* Number Badge */}
 <div className="w-10 h-10 bg-[#156e94] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
 {step.number}
 </div>

 {/* Text Content */}
 <div className="flex-1 text-left">
 <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">
 {step.title}
 </h3>
 <div className="text-gray-500 text-sm sm:text-[15px] leading-relaxed">
 {step.description}
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}
