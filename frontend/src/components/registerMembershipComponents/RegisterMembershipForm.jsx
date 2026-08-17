import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const sectorOptions = [
  "Please choose one",
  "NHS",
  "Local authority or public health",
  "Education",
  "Research",
  "Third sector",
  "Lived experience",
  "Other",
];

const RegisterMembershipForm = () => {
  const [serverSuccess, setServerSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      organisation: "",
      role: "",
      sector: "Please choose one",
      membershipNeeds: "",
      agreeTerms: false,
      newsletterUpdates: false,
    },
  });

  const onSubmit = (data) => {
    setServerSuccess(true);
    reset();
  };

  return (
    <section className="py-12 md:py-16 bg-white px-4 md:px-8 text-gray-800">
      <div className="max-w-2xl mx-auto">
        {/* Success Alert */}
        {serverSuccess && (
          <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800  text-sm flex items-center justify-between shadow-xs">
            <span>
              Thank you for registering! A colleague will be in touch about your
              membership registration as soon as possible.
            </span>
            <button
              onClick={() => setServerSuccess(false)}
              className="text-emerald-700 hover:text-emerald-900 font-bold ml-3 text-xs"
            >
              ✕
            </button>
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Field 1: Your name */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Your name
            </label>
            <input
              type="text"
              placeholder=""
              {...register("name", { required: "Name is required." })}
              className={`w-full px-3.5 py-2.5 sm:py-3 border  text-slate-900 focus:outline-none transition-colors ${
                errors.name
                  ? "border-rose-400 focus:border-rose-500 bg-rose-50/20"
                  : "border-slate-300 focus:border-Primary focus:ring-1 focus:ring-Primary"
              }`}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-rose-600 font-medium">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Field 2: Email address */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Email address
            </label>
            <input
              type="email"
              placeholder=""
              {...register("email", {
                required: "Email address is required.",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email address.",
                },
              })}
              className={`w-full px-3.5 py-2.5 sm:py-3 border  text-slate-900 focus:outline-none transition-colors ${
                errors.email
                  ? "border-rose-400 focus:border-rose-500 bg-rose-50/20"
                  : "border-slate-300 focus:border-Primary focus:ring-1 focus:ring-Primary"
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-rose-600 font-medium">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Field 3: Organisation */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Organisation
            </label>
            <input
              type="text"
              placeholder=""
              {...register("organisation")}
              className="w-full px-3.5 py-2.5 sm:py-3 border border-slate-300  text-slate-900 focus:outline-none focus:border-Primary focus:ring-1 focus:ring-Primary transition-colors"
            />
          </div>

          {/* Field 4: Role or job title */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Role or job title
            </label>
            <input
              type="text"
              placeholder=""
              {...register("role")}
              className="w-full px-3.5 py-2.5 sm:py-3 border border-slate-300  text-slate-900 focus:outline-none focus:border-Primary focus:ring-1 focus:ring-Primary transition-colors"
            />
          </div>

          {/* Field 5: Sector */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Sector
            </label>
            <div className="relative">
              <select
                {...register("sector")}
                className="w-full px-3.5 py-2.5 sm:py-3 border border-slate-300  text-slate-800 bg-white focus:outline-none focus:border-Primary focus:ring-1 focus:ring-Primary transition-colors appearance-none cursor-pointer"
              >
                {sectorOptions.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Field 6: What would you like from membership? */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              What would you like from membership?
            </label>
            <textarea
              rows={4}
              placeholder=""
              {...register("membershipNeeds")}
              className="w-full px-3.5 py-2.5 sm:py-3 border border-slate-300  text-slate-900 focus:outline-none focus:border-Primary focus:ring-1 focus:ring-Primary transition-colors resize-y"
            ></textarea>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Optional, but it helps us understand what to prioritise, for
              example training, briefings, or the evidence library.
            </p>
          </div>

          {/* Checkbox 1: Privacy notice and terms */}
          <div className="pt-2">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreeTerms"
                {...register("agreeTerms", {
                  required: "You must agree to the privacy notice to submit.",
                })}
                className="w-4 h-4 mt-1 rounded border-slate-300 text-Primary focus:ring-Primary cursor-pointer"
              />
              <label
                htmlFor="agreeTerms"
                className="text-xs sm:text-sm text-slate-700 leading-relaxed cursor-pointer select-none"
              >
                I have read and agree to GHUK's{" "}
                <Link
                  to="/privacy"
                  className="underline font-semibold text-slate-900 hover:text-Primary"
                >
                  privacy notice
                </Link>
                , including that my details will be held by GHUK and by the
                small number of service providers we use to run our systems, and
                that I can ask GHUK to access, correct or delete them at any
                time.
              </label>
            </div>
            {errors.agreeTerms && (
              <p className="mt-1 text-xs text-rose-600 font-medium pl-7">
                {errors.agreeTerms.message}
              </p>
            )}
          </div>

          {/* Checkbox 2: Newsletter updates */}
          <div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="newsletterUpdates"
                {...register("newsletterUpdates")}
                className="w-4 h-4 mt-1 rounded border-slate-300 text-Primary focus:ring-Primary cursor-pointer"
              />
              <label
                htmlFor="newsletterUpdates"
                className="text-xs sm:text-sm text-slate-700 leading-relaxed cursor-pointer select-none"
              >
                I would also like to receive GHUK's newsletter and campaign
                updates by email. I can unsubscribe at any time.
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-Primary hover:bg-[#0e5472] text-white font-semibold text-sm sm:text-base px-8 py-3.5  transition-all shadow-sm flex items-center justify-center min-w-[140px] disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>Submitting...</span>
                </div>
              ) : (
                "Register"
              )}
            </button>
          </div>

          {/* Postscript Notes from Screenshot 3 */}
          <div className="pt-6 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
            <p>
              After you submit this, a colleague will be in touch about your
              registration. We don't have a fixed response time to promise while
              membership is being rolled out, but we aim to reply as soon as we
              can.
            </p>
            <p>
              We never sell your details, and we never accept gambling-industry
              funding. See our{" "}
              <Link
                to="/privacy"
                className="underline font-semibold text-slate-900 hover:text-Primary"
              >
                privacy notice
              </Link>{" "}
              for who we share data with and why.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterMembershipForm;
