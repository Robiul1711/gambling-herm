import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignInFormSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-12 md:py-20 bg-white px-4 md:px-8 text-gray-800">
      <div className="max-w-2xl mx-auto">
        {/* Success / Info Alert if simulated submit */}
        {isSubmitted && (
          <div className="mb-8 p-4 bg-sky-50 border border-sky-200 text-sky-800  text-sm flex items-center justify-between max-w-lg shadow-xs">
            <span>
              Sign in is currently in staged rollout. A colleague will verify
              your access soon.
            </span>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-sky-700 hover:text-sky-900 font-bold ml-3 text-xs"
            >
              ✕
            </button>
          </div>
        )}

        {/* Sign In Form */}
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          {/* Field 1: Email address */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=""
              required
              className="w-full px-3.5 py-2.5 sm:py-3 border border-slate-300  text-slate-900 focus:outline-none focus:border-Primary focus:ring-1 focus:ring-Primary transition-colors"
            />
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Use the email address you registered with.
            </p>
          </div>

          {/* Field 2: Password */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=""
              required
              className="w-full px-3.5 py-2.5 sm:py-3 border border-slate-300  text-slate-900 focus:outline-none focus:border-Primary focus:ring-1 focus:ring-Primary transition-colors"
            />
          </div>

          {/* Checkbox: Keep me signed in */}
          <div>
            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-Primary focus:ring-Primary cursor-pointer"
              />
              <label
                htmlFor="rememberMe"
                className="text-sm font-medium text-slate-800 cursor-pointer select-none"
              >
                Keep me signed in on this device
              </label>
            </div>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed pl-6.5">
              Only choose this on a device only you use. Not recommended on a
              shared or public computer.
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="bg-Primary hover:bg-[#0e5472] text-white font-semibold text-sm sm:text-base px-8 py-3  transition-colors shadow-sm cursor-pointer inline-block"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Links section */}
        <div className="mt-8 space-y-3 text-sm">
          <div>
            <Link
              to="/forgot-password"
              className="underline font-semibold text-slate-900 hover:text-Primary transition-colors"
            >
              Forgot your password?
            </Link>
          </div>

          <div className="text-slate-700">
            Not yet a member?{" "}
            <Link
              to="/register"
              className="underline font-semibold text-slate-900 hover:text-Primary transition-colors"
            >
              Register here
            </Link>
            .
          </div>

          <div className="text-slate-700">
            Having trouble signing in?{" "}
            <Link
              to="/about#contact"
              className="underline font-semibold text-slate-900 hover:text-Primary transition-colors"
            >
              Contact us
            </Link>
            .
          </div>
        </div>

        {/* Callout Card: Membership is being rolled out */}
        <div className="bg-[#edf7fd] border-l-[5px] border-[#0093D0]  p-6 sm:p-8 mt-12  shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
          <h3 className="font-bold text-[#1e293b] text-base mb-2">
            Membership is being rolled out
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed font-normal">
            We are rolling membership and the members' area out in stages. If
            you need something from us before your access is set up, email{" "}
            <a
              href="mailto:hello@gamblingharm.com"
              className="underline font-semibold text-slate-900 hover:text-Primary transition-colors"
            >
              hello@gamblingharm.com
            </a>{" "}
            and a colleague will help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignInFormSection;
