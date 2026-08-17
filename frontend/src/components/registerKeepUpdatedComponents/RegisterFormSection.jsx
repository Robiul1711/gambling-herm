import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const RegisterFormSection = () => {
  const axiosPublic = useAxiosPublic();
  const [serverSuccess, setServerSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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

  const onSubmit = async (data) => {
    setServerError("");
    setServerSuccess(false);
    try {
      const res = await axiosPublic.post("/registrations", data);
      if (res.data?.success) {
        setServerSuccess(true);
        reset();
      }
    } catch (err) {
      console.error("Registration submission error:", err);
      setServerError(
        err?.response?.data?.message ||
          "Failed to submit your registration. Please try again."
      );
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Success Alert */}
        {serverSuccess && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-md text-sm flex items-center justify-between">
            <span>
              Thank you for registering! We've saved your preferences and will keep you updated.
            </span>
            <button
              onClick={() => setServerSuccess(false)}
              className="text-emerald-700 hover:text-emerald-900 font-bold ml-2 text-xs"
            >
              ✕
            </button>
          </div>
        )}

        {/* Error Alert */}
        {serverError && (
          <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-md text-sm flex items-center justify-between">
            <span>{serverError}</span>
            <button
              onClick={() => setServerError("")}
              className="text-rose-700 hover:text-rose-900 font-bold ml-2 text-xs"
            >
              ✕
            </button>
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
              <option value="I have been harmed by my own gambling">
                I have been harmed by my own gambling
              </option>
              <option value="I have been harmed by someone else's gambling">
                I have been harmed by someone else's gambling
              </option>
              <option value="Family member or friend">
                Family member or friend
              </option>
              <option value="Healthcare or public-health professional">
                Healthcare or public-health professional
              </option>
              <option value="Researcher or academic">
                Researcher or academic
              </option>
              <option value="Educator or teacher">Educator or teacher</option>
              <option value="Supporter">Supporter</option>
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
                  to="/privacy"
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
              disabled={isSubmitting}
              className="bg-[#0076A8] hover:bg-[#005f88] disabled:opacity-60 text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-colors duration-150 cursor-pointer shadow-sm flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  <span>Registering...</span>
                </>
              ) : (
                "Register"
              )}
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
