import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import logo from '@/assets/images/logo.png'
import { Link } from 'react-router-dom';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Custom X (formerly Twitter) SVG Icon to match the wireframe perfectly
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
    <footer className="w-full bg-[#2A2828] text-white">
      
      {/* 1. UPPER FOOTER CALL-TO-ACTION PANEL */}
      <div className="w-full border-b border-gray-700/40 py-16 md:py-20 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight max-w-2xl">
            You don't have to do this alone, and we don't think you should have to.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl font-medium leading-relaxed">
            If gambling is harming you or someone you love, there is a way through. 
            There is also a fight to make sure fewer people have to make this journey at all.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link 
              to="/get-help" 
              className="w-full sm:w-auto text-center bg-Primary hover:bg-[#145c7e] text-white font-bold px-6 py-3 rounded-xl text-base transition-colors shadow-sm"
            >
              Get Help Now
            </Link>
            <Link 
              to="/policy-positions" 
              className="w-full sm:w-auto text-center border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-bold px-6 py-3 rounded-xl text-base transition-all bg-transparent"
            >
              Read Our Policy Positions
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER LINKS & BRAND DIRECTORY */}
      <div className="section-padding-x py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Identity Explainer (Takes up 5/12 of desktop space) */}
          <div className="flex flex-col space-y-5 lg:col-span-5 text-left">
            <a href="#" className="inline-block self-start group">
              <img src={logo} alt="logo" className="md:w-25 sm:w-20 w-15" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-normal">
              An independent UK organisation working to reduce the harm caused by gambling, 
              through support, advocacy and research. We do not accept gambling-industry funding.
            </p>
            
            {/* Social Links Matrix Layout */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#instagram" className="w-8 h-8 rounded-lg bg-Primary flex items-center justify-center text-white hover:bg-[#145c7e] transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#facebook" className="w-8 h-8 rounded-lg border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#x" className="w-8 h-8 rounded-lg border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-400 transition-colors" aria-label="X (formerly Twitter)">
                <XIcon />
              </a>
            </div>
          </div>

          {/* Nav Links Column Blocks Grid (Takes up 7/12 of desktop space) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:col-span-7 text-left">
            
            {/* Column 1: About GHUK */}
            <div className="space-y-4">
              <h4 className="text-gray-200 text-sm font-bold tracking-wide">
                About GHUK
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-400 font-normal">
                <li><a href="#about-us" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#funding" className="hover:text-white transition-colors">Funding & COI</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact & press</a></li>
                <li><a href="#publications" className="hover:text-white transition-colors">Latest Publication</a></li>
              </ul>
            </div>

            {/* Column 2: Help Navigation */}
            <div className="space-y-4">
              <h4 className="text-gray-200 text-sm font-bold tracking-wide">
                Help
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-400 font-normal">
                <li><a href="#get-help" className="hover:text-white transition-colors">Get help</a></li>
                <li><a href="#family-friends" className="hover:text-white transition-colors">Family & friends</a></li>
                <li><a href="#find-treatment" className="hover:text-white transition-colors">Find treatment near you</a></li>
                <li><a href="#crisis" className="hover:text-white transition-colors">Crisis & urgent</a></li>
              </ul>
            </div>

            {/* Column 3: Evidence Framework */}
            <div className="space-y-4">
              <h4 className="text-gray-200 text-sm font-bold tracking-wide">
                Evidence & positions
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-400 font-normal">
                <li><a href="#burden-of-harm" className="hover:text-white transition-colors">Burden of harm</a></li>
                <li><a href="#understand-harms" className="hover:text-white transition-colors">Understand harms</a></li>
                <li><a href="#policy-position" className="hover:text-white transition-colors">Policy position</a></li>
                <li><a href="#news-research" className="hover:text-white transition-colors">News & research</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* 3. LOWER BASE FOOTNOTE COMPLIANCE BAR */}
        <div className="mt-12 pt-8 border-t border-gray-700/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-400 font-medium">
          <span>&copy; {currentYear} Gambling Harm UK (GHUK).</span>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <span>&middot;</span>
            <a href="#cookies" className="hover:text-white transition-colors">Cookies</a>
            <span>&middot;</span>
            <a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
}