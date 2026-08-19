import React from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <section className="w-full text-[#1f2937] py-12 md:py-20">
      <div className="section-padding-x">
        <div className="max-w-5xl mx-auto text-left">
          
          {/* Header block */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            {/* Top Label */}
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-Primary mb-4">
              <span className="w-6 h-[2px] bg-Primary" />
              <span>Legal</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-slate-900 tracking-tight leading-tight mb-5">
              Privacy notice
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-4 max-w-4xl font-normal">
              How Gambling Harm UK collects, uses and protects your personal data, and the rights you have
              over it. We keep this short and plain.
            </p>

            <span className="text-xs sm:text-sm text-slate-400 block italic">
              Last updated: June 2026.
            </span>
          </div>

          {/* Content sections */}
          <div className="space-y-12">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Who we are
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Gambling Harm UK ("GHUK", "we", "us") is an independent UK charity, registered charity number{" "}
                <span className="font-semibold text-slate-900">1196538</span>. For the purposes of UK data protection law (the
                UK GDPR and the Data Protection Act 2018) GHUK is the data controller for the personal data
                described in this notice. You can contact us about anything in this notice at{" "}
                <a href="mailto:hello@gamblingharm.com" className="text-Primary hover:text-Primary2 hover:underline font-medium transition-colors">
                  hello@gamblingharm.com
                </a>.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                The information we collect
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-5">
                We collect only what we need to do our work and respond to you.
              </p>
              
              <div className="space-y-5">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-semibold">Information you give us.</strong> If you email us, contact
                  us, or sign up to hear about our work, we hold the details you provide, typically your name
                  and email address, and the content of your message.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-semibold">Information collected automatically.</strong> Like most
                  websites, our web server keeps standard technical logs (for example IP address, browser type
                  and pages requested) to keep the site secure and working. If we use website analytics, we use a
                  privacy-friendly service configured not to track you across other sites and not to build an
                  advertising profile.
                </p>
              </div>

              {/* Callout box */}
              <div className="border-l-4 border-Primary bg-sky-50/60 p-6 md:p-8 rounded-r-lg mt-8">
                <span className="text-xs sm:text-sm font-bold text-Primary uppercase tracking-wider block mb-2">
                  Our self-assessment and check-in tools
                </span>
                <p className="text-sm sm:text-base md:text-[17px] text-slate-700 leading-relaxed">
                  The screening and check-in tools on this site are designed to run in your browser. Your answers and
                  results are not sent to us or stored by us, and we cannot see them. They are for your information
                  only.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Why we use your data, and our lawful basis
              </h2>
              <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
                <p className="py-5 text-base sm:text-lg text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-semibold">To respond to you</strong> when you contact us, on the basis of
                  our legitimate interest in answering enquiries.
                </p>
                <p className="py-5 text-base sm:text-lg text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-semibold">To send you updates</strong> about our work, only where you
                  have asked us to, on the basis of your consent. You can withdraw consent and unsubscribe at any
                  time.
                </p>
                <p className="py-5 text-base sm:text-lg text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-semibold">To keep the site secure and improve it</strong>, on the basis
                  of our legitimate interest in running a safe, usable website.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Who we share it with
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                We do not sell your data, and we never share it with the gambling industry. We use a small number
                of trusted service providers to operate the site and communicate with you, for example email and
                newsletter providers and our website host. These providers act on our instructions. Some embedded
                content relies on third parties (see our cookies page), including Google Fonts and YouTube. We
                may disclose information where the law requires us to.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                How long we keep it
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                We keep personal data only as long as we need it for the purpose we collected it, or as long as the
                law requires, after which it is securely deleted. Enquiry correspondence is generally kept while
                it is useful and then removed; mailing-list details are kept until you unsubscribe.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Your rights
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Under UK data protection law you have the right to access the personal data we hold about you, to
                ask us to correct or delete it, to object to or restrict how we use it, and to data portability where it
                applies. To exercise any of these rights, email{" "}
                <a href="mailto:hello@gamblingharm.com" className="text-Primary hover:text-Primary2 hover:underline font-medium transition-colors">
                  hello@gamblingharm.com
                </a>. We will respond within the timescales set by law (normally one month).
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Complaints
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                If you are unhappy with how we have handled your data, please tell us first so we can put it right.
                You also have the right to complain to the Information Commissioner's Office (ICO), the UK regulator, at{" "}
                <a
                  href="https://ico.org.uk/make-a-complaint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-Primary hover:text-Primary2 hover:underline font-medium transition-colors"
                >
                  ico.org.uk/make-a-complaint
                </a>.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Changes to this notice
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                We may update this notice from time to time. The date at the top shows when it was last reviewed.
              </p>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-gray-200 flex items-center space-x-3 text-sm text-slate-500 font-medium">
            <span>Related:</span>
            <Link to="/cookies" className="text-Primary hover:text-Primary2 hover:underline transition-colors">Cookies</Link>
            <span>·</span>
            <Link to="/accessibility" className="text-Primary hover:text-Primary2 hover:underline transition-colors">Accessibility</Link>
          </div>

        </div>
      </div>
    </section>
  );
}
