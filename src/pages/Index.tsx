
import Hero from "@/components/Hero"; 
import InvestorsSection from "@/components/InvestorsSection";
import StartupMentorship from "@/components/StartupMentorship";
import MarketingMasterclass from "@/components/MarketingMasterclass";
import PricingSection from "@/components/PricingSection";
import Mentors from "@/components/Mentors";
import FAQ from "@/components/FAQ";
import AboutUs from "@/components/AboutUs";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AboutUs/>
      <InvestorsSection/>
      <Mentors />
      <MarketingMasterclass />
      <StartupMentorship />
      <PricingSection />
      <FAQ/>
    </div>
  );
};

export default Index;
