import ByUKRegionComponent from "./ByUKRegion";
import OnlineOptionsComponent from "./OnlineOptions";
import ResidentialIntensiveComponent from "./ResidentialIntensive";
import SpecialistServicesComponent from "./SpecialistServices";
import FinancialSupportComponent from "./FinancialSupport";

// ── By UK Region — delegates to dedicated component ───────────────────────────
export function ByUKRegion(props) {
  return <ByUKRegionComponent {...props} />;
}


// ── Online Options ────────────────────────────────────────────────────────────
export function OnlineOptions(props) {
  return <OnlineOptionsComponent {...props} />;
}

// ── Residential & Intensive ───────────────────────────────────────────────────
export function ResidentialIntensive(props) {
  return <ResidentialIntensiveComponent {...props} />;
}

// ── Specialist Services ───────────────────────────────────────────────────────
export function SpecialistServices(props) {
  return <SpecialistServicesComponent {...props} />;
}

// ── Financial Support ─────────────────────────────────────────────────────────
export function FinancialSupport(props) {
  return <FinancialSupportComponent {...props} />;
}
