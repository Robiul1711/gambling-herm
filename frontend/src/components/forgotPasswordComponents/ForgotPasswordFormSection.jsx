import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, CheckCircle2, ArrowLeft, RefreshCw, AlertCircle } from "lucide-react";

const ForgotPasswordFormSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleResend = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("A new password reset email has been sent to " + email);
    }, 600);
  };

  return (
    <section className="py-12 md:py-20 bg-white px-4 md:px-8 text-gray-800">
      <div className="max-w-2xl mx-auto">
        {isSubmitted ? (
          /* Confirmation / Success State */
          <div className="bg-[#f0f9ff] border border-sky-200 rounded-lg p-6 sm:p-8 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-sky-100 rounded-full text-[#0093D0] shrink-0">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">
                  Password reset link sent
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If an account exists with the email{" "}
                  <strong className="text-slate-900 font-semibold">{email}</strong>,
                  you will receive an email shortly with a secure password reset link.
                </p>
                <div className="pt-2 text-xs sm:text-sm text-slate-600 space-y-1">
                  <p>• The reset link will expire in 60 minutes for security.</p>
                  <p>• Please check your junk or spam folder if you do not see it in your inbox.</p>
                </div>

                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <Link
                    to="/sign-in"
                    className="inline-flex items-center gap-2 bg-[#0093D0] hover:bg-[#0e5472] text-white font-semibold text-sm px-6 py-2.5 rounded-md transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Return to sign in
                  </Link>
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={isLoading}
                    className="inline-flex items-center gap-2 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-sm px-4 py-2.5 rounded-md transition-colors cursor-pointer"
                  >
                    <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
                    Resend email
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Reset Password Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMsg && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-md flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Email field */}
            <div>
              <label
                htmlFor="reset-email"
                className="block text-sm font-semibold text-slate-800 mb-2"
              >
                Registered email address
              </label>
              <div className="relative">
                <input
                  id="reset-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organisation.nhs.uk or .gov.uk"
                  required
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:border-[#0093D0] focus:ring-1 focus:ring-[#0093D0] transition-colors text-sm sm:text-base"
                />
                <Mail className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Enter the email address you used when registering for GHUK membership.
              </p>
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-[#0093D0] hover:bg-[#0e5472] text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-md transition-colors shadow-sm cursor-pointer inline-flex items-center gap-2 disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Sending link...
                  </>
                ) : (
                  "Send reset link"
                )}
              </button>
            </div>
          </form>
        )}

        {/* Links section */}
        <div className="mt-10 space-y-3 text-sm border-t border-slate-200 pt-6">
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 text-slate-500" />
            <span className="text-slate-700">Remember your password?</span>
            <Link
              to="/sign-in"
              className="underline font-semibold text-slate-900 hover:text-[#0093D0] transition-colors"
            >
              Sign in here
            </Link>
          </div>

          <div className="text-slate-700">
            Don't have a professional account yet?{" "}
            <Link
              to="/register"
              className="underline font-semibold text-slate-900 hover:text-[#0093D0] transition-colors"
            >
              Register for membership
            </Link>
            .
          </div>

          <div className="text-slate-700">
            Having trouble accessing your account?{" "}
            <Link
              to="/about#contact"
              className="underline font-semibold text-slate-900 hover:text-[#0093D0] transition-colors"
            >
              Contact support
            </Link>
            .
          </div>
        </div>

        {/* Callout Card */}
        <div className="bg-[#edf7fd] border-l-[5px] border-[#0093D0] p-6 sm:p-8 mt-12 rounded-r-md shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
          <h3 className="font-bold text-[#1e293b] text-base mb-2">
            Need urgent assistance with your account?
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed font-normal">
            If your organisation is transitioning accounts or you are unable to access your registered mailbox, please email{" "}
            <a
              href="mailto:hello@gamblingharm.com"
              className="underline font-semibold text-slate-900 hover:text-[#0093D0] transition-colors"
            >
              hello@gamblingharm.com
            </a>{" "}
            and our team will help verify and restore your access.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordFormSection;
