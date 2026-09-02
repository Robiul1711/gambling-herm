import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useMemberAuth } from "@/context/MemberAuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useMemberAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 border-4 border-[#0F4A63] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-600 font-medium text-sm">Verifying membership session...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login page and preserve the intended target url
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
}
