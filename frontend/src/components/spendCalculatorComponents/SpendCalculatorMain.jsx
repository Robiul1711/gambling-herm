import React from "react";

const SpendCalculatorMain = ({
  amountPerSession,
  setAmountPerSession,
  sessionsPerWeek,
  setSessionsPerWeek,
  durationValue,
  setDurationValue,
  durationUnit,
  setDurationUnit,
  weeklyTotal,
  monthlyTotal,
  yearlyTotal,
  durationTotal,
}) => {
  const hasEnteredPattern =
    amountPerSession !== "" &&
    sessionsPerWeek !== "" &&
    Number(amountPerSession) > 0 &&
    Number(sessionsPerWeek) > 0;

  const formatCurrency = (amount) => {
    if (isNaN(amount) || amount === null || amount === undefined) return "£0";
    return `£${Math.round(amount).toLocaleString("en-GB")}`;
  };

  const getDurationLabel = () => {
    const val = Number(durationValue);
    if (!val || val <= 0 || !hasEnteredPattern) return null;
    if (durationUnit === "years") {
      return `Over ${val} ${val === 1 ? "year" : "years"}`;
    }
    if (durationUnit === "months") {
      return `Over ${val} ${val === 1 ? "month" : "months"}`;
    }
    if (durationUnit === "weeks") {
      return `Over ${val} ${val === 1 ? "week" : "weeks"}`;
    }
    return `Over ${val} ${durationUnit}`;
  };

  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] mb-3 tracking-tight">
          Work out your figure
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-8 max-w-3xl">
          Enter a typical staking pattern below. If it varies week to week, use
          a figure that feels like a fair average. This tool only does
          arithmetic: it doesn't score, categorise or label your gambling, and
          there's no verdict at the end.
        </p>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Form Card */}
          <div className="md:col-span-6 bg-white border border-gray-200  p-5 sm:p-7 shadow-xs flex flex-col justify-between space-y-5">
            {/* Input 1: Typical amount staked per session */}
            <div>
              <label
                htmlFor="amountPerSession"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
              >
                Typical amount staked per session (£)
              </label>
              <input
                id="amountPerSession"
                type="number"
                min="0"
                step="any"
                value={amountPerSession}
                onChange={(e) => setAmountPerSession(e.target.value)}
                placeholder="e.g. 20"
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300  text-gray-900 font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-[#0092D0]/20 focus:border-[#0092D0] outline-none transition-all"
              />
            </div>

            {/* Input 2: Sessions per week */}
            <div>
              <label
                htmlFor="sessionsPerWeek"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
              >
                Sessions per week
              </label>
              <input
                id="sessionsPerWeek"
                type="number"
                min="0"
                max="100"
                step="any"
                value={sessionsPerWeek}
                onChange={(e) => setSessionsPerWeek(e.target.value)}
                placeholder="e.g. 4"
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300  text-gray-900 font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-[#0092D0]/20 focus:border-[#0092D0] outline-none transition-all"
              />
            </div>

            {/* Input 3: Duration (Optional) */}
            <div>
              <label
                htmlFor="durationValue"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
              >
                How long has this pattern been going? (optional)
              </label>
              <div className="flex items-center">
                <input
                  id="durationValue"
                  type="number"
                  min="0"
                  step="any"
                  value={durationValue}
                  onChange={(e) => setDurationValue(e.target.value)}
                  placeholder="e.g. 18"
                  className="w-1/2 px-3.5 py-2.5 bg-white border border-gray-300 rounded-l-lg text-gray-900 font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-[#0092D0]/20 focus:border-[#0092D0] outline-none transition-all"
                />
                <select
                  aria-label="Duration time unit"
                  value={durationUnit}
                  onChange={(e) => setDurationUnit(e.target.value)}
                  className="w-1/2 px-3.5 py-2.5 bg-white border-y border-r border-gray-300 rounded-r-lg text-gray-700 font-medium focus:ring-2 focus:ring-[#0092D0]/20 focus:border-[#0092D0] outline-none transition-all cursor-pointer"
                >
                  <option value="months">months</option>
                  <option value="years">years</option>
                  <option value="weeks">weeks</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Dark Card (Results) */}
          <div className="md:col-span-6 bg-[#181C1E] text-white  p-6 sm:p-8 shadow-md flex flex-col justify-between">
            <div>
              {/* Header */}
              <p className="text-xs font-bold uppercase tracking-widest text-gray-300">
                ESTIMATED COST
              </p>

              {/* Big Figure */}
              <div className="my-3">
                <div className="text-4xl sm:text-5xl font-bold text-[#0092D0] tracking-tight">
                  {formatCurrency(hasEnteredPattern ? yearlyTotal : 0)}
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  per year, at the pattern above
                </p>
              </div>

              {/* Breakdown Rows */}
              <div className="mt-6 space-y-0 border-t border-gray-800/80">
                <div className="flex justify-between items-center py-3 border-b border-gray-800/80 text-sm">
                  <span className="text-gray-300">Per week</span>
                  {hasEnteredPattern && (
                    <span className="font-semibold text-white">
                      {formatCurrency(weeklyTotal)}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-800/80 text-sm">
                  <span className="text-gray-300">Per month</span>
                  {hasEnteredPattern && (
                    <span className="font-semibold text-white">
                      {formatCurrency(monthlyTotal)}
                    </span>
                  )}
                </div>

                {getDurationLabel() && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-800/80 text-sm">
                    <span className="text-gray-300">{getDurationLabel()}</span>
                    <span className="font-semibold text-white">
                      {formatCurrency(durationTotal)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <p className="text-xs text-gray-400 mt-6 pt-3 border-t border-gray-800/50 leading-relaxed">
              Figures are based only on the amounts you've entered above.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpendCalculatorMain;
