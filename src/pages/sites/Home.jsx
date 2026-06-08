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
  </div>;
};

export default Home;
