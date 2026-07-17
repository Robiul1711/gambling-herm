import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import ScrollToTop from "@/shared/ScrollToTop";
// import SkipToContent from "@/components/common/SkipToContent";
// import AccessibilityWidget from "@/components/common/AccessibilityWidget";
import { Outlet, useLocation } from "react-router-dom";
import { useUserProfile } from "@/hooks/fetchUserProfile";
import { useEffect } from "react";

const Layout = () => {
  useUserProfile();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const titleMap = {
      "/": "Home | Gambling Harm UK",
      "/about": "About Us | Gambling Harm UK",
      "/news-and-research": "News & Research | Gambling Harm UK",
      "/burden-of-harm": "Burden of Harm | Gambling Harm UK",
      "/gambling-explained": "Gambling Explained | Gambling Harm UK",
      "/gambling-tactics": "Gambling Tactics | Gambling Harm UK",
      "/understanding-gambling-harms": "Understanding Gambling Harms | Gambling Harm UK",
      "/stigma-and-language": "Stigma & Language | Gambling Harm UK",
      "/inequality-and-gambling-harm": "Inequality & Gambling Harm | Gambling Harm UK",
      "/policy-and-advocacy": "Policy & Advocacy | Gambling Harm UK",
      "/members-only-campaign": "Members Only Campaign | Gambling Harm UK",
      "/professionals": "Professionals Hub | Gambling Harm UK",
      "/professionals/healthcare": "Healthcare Professionals | Gambling Harm UK",
      "/professionals/public-health": "Public Health Teams | Gambling Harm UK",
      "/professionals/children-young-people": "Children & Young People | Gambling Harm UK",
      "/get-help": "Get Help | Gambling Harm UK",
      "/get-help/check-in": "Check-In Tool | Gambling Harm UK",
      "/get-help/treatment": "Find Treatment | Gambling Harm UK",
      "/get-help/family-friends": "For Family & Friends | Gambling Harm UK",
      "/urgent-help": "Urgent Help | Gambling Harm UK",
      "/thurrock": "Thurrock | Gambling Harm UK",
      "/privacy": "Privacy Policy | Gambling Harm UK",
      "/cookies": "Cookie Policy | Gambling Harm UK",
      "/accessibility": "Accessibility Statement | Gambling Harm UK",
    };

    let pageTitle = titleMap[pathname];
    if (!pageTitle) {
      if (pathname.startsWith("/news-and-research/")) {
        pageTitle = "News Details | Gambling Harm UK";
      } else {
        pageTitle = "Gambling Harm UK | Addressing Gambling Harms";
      }
    }

    document.title = pageTitle;
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      {/* <SkipToContent /> */}
      <Navbar />
      {/* Accessibility main landmark - uncomment to use:
      <main id="main-content" className="w-full" style={{ overflowX: "clip" }} tabIndex="-1">
        <Outlet />
      </main>
      */}
      {/* Original layout wrapper: */}
      <div className="w-full" style={{ overflowX: "clip" }}>
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
      {/* <AccessibilityWidget /> */}
    </>
  );
};

export default Layout;
