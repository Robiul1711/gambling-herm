import React from'react';
import { Instagram, Facebook } from'lucide-react';
import logo from'@/assets/images/logo.png'
import { Link } from'react-router-dom';
import useClient from'@/hooks/useClient';

export default function Footer() {
 const currentYear = new Date().getFullYear();

 // Fetch footer settings dynamically from CMS
 const { data: responseData } = useClient({
 queryKey: ["footerSettings"],
 url:"/footer",
 });

 const footerData = responseData?.data;

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
 
 {/* 2. MAIN FOOTER LINKS & BRAND DIRECTORY */}
 <div className="section-padding-x py-8 md:py-12 lg:py-16">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
 
 {/* Brand Identity Explainer (Takes up 5/12 of desktop space) */}
 <div className="flex flex-col space-y-5 lg:col-span-5 text-left">
 <Link to="/" className="inline-block self-start group">
 <img src={footerData?.logo || logo} alt="logo" className="md:w-25 sm:w-20 w-15 object-contain" />
 </Link>
 <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-normal">
 {footerData?.description || 
"An independent UK organisation working to reduce the harm caused by gambling, through support, advocacy and research. We do not accept gambling-industry funding."}
 </p>
 
 {/* Social Links Matrix Layout */}
 <div className="flex items-center space-x-3 pt-2">
 {footerData?.instagramUrl && (
 <a href={footerData.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-400 transition-colors" aria-label="Instagram">
 <Instagram className="w-4 h-4" />
 </a>
 )}
 {footerData?.facebookUrl && (
 <a href={footerData.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-400 transition-colors" aria-label="Facebook">
 <Facebook className="w-4 h-4" />
 </a>
 )}
 {footerData?.xUrl && (
 <a href={footerData.xUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-400 transition-colors" aria-label="X (formerly Twitter)">
 <XIcon />
 </a>
 )}
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
 <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
 <li><Link to="/about#funding" className="hover:text-white transition-colors">Funding & COI</Link></li>
 <li><Link to="/about#contact" className="hover:text-white transition-colors">Contact & press</Link></li>
 <li><Link to="/news-and-research" className="hover:text-white transition-colors">Latest Publication</Link></li>
 </ul>
 </div>

 {/* Column 2: Help Navigation */}
 <div className="space-y-4">
 <h4 className="text-gray-200 text-sm font-bold tracking-wide">
 Help
 </h4>
 <ul className="space-y-2.5 text-sm text-gray-400 font-normal">
 <li><Link to="/get-help" className="hover:text-white transition-colors">Get help</Link></li>
 <li><Link to="/get-help/family-friends" className="hover:text-white transition-colors">Family & friends</Link></li>
 <li><Link to="/get-help/treatment" className="hover:text-white transition-colors">Find treatment near you</Link></li>
 <li><Link to="/urgent-help" className="hover:text-white transition-colors">Crisis & urgent</Link></li>
 {/* <li><Link to="/thurrock" className="hover:text-white transition-colors">Thurrock</Link></li> */}
 </ul>
 </div>

 {/* Column 3: Evidence Framework */}
 <div className="space-y-4">
 <h4 className="text-gray-200 text-sm font-bold tracking-wide">
 Evidence & positions
 </h4>
 <ul className="space-y-2.5 text-sm text-gray-400 font-normal">
 <li><Link to="/burden-of-harm" className="hover:text-white transition-colors">Burden of harm</Link></li>
 <li><Link to="/understanding-gambling-harms" className="hover:text-white transition-colors">Understand harms</Link></li>
 <li><Link to="/policy-and-advocacy" className="hover:text-white transition-colors">Policy position</Link></li>
 <li><Link to="/news-and-research" className="hover:text-white transition-colors">News & research</Link></li>
 </ul>
 </div>

 </div>
 </div>

 {/* 3. LOWER BASE FOOTNOTE COMPLIANCE BAR */}
 <div className="mt-4 md:mt-8 pt-4 border-t border-gray-700/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-400 font-medium">
 <span>&copy; {currentYear} {footerData?.copyrightText ||"Gambling Harm UK (GHUK)."}</span>
 <div className="flex items-center space-x-6">
 <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
 <span>&middot;</span>
 <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
 <span>&middot;</span>
 <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
 </div>
 </div>

 </div>
 </footer>
 );
}