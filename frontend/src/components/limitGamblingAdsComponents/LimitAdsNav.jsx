import React from "react";
import PageSectionNav from "@/components/common/PageSectionNav";

const sections = [
  { id: "operator-marketing", title: "1. Operator Marketing" },
  { id: "platform-level-controls", title: "2. Platform-level Controls" },
  { id: "device-browser", title: "3. Device & Browser" },
  { id: "broadcast-sport", title: "4. Broadcast & Sport" },
  { id: "for-parents-carers", title: "5. For Parents & Carers" },
  { id: "our-position", title: "6. Our Position" },
];

const LimitAdsNav = () => {
  return <PageSectionNav sections={sections} />;
};

export default LimitAdsNav;

