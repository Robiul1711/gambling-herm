import * as React from "react"
import { Link } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import CrisisHeader from "./CrisisHeader"
import Logo from "@/assets/images/logo.png"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [activeMobileDropdown, setActiveMobileDropdown] = React.useState(null)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileDropdown = (menu) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu)
  }

  return (
    <>
      {/* WRAPPER: Handles top pinning and sticky scroll transparency states */}
      <div className={`w-full flex flex-col sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100" 
          : "bg-white border-b border-transparent"
      }`}>
        {/* 1. Full-width Crisis Banner */}
        <div className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-[100px] opacity-100"
        }`}>
          <CrisisHeader />
        </div>

        {/* 2. Main Navigation Bar */}
        <header className="w-full">
          <div className="section-padding-x pt-2 flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="">
              <img src={Logo} alt="logo" className="md:w-25 sm:w-20 w-15" />
            </Link>

            {/* DESKTOP NAVIGATION (shadcn/ui) */}
            <div className="flex items-center gap-5 ">
              <NavigationMenu className=" hidden md:flex items-center">
                <NavigationMenuList className="flex space-x-1">
                  
                  <NavigationMenuItem>
                    <Link to="/" className={`${navigationMenuTriggerStyle()} text-Primary font-bold text-base hover:bg-gray-50`}>
                      Home
                    </Link>
                  </NavigationMenuItem>

                  {/* About Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 font-medium text-base hover:text-Primary data-[state=open]:text-Primary">
                      About
                    </NavigationMenuTrigger>
                    <NavigationMenuContent >
                      <div className="grid grid-cols-2 gap-8 p-6 w-[520px] bg-white shadow-xl ">
                        <div>
                          <h4 className="text-base font-bold text-gray-900 pb-2 border-b border-gray-200 mb-3">
                            The Charity
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem to="/about" active>About GHUK</DropdownItem>
                            <DropdownItem to="/funding">Funding &amp; Conflict of interest</DropdownItem>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-500 pb-2 border-b border-gray-200 mb-3 tracking-wide uppercase">
                            Engage
                          </h4>
                          <ul className="space-y-1">
                            <DropdownItem to="/news-and-research">News &amp; research</DropdownItem>
                            <DropdownItem to="/contact">Contact us</DropdownItem>
                          </ul>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 font-medium text-base hover:text-Primary">
                      Our work
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 font-medium text-base hover:text-Primary">
                      Get help
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>

              {/* Desktop CTA Action Button */}
              <div className="hidden md:flex items-center">
                <Link
                  to="/urgent-help"
                  className="bg-[#C92525] hover:bg-[#b01f1f] text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-base shadow-sm inline-flex items-center"
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
          mobileMenuOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
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
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
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
                className="block px-4 py-3 text-base font-bold text-Primary bg-blue-50/50 rounded-xl"
              >
                Home
              </Link>

              {/* About Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('about')}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <span>About</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileDropdown === 'about' && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50/50 rounded-xl mt-1">
                    <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm font-semibold text-Primary bg-[#E0F2FE] rounded-lg">About GHUK</Link>
                    <Link to="/funding" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900">Funding &amp; Conflict of interest</Link>
                    <Link to="/news" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900">News &amp; research</Link>
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900">Contact us</Link>
                  </div>
                )}
              </div>

              {/* Our Work Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('work')}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <span>Our work</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === 'work' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileDropdown === 'work' && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50/50 rounded-xl mt-1">
                    <Link to="/projects" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-medium text-gray-600">Our Projects</Link>
                    <Link to="/impact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-medium text-gray-600">Our Impact</Link>
                  </div>
                )}
              </div>

              {/* Get Help Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('help')}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <span>Get help</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === 'help' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileDropdown === 'help' && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50/50 rounded-xl mt-1">
                    <Link to="/support" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-medium text-gray-600">Support Services</Link>
                    <Link to="/helplines" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-medium text-gray-600">Helplines</Link>
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
              className="w-full bg-[#C92525] hover:bg-[#b01f1f] text-white font-bold py-3.5 rounded-xl transition-colors text-center shadow-md flex items-center justify-center text-base"
            >
              Urgent Help <span className="ml-2 font-normal">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

function DropdownItem({ to, children, active = false }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className={`block w-full text-left text-[15px] px-3 py-2.5 rounded-xl transition-colors ${
            active
              ? "bg-[#E0F2FE] text-Primary font-semibold"
              : "text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-medium"
          }`}
        >
          {children}
        </Link>
      </NavigationMenuLink>
    </li>

  )
}