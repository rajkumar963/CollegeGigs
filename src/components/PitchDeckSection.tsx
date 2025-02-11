
import { Check, FileText, Users } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const services = [
  {
    name: "Pitch Deck Basic",
    price: "₹999",
    description: "Professional pitch deck creation",
    features: [
      "10-15 slides professional pitch deck",
      "2 rounds of revisions",
      "Market analysis",
      "Financial projections",
      "Compelling storytelling",
    ],
    icon: <FileText className="w-6 h-6 text-accent" />,
    popular: false,
  },
  {
    name: "Pitch Deck Pro",
    price: "₹1,999",
    description: "Pitch deck with business mentorship",
    features: [
      "Everything in Basic plan",
      "1-on-1 business mentorship",
      "Pitch practice sessions",
      "Investor presentation strategy",
      "Networking opportunities",
    ],
    icon: <Users className="w-6 h-6 text-accent" />,
    popular: true,
  },
];

const PitchDeckSection = () => {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-primary">Pitch Deck Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional pitch deck creation services to help you impress investors and secure funding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.name}
              className={`relative animate-fade-up ${
                service.popular
                  ? "border-accent shadow-lg scale-105"
                  : "border-border"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  {service.icon}
                  <CardTitle className="text-2xl font-bold">{service.name}</CardTitle>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-primary">
                  {service.price}
                  <span className="text-base font-normal text-muted-foreground">/deck</span>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    service.popular ? "bg-accent hover:bg-accent/90" : ""
                  }`}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PitchDeckSection;
