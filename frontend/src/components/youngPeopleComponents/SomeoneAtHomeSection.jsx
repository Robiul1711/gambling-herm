import React from "react";

export default function SomeoneAtHomeSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 md:py-20 border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Teal Accent Line */}
        <div className="w-8 h-[3px] bg-[#156E94] mb-4"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          If it's about someone at home
        </h2>

        {/* Paragraph 1 */}
        <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal mb-6">
          When a parent, brother, sister or someone else at home gambles, it can change everything: rows about money, tension you can feel, promises that don't stick, worry that keeps you up at night.
        </p>

        {/* Paragraph 2 */}
        <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal mb-10">
          If any of that sounds familiar, two things are true: It is not your job to fix it. And you didn't cause it. Adults' problems are for adults to sort out. What you can do is tell someone how it's affecting <em>you</em>.
        </p>

        {/* Resource List Items */}
        <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed">
          {/* Item 1 */}
          <div className="pt-3 border-t border-dashed border-slate-300">
            <p>
              <strong className="font-bold text-slate-900">Childline, 0800 1111.</strong>{" "}
              You can talk about anything, and you can stay anonymous. They talk to lots of young people about a parent's gambling.
            </p>
          </div>

          {/* Item 2 */}
          <div className="pt-3 border-t border-dashed border-slate-300">
            <p>
              <strong className="font-bold text-slate-900">National Gambling Helpline, 0808 8020 133.</strong>{" "}
              Free, 24/7, phone or live chat. They support young people harmed by gambling, including when it's someone else's gambling.
            </p>
          </div>

          {/* Item 3 */}
          <div className="pt-3 border-t border-dashed border-slate-300">
            <p>
              <strong className="font-bold text-slate-900">NSPCC, 0808 800 5000,</strong>{" "}
              if you're ever worried about your safety or someone else's at home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
