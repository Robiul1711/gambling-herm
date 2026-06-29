import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import GamblingLayout from "@/components/gamlingExplainedComponents/GamblingLayout";
import React from "react";
import bannerImg from "@/assets/images/ourworkbanner.png";
import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";
import useClient from "@/hooks/useClient";

const GamblingExplained = () => {
  const { data: responseData } = useClient({
    queryKey: ["about", "work-explained-banner"],
    url: "/about/work-explained-banner",
  });

  const bannerData = responseData?.data;

  return (
    <>
        <div className="section-padding-x">
           <GamblingCommonBanner
      section={bannerData?.subtitle || "Our work • Gambling Explained"}
      title={bannerData?.title || "Gambling Explained."}
      description={bannerData?.description || "Beyond individual blame. Toward systemic accountability. GHUK's flagship evidence summary, independently written and funded by affected-other researchers, in the lineage of WHO's Tobacco Explained (Bates & Rowell, 2000). First published 2021 for the Gambling Act Review. 2025/26 edition in preparation. Ten chapters, each below."}
      image={bannerData?.image || bannerImg}
    />
          <GamblingLayout />
        </div>
            <OurWorkCommonContact
      title="Beyond individual blame. Toward systemic accountability."
      description="The line GHUK draws is the line between locating gambling harm in the person who gambled, and locating it in the products, the marketing, the regulation, the research-and-treatment funding, and the political conditions that produced the harm at scale."
      primaryBtnText="Read our policy positions"
      primaryBtnLink="/policy-and-advocacy"
      secondaryBtnText="Gambling tactics"
      secondaryBtnLink="/gambling-tactics"
    />
    </>
  );
};

export default GamblingExplained;
