import React, { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Lock, Eye, EyeOff, CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const getApiUrl = () => {
    let base = import.meta.env.VITE_API_URL || "http://localhost:5001/api/";
    if (!base.endsWith("/")) base += "/";
    return base;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!token) {
      setErrorMsg("Missing or invalid password reset token.");
      return;
    }

    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.post(
        `${getApiUrl()}member-auth/reset-password/${token}`,
        { password }
      );
      if (res.data?.success) {
        setIsSuccess(true);
      }
    } catch (err) {
      console.error("Reset password error:", err);
      setErrorMsg(
        err?.response?.data?.message || "Failed to reset password. Link may have expired."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] py-16 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex p-3 bg-sky-50 text-[#0093D0] rounded-xl mb-3">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Set New Password</h1>
          <p className="text-xs text-slate-500 mt-1">
            Enter your new secure password for your GHUK account.
          </p>
        </div>

        {isSuccess ? (
          <div className="space-y-4">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-sm flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold">Password Reset Complete!</strong>
                Your password has been successfully updated. You can now sign in.
              </div>
            </div>
            <Link
              to="/sign-in"
              className="w-full bg-[#0093D0] hover:bg-[#0e5472] text-white font-semibold text-sm py-3 rounded-lg flex items-center justify-center transition-colors shadow-sm"
            >
              Go to Sign in
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-lg flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 6 characters"
                  required
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0093D0] focus:ring-1 focus:ring-[#0093D0]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
                required
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0093D0] focus:ring-1 focus:ring-[#0093D0]"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#0093D0] hover:bg-[#0e5472] text-white font-semibold text-sm py-3 rounded-lg transition-colors shadow-sm disabled:opacity-60 cursor-pointer"
            >
              {isLoading ? "Updating password..." : "Reset Password"}
            </button>

            <div className="text-center pt-2">
              <Link
                to="/sign-in"
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#0093D0] transition-colors"
              >
                <ArrowLeft size={13} /> Back to Sign In
              </Link>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
