import React from "react";

const regions = [
  {
    region: "North East & Yorkshire",
    title: "Northern Gambling Service",
    location: "Leeds, Sunderland & region-wide",
    selfReferUrl: "https://www.leedsandyorkpft.nhs.uk/our-services/northern-gambling-service/",
    patientReferUrl: "https://www.leedsandyorkpft.nhs.uk/our-services/northern-gambling-service/",
    note: "Operated by Leeds & York Partnership NHS Foundation Trust.",
  },
  {
    region: "North West",
    title: "North West Gambling Service",
    location: "Manchester, Liverpool & Lancashire",
    selfReferUrl: "https://www.gmmh.nhs.uk/gambling-service",
    patientReferUrl: "https://www.gmmh.nhs.uk/gambling-service",
    note: "Operated by Greater Manchester Mental Health NHS FT.",
  },
  {
    region: "Midlands",
    title: "Midlands Gambling Clinic",
    location: "Birmingham, Stoke-on-Trent & East Midlands",
    selfReferUrl: "https://www.nhs.uk/live-well/addiction-support/gambling-addiction/",
    patientReferUrl: "https://www.nhs.uk/live-well/addiction-support/gambling-addiction/",
    note: null,
  },
  {
    region: "East of England",
    title: "East of England Specialist Clinic",
    location: "Cambridge, Norwich, Ipswich & Peterborough",
    selfReferUrl: "https://www.cpft.nhs.uk/service-detail/service/east-of-england-gambling-service-143/",
    patientReferUrl: "https://www.cpft.nhs.uk/service-detail/service/east-of-england-gambling-service-143/",
    note: null,
  },
  {
    region: "London",
    title: "National Problem Gambling Clinic",
    location: "Central & North West London (Soho)",
    selfReferUrl: "https://www.cnwl.nhs.uk/services/mental-health-services/addictions-and-substance-misuse/national-problem-gambling-clinic",
    patientReferUrl: "https://www.cnwl.nhs.uk/services/mental-health-services/addictions-and-substance-misuse/national-problem-gambling-clinic",
    note: "Operated by Central and North West London NHS Foundation Trust.",
  },
  {
    region: "South East",
    title: "Southern Gambling Service",
    location: "Southampton, Portsmouth, Brighton & Oxford",
    selfReferUrl: "https://www.southernhealth.nhs.uk/services/mental-health/southern-gambling-service",
    patientReferUrl: "https://www.southernhealth.nhs.uk/services/mental-health/southern-gambling-service",
    note: null,
  },
  {
    region: "South West",
    title: "South West Gambling Service",
    location: "Bristol, Exeter, Plymouth & Devon",
    selfReferUrl: "https://www.awp.nhs.uk/our-services/specialist-services/south-west-gambling-service",
    patientReferUrl: "https://www.awp.nhs.uk/our-services/specialist-services/south-west-gambling-service",
    note: "Operated by Avon and Wiltshire Mental Health Partnership NHS Trust.",
  },
  {
    region: "Scotland",
    title: "NHS Scotland Addictions Pathway",
    location: "Edinburgh (Lothian), Glasgow & Scotland-wide",
    selfReferUrl: "https://www.nhsinform.scot/healthy-living/substance-use/gambling-addiction/",
    patientReferUrl: "https://www.nhsinform.scot/healthy-living/substance-use/gambling-addiction/",
    note: null,
  },
  {
    region: "Wales",
    title: "NHS Wales & Living Room Cardiff",
    location: "Cardiff, Swansea, Newport & Wrexham",
    selfReferUrl: "https://www.nhs.uk/live-well/addiction-support/gambling-addiction/",
    patientReferUrl: "https://www.nhs.uk/live-well/addiction-support/gambling-addiction/",
    note: "Welsh-language helpline support available on request.",
  },
  {
    region: "Northern Ireland",
    title: "HSC & Dunlewey Addiction Services",
    location: "Belfast, Derry & regional outreach",
    selfReferUrl: "https://dunlewey.org/",
    patientReferUrl: "https://dunlewey.org/",
    note: null,
  },
];

const fallbackText =
  "The National Gambling Helpline (0808 8020 133) and the online services listed below are available everywhere in the UK. Many people in lower-coverage regions use a combination of online treatment, NHS Talking Therapies self-referral, and peer support. The helpline can also triage you to the nearest in-person service.";

export default function ByUKRegion() {
  return (
    <section
      id="by-uk-region"
      className="scroll-mt-24 w-full py-16 md:py-24 border-b border-gray-100 bg-[#fafafa]"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        {/* Header */}
        <header className="mb-10">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 mb-4 leading-tight">
            NHS gambling clinics & specialist services by region
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl">
            The NHS gambling-clinic network has grown rapidly. The map below
            lists specialist NHS services by region, each with direct self-referral
            and clinician referral routes. Verify against the NHS service finder before travelling.
          </p>
        </header>

        {/* Region Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {regions.map(({ region, title, location, selfReferUrl, patientReferUrl, note }) => (
            <div
              key={region}
              className="bg-white border border-[#b2d8ec] p-5 sm:p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Region label */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-[2px] bg-[#156E94] shrink-0" />
                  <span className="text-[#156E94] text-xs font-semibold tracking-wide">
                    {region}
                  </span>
                </div>

                {/* Service title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-5">
                  {location}
                </p>
              </div>

              {/* Action Links (FT5: two links only) */}
              <div className="border-t border-gray-100 pt-4 space-y-2">
                <a
                  href={selfReferUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#0092D0] hover:underline"
                >
                  Refer yourself →
                </a>
                <br />
                <a
                  href={patientReferUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#0092D0] hover:underline"
                >
                  Refer a patient →
                </a>

                {note && (
                  <p className="mt-3 text-[11px] text-gray-400 leading-relaxed border-t border-gray-50 pt-2">
                    {note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="border-l-4 border-[#156E94] bg-white px-4 py-5 mb-8 max-w-4xl">
          <p className="text-[14px] sm:text-[15px] font-semibold text-gray-800 mb-2">
            If your region isn't well-covered, you are not without options
          </p>
          <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed">
            {fallbackText}
          </p>
        </div>
        {/* Bottom footnote */}
        <p className="text-[12px] sm:text-sm text-gray-400 leading-relaxed max-w-4xl">
          The information on this page is updated quarterly and reflects
          publicly-available information about NHS and major third-sector
          provision. Service availability changes; verify with the service or
          with the National Gambling Helpline before travelling.
        </p>
      </div>
    </section>
  );
}
