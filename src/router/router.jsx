import Dashboard from "@/components/admin/Dashboard";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import AboutPage from "@/pages/sites/AboutPage";
import Home from "@/pages/sites/Home";
import NewsAndReserch from "@/pages/sites/NewsAndReserch";
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
