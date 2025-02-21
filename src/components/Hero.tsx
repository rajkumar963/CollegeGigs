import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const fullText = " 🔥 No hidden costs, no platform fees, and no barriers to success!!🔥";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex(0);
        }
      }, 50);
    } else {
      if (index < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + fullText[index]);
          setIndex(index + 1);
        }, 50);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      }
    }

    return () => clearTimeout(timeout);
  }, [index, displayText, isDeleting, fullText]);

  return (
    <div className="relative overflow-hidden pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <div className="text-center">
            <span className="inline-block animate-fade-in px-4 py-1 mb-4 text-xl font-medium text-blue-600 bg-blue-200 rounded-full">
              {displayText}
            </span>
            <h1 className="animate-fade-up text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
              Turn your startup vision into reality -{" "}
              <span className="text-blue-600">Begin with us!</span>
            </h1>
            <p className="animate-fade-up animation-delay-100 max-w-2xl mx-auto text-lg text-gray-600 mb-8">
              Every big business starts small. Take your first step today with our expert support!
            </p>
            <div className="animate-fade-up animation-delay-200 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="group" onClick={() => navigate("/services")}>
                Other Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-gray-150" onClick={() => navigate("/investors")}>
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
