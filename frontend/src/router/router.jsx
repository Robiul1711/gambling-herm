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
import ProfessionalsHub from "@/pages/sites/ProfessionalsHub";
import HealthcareProfessionals from "@/pages/sites/HealthcareProfessionals";
import PublicHealthTeams from "@/pages/sites/PublicHealthTeams";
import ChildrenYoungPeople from "@/pages/sites/ChildrenYoungPeople";
import GetHelpOverview from "@/pages/sites/GetHelpOverview";
import CheckInTool from "@/pages/sites/CheckInTool";
import FindTreatment from "@/pages/sites/FindTreatment";
import ForFamilyFriends from "@/pages/sites/ForFamilyFriends";
import UrgentHelp from "@/pages/sites/UrgentHelp";
import Thurrock from "@/pages/sites/Thurrock";
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
      {
        path: "/professionals",
        element: <ProfessionalsHub />,
      },
      {
        path: "/professionals/healthcare",
        element: <HealthcareProfessionals />,
      },
      {
        path: "/professionals/public-health",
        element: <PublicHealthTeams />,
      },
      {
        path: "/professionals/children-young-people",
        element: <ChildrenYoungPeople />,
      },
      {
        path: "/get-help",
        element: <GetHelpOverview />,
      },
      {
        path: "/get-help/check-in",
        element: <CheckInTool />,
      },
      {
        path: "/get-help/treatment",
        element: <FindTreatment />,
      },
      {
        path: "/get-help/family-friends",
        element: <ForFamilyFriends />,
      },
      {
        path: "/urgent-help",
        element: <UrgentHelp />,
      },
      {
        path: "/thurrock",
        element: <Thurrock />,
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
