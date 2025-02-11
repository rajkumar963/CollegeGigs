
import { Book, ChartBarIcon, Megaphone } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const MarketingMasterclass = () => {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Marketing & Entrepreneurship Masterclass
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn the best strategies to build and scale your brand through our comprehensive marketing masterclass. We provide you with the tools and knowledge to effectively promote your startup and reach your target audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="animate-fade-up" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Book className="w-8 h-8 text-accent" />
                <CardTitle className="text-xl">Comprehensive Curriculum</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="min-h-[100px]">
                Master essential marketing concepts through our structured learning path, covering digital marketing, branding, and growth strategies.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Megaphone className="w-8 h-8 text-accent" />
                <CardTitle className="text-xl">Practical Implementation</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="min-h-[100px]">
                Apply your learning through hands-on projects and real-world case studies. Get feedback from industry experts on your marketing strategies.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="animate-fade-up" style={{ animationDelay: "300ms" }}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <ChartBarIcon className="w-8 h-8 text-accent" />
                <CardTitle className="text-xl">Growth Analytics</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="min-h-[100px]">
                Learn to measure and analyze your marketing efforts using data-driven approaches. Make informed decisions based on metrics and KPIs.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-accent hover:bg-accent/90">
            Join the Masterclass
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketingMasterclass;
