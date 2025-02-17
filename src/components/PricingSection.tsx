
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for early-stage startups",
    features: [
      "Access to full search and filtering of investors",
      "Read summary of investors",
      "Browse investors from 50+ countries",
      "Basic investment tools",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹599",
    description: "Ideal for growing businesses",
    features: [
      "50 profile views per month",
      "50 Email ID views per month",
      "Exclusive startup founder community access",
      "Priority investor matching",
      "Quarterly strategy sessions",
    ],
    popular: true,
  },
  {
    name: "Pro+",
    price: "₹1,499",
    description: "For established companies",
    features: [
      "300 profile views per month",
      "300 email ID views per month",
      "Exclusive startup founder community access",
      "Access to pitch deck templates",
      "Monthly board meetings",
      "VIP events access",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-primary">Access Investor Data Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlock comprehensive investor profiles and connect with potential investors through our flexible pricing plans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative animate-fade-up ${
                plan.popular
                  ? "border-blue-600 shadow-lg scale-105"
                  : "border-border"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-primary">
                  {plan.price}
                  {plan.price !== "Free" && <span className="text-base font-normal text-muted-foreground">/mo</span>}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full bg-blue-600  text-white${
                    plan.popular ? "bg-accent text-white" : ""
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

export default PricingSection;
