import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegisterFormSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      tailorCategory: "Prefer not to say",
      newsletterUpdates: true,
      membershipInterest: false,
      agreeTerms: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Registration submitted:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <section className="py-12 md:py-20 bg-white px-4 md:px-8 text-gray-800">
      <div className="max-w-4xl mx-auto">
        {submitted && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-md text-sm">
            Thank you for registering! We've saved your preferences and will keep you updated.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Your name */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs md:text-sm font-semibold text-gray-800 mb-1.5"
            >
              Your name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Please enter your name" })}
              className={`w-full px-3.5 py-2.5 text-sm border rounded-md outline-none transition-colors ${
                errors.name
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-[#0093D0]"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email address */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs md:text-sm font-semibold text-gray-800 mb-1.5"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Please enter your email address",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address",
                },
              })}
              className={`w-full px-3.5 py-2.5 text-sm border rounded-md outline-none transition-colors ${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-[#0093D0]"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Tailor select */}
          <div>
            <label
              htmlFor="tailorCategory"
              className="block text-xs md:text-sm font-semibold text-gray-800 mb-1.5"
            >
              This helps us tailor what we send you
            </label>
            <select
              id="tailorCategory"
              {...register("tailorCategory")}
              className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md bg-white text-gray-800 outline-none focus:border-[#0093D0] cursor-pointer"
            >
              <option value="Prefer not to say">Prefer not to say</option>
              <option value="Person with lived experience">
                Person with lived experience
              </option>
              <option value="Affected other / family member">
                Affected other / family member
              </option>
              <option value="Healthcare professional / Clinician">
                Healthcare professional / Clinician
              </option>
              <option value="Researcher / Academic">Researcher / Academic</option>
              <option value="Policy maker / MP">Policy maker / MP</option>
              <option value="Campaigner / Advocate">Campaigner / Advocate</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* What would you like? Box */}
          <div>
            <label className="block text-xs md:text-sm font-semibold text-gray-800 mb-1.5">
              What would you like?
            </label>
            <div className="border border-gray-200 rounded-md p-4 space-y-3 bg-white">
              <label className="flex items-start gap-3 cursor-pointer text-xs md:text-sm text-gray-800 leading-snug">
                <input
                  type="checkbox"
                  {...register("newsletterUpdates")}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#0093D0] focus:ring-[#0093D0] cursor-pointer accent-[#0093D0]"
                />
                <span>Newsletter &amp; campaign updates</span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer text-xs md:text-sm text-gray-800 leading-snug">
                <input
                  type="checkbox"
                  {...register("membershipInterest")}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#0093D0] focus:ring-[#0093D0] cursor-pointer accent-[#0093D0]"
                />
                <span>
                  Register my interest in GHUK membership (launching later this year)
                </span>
              </label>
            </div>
          </div>

          {/* Privacy Terms Agreement Checkbox */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer text-xs md:text-sm text-gray-700 leading-relaxed">
              <input
                type="checkbox"
                {...register("agreeTerms", {
                  required: "You must agree to email contact to register",
                })}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#0093D0] focus:ring-[#0093D0] cursor-pointer accent-[#0093D0]"
              />
              <span>
                I agree to GHUK contacting me by email. You can unsubscribe at any
                time. See our{" "}
                <Link
                  to="/privacy-notice"
                  className="text-[#0093D0] underline hover:text-[#0076A8] font-medium"
                >
                  privacy notice
                </Link>
                .
              </span>
            </label>
            {errors.agreeTerms && (
              <p className="text-xs text-red-500 mt-1">
                {errors.agreeTerms.message}
              </p>
            )}
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="bg-[#0076A8] hover:bg-[#005f88] text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-colors duration-150 cursor-pointer shadow-sm"
            >
              Register
            </button>
          </div>

          {/* Footer Disclosure Note */}
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed pt-2">
            We never sell your details, and we never accept gambling-industry
            funding.
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterFormSection;
