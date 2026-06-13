import Dashboard from "@/components/admin/Dashboard";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import AboutPage from "@/pages/sites/AboutPage";
import Home from "@/pages/sites/Home";
import NewsAndReserch from "@/pages/sites/NewsAndReserch";
import NewsAndReserchDetails from "@/pages/sites/NewsAndReserchDetails";
import BurdenOfHarm from "@/pages/sites/BurdenOfHarm";
import GamblingExplained from "@/pages/sites/GamblingExplained";
import GamblingTactics from "@/pages/sites/GamblingTactics";
import UnderstandingGamblingHarms from "@/pages/sites/UnderstandingGamblingHarms";
import StigmaAndLanguage from "@/pages/sites/StigmaAndLanguage";
import InequalityAndGamblingHarm from "@/pages/sites/InequalityAndGamblingHarm";
import PolicyAndAdvocacy from "@/pages/sites/PolicyAndAdvocacy";
import MembersOnlyCampaign from "@/pages/sites/MembersOnlyCampaign";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/news-and-research",
        element: <NewsAndReserch />,
      },
      {
        path: "/news-and-research/:id",
        element: <NewsAndReserchDetails />,
      },
      {
        path: "/burden-of-harm",
        element: <BurdenOfHarm />,
      },
      {
        path: "/gambling-explained",
        element: <GamblingExplained />,
      },
      {
        path: "/gambling-tactics",
        element: <GamblingTactics />,
      },
      {
        path: "/understanding-gambling-harms",
        element: <UnderstandingGamblingHarms />,
      },
      {
        path: "/stigma-and-language",
        element: <StigmaAndLanguage />,
      },
      {
        path: "/inequality-and-gambling-harm",
        element: <InequalityAndGamblingHarm />,
      },
      {
        path: "/policy-and-advocacy",
        element: <PolicyAndAdvocacy />,
      },
      {
        path: "/members-only-campaign",
        element: <MembersOnlyCampaign />,
      },
    ],
  },
  // Admin routes
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />, // ✅ Fixed typo
      },
    ],
  },
]);

export default router;
