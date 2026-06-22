import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import ScrollToTop from "@/shared/ScrollToTop";
import { Outlet, useLocation } from "react-router-dom";
import { useUserProfile } from "@/hooks/fetchUserProfile";
import { useEffect } from "react";

const Layout = () => {
  useUserProfile();
  const { pathname, hash } = useLocation();

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
      <Navbar />
      <div className="w-full" style={{ overflowX: "clip" }}>
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout;
