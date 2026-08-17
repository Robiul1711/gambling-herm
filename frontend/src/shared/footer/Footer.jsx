import React from "react";
import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
import useClient from "@/hooks/useClient";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Fetch footer settings dynamically from CMS
  const { data: responseData } = useClient({
    queryKey: ["footerSettings"],
    url: "/footer",
  });

  const footerData = responseData?.data;

  // Custom X (formerly Twitter) SVG Icon
  const XIcon = () => (
    <svg
      className="w-4 h-4 fill-current"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  return (
    <footer className="w-full bg-[#2A2828] text-white border-t border-gray-800">
      {/* MAIN FOOTER CONTAINER */}
      <div className="section-padding-x py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* BRAND COLUMN (3/12 space) */}
          <div className="flex flex-col space-y-5 lg:col-span-3 text-left">
            <Link to="/" className="inline-block self-start">
              <img
                src={footerData?.logo || logo}
                alt="logo"
                className="md:w-28 sm:w-24 w-20 object-contain"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-normal">
              {footerData?.description ||
                "An independent UK organisation working to reduce the harm caused by gambling, through support, advocacy and research. We do not accept gambling-industry funding."}
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-1">
              {footerData?.instagramUrl && (
                <a
                  href={footerData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-gray-700  flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 hover:bg-gray-800 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {footerData?.facebookUrl && (
                <a
                  href={footerData.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-gray-700  flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 hover:bg-gray-800 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {footerData?.xUrl && (
                <a
                  href={footerData.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-gray-700  flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 hover:bg-gray-800 transition-all"
                  aria-label="X (formerly Twitter)"
                >
                  <XIcon />
                </a>
              )}
            </div>

            {/* Urgent Help Highlight Badge */}
            <div className="pt-3">
              <Link
                to="/urgent-help"
                className="inline-flex items-center gap-2 bg-[#d91f26] hover:bg-[#b8181e] text-white text-xs font-bold px-4 py-2.5  transition-colors shadow-xs"
              >
                <span>Need Urgent Help?</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* NAV DIRECTORY GRID (9/12 space, 4 Columns) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:col-span-9 text-left">
            {/* COLUMN 1: ABOUT & ENGAGE */}
            <div className="space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider border-b border-gray-700 pb-2">
                About &amp; Engage
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-gray-400 font-normal">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About GHUK
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about#vision"
                    className="hover:text-white transition-colors"
                  >
                    Vision, values &amp; aims
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about#funding"
                    className="hover:text-white transition-colors"
                  >
                    Funding &amp; COI
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about#team"
                    className="hover:text-white transition-colors"
                  >
                    Meet the team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register-keep-updated"
                    className="hover:text-white transition-colors"
                  >
                    Register &amp; keep updated
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 2: OUR WORK */}
            <div className="space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider border-b border-gray-700 pb-2">
                Our Work
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-gray-400 font-normal">
                <li>
                  <Link
                    to="/burden-of-harm"
                    className="hover:text-white transition-colors"
                  >
                    Burden of harm
                  </Link>
                </li>
                <li>
                  <Link
                    to="/burden-mapping-tool"
                    className="hover:text-white transition-colors"
                  >
                    Burden mapping tool
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gambling-explained"
                    className="hover:text-white transition-colors"
                  >
                    Gambling Explained
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gambling-tactics"
                    className="hover:text-white transition-colors"
                  >
                    Gambling Tactics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/understanding-gambling-harms"
                    className="hover:text-white transition-colors"
                  >
                    Understanding harms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/stigma-and-language"
                    className="hover:text-white transition-colors"
                  >
                    Stigma &amp; language
                  </Link>
                </li>
                <li>
                  <Link
                    to="/neurodivergence"
                    className="hover:text-white transition-colors"
                  >
                    Neurodivergence
                  </Link>
                </li>
                <li>
                  <Link
                    to="/inequality-and-gambling-harm"
                    className="hover:text-white transition-colors"
                  >
                    Inequality &amp; harm
                  </Link>
                </li>
                <li>
                  <Link
                    to="/children-and-safeguarding"
                    className="hover:text-white transition-colors"
                  >
                    Children &amp; safeguarding
                  </Link>
                </li>
                <li>
                  <Link
                    to="/road-safety-and-gambling"
                    className="hover:text-white transition-colors"
                  >
                    Road safety &amp; gambling
                  </Link>
                </li>
                <li>
                  <Link
                    to="/policy-and-advocacy"
                    className="hover:text-white transition-colors"
                  >
                    Policy &amp; advocacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/members-only-campaign"
                    className="hover:text-white transition-colors"
                  >
                    Members Only Campaign
                  </Link>
                </li>
                <li>
                  <Link
                    to="/news-and-research"
                    className="hover:text-white transition-colors"
                  >
                    News &amp; research
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="hover:text-white transition-colors"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 3: FOR PROFESSIONALS */}
            <div className="space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider border-b border-gray-700 pb-2">
                For Professionals
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-gray-400 font-normal">
                <li>
                  <Link
                    to="/professionals"
                    className="hover:text-white transition-colors"
                  >
                    Professionals hub
                  </Link>
                </li>
                <li>
                  <Link
                    to="/professionals/healthcare"
                    className="hover:text-white transition-colors"
                  >
                    Healthcare (MECC)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/professionals/public-health"
                    className="hover:text-white transition-colors"
                  >
                    Public health teams
                  </Link>
                </li>
                <li>
                  <Link
                    to="/professionals/teachers-cyp"
                    className="hover:text-white transition-colors"
                  >
                    Teachers &amp; CYP
                  </Link>
                </li>
                <li>
                  <Link
                    to="/professionals/researchers"
                    className="hover:text-white transition-colors"
                  >
                    Researchers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sign-in"
                    className="hover:text-white transition-colors"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="hover:text-white transition-colors"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    to="/members-library"
                    className="hover:text-white transition-colors"
                  >
                    Members library
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 4: GET HELP & TOOLS */}
            <div className="space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider border-b border-gray-700 pb-2">
                Get Help &amp; Tools
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-gray-400 font-normal">
                <li>
                  <Link
                    to="/urgent-help"
                    className="hover:text-white font-semibold transition-colors"
                  >
                    Crisis &amp; urgent help
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-help"
                    className="hover:text-white transition-colors"
                  >
                    Gambling is harming me
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-help/family-friends"
                    className="hover:text-white transition-colors"
                  >
                    Family &amp; friends
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-help/young-people"
                    className="hover:text-white transition-colors"
                  >
                    Young people
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-help/treatment"
                    className="hover:text-white transition-colors"
                  >
                    Find treatment near you
                  </Link>
                </li>
                <li>
                  <Link
                    to="/thurrock"
                    className="hover:text-white transition-colors"
                  >
                    Support in Thurrock
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-help/check-in"
                    className="hover:text-white transition-colors"
                  >
                    Check-in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-help/self-assessment"
                    className="hover:text-white transition-colors"
                  >
                    Self-assessment
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-help/affected-others-check-in"
                    className="hover:text-white transition-colors"
                  >
                    Affected-others check-in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-help/spend-calculator"
                    className="hover:text-white transition-colors"
                  >
                    Spend calculator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-help/blocking-tools"
                    className="hover:text-white transition-colors"
                  >
                    Blocking tools
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-help/limit-gambling-ads"
                    className="hover:text-white transition-colors"
                  >
                    Limit gambling ads
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* LOWER BASE COMPLIANCE FOOTER BAR */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-medium">
          <span>
            &copy; {currentYear}{" "}
            {footerData?.copyrightText || "Gambling Harm UK (GHUK)."} All rights
            reserved.
          </span>

          <div className="flex items-center space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span>&middot;</span>
            <Link to="/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
            <span>&middot;</span>
            <Link
              to="/accessibility"
              className="hover:text-white transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
