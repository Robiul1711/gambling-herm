import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useMemberAuth } from "@/context/MemberAuthContext";
import { AlertCircle, Clock, CheckCircle2, Lock, Mail, Eye, EyeOff } from "lucide-react";

const SignInFormSection = () => {
  const { login, isAuthenticated } = useMemberAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Status feedback states
  const [errorMessage, setErrorMessage] = useState("");
  const [pendingNotice, setPendingNotice] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setPendingNotice(false);
    setSuccessMessage("");
    setLoading(true);

    try {
      const res = await login(email, password);
      if (res?.success) {
        setSuccessMessage("Signed in successfully! Redirecting...");
        const target = location.state?.from?.pathname || "/members-library";
        setTimeout(() => {
          navigate(target, { replace: true });
        }, 800);
      }
    } catch (err) {
      console.error("Sign in error:", err);
      const status = err?.response?.data?.status;
      const msg = err?.response?.data?.message || err?.message || "Sign in failed.";

      if (status === "pending") {
        setPendingNotice(true);
      } else {
        setErrorMessage(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white px-4 md:px-8 text-gray-800">
      <div className="max-w-2xl mx-auto">
        {/* Already Logged In Notice */}
        {isAuthenticated && (
          <div className="mb-8 p-5 bg-sky-50 border border-sky-200 text-sky-900 rounded-xl shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0093D0] shrink-0" />
              <span className="text-sm font-medium">
                You are currently signed in as an approved member.
              </span>
            </div>
            <Link
              to="/members-library"
              className="bg-[#0093D0] text-white font-semibold text-xs px-4 py-2 rounded-md hover:bg-[#0e5472] transition-colors"
            >
              Go to Library →
            </Link>
          </div>
        )}

        {/* Pending Approval Notice Banner */}
        {pendingNotice && (
          <div className="mb-8 p-5 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl shadow-xs space-y-2.5 animate-in fade-in duration-200">
            <div className="flex items-center gap-2.5 font-bold text-base text-amber-900">
              <Clock className="w-5 h-5 text-amber-600 shrink-0 animate-pulse" />
              <span>Application Pending Admin Review</span>
            </div>
            <p className="text-sm text-amber-800 leading-relaxed">
              Your registration details have been received, but your account has not been approved by an administrator yet.
            </p>
            <p className="text-xs text-amber-700 leading-relaxed">
              Our team verifies every professional request (NHS, Public Health, Research, Education). You will receive an email once your access has been activated.
            </p>
          </div>
        )}

        {/* General Error Notice */}
        {errorMessage && (
          <div className="mb-8 p-4 bg-rose-50 border border-rose-200 text-rose-800 text-sm rounded-lg flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
            <button
              onClick={() => setErrorMessage("")}
              className="text-rose-700 hover:text-rose-900 font-bold ml-3 text-xs"
            >
              ✕
            </button>
          </div>
        )}

        {/* Success Notice */}
        {successMessage && (
          <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-lg flex items-center gap-2 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Sign In Form */}
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          {/* Field 1: Email address */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Email address
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@organisation.nhs.uk"
                required
                className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:border-[#0093D0] focus:ring-1 focus:ring-[#0093D0] transition-colors"
              />
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Use the professional email address you registered with.
            </p>
          </div>

          {/* Field 2: Password */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-semibold text-slate-800">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-xs font-semibold text-[#0093D0] hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full pl-10 pr-10 py-2.5 sm:py-3 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:border-[#0093D0] focus:ring-1 focus:ring-[#0093D0] transition-colors"
              />
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Checkbox: Keep me signed in */}
          <div>
            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-[#0093D0] focus:ring-[#0093D0] cursor-pointer"
              />
              <label
                htmlFor="rememberMe"
                className="text-sm font-medium text-slate-800 cursor-pointer select-none"
              >
                Keep me signed in on this device
              </label>
            </div>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed pl-6.5">
              Only choose this on a personal work device. Not recommended on a shared computer.
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#0093D0] hover:bg-[#0e5472] text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-md transition-colors shadow-sm cursor-pointer inline-flex items-center gap-2 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>Signing in...</span>
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </form>

        {/* Links section */}
        <div className="mt-8 space-y-3 text-sm border-t border-slate-100 pt-6">
          <div className="text-slate-700">
            Not yet a member?{" "}
            <Link
              to="/register"
              className="underline font-semibold text-slate-900 hover:text-[#0093D0] transition-colors"
            >
              Register here
            </Link>
            .
          </div>

          <div className="text-slate-700">
            Having trouble signing in?{" "}
            <Link
              to="/about#contact"
              className="underline font-semibold text-slate-900 hover:text-[#0093D0] transition-colors"
            >
              Contact support
            </Link>
            .
          </div>
        </div>

        {/* Callout Card: Membership rollout notice */}
        <div className="bg-[#edf7fd] border-l-[5px] border-[#0093D0] p-6 sm:p-8 mt-10 rounded-r-md shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
          <h3 className="font-bold text-[#1e293b] text-base mb-2">
            Membership is being rolled out
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed font-normal">
            We are rolling membership and the members' area out in stages. If you need something from us before your access is set up, email{" "}
            <a
              href="mailto:hello@gamblingharm.com"
              className="underline font-semibold text-slate-900 hover:text-[#0093D0] transition-colors"
            >
              hello@gamblingharm.com
            </a>{" "}
            and a colleague will assist you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignInFormSection;
