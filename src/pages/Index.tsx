
import Hero from "@/components/Hero"; 
import InvestorsSection from "@/components/InvestorsSection";
import StartupMentorship from "@/components/StartupMentorship";
import MarketingMasterclass from "@/components/MarketingMasterclass";
import PricingSection from "@/components/PricingSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <InvestorsSection/>
      <StartupMentorship />
      <MarketingMasterclass />
      <PricingSection />
    </div>
  );
};

export default Index;
