import React from "react";

export default function PeerSupportMeetings() {
  const gaMeetings = [
    {
      location: "St Laurence Church",
      address: ", Corbets Tey Road, Upminster, RM14 2BB",
      time: "Mondays, 12pm-2pm",
    },
    {
      location: "Basildon",
      address: ", St. Andrew's Church, 3 The Fremnells, Basildon, SS14 2QX",
      time: "Tuesdays, 7:30pm-10pm",
    },
    {
      location: "St Margaret's Church Hall",
      address: ", The Green, Stanford-le-Hope, SS17 0EP",
      time: "Wednesdays, 8pm-10pm",
    },
    {
      location: "Brentwood",
      address: ", Brentwood Baptist Church, 91 Kings Rd, Brentwood, CM14 4DR",
      time: "Thursdays, 8:15pm-10:15pm",
    },
    {
      location: "Forward Trust",
      address: ", 65-67 Orsett Road, Grays, RM17 5HJ",
      time: "Fridays, 11am-12:30pm",
    },
  ];

  const gamAnonMeetings = [
    {
      location: "All Saints Church",
      address: ", Stansted Road, Bishop's Stortford, CM23 2DY",
      time: "Monthly on Mondays, 8pm.",
      hasEmailLink: true,
    },
    {
      location: "Brentwood Baptist Church",
      address: " — 91 Kings Road, Brentwood, CM14 4DR",
      time: "Thursdays, 8:15pm-10:15pm",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-white border-t border-gray-200/40">
      <div className="max-w-5xl mx-auto px-4 text-[#1f2937]">
        {/* Header */}
        <header className="mb-10">
          <div className="w-12 h-1 bg-[#156E94] mb-4"></div>{" "}
          {/* Teal accent bar */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Peer support & local meetings
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
            Talking to people who've been there carries something that other
            support can't. These groups meet regularly in and around Thurrock.
          </p>
        </header>

        {/* Section 1: Gamblers Anonymous */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Gamblers Anonymous
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            Free 12-step meetings for people affected by their own gambling. No
            commitment to stop is required to attend, only a desire to.
          </p>

          <div className="bg-[#EEF7FC] border-l-4 border-[#156E94] p-6 md:p-8">
            <h4 className="font-bold text-slate-800 text-base sm:text-lg mb-4">
              Local meetings near Thurrock
            </h4>
            <div className="space-y-4">
              {gaMeetings.map((meeting, index) => (
                <div
                  key={index}
                  className="border-b border-[#D6E6F2] pb-4 last:border-b-0 last:pb-0"
                >
                  <p className="text-slate-800 text-[15px] leading-relaxed">
                    <strong className="font-bold text-gray-900">
                      {meeting.location}
                    </strong>
                    {meeting.address}
                  </p>
                  <p className="text-slate-600 text-sm mt-1">{meeting.time}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#D6E6F2] text-xs sm:text-sm text-slate-600">
              More meetings further afield:{" "}
              <a
                href="https://www.gamblersanonymous.org.uk/meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium hover:text-[#156E94] transition-colors"
              >
                gamblersanonymous.org.uk/meeting
              </a>
            </div>
          </div>
        </div>

        {/* Section 2: Gam-Anon */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Gam-Anon: for affected others
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            If you're affected by someone else's gambling, Gam-Anon is for you.
            Meetings are led by people who've been where you are.
          </p>

          <div className="bg-[#EEF7FC] border-l-4 border-[#156E94] p-6 md:p-8">
            <h4 className="font-bold text-slate-800 text-base sm:text-lg mb-4">
              Local Gam-Anon meetings
            </h4>
            <div className="space-y-4">
              {gamAnonMeetings.map((meeting, index) => (
                <div
                  key={index}
                  className="border-b border-[#D6E6F2] pb-4 last:border-b-0 last:pb-0"
                >
                  <p className="text-slate-800 text-[15px] leading-relaxed">
                    <strong className="font-bold text-gray-900">
                      {meeting.location}
                    </strong>
                    {meeting.address}
                  </p>
                  <p className="text-slate-600 text-sm mt-1">
                    {meeting.time}
                    {meeting.hasEmailLink && (
                      <a
                        href="mailto:info@gamanon.org.uk"
                        className="underline font-medium hover:text-[#156E94] transition-colors"
                      >
                        Email for details.
                      </a>
                    )}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#D6E6F2] text-xs sm:text-sm text-slate-600">
              More meetings further afield:{" "}
              <a
                href="https://www.gamanon.org.uk/meetings"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium hover:text-[#156E94] transition-colors"
              >
                gamanon.org.uk/meetings
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
