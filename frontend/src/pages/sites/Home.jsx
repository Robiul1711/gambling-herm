import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";
import Banner from "@/components/homeComponents/Banner";
import LivedExperienceQuote from "@/components/homeComponents/LivedExperienceQuote";
import OurPosition from "@/components/homeComponents/OurPosition";
import ScaleOfHarm from "@/components/homeComponents/ScaleOfHarm";
import SupportOptions from "@/components/homeComponents/SupportOptions";
import ThreeFoundations from "@/components/homeComponents/ThreeFoundations";
import ThreeFramings from "@/components/homeComponents/ThreeFramings";
const Home = () => {
  return (
    <div>
      <Banner />
      <OurPosition />
      <SupportOptions />
      {/* <ScaleOfHarm/> */}
      <ThreeFoundations />
      <ThreeFramings />
      <LivedExperienceQuote />
      <OurWorkCommonContact
        primaryClass="text-white bg-Primary border-black hover:bg-Primary/20"
        secondaryClass=" hover:bg-Primary"
        title="Prevention is the strategy. Support is here today."
        description="Most of this page is about stopping harm before it starts. But if gambling is harming you, or someone you love, right now: you don't have to wait for the system to change. Free, confidential support exists today, and we can point you to the right door."
        primaryBtnText="Get help now"
        primaryBtnLink="/get-help"
        secondaryBtnText="Read our policy positions"
        secondaryBtnLink="/policy-and-advocacy"
      />
    </div>
  );
};

export default Home;
