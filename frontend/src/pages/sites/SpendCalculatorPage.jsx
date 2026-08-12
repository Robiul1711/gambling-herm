import React, { useState } from "react";
import SpendCalculatorHero from "@/components/spendCalculatorComponents/SpendCalculatorHero";
import SpendCalculatorMain from "@/components/spendCalculatorComponents/SpendCalculatorMain";
import SpendMoneyComparison from "@/components/spendCalculatorComponents/SpendMoneyComparison";
import SpendWorthChecking from "@/components/spendCalculatorComponents/SpendWorthChecking";
import SpendUncapturedFactors from "@/components/spendCalculatorComponents/SpendUncapturedFactors";
import SpendSupportRoutes from "@/components/spendCalculatorComponents/SpendSupportRoutes";

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

      {/* 2. Main Interactive Calculator section */}
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

      {/* 3. "What else that money could be" comparison section */}
      <SpendMoneyComparison
        yearlyTotal={yearlyTotal}
        durationValue={durationValue}
        durationUnit={durationUnit}
      />

      {/* 4. "WORTH CHECKING" callout section */}
      <SpendWorthChecking />

      {/* 5. "What this number doesn't capture" section */}
      <SpendUncapturedFactors />

      {/* 6. "If this figure has landed hard, there's somewhere to take it." support routes section */}
      <SpendSupportRoutes />
    </div>
  );
}
