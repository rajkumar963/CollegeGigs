
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; 
import InvestorsSection from "@/components/InvestorsSection";
import PitchDeckSection from "@/components/PitchDeckSection";
import StartupMentorship from "@/components/StartupMentorship";
import MarketingMasterclass from "@/components/MarketingMasterclass";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <Hero />
      <InvestorsSection/>
      <PitchDeckSection />
      <StartupMentorship />
      <MarketingMasterclass />
      <PricingSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
