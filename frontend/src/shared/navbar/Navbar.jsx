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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import CrisisHeader from "./CrisisHeader";
import Logo from "@/assets/images/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = React.useState(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isNavVisible, setIsNavVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);
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
    pathname === "/about" || pathname.startsWith("/news-and-research");

  const isWorkActive = [
    "/burden-of-harm",
    "/gambling-explained",
    "/gambling-tactics",
    "/understanding-gambling-harms",
    "/stigma-and-language",
    "/inequality-and-gambling-harm",
    "/policy-and-advocacy",
    "/members-only-campaign",
  ].includes(pathname);

  const isProfessionalsActive = [
    "/professionals",
    "/professionals/healthcare",
    "/professionals/public-health",
    "/professionals/children-young-people",
  ].includes(pathname);

  const isHelpActive = [
    "/get-help",
    "/get-help/check-in",
    "/get-help/treatment",
    "/get-help/family-friends",
    "/urgent-help",
    "/thurrock",
  ].includes(pathname);

  const getMobileSubLinkClass = (to) => {
    const active = isLinkActive(to);
    return `block px-4 py-2.5 text-sm rounded-lg transition-colors ${
      active
        ? "font-semibold text-Primary bg-[#E0F2FE]"
        : "font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
    }`;
  };

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
              <img src={Logo} alt="logo" className="md:w-25 sm:w-20 w-15" />
            </Link>

            {/* DESKTOP NAVIGATION (shadcn/ui) */}
            <div className="flex items-center gap-5 ">
              <NavigationMenu
                className="static hidden md:flex items-center"
                viewport={false}
              >
                <NavigationMenuList className="static flex space-x-1">
                  <NavigationMenuItem>
                    <Link
                      to="/"
                      className={`${navigationMenuTriggerStyle()} text-base  hover:bg-gray-50 transition-colors ${
                        pathname === "/" && !hash
                          ? "text-Primary font-bold"
                          : "text-gray-700 font-medium hover:text-Primary"
                      }`}
                    >
                      Home
                    </Link>
                  </NavigationMenuItem>

                  {/* Professionals Dropdown */}
                  <NavigationMenuItem className="static">
                    <NavigationMenuTrigger
                      className={`text-base data-[state=open]:text-Primary hover:text-Primary transition-colors ${
                        isProfessionalsActive
                          ? "text-Primary font-bold"
                          : "text-gray-700 font-medium"
                      }`}
                    >
                      Professionals
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="md:right-0 md:left-auto md:w-auto">
                      <div className="grid grid-cols-2 gap-8 p-6 w-[520px]">
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 pb-2 border-b border-gray-200 mb-3 tracking-wide uppercase">
                            Overview
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem
                              to="/professionals"
                              active={isLinkActive("/professionals")}
                            >
                              Professionals hub
                            </DropdownItem>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 pb-2 border-b border-gray-200 mb-3 tracking-wide uppercase">
                            By Audience
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem
                              to="/professionals/healthcare"
                              active={isLinkActive("/professionals/healthcare")}
                            >
                              Healthcare professionals (MECC)
                            </DropdownItem>
                            <DropdownItem
                              to="/professionals/public-health"
                              active={isLinkActive(
                                "/professionals/public-health",
                              )}
                            >
                              Public health teams
                            </DropdownItem>
                            <DropdownItem
                              to="/professionals/children-young-people"
                              active={isLinkActive(
                                "/professionals/children-young-people",
                              )}
                            >
                              Children &amp; young people
                            </DropdownItem>
                          </ul>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  {/* About Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`text-base data-[state=open]:text-Primary hover:text-Primary transition-colors ${
                        isAboutActive
                          ? "text-Primary font-bold"
                          : "text-gray-700 font-medium"
                      }`}
                    >
                      About
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-2 gap-8 p-6 w-[520px]">
                        <div>
                          <h4 className="text-base font-bold text-gray-900 pb-2 border-b border-gray-200 mb-3">
                            The Charity
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem
                              to="/about"
                              active={isLinkActive("/about")}
                            >
                              About GHUK
                            </DropdownItem>
                            <DropdownItem
                              to="/about#funding"
                              active={isLinkActive("/about#funding")}
                            >
                              Funding &amp; Conflict of interest
                            </DropdownItem>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 pb-2 border-b border-gray-200 mb-3 tracking-wide uppercase">
                            Engage
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem
                              to="/news-and-research"
                              active={isLinkActive("/news-and-research")}
                            >
                              News &amp; research
                            </DropdownItem>
                            <DropdownItem
                              to="/about#contact"
                              active={isLinkActive("/about#contact")}
                            >
                              Contact us
                            </DropdownItem>
                          </ul>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Our Work Dropdown Menu */}
                  <NavigationMenuItem className="static">
                    <NavigationMenuTrigger
                      className={`text-base data-[state=open]:text-Primary hover:text-Primary transition-colors ${
                        isWorkActive
                          ? "text-Primary font-bold"
                          : "text-gray-700 font-medium"
                      }`}
                    >
                      Our Work
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="md:right-0 md:left-auto md:w-auto">
                      <div className="grid grid-cols-4 gap-6 p-6 w-[840px]">
                        <div>
                          <h4 className="text-[14px] font-bold text-Primary pb-2 border-b border-gray-200 mb-3 uppercase tracking-wider">
                            Evidence Base
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem
                              to="/burden-of-harm"
                              active={isLinkActive("/burden-of-harm")}
                            >
                              Burden of harm
                            </DropdownItem>
                            <DropdownItem
                              to="/gambling-explained"
                              active={isLinkActive("/gambling-explained")}
                            >
                              Gambling Explained
                            </DropdownItem>
                            <DropdownItem
                              to="/gambling-tactics"
                              active={isLinkActive("/gambling-tactics")}
                            >
                              Gambling Tactics
                            </DropdownItem>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-[14px] font-bold text-Primary pb-2 border-b border-gray-200 mb-3 uppercase tracking-wider">
                            Topics In Focus
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem
                              to="/understanding-gambling-harms"
                              active={isLinkActive(
                                "/understanding-gambling-harms",
                              )}
                            >
                              Understanding gambling harms
                            </DropdownItem>
                            <DropdownItem
                              to="/stigma-and-language"
                              active={isLinkActive("/stigma-and-language")}
                            >
                              Stigma &amp; language
                            </DropdownItem>
                            <DropdownItem
                              to="/inequality-and-gambling-harm"
                              active={isLinkActive(
                                "/inequality-and-gambling-harm",
                              )}
                            >
                              Inequality &amp; gambling harm
                            </DropdownItem>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-[14px] font-bold text-Primary pb-2 border-b border-gray-200 mb-3 uppercase tracking-wider">
                            Campaigns &amp; Policy
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem
                              to="/policy-and-advocacy"
                              active={isLinkActive("/policy-and-advocacy")}
                            >
                              Policy &amp; advocacy
                            </DropdownItem>
                            <DropdownItem
                              to="/members-only-campaign"
                              active={isLinkActive("/members-only-campaign")}
                            >
                              Members Only Campaign
                            </DropdownItem>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-[14px] font-bold text-Primary pb-2 border-b border-gray-200 mb-3 uppercase tracking-wider">
                            Updates
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem
                              to="/news-and-research"
                              active={isLinkActive("/news-and-research")}
                            >
                              News &amp; research
                            </DropdownItem>
                            <DropdownItem
                              to="/about#contact"
                              active={isLinkActive("/about#contact")}
                            >
                              Contact us
                            </DropdownItem>
                          </ul>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="static">
                    <NavigationMenuTrigger
                      className={`text-base data-[state=open]:text-Primary hover:text-Primary transition-colors ${
                        isHelpActive
                          ? "text-Primary font-bold"
                          : "text-gray-700 font-medium"
                      }`}
                    >
                      Get help
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="md:right-0 md:left-auto md:w-auto">
                      <div className="grid grid-cols-2 gap-8 p-6 w-[520px]">
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 pb-2 border-b border-gray-200 mb-3 tracking-wide uppercase">
                            Where to start
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem
                              to="/get-help"
                              active={isLinkActive("/get-help")}
                            >
                              Get help (overview)
                            </DropdownItem>
                            <DropdownItem
                              to="/get-help/check-in"
                              active={isLinkActive("/get-help/check-in")}
                            >
                              Check-in tool
                            </DropdownItem>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 pb-2 border-b border-gray-200 mb-3 tracking-wide uppercase">
                            Routes to support
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem
                              to="/get-help/treatment"
                              active={isLinkActive("/get-help/treatment")}
                            >
                              Find treatment near you
                            </DropdownItem>
                            <DropdownItem
                              to="/get-help/family-friends"
                              active={isLinkActive("/get-help/family-friends")}
                            >
                              For family &amp; friends
                            </DropdownItem>
                            <DropdownItem
                              to="/urgent-help"
                              active={isLinkActive("/urgent-help")}
                            >
                              Crisis &amp; urgent help
                            </DropdownItem>
                            <DropdownItem
                              to="/thurrock"
                              active={isLinkActive("/thurrock")}
                            >
                              Thurrock
                            </DropdownItem>
                          </ul>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Desktop CTA Action Button */}
              <div className="hidden md:flex items-center">
                <Link
                  to="/urgent-help"
                  className="bg-[#C92525] hover:bg-[#b01f1f] text-white font-bold px-5 py-2 rounded-lg transition-colors text-base shadow-sm inline-flex items-center"
                >
                  Urgent Help <span className="ml-2 font-normal">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* MOBILE MENU TOGGLE BUTTON */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
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
              <span className="font-bold  text-lg text-Primary">Gambling</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links List */}
            <nav className="mt-6 space-y-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base rounded-xl transition-colors ${
                  pathname === "/" && !hash
                    ? "font-bold text-Primary bg-blue-50/50"
                    : "font-medium text-gray-800 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>

              {/* Professionals Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("professionals")}
                  className={`w-full flex items-center justify-between px-4 py-3 text-base rounded-xl transition-colors ${
                    isProfessionalsActive
                      ? "font-bold text-Primary bg-blue-50/10"
                      : "font-medium text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  <span>Professionals</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === "professionals" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeMobileDropdown === "professionals" && (
                  <div className="pl-4 pr-2 py-2 space-y-4 bg-gray-50/50 rounded-xl mt-1">
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">
                        Overview
                      </div>
                      <div className="space-y-0.5">
                        <Link
                          to="/professionals"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass("/professionals")}
                        >
                          Professionals hub
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">
                        By Audience
                      </div>
                      <div className="space-y-0.5">
                        <Link
                          to="/professionals/healthcare"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass(
                            "/professionals/healthcare",
                          )}
                        >
                          Healthcare professionals (MECC)
                        </Link>
                        <Link
                          to="/professionals/public-health"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass(
                            "/professionals/public-health",
                          )}
                        >
                          Public health teams
                        </Link>
                        <Link
                          to="/professionals/children-young-people"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass(
                            "/professionals/children-young-people",
                          )}
                        >
                          Children &amp; young people
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("about")}
                  className={`w-full flex items-center justify-between px-4 py-3 text-base rounded-xl transition-colors ${
                    isAboutActive
                      ? "font-bold text-Primary bg-blue-50/10"
                      : "font-medium text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  <span>About</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === "about" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeMobileDropdown === "about" && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50/50 rounded-xl mt-1">
                    <Link
                      to="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className={getMobileSubLinkClass("/about")}
                    >
                      About GHUK
                    </Link>
                    <Link
                      to="/about#funding"
                      onClick={() => setMobileMenuOpen(false)}
                      className={getMobileSubLinkClass("/about#funding")}
                    >
                      Funding &amp; Conflict of interest
                    </Link>
                    <Link
                      to="/news-and-research"
                      onClick={() => setMobileMenuOpen(false)}
                      className={getMobileSubLinkClass("/news-and-research")}
                    >
                      News &amp; research
                    </Link>
                    <Link
                      to="/about#contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className={getMobileSubLinkClass("/about#contact")}
                    >
                      Contact us
                    </Link>
                  </div>
                )}
              </div>

              {/* Our Work Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("work")}
                  className={`w-full flex items-center justify-between px-4 py-3 text-base rounded-xl transition-colors ${
                    isWorkActive
                      ? "font-bold text-Primary bg-blue-50/10"
                      : "font-medium text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  <span>Our work</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === "work" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeMobileDropdown === "work" && (
                  <div className="pl-4 pr-2 py-2 space-y-4 bg-gray-50/50 rounded-xl mt-1">
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">
                        Evidence Base
                      </div>
                      <div className="space-y-0.5">
                        <Link
                          to="/burden-of-harm"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass("/burden-of-harm")}
                        >
                          Burden of harm
                        </Link>
                        <Link
                          to="/gambling-explained"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass(
                            "/gambling-explained",
                          )}
                        >
                          Gambling Explained
                        </Link>
                        <Link
                          to="/gambling-tactics"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass("/gambling-tactics")}
                        >
                          Gambling Tactics
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">
                        Topics In Focus
                      </div>
                      <div className="space-y-0.5">
                        <Link
                          to="/understanding-gambling-harms"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass(
                            "/understanding-gambling-harms",
                          )}
                        >
                          Understanding gambling harms
                        </Link>
                        <Link
                          to="/stigma-and-language"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass(
                            "/stigma-and-language",
                          )}
                        >
                          Stigma &amp; language
                        </Link>
                        <Link
                          to="/inequality-and-gambling-harm"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass(
                            "/inequality-and-gambling-harm",
                          )}
                        >
                          Inequality &amp; gambling harm
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">
                        Campaigns &amp; Policy
                      </div>
                      <div className="space-y-0.5">
                        <Link
                          to="/policy-and-advocacy"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass(
                            "/policy-and-advocacy",
                          )}
                        >
                          Policy &amp; advocacy
                        </Link>
                        <Link
                          to="/members-only-campaign"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass(
                            "/members-only-campaign",
                          )}
                        >
                          Members Only Campaign
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">
                        Updates
                      </div>
                      <div className="space-y-0.5">
                        <Link
                          to="/news-and-research"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass(
                            "/news-and-research",
                          )}
                        >
                          News &amp; research
                        </Link>
                        <Link
                          to="/about#contact"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass("/about#contact")}
                        >
                          Contact us
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Get Help Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("help")}
                  className={`w-full flex items-center justify-between px-4 py-3 text-base rounded-xl transition-colors ${
                    isHelpActive
                      ? "font-bold text-Primary bg-blue-50/10"
                      : "font-medium text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  <span>Get help</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === "help" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeMobileDropdown === "help" && (
                  <div className="pl-4 pr-2 py-2 space-y-4 bg-gray-50/50 rounded-xl mt-1">
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">
                        Where to start
                      </div>
                      <div className="space-y-0.5">
                        <Link
                          to="/get-help"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass("/get-help")}
                        >
                          Get help (overview)
                        </Link>
                        <Link
                          to="/get-help/check-in"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass(
                            "/get-help/check-in",
                          )}
                        >
                          Check-in tool
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-Primary tracking-wider uppercase px-4 mb-1">
                        Routes to support
                      </div>
                      <div className="space-y-0.5">
                        <Link
                          to="/get-help/treatment"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass(
                            "/get-help/treatment",
                          )}
                        >
                          Find treatment near you
                        </Link>
                        <Link
                          to="/get-help/family-friends"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass(
                            "/get-help/family-friends",
                          )}
                        >
                          For family &amp; friends
                        </Link>
                        <Link
                          to="/urgent-help"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass("/urgent-help")}
                        >
                          Crisis &amp; urgent help
                        </Link>
                        <Link
                          to="/thurrock"
                          onClick={() => setMobileMenuOpen(false)}
                          className={getMobileSubLinkClass("/thurrock")}
                        >
                          Thurrock
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Mobile Bottom Urgent Action */}
          <div className="pt-6 border-t border-gray-100">
            <Link
              to="/urgent-help"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#C92525] hover:bg-[#b01f1f] text-white font-bold py-2 rounded-xl transition-colors text-center shadow-md flex items-center justify-center text-base"
            >
              Urgent Help <span className="ml-2 font-normal">&rarr;</span>
            </Link>
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
              ? "bg-[#E0F2FE] text-Primary font-semibold border-Primary rounded-r-xl rounded-l-none pl-2.5"
              : "text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-medium border-transparent rounded-xl"
          }`}
        >
          {children}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
