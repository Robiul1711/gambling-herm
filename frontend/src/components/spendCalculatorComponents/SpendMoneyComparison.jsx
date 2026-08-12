import React, { useState } from "react";

function fmt(n) {
  if (!isFinite(n)) {
    n = 0;
  }
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(n);
}

const COMPARISON_OPTIONS = [
  { value: "rent", label: "A month's rent or mortgage" },
  { value: "food", label: "A year of food shopping for a family" },
  { value: "holiday", label: "A family holiday" },
  { value: "childcare", label: "A year of childcare" },
  {
    value: "savings",
    label: "Savings at a modest interest rate, over your stated period",
  },
];

const SpendMoneyComparison = ({
  yearlyTotal = 0,
  durationValue = "",
  durationUnit = "months",
}) => {
  const [choice, setChoice] = useState("rent");

  // Calculate totalMonths exactly like original JS
  const durationVal = parseFloat(durationValue) || 0;
  let totalMonths = 0;
  if (durationVal > 0) {
    totalMonths = durationUnit === "years" ? durationVal * 12 : durationVal;
  }

  const renderComparisonContent = () => {
    if (yearlyTotal <= 0) {
      return <p>Enter your figures above to see a comparison.</p>;
    }

    if (choice === "rent") {
      const rentMonthly = 1050;
      const months = yearlyTotal / rentMonthly;
      return (
        <p>
          Using an illustrative UK average of {fmt(rentMonthly)} a month, your
          yearly figure of {fmt(yearlyTotal)} is close to{" "}
          <strong>{months.toFixed(1)} months</strong> of rent or a mortgage
          payment.
        </p>
      );
    }

    if (choice === "food") {
      const foodAnnual = 7800;
      const ratio = yearlyTotal / foodAnnual;
      return (
        <p>
          An illustrative UK average for a year of food shopping for a family of
          four is around {fmt(foodAnnual)}. Your yearly figure of{" "}
          {fmt(yearlyTotal)} is close to <strong>{ratio.toFixed(1)}&times;</strong>{" "}
          that.
        </p>
      );
    }

    if (choice === "holiday") {
      const holidayCost = 2600;
      const count = yearlyTotal / holidayCost;
      return (
        <p>
          An illustrative UK family holiday costs around {fmt(holidayCost)}. Your
          yearly figure of {fmt(yearlyTotal)} could cover roughly{" "}
          <strong>{count.toFixed(1)}</strong> holidays like that.
        </p>
      );
    }

    if (choice === "childcare") {
      const childcareAnnual = 12000;
      const ratio2 = (yearlyTotal / childcareAnnual) * 100;
      return (
        <p>
          An illustrative UK average for a year of full-time childcare for one
          child is around {fmt(childcareAnnual)}. Your yearly figure of{" "}
          {fmt(yearlyTotal)} is close to <strong>{ratio2.toFixed(0)}%</strong>{" "}
          of that.
        </p>
      );
    }

    if (choice === "savings") {
      const months2 = totalMonths > 0 ? totalMonths : 12;
      const monthlyContribution = yearlyTotal / 12;
      const rate = 0.03 / 12;
      let fv = 0;
      if (rate > 0) {
        fv = monthlyContribution * ((Math.pow(1 + rate, months2) - 1) / rate);
      } else {
        fv = monthlyContribution * months2;
      }
      const periodText =
        totalMonths > 0
          ? `your stated period (${months2} months)`
          : "one year, since no period was entered above";
      return (
        <p>
          If the monthly figure above had instead gone into a savings account
          paying a modest 3% interest, over {periodText} it could have grown to
          approximately <strong>{fmt(fv)}</strong>.
        </p>
      );
    }

    return null;
  };

  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-10 h-[3px] bg-[#0092D0] mb-4" />

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] mb-3 tracking-tight">
          What else that money could be
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 max-w-3xl">
          Pick a comparison to see how your yearly figure lines up against
          everyday costs. These are illustrative UK averages, not a judgement on
          how you spend your own money, and your own costs may be higher or
          lower.
        </p>

        {/* Select Comparison Dropdown */}
        <div className="mb-6">
          <label
            htmlFor="comparisonSelect"
            className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2"
          >
            Compare your yearly figure to
          </label>
          <select
            id="comparisonSelect"
            value={choice}
            onChange={(e) => setChoice(e.target.value)}
            className="w-full sm:max-w-lg px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-800 text-sm font-medium focus:ring-2 focus:ring-[#0092D0]/20 focus:border-[#0092D0] outline-none transition-all shadow-xs cursor-pointer"
          >
            {COMPARISON_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Comparison Callout Box */}
        <div className="bg-[#EAF6FB] border-l-4 border-[#0092D0] p-5 sm:p-6 rounded-r-md text-gray-800 text-sm md:text-base leading-relaxed">
          {renderComparisonContent()}
        </div>
      </div>
    </section>
  );
};

export default SpendMoneyComparison;
