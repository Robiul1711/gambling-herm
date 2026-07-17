import CommonNavbar from "@/pages/admin/CommonNavbar";
import SideBar from "@/pages/admin/SideBar";

import React, { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useUserProfile } from "@/hooks/fetchUserProfile";
const AdminLayout = () => {
  useUserProfile();
  const [Open, setOpen] = useState(false);

  const sideBar = [
    {
      id: 1,
      icon: <MdDashboard />,
      text: "Dashboard",
      path: "/dashboard", // main path (optional, if you still want to keep it)
      activePaths: [
        "/dashboard",
        "/dashboard/settings",
        "/dashboard/analytics",
      ], // all paths that should make this item active
      sublink: false,
    },
    {
      id: 2,
      icon: <MdDashboard />,
      text: "Admin Management",
      path: "/dashboard/admin-list",
      sublink: [
        {
          id: 1,
          text: "Admin List",
          path: "/dashboard/admin-list",
        },
        {
          id: 1,
          text: "Add New Admin",
          path: "/dashboard/asdasd",
        },
      ],
    },
  ];
  const location = useLocation();

  useEffect(() => {
    const adminTitleMap = {
      "/dashboard": "Admin Dashboard | Gambling Harm UK",
      "/dashboard/settings": "Settings | Admin | Gambling Harm UK",
      "/dashboard/analytics": "Analytics | Admin | Gambling Harm UK",
      "/dashboard/admin-list": "Admin List | Admin | Gambling Harm UK",
    };
    const pathname = location.pathname;
    let pageTitle = adminTitleMap[pathname] || "Admin | Gambling Harm UK";
    document.title = pageTitle;
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <>
      <ScrollRestoration />
      <div className="flex  h-screen min-h-screen w-full">
        <SideBar open={Open} setOpen={setOpen} sidebar={sideBar} />
        <div className="flex-1 bg-dark text-white flex flex-col overflow-auto custom-scrollbar">
          <div className=" flex flex-col lg:gap-10 gap-5 lg:py-6 py-3 lg:px-[30px] px-2.5 sm:px-5">
            <CommonNavbar open={Open} setOpen={setOpen} />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
