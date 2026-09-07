import React, { useState } from "react";
import SpendCalculatorHero from "@/components/spendCalculatorComponents/SpendCalculatorHero";
import SpendCalculatorMain from "@/components/spendCalculatorComponents/SpendCalculatorMain";
import SpendMoneyComparison from "@/components/spendCalculatorComponents/SpendMoneyComparison";
import SpendWorthChecking from "@/components/spendCalculatorComponents/SpendWorthChecking";
import SpendUncapturedFactors from "@/components/spendCalculatorComponents/SpendUncapturedFactors";
import SpendSupportRoutes from "@/components/spendCalculatorComponents/SpendSupportRoutes";
import PageSectionNav from "@/components/common/PageSectionNav";

const sections = [
  { id: "calculator", title: "1. Calculator" },
  { id: "comparison", title: "2. What else it could be" },
  { id: "worth-checking", title: "3. Worth checking" },
  { id: "uncaptured-factors", title: "4. What isn't captured" },
  { id: "support-routes", title: "5. Routes to support" },
];

export default function SpendCalculatorPage() {
  // Calculator state (initialized empty so placeholders show by default)
  const [amountPerSession, setAmountPerSession] = useState("");
  const [sessionsPerWeek, setSessionsPerWeek] = useState("");
  const [durationValue, setDurationValue] = useState("");
  const [durationUnit, setDurationUnit] = useState("months");

  // Arithmetic calculations matching original script exactly
  const numAmount = parseFloat(amountPerSession) || 0;
  const numSessions = parseFloat(sessionsPerWeek) || 0;
  const numDuration = parseFloat(durationValue) || 0;

  const weeklyTotal = numAmount * numSessions;
  const yearlyTotal = weeklyTotal * 52;
  const monthlyTotal = (weeklyTotal * 52) / 12;

  let durationTotal = 0;
  if (numDuration > 0) {
    const totalMonths = durationUnit === "years" ? numDuration * 12 : numDuration;
    durationTotal = monthlyTotal * totalMonths;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero / Header section */}
      <SpendCalculatorHero />

      {/* In-page Sticky Pill Navigation */}
      <PageSectionNav sections={sections} />

      {/* 2. Main Interactive Calculator section */}
      <div id="calculator" className="scroll-mt-24">
        <SpendCalculatorMain
          amountPerSession={amountPerSession}
          setAmountPerSession={setAmountPerSession}
          sessionsPerWeek={sessionsPerWeek}
          setSessionsPerWeek={setSessionsPerWeek}
          durationValue={durationValue}
          setDurationValue={setDurationValue}
          durationUnit={durationUnit}
          setDurationUnit={setDurationUnit}
          weeklyTotal={weeklyTotal}
          monthlyTotal={monthlyTotal}
          yearlyTotal={yearlyTotal}
          durationTotal={durationTotal}
        />
      </div>

      {/* 3. "What else that money could be" comparison section */}
      <div id="comparison" className="scroll-mt-24">
        <SpendMoneyComparison
          yearlyTotal={yearlyTotal}
          durationValue={durationValue}
          durationUnit={durationUnit}
        />
      </div>

      {/* 4. "WORTH CHECKING" callout section */}
      <div id="worth-checking" className="scroll-mt-24">
        <SpendWorthChecking />
      </div>

      {/* 5. "What this number doesn't capture" section */}
      <div id="uncaptured-factors" className="scroll-mt-24">
        <SpendUncapturedFactors />
      </div>

      {/* 6. "If this figure has landed hard, there's somewhere to take it." support routes section */}
      <div id="support-routes" className="scroll-mt-24">
        <SpendSupportRoutes />
      </div>
    </div>
  );
}
