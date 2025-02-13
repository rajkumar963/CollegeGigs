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
import Courses from "./components/NavbarFeatures/Courses";
import InvestorDetails from "./components/NavbarFeatures/InvestorDetails";
import PitchDeckSection from "./components/PitchDeckSection";
import WebsiteSection from "./components/NavbarFeatures/Services/WebsiteSection";
import Business from "./components/NavbarFeatures/Services/Business";
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/investors" element={<InvestorDetails />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/pitch-deck" element={<PitchDeckSection/>} />
          <Route path="/services/website" element={<WebsiteSection/>} />
          <Route path="/services/business" element={<Business/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
