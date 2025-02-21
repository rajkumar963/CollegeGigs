import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Resources from "./components/NavbarFeatures/Resources";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/NavbarFeatures/Services";
import InvestorDetails from "./components/NavbarFeatures/InvestorDetails";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";
import PitchDeckSection from "./components/NavbarFeatures/Services/PitchDeckSection";
import WebsiteSection from "./components/NavbarFeatures/Services/WebsiteSection";
import Business from "./components/NavbarFeatures/Services/Business";
import LogoDesign from "./components/NavbarFeatures/Services/LogoDesign";
import MarketingEbookSection from "./components/Ebooks/MarketingEbookSection";
import SalesEbookSection from "./components/Ebooks/SalesEbookSection";
import EntrepreneurshipEbookSection from "./components/Ebooks/EntrepreneurshipEbookSection";
import SachinBinnyStory from "./components/SuccessStory/SachinBinnyStory";
import RiteshStory from "./components/SuccessStory/RiteshStory";
import ZeptoStory from "./components/SuccessStory/ZeptoStory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider> 
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/investors" element={<InvestorDetails />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/pitch-deck" element={<PitchDeckSection/>} />
          <Route path="/services/website" element={<WebsiteSection/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/services/business" element={<Business/>} />
          <Route path="/services/logodesign" element={<LogoDesign/>} />
          <Route path="/resources/marketing" element={<MarketingEbookSection />} />
          <Route path="/resources/sales" element={<SalesEbookSection />} />
          <Route path="/resources/entrepreneurship" element={<EntrepreneurshipEbookSection />} />
          <Route path="/sachinbinnystory" element={<SachinBinnyStory/>} />
          <Route path="/riteshstory" element={<RiteshStory/>} />
          <Route path="/zeptostory" element={<ZeptoStory/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
