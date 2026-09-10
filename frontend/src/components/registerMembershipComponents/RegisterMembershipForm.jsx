import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useMemberAuth } from "@/context/MemberAuthContext";
import { CheckCircle2, AlertCircle, Lock, Eye, EyeOff } from "lucide-react";

const SECTOR_OPTIONS = [
  "NHS",
  "Local authority or public health",
  "Education",
  "Research",
  "Third sector",
  "Lived experience",
  "Other",
];

const RegisterMembershipForm = () => {
  const { registerMember } = useMemberAuth();
  const [serverSuccess, setServerSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [otherSectorText, setOtherSectorText] = useState("");
  const [sectorError, setSectorError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      organisation: "",
      role: "",
      membershipNeeds: "",
      anythingElse: "",
      agreeTerms: false,
      newsletterUpdates: false,
    },
  });

  const passwordValue = watch("password");

  const handleToggleSector = (sector) => {
    setSectorError("");
    setSelectedSectors((prev) => {
      if (prev.includes(sector)) {
        return prev.filter((s) => s !== sector);
      } else {
        return [...prev, sector];
      }
    });
  };

  const onSubmit = async (data) => {
    setServerError("");

    if (selectedSectors.length === 0) {
      setSectorError("Please select at least one sector.");
      return;
    }

    const formattedSectors = selectedSectors.map((s) => {
      if (s === "Other" && otherSectorText.trim()) {
        return `Other (${otherSectorText.trim()})`;
      }
      return s;
    });

    const primarySector = formattedSectors.join(", ");

    try {
      await registerMember({
        name: data.name,
        email: data.email,
        password: data.password,
        organisation: data.organisation,
        role: data.role,
        sector: primarySector,
        sectors: formattedSectors,
        membershipNeeds: data.membershipNeeds,
        anythingElse: data.anythingElse,
        agreeTerms: data.agreeTerms,
        newsletterUpdates: data.newsletterUpdates,
      });

      setServerSuccess(true);
      reset();
      setSelectedSectors([]);
      setOtherSectorText("");
      window.scrollTo({ top: 100, behavior: "smooth" });
    } catch (err) {
      console.error("Registration submit error:", err);
      setServerError(
        err?.response?.data?.message || err?.message || "Failed to submit registration. Please try again."
      );
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white px-4 md:px-8 text-gray-800">
      <div className="max-w-2xl mx-auto">
        {/* Success Alert */}
        {serverSuccess && (
          <div className="mb-8 p-6 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-full text-emerald-700">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-emerald-900">
                Registration Application Received!
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-emerald-800">
              Thank you for applying for GHUK membership. Your application has been recorded and is currently <strong>pending review and approval</strong> by our admin team.
            </p>
            <p className="text-xs text-emerald-700 leading-relaxed">
              Once a colleague verifies your professional details, you will receive an activation email and will be able to sign in to access the Members Library.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <Link
                to="/sign-in"
                className="inline-block bg-[#0093D0] hover:bg-[#0e5472] text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors"
              >
                Go to Sign In page
              </Link>
              <button
                type="button"
                onClick={() => setServerSuccess(false)}
                className="text-xs font-semibold text-emerald-800 hover:underline px-2 py-1"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {serverError && (
          <div className="mb-8 p-4 bg-rose-50 border border-rose-200 text-rose-800 text-sm rounded-lg flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{serverError}</span>
            </div>
            <button
              onClick={() => setServerError("")}
              className="text-rose-700 hover:text-rose-900 font-bold ml-3 text-xs"
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
              Your full name *
            </label>
            <input
              type="text"
              placeholder="e.g. Dr. Jane Smith"
              {...register("name", { required: "Name is required." })}
              className={`w-full px-3.5 py-2.5 sm:py-3 border rounded-md text-slate-900 focus:outline-none transition-colors ${
                errors.name
                  ? "border-rose-400 focus:border-rose-500 bg-rose-50/20"
                  : "border-slate-300 focus:border-[#0093D0] focus:ring-1 focus:ring-[#0093D0]"
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
              Work / Professional email address *
            </label>
            <input
              type="email"
              placeholder="e.g. name@organisation.nhs.uk"
              {...register("email", {
                required: "Email address is required.",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email address.",
                },
              })}
              className={`w-full px-3.5 py-2.5 sm:py-3 border rounded-md text-slate-900 focus:outline-none transition-colors ${
                errors.email
                  ? "border-rose-400 focus:border-rose-500 bg-rose-50/20"
                  : "border-slate-300 focus:border-[#0093D0] focus:ring-1 focus:ring-[#0093D0]"
              }`}
            />
            <p className="text-xs text-slate-500 mt-1.5">
              Please use your institutional or organisational email if applicable.
            </p>
            {errors.email && (
              <p className="mt-1.5 text-xs text-rose-600 font-medium">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Field 3: Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">
                Create password *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimum 6 characters"
                  {...register("password", {
                    required: "Password is required.",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters.",
                    },
                  })}
                  className={`w-full pl-3.5 pr-10 py-2.5 sm:py-3 border rounded-md text-slate-900 focus:outline-none transition-colors ${
                    errors.password
                      ? "border-rose-400 focus:border-rose-500 bg-rose-50/20"
                      : "border-slate-300 focus:border-[#0093D0] focus:ring-1 focus:ring-[#0093D0]"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1.5 text-xs text-rose-600 font-medium">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">
                Confirm password *
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Re-enter password"
                {...register("confirmPassword", {
                  required: "Please confirm your password.",
                  validate: (val) =>
                    val === passwordValue || "Passwords do not match.",
                })}
                className={`w-full px-3.5 py-2.5 sm:py-3 border rounded-md text-slate-900 focus:outline-none transition-colors ${
                  errors.confirmPassword
                    ? "border-rose-400 focus:border-rose-500 bg-rose-50/20"
                    : "border-slate-300 focus:border-[#0093D0] focus:ring-1 focus:ring-[#0093D0]"
                }`}
              />
              {errors.confirmPassword && (
                <p className="mt-1.5 text-xs text-rose-600 font-medium">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* Field 4: Organisation */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Organisation or Trust
            </label>
            <input
              type="text"
              placeholder="e.g. NHS Foundation Trust, University, Local Council"
              {...register("organisation")}
              className="w-full px-3.5 py-2.5 sm:py-3 border rounded-md border-slate-300 text-slate-900 focus:outline-none focus:border-[#0093D0] focus:ring-1 focus:ring-[#0093D0] transition-colors"
            />
          </div>

          {/* Field 5: Role or job title */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Role or job title
            </label>
            <input
              type="text"
              placeholder="e.g. Consultant Clinical Psychologist, Safeguarding Lead"
              {...register("role")}
              className="w-full px-3.5 py-2.5 sm:py-3 border rounded-md border-slate-300 text-slate-900 focus:outline-none focus:border-[#0093D0] focus:ring-1 focus:ring-[#0093D0] transition-colors"
            />
          </div>

          {/* Field 6: Sector (Multi-Select) */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              Sector * (Select all that apply)
            </label>
            <p className="text-xs text-slate-500 mb-3">
              You can select more than one sector that applies to your work.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-slate-50/70 p-4 border border-slate-200 rounded-lg">
              {SECTOR_OPTIONS.map((opt, i) => {
                const isChecked = selectedSectors.includes(opt);
                return (
                  <label
                    key={i}
                    className={`flex items-center gap-3 p-2.5 rounded-md cursor-pointer transition-all select-none border text-sm font-medium ${
                      isChecked
                        ? "bg-white border-[#0093D0] text-[#0093D0] shadow-xs"
                        : "bg-white/80 border-slate-200 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleToggleSector(opt)}
                      className="w-4 h-4 rounded border-slate-300 text-[#0093D0] focus:ring-[#0093D0] cursor-pointer"
                    />
                    <span>{opt}</span>
                  </label>
                );
              })}
            </div>

            {/* If 'Other' is selected, show free-text input */}
            {selectedSectors.includes("Other") && (
              <div className="mt-3 animate-fadeIn">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Please specify your sector / organisation type:
                </label>
                <input
                  type="text"
                  value={otherSectorText}
                  onChange={(e) => setOtherSectorText(e.target.value)}
                  placeholder="e.g. Criminal justice, housing association, independent consultant"
                  className="w-full px-3.5 py-2.5 text-sm border rounded-md border-slate-300 text-slate-900 focus:outline-none focus:border-[#0093D0] focus:ring-1 focus:ring-[#0093D0] transition-colors"
                />
              </div>
            )}

            {sectorError && (
              <p className="mt-1.5 text-xs text-rose-600 font-medium">
                {sectorError}
              </p>
            )}
          </div>

          {/* Field 7: What would you like from membership? */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              What would you like from membership?
            </label>
            <textarea
              rows={3}
              placeholder="Optional: e.g. MECC training, burden-of-harm evidence tools, safeguarding films"
              {...register("membershipNeeds")}
              className="w-full px-3.5 py-2.5 sm:py-3 border rounded-md border-slate-300 text-slate-900 focus:outline-none focus:border-[#0093D0] focus:ring-1 focus:ring-[#0093D0] transition-colors resize-y"
            ></textarea>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Optional, but it helps our team understand what materials to prioritise for your sector.
            </p>
          </div>

          {/* Field 8: Anything else you want to tell us */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Anything else you want to tell us
            </label>
            <textarea
              rows={3}
              placeholder="Optional: e.g. details about your local team, collaborative projects, or specific questions"
              {...register("anythingElse")}
              className="w-full px-3.5 py-2.5 sm:py-3 border rounded-md border-slate-300 text-slate-900 focus:outline-none focus:border-[#0093D0] focus:ring-1 focus:ring-[#0093D0] transition-colors resize-y"
            ></textarea>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Optional: any additional notes, queries, or context you would like to share.
            </p>
          </div>

          {/* Checkbox 1: Privacy notice and terms */}
          <div className="pt-2">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreeTerms"
                {...register("agreeTerms", {
                  required: "You must agree to the privacy notice to register.",
                })}
                className="w-4 h-4 mt-1 rounded border-slate-300 text-[#0093D0] focus:ring-[#0093D0] cursor-pointer"
              />
              <label
                htmlFor="agreeTerms"
                className="text-xs sm:text-sm text-slate-700 leading-relaxed cursor-pointer select-none"
              >
                I have read and agree to GHUK's{" "}
                <Link
                  to="/privacy"
                  className="underline font-semibold text-slate-900 hover:text-[#0093D0]"
                >
                  privacy notice
                </Link>
                , including that my details will be verified by the GHUK team for professional access.
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
                className="w-4 h-4 mt-1 rounded border-slate-300 text-[#0093D0] focus:ring-[#0093D0] cursor-pointer"
              />
              <label
                htmlFor="newsletterUpdates"
                className="text-xs sm:text-sm text-slate-700 leading-relaxed cursor-pointer select-none"
              >
                I would also like to receive GHUK's professional briefings and campaign updates by email.
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#0093D0] hover:bg-[#0e5472] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-md transition-all shadow-sm flex items-center justify-center min-w-[170px] disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>Submitting application...</span>
                </div>
              ) : (
                "Submit Registration"
              )}
            </button>
          </div>

          {/* Postscript Notes */}
          <div className="pt-6 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
            <p>
              <strong>What happens next?</strong> After you submit this, our admin team will review your application. Once approved, you will receive an email confirmation and can sign in immediately.
            </p>
            <p>
              Already registered and approved?{" "}
              <Link
                to="/sign-in"
                className="underline font-semibold text-slate-900 hover:text-[#0093D0]"
              >
                Sign in here
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterMembershipForm;
