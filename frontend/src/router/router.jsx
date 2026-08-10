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
import Privacy from "@/pages/sites/Privacy";
import Cookies from "@/pages/sites/Cookies";
import Accessibility from "@/pages/sites/Accessibility";
import NotFoundPage from "@/pages/sites/NotFoundPage";
// New pages
import RegisterKeepUpdated from "@/pages/sites/RegisterKeepUpdated";
import BurdenMappingTool from "@/pages/sites/BurdenMappingTool";
import NeurodivergencePage from "@/pages/sites/NeurodivergencePage";
import RoadSafetyGambling from "@/pages/sites/RoadSafetyGambling";
import EventsPage from "@/pages/sites/EventsPage";
import TeachersCYPPage from "@/pages/sites/TeachersCYPPage";
import ResearchersPage from "@/pages/sites/ResearchersPage";
import YoungPeoplePage from "@/pages/sites/YoungPeoplePage";
import SelfAssessmentPage from "@/pages/sites/SelfAssessmentPage";
import AffectedOthersCheckIn from "@/pages/sites/AffectedOthersCheckIn";
import SpendCalculatorPage from "@/pages/sites/SpendCalculatorPage";
import BlockingToolsPage from "@/pages/sites/BlockingToolsPage";
import LimitGamblingAdsPage from "@/pages/sites/LimitGamblingAdsPage";
import SignInPage from "@/pages/sites/SignInPage";
import MembersLibraryPage from "@/pages/sites/MembersLibraryPage";
import RegisterMembersPage from "@/pages/sites/RegisterMembersPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/news-and-research", element: <NewsAndReserch /> },
      { path: "/news-and-research/:id", element: <NewsAndReserchDetails /> },
      // Our Work — Evidence Base
      { path: "/burden-of-harm", element: <BurdenOfHarm /> },
      { path: "/burden-mapping-tool", element: <BurdenMappingTool /> },
      { path: "/gambling-explained", element: <GamblingExplained /> },
      { path: "/gambling-tactics", element: <GamblingTactics /> },
      // Our Work — Harm in Depth
      { path: "/understanding-gambling-harms", element: <UnderstandingGamblingHarms /> },
      { path: "/stigma-and-language", element: <StigmaAndLanguage /> },
      { path: "/neurodivergence", element: <NeurodivergencePage /> },
      // Our Work — Groups & Settings
      { path: "/inequality-and-gambling-harm", element: <InequalityAndGamblingHarm /> },
      { path: "/children-and-safeguarding", element: <ChildrenYoungPeople /> },
      { path: "/road-safety-and-gambling", element: <RoadSafetyGambling /> },
      // Our Work — Campaigns, Policy & News
      { path: "/policy-and-advocacy", element: <PolicyAndAdvocacy /> },
      { path: "/members-only-campaign", element: <MembersOnlyCampaign /> },
      { path: "/events", element: <EventsPage /> },
      // For Professionals
      { path: "/professionals", element: <ProfessionalsHub /> },
      { path: "/professionals/healthcare", element: <HealthcareProfessionals /> },
      { path: "/professionals/public-health", element: <PublicHealthTeams /> },
      { path: "/professionals/teachers-cyp", element: <TeachersCYPPage /> },
      { path: "/professionals/researchers", element: <ResearchersPage /> },
      // Get Help
      { path: "/get-help", element: <GetHelpOverview /> },
      { path: "/get-help/check-in", element: <CheckInTool /> },
      { path: "/get-help/treatment", element: <FindTreatment /> },
      { path: "/get-help/family-friends", element: <ForFamilyFriends /> },
      { path: "/get-help/young-people", element: <YoungPeoplePage /> },
      { path: "/get-help/self-assessment", element: <SelfAssessmentPage /> },
      { path: "/get-help/affected-others-check-in", element: <AffectedOthersCheckIn /> },
      { path: "/get-help/spend-calculator", element: <SpendCalculatorPage /> },
      { path: "/get-help/blocking-tools", element: <BlockingToolsPage /> },
      { path: "/get-help/limit-gambling-ads", element: <LimitGamblingAdsPage /> },
      { path: "/urgent-help", element: <UrgentHelp /> },
      { path: "/thurrock", element: <Thurrock /> },
      // About / Engage
      { path: "/register-keep-updated", element: <RegisterKeepUpdated /> },
      // Members portal
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/login", element: <SignInPage /> },
      { path: "/register", element: <RegisterMembersPage /> },
      { path: "/members-library", element: <MembersLibraryPage /> },
      // Legal
      { path: "/privacy", element: <Privacy /> },
      { path: "/cookies", element: <Cookies /> },
      { path: "/accessibility", element: <Accessibility /> },
      // 404 catch-all
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);

export default router;
