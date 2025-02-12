
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <div className="text-center">
            <span className="inline-block animate-fade-in px-4 py-1 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
              1800+  Investors Ready to Connect
            </span>
            <h1 className="animate-fade-up text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
            Looking for funding! 1800+ investors are ready to help!
            </h1>
            <p className="animate-fade-up animation-delay-100 max-w-2xl mx-auto text-lg text-gray-600 mb-8">
              Investment Gurus bridges the gap between innovative startups from Tier 3 cities
              and global investors. One click away from your next big investment.
            </p>
            <div className="animate-fade-up animation-delay-200 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="group" onClick={() => window.location.href = "/services"}>
                Other Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = "/investors"}>
                View Investors
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 rounded-full blur-3xl transform rotate-12"></div>
      </div>
    </div>
  );
};

export default Hero;
