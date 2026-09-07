import React from "react";
import PageSectionNav from "@/components/common/PageSectionNav";

const sections = [
  { id: "operator-marketing", title: "1. Operator marketing" },
  { id: "platform-level-controls", title: "2. Platform-level controls" },
  { id: "device-browser", title: "3. Device & browser" },
  { id: "broadcast-sport", title: "4. Broadcast & sport" },
  { id: "for-parents-carers", title: "5. For parents & carers" },
  { id: "our-position", title: "6. Our position" },
];

const LimitAdsNav = () => {
  return <PageSectionNav sections={sections} />;
};

export default LimitAdsNav;

