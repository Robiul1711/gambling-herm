import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";
import Banner from "@/components/homeComponents/Banner";
import LivedExperienceQuote from "@/components/homeComponents/LivedExperienceQuote";
import OurPosition from "@/components/homeComponents/OurPosition";
import ScaleOfHarm from "@/components/homeComponents/ScaleOfHarm";
import SupportOptions from "@/components/homeComponents/SupportOptions";
import ThreeFoundations from "@/components/homeComponents/ThreeFoundations";
import ThreeFramings from "@/components/homeComponents/ThreeFramings";


const Home = () => {
  return <div >
    <Banner/>
    <OurPosition/>
    <SupportOptions/>
    <ScaleOfHarm/>
    <ThreeFoundations/>
    <ThreeFramings/>
    <LivedExperienceQuote/>
    <OurWorkCommonContact
      title="You don't have to do this alone, and we don't think you should have to."
      description="If gambling is harming you or someone you love, there is a way through. There is also a fight to make sure fewer people have to make this journey at all."
      primaryBtnText="Get Help Now"
      primaryBtnLink="/get-help"
      secondaryBtnText="Read Our Policy Positions"
      secondaryBtnLink="/policy-and-advocacy"
    />
  </div>;
};

export default Home;
