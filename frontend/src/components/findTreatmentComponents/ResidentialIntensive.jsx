import React from "react";

export default function ResidentialIntensive() {
  return (
    <section
      id="residential-intensive"
      className="scroll-mt-24 w-full py-16 md:py-24 border-b border-gray-100 bg-[#fafafa]"
    >
      <div className="section-padding-x">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 leading-tight">
            Residential and intensive treatment
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-[#5f6472] max-w-3xl mx-auto leading-relaxed">
            For people experiencing the most severe gambling harm, intensive
            treatment can be a critical step. UK provision is small in absolute
            terms but free at the point of need.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Card 1: Gordon Moody */}
          <div className="border border-[#b2d8ec] rounded-2xl bg-white p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-start">
            <h3 className="text-lg font-bold text-[#1a1a1a] mb-4 leading-snug">
              Gordon Moody
            </h3>
            <div className="space-y-4 text-[14px] sm:text-[15px] leading-relaxed text-[#5f6472]">
              <p>
                <strong className="text-gray-900">Residential.</strong> Free,
                12-week residential treatment for men and women experiencing
                severe gambling harm, at sites in the West Midlands and Greater
                Manchester. Referrals via gordonmoody.org.uk or via the National
                Gambling Helpline.
              </p>
              <p>
                <strong className="text-gray-900">Online Retreat & Counselling.</strong>{" "}
                An intensive online programme as an alternative to residential.
              </p>
            </div>
          </div>

          {/* Card 2: NHS inpatient pathways */}
          <div className="border border-[#b2d8ec] rounded-2xl bg-white p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-start">
            <h3 className="text-lg font-bold text-[#1a1a1a] mb-4 leading-snug">
              NHS inpatient pathways
            </h3>
            <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#5f6472]">
              The NHS specialist clinics can refer into inpatient mental-health
              provision where co-occurring needs (severe depression, suicidality,
              acute alcohol or drug dependence) require it. Inpatient routes
              specifically for gambling harm remain limited; the picture is
              improving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
