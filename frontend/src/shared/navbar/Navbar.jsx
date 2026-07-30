import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import CrisisHeader from "./CrisisHeader";
import Logo from "@/assets/images/logo.png";
import useClient from "@/hooks/useClient";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = React.useState(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isNavVisible, setIsNavVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  // Fetch brand logo dynamically from footer settings
  const { data: responseData } = useClient({
    queryKey: ["footerSettings"],
    url: "/footer",
  });

  const footerData = responseData?.data;

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      if (currentScrollY <= 80) {
        // Always show near the top of the page
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down - hide navbar smoothly
        setIsNavVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (menu) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
  };

  const { pathname, hash } = useLocation();

  const isLinkActive = (to) => {
    if (to.includes("#")) {
      const [path, targetHash] = to.split("#");
      return pathname === path && hash === `#${targetHash}`;
    }
    return pathname === to && !hash;
  };

  const isAboutActive =
    pathname === "/about" || pathname === "/register-keep-updated";

  const isWorkActive = [
    "/burden-of-harm",
    "/burden-mapping-tool",
    "/gambling-explained",
    "/gambling-tactics",
    "/understanding-gambling-harms",
    "/stigma-and-language",
    "/neurodivergence",
    "/inequality-and-gambling-harm",
    "/road-safety-and-gambling",
    "/policy-and-advocacy",
    "/members-only-campaign",
    "/news-and-research",
    "/events",
  ].includes(pathname) || pathname.startsWith("/news-and-research/");

  const isProfessionalsActive = [
    "/professionals",
    "/professionals/healthcare",
    "/professionals/public-health",
    "/professionals/children-young-people",
    "/professionals/teachers-cyp",
    "/professionals/researchers",
    "/sign-in",
    "/register",
    "/members-library",
  ].includes(pathname);

  const isHelpActive = [
    "/get-help",
    "/get-help/check-in",
    "/get-help/treatment",
    "/get-help/family-friends",
    "/get-help/young-people",
    "/get-help/self-assessment",
    "/get-help/affected-others-check-in",
    "/get-help/spend-calculator",
    "/get-help/blocking-tools",
    "/get-help/limit-gambling-ads",
    "/urgent-help",
    "/thurrock",
  ].includes(pathname);

  const getMobileSubLinkClass = (to) => {
    const active = isLinkActive(to);
    return `block px-4 py-2.5 text-sm transition-colors ${
      active
        ? "font-semibold text-Primary bg-[#E0F2FE]"
        : "font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
    }`;
  };

  // Shared active style for desktop nav triggers & links
  const navTriggerCls = (isActive) =>
    `text-base hover:text-Primary! transition-colors rounded-md data-[state=open]:bg-[#EFF6FF]! data-[state=open]:text-Primary! data-[state=open]:border-b-2! data-[state=open]:border-Primary! ${
      isActive
        ? "text-Primary! font-bold! bg-[#EFF6FF]! border-b-2! border-Primary!"
        : "text-gray-700 font-medium hover:bg-[#EFF6FF]"
    }`;

  // Shared active style for mobile accordion buttons
  const mobileBtnCls = (isActive) =>
    `w-full flex items-center justify-between px-4 py-3 text-base transition-colors ${
      isActive
        ? "font-bold text-Primary bg-blue-50/10"
        : "font-medium text-gray-800 hover:bg-gray-50"
    }`;

  return (
    <>
      {/* 1. Full-width Crisis Banner (Outside sticky wrapper to prevent scroll jitter/blinking) */}
      <CrisisHeader />

      {/* WRAPPER: Handles top pinning, sticky scroll transparency, and hide/show on scroll direction */}
      <div
        className={`w-full flex flex-col sticky top-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100"
            : "bg-white border-b border-transparent"
        } ${
          isNavVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* 2. Main Navigation Bar */}
        <header className="w-full">
          <div className="section-padding-x pt-2 flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <img
                src={footerData?.logo || Logo}
                alt="logo"
                className="md:w-25 sm:w-20 w-15 object-contain"
              />
            </Link>

            {/* DESKTOP NAVIGATION (shadcn/ui) */}
            <div className="flex items-center gap-5">
              <NavigationMenu
                className="static hidden md:flex items-center"
                viewport={false}
              >
                <NavigationMenuList className="static flex space-x-1">

                  {/* Home */}
                  <NavigationMenuItem>
                    <Link
                      to="/"
                      className={`text-base transition-colors px-4 py-2 inline-flex items-center rounded-md ${
                        pathname === "/" && !hash
                          ? "text-Primary font-bold bg-[#EFF6FF] border-b-2 border-Primary"
                          : "text-gray-700 font-medium hover:text-Primary hover:bg-[#EFF6FF]"
                      }`}
                    >
                      Home
                    </Link>
                  </NavigationMenuItem>

                  {/* About Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={navTriggerCls(isAboutActive)}>
                      About
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-2 gap-8 p-6 w-[500px]">
                        <div>
                          <h4 className="text-[11px] font-bold text-Primary pb-2 border-b border-gray-200 mb-3 tracking-widest uppercase">
                            The Charity
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem to="/about" active={isLinkActive("/about")}>
                              About GHUK
                            </DropdownItem>
                            <DropdownItem to="/about#vision" active={isLinkActive("/about#vision")}>
                              Vision, values &amp; aims
                            </DropdownItem>
                            <DropdownItem to="/about#funding" active={isLinkActive("/about#funding")}>
                              Funding &amp; conflict of interest
                            </DropdownItem>
                            <DropdownItem to="/about#team" active={isLinkActive("/about#team")}>
                              Meet the team
                            </DropdownItem>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-[11px] font-bold text-Primary pb-2 border-b border-gray-200 mb-3 tracking-widest uppercase">
                            Engage
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem to="/register-keep-updated" active={isLinkActive("/register-keep-updated")}>
                              Register &amp; keep updated
                            </DropdownItem>
                            <DropdownItem to="/about#contact" active={isLinkActive("/about#contact")}>
                              Contact us
                            </DropdownItem>
                          </ul>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Our work Dropdown — 4 columns */}
                  <NavigationMenuItem className="static">
                    <NavigationMenuTrigger className={navTriggerCls(isWorkActive)}>
                      Our work
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="md:right-0 md:left-auto md:w-auto">
                      <div className="grid grid-cols-4 gap-6 p-6 w-[900px]">
                        {/* Col 1 — Evidence Base */}
                        <div>
                          <h4 className="text-[11px] font-bold text-Primary pb-2 border-b border-gray-200 mb-3 uppercase tracking-widest">
                            Evidence Base
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem to="/burden-of-harm" active={isLinkActive("/burden-of-harm")}>
                              Burden of harm
                            </DropdownItem>
                            <DropdownItem to="/burden-mapping-tool" active={isLinkActive("/burden-mapping-tool")}>
                              Burden mapping tool
                            </DropdownItem>
                            <DropdownItem to="/gambling-explained" active={isLinkActive("/gambling-explained")}>
                              Gambling Explained
                            </DropdownItem>
                            <DropdownItem to="/gambling-tactics" active={isLinkActive("/gambling-tactics")}>
                              Gambling Tactics
                            </DropdownItem>
                          </ul>
                        </div>
                        {/* Col 2 — Harm in Depth */}
                        <div>
                          <h4 className="text-[11px] font-bold text-Primary pb-2 border-b border-gray-200 mb-3 uppercase tracking-widest">
                            Harm in Depth
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem to="/understanding-gambling-harms" active={isLinkActive("/understanding-gambling-harms")}>
                              Understanding gambling harms
                            </DropdownItem>
                            <DropdownItem to="/stigma-and-language" active={isLinkActive("/stigma-and-language")}>
                              Stigma &amp; language
                            </DropdownItem>
                            <DropdownItem to="/neurodivergence" active={isLinkActive("/neurodivergence")}>
                              Neurodivergence
                            </DropdownItem>
                          </ul>
                        </div>
                        {/* Col 3 — Groups & Settings */}
                        <div>
                          <h4 className="text-[11px] font-bold text-Primary pb-2 border-b border-gray-200 mb-3 uppercase tracking-widest">
                            Groups &amp; Settings
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem to="/inequality-and-gambling-harm" active={isLinkActive("/inequality-and-gambling-harm")}>
                              Inequality &amp; gambling harm
                            </DropdownItem>
                            <DropdownItem to="/professionals/children-young-people" active={isLinkActive("/professionals/children-young-people")}>
                              Children &amp; safeguarding
                            </DropdownItem>
                            <DropdownItem to="/road-safety-and-gambling" active={isLinkActive("/road-safety-and-gambling")}>
                              Road safety &amp; gambling
                            </DropdownItem>
                          </ul>
                        </div>
                        {/* Col 4 — Campaigns, Policy & News */}
                        <div>
                          <h4 className="text-[11px] font-bold text-Primary pb-2 border-b border-gray-200 mb-3 uppercase tracking-widest">
                            Campaigns, Policy &amp; News
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem to="/policy-and-advocacy" active={isLinkActive("/policy-and-advocacy")}>
                              Policy &amp; advocacy
                            </DropdownItem>
                            <DropdownItem to="/members-only-campaign" active={isLinkActive("/members-only-campaign")}>
                              Members Only Campaign
                            </DropdownItem>
                            <DropdownItem to="/news-and-research" active={pathname.startsWith("/news-and-research")}>
                              News &amp; research
                            </DropdownItem>
                            <DropdownItem to="/events" active={isLinkActive("/events")}>
                              Events
                            </DropdownItem>
                          </ul>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* For professionals Dropdown */}
                  <NavigationMenuItem className="static">
                    <NavigationMenuTrigger className={navTriggerCls(isProfessionalsActive)}>
                      For professionals
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="md:right-0 md:left-auto md:w-auto">
                      <div className="grid grid-cols-2 gap-8 p-6 w-[540px]">
                        <div className="space-y-5">
                          <div>
                            <h4 className="text-[11px] font-bold text-Primary pb-2 border-b border-gray-200 mb-3 tracking-widest uppercase">
                              Overview
                            </h4>
                            <ul className="space-y-1">
                              <DropdownItem to="/professionals" active={isLinkActive("/professionals")}>
                                Professionals hub
                              </DropdownItem>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-[11px] font-bold text-Primary pb-2 border-b border-gray-200 mb-3 tracking-widest uppercase">
                              Members
                            </h4>
                            <ul className="space-y-1">
                              <DropdownItem to="/sign-in" active={isLinkActive("/sign-in")}>
                                Sign in
                              </DropdownItem>
                              <DropdownItem to="/register" active={isLinkActive("/register")}>
                                Register
                              </DropdownItem>
                              <DropdownItem to="/members-library" active={isLinkActive("/members-library")}>
                                Members library
                              </DropdownItem>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-[11px] font-bold text-Primary pb-2 border-b border-gray-200 mb-3 tracking-widest uppercase">
                            By Audience
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem to="/professionals/healthcare" active={isLinkActive("/professionals/healthcare")}>
                              Healthcare professionals (MECC)
                            </DropdownItem>
                            <DropdownItem to="/professionals/public-health" active={isLinkActive("/professionals/public-health")}>
                              Public health teams
                            </DropdownItem>
                            <DropdownItem to="/professionals/teachers-cyp" active={isLinkActive("/professionals/teachers-cyp")}>
                              Teachers &amp; CYP professionals
                            </DropdownItem>
                            <DropdownItem to="/professionals/researchers" active={isLinkActive("/professionals/researchers")}>
                              Researchers
                            </DropdownItem>
                          </ul>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Get help now Dropdown */}
                  <NavigationMenuItem className="static">
                    <NavigationMenuTrigger className={navTriggerCls(isHelpActive)}>
                      Get help now
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="md:right-0 md:left-auto md:w-auto">
                      <div className="w-[840px]">
                        {/* Full-width crisis row */}
                        <Link
                          to="/urgent-help"
                          className="flex flex-col px-6 py-3 bg-[#EFF6FF] border-b border-blue-100 hover:bg-blue-100 transition-colors"
                        >
                          <span className="font-bold text-Primary text-[15px]">Crisis &amp; urgent help</span>
                          <span className="text-sm text-slate-500">If you need to speak to someone right now</span>
                        </Link>
                        {/* 4 columns below */}
                        <div className="grid grid-cols-4 gap-6 p-6">
                          <div>
                            <h4 className="text-[11px] font-bold text-Primary pb-2 border-b border-gray-200 mb-3 uppercase tracking-widest">
                              Get support
                            </h4>
                            <ul className="space-y-1">
                              <DropdownItem to="/get-help" active={isLinkActive("/get-help")}>
                                Gambling is harming me
                              </DropdownItem>
                              <DropdownItem to="/get-help/family-friends" active={isLinkActive("/get-help/family-friends")}>
                                Family &amp; friends
                              </DropdownItem>
                              <DropdownItem to="/get-help/young-people" active={isLinkActive("/get-help/young-people")}>
                                Young people
                              </DropdownItem>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-[11px] font-bold text-Primary pb-2 border-b border-gray-200 mb-3 uppercase tracking-widest">
                              Find services
                            </h4>
                            <ul className="space-y-1">
                              <DropdownItem to="/get-help/treatment" active={isLinkActive("/get-help/treatment")}>
                                Find treatment near you
                              </DropdownItem>
                              <DropdownItem to="/thurrock" active={isLinkActive("/thurrock")}>
                                Support in Thurrock
                              </DropdownItem>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-[11px] font-bold text-Primary pb-2 border-b border-gray-200 mb-3 uppercase tracking-widest">
                              Check where you stand
                            </h4>
                            <ul className="space-y-1">
                              <DropdownItem to="/get-help/check-in" active={isLinkActive("/get-help/check-in")}>
                                Check-in
                              </DropdownItem>
                              <DropdownItem to="/get-help/self-assessment" active={isLinkActive("/get-help/self-assessment")}>
                                Self-assessment
                              </DropdownItem>
                              <DropdownItem to="/get-help/affected-others-check-in" active={isLinkActive("/get-help/affected-others-check-in")}>
                                Affected-others check-in
                              </DropdownItem>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-[11px] font-bold text-Primary pb-2 border-b border-gray-200 mb-3 uppercase tracking-widest">
                              Tools to take action
                            </h4>
                            <ul className="space-y-1">
                              <DropdownItem to="/get-help/spend-calculator" active={isLinkActive("/get-help/spend-calculator")}>
                                Spend calculator
                              </DropdownItem>
                              <DropdownItem to="/get-help/blocking-tools" active={isLinkActive("/get-help/blocking-tools")}>
                                Blocking tools
                              </DropdownItem>
                              <DropdownItem to="/get-help/limit-gambling-ads" active={isLinkActive("/get-help/limit-gambling-ads")}>
                                Limit gambling ads
                              </DropdownItem>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>

              {/* Desktop CTA Action Button */}
              {/* <div className="hidden md:flex items-center">
                <Link
                  to="/urgent-help"
                  className="bg-[#C92525] hover:bg-[#b01f1f] text-white font-bold px-5 py-2 transition-colors text-base shadow-sm inline-flex items-center"
                >
                  Urgent Help <span className="ml-2 font-normal">&rarr;</span>
                </Link>
              </div> */}
            </div>

            {/* MOBILE MENU TOGGLE BUTTON */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* MOBILE RESPONSIVE SIDE DRAWER (Moved outside sticky header container to fix transparency) */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "visible pointer-events-auto"
            : "invisible pointer-events-none"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Side Panel Canvas */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            {/* Drawer Header Close Row */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-100">
              <span className="font-bold text-lg text-Primary">Gambling</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links List */}
            <nav className="mt-6 space-y-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base transition-colors ${
                  pathname === "/" && !hash
                    ? "font-bold text-Primary bg-blue-50/50"
                    : "font-medium text-gray-800 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>

              {/* About Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("about")}
                  className={mobileBtnCls(isAboutActive)}
                >
                  <span>About</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === "about" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeMobileDropdown === "about" && (
                  <div className="pl-4 pr-2 py-2 space-y-4 bg-gray-50/50 mt-1">
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">The Charity</div>
                      <div className="space-y-0.5">
                        <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/about")}>About GHUK</Link>
                        <Link to="/about#vision" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/about#vision")}>Vision, values &amp; aims</Link>
                        <Link to="/about#funding" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/about#funding")}>Funding &amp; conflict of interest</Link>
                        <Link to="/about#team" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/about#team")}>Meet the team</Link>
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">Engage</div>
                      <div className="space-y-0.5">
                        <Link to="/register-keep-updated" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/register-keep-updated")}>Register &amp; keep updated</Link>
                        <Link to="/about#contact" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/about#contact")}>Contact us</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Our work Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("work")}
                  className={mobileBtnCls(isWorkActive)}
                >
                  <span>Our work</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === "work" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeMobileDropdown === "work" && (
                  <div className="pl-4 pr-2 py-2 space-y-4 bg-gray-50/50 mt-1">
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">Evidence Base</div>
                      <div className="space-y-0.5">
                        <Link to="/burden-of-harm" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/burden-of-harm")}>Burden of harm</Link>
                        <Link to="/burden-mapping-tool" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/burden-mapping-tool")}>Burden mapping tool</Link>
                        <Link to="/gambling-explained" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/gambling-explained")}>Gambling Explained</Link>
                        <Link to="/gambling-tactics" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/gambling-tactics")}>Gambling Tactics</Link>
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">Harm in Depth</div>
                      <div className="space-y-0.5">
                        <Link to="/understanding-gambling-harms" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/understanding-gambling-harms")}>Understanding gambling harms</Link>
                        <Link to="/stigma-and-language" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/stigma-and-language")}>Stigma &amp; language</Link>
                        <Link to="/neurodivergence" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/neurodivergence")}>Neurodivergence</Link>
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">Groups &amp; Settings</div>
                      <div className="space-y-0.5">
                        <Link to="/inequality-and-gambling-harm" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/inequality-and-gambling-harm")}>Inequality &amp; gambling harm</Link>
                        <Link to="/professionals/children-young-people" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/professionals/children-young-people")}>Children &amp; safeguarding</Link>
                        <Link to="/road-safety-and-gambling" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/road-safety-and-gambling")}>Road safety &amp; gambling</Link>
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">Campaigns, Policy &amp; News</div>
                      <div className="space-y-0.5">
                        <Link to="/policy-and-advocacy" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/policy-and-advocacy")}>Policy &amp; advocacy</Link>
                        <Link to="/members-only-campaign" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/members-only-campaign")}>Members Only Campaign</Link>
                        <Link to="/news-and-research" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/news-and-research")}>News &amp; research</Link>
                        <Link to="/events" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/events")}>Events</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* For professionals Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("professionals")}
                  className={mobileBtnCls(isProfessionalsActive)}
                >
                  <span>For professionals</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === "professionals" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeMobileDropdown === "professionals" && (
                  <div className="pl-4 pr-2 py-2 space-y-4 bg-gray-50/50 mt-1">
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">Overview</div>
                      <div className="space-y-0.5">
                        <Link to="/professionals" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/professionals")}>Professionals hub</Link>
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">Members</div>
                      <div className="space-y-0.5">
                        <Link to="/sign-in" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/sign-in")}>Sign in</Link>
                        <Link to="/register" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/register")}>Register</Link>
                        <Link to="/members-library" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/members-library")}>Members library</Link>
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">By Audience</div>
                      <div className="space-y-0.5">
                        <Link to="/professionals/healthcare" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/professionals/healthcare")}>Healthcare professionals (MECC)</Link>
                        <Link to="/professionals/public-health" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/professionals/public-health")}>Public health teams</Link>
                        <Link to="/professionals/teachers-cyp" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/professionals/teachers-cyp")}>Teachers &amp; CYP professionals</Link>
                        <Link to="/professionals/researchers" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/professionals/researchers")}>Researchers</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Get help now Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("help")}
                  className={mobileBtnCls(isHelpActive)}
                >
                  <span>Get help now</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === "help" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeMobileDropdown === "help" && (
                  <div className="pl-4 pr-2 py-2 space-y-4 bg-gray-50/50 mt-1">
                    <Link to="/urgent-help" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm font-bold text-Primary bg-blue-50 border-l-4 border-Primary">Crisis &amp; urgent help</Link>
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">Get support</div>
                      <div className="space-y-0.5">
                        <Link to="/get-help" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/get-help")}>Gambling is harming me</Link>
                        <Link to="/get-help/family-friends" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/get-help/family-friends")}>Family &amp; friends</Link>
                        <Link to="/get-help/young-people" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/get-help/young-people")}>Young people</Link>
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">Find services</div>
                      <div className="space-y-0.5">
                        <Link to="/get-help/treatment" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/get-help/treatment")}>Find treatment near you</Link>
                        <Link to="/thurrock" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/thurrock")}>Support in Thurrock</Link>
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">Check where you stand</div>
                      <div className="space-y-0.5">
                        <Link to="/get-help/check-in" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/get-help/check-in")}>Check-in</Link>
                        <Link to="/get-help/self-assessment" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/get-help/self-assessment")}>Self-assessment</Link>
                        <Link to="/get-help/affected-others-check-in" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/get-help/affected-others-check-in")}>Affected-others check-in</Link>
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">Tools to take action</div>
                      <div className="space-y-0.5">
                        <Link to="/get-help/spend-calculator" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/get-help/spend-calculator")}>Spend calculator</Link>
                        <Link to="/get-help/blocking-tools" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/get-help/blocking-tools")}>Blocking tools</Link>
                        <Link to="/get-help/limit-gambling-ads" onClick={() => setMobileMenuOpen(false)} className={getMobileSubLinkClass("/get-help/limit-gambling-ads")}>Limit gambling ads</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

function DropdownItem({ to, children, active = false }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className={`block w-full text-left text-[15px] px-3 py-2.5 transition-all duration-200 border-l-4 ${
            active
              ? "bg-[#E0F2FE] text-Primary font-semibold border-Primary pl-2.5"
              : "text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-medium border-transparent"
          }`}
        >
          {children}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
