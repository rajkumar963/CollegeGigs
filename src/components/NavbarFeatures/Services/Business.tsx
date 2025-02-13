import React from "react";
import { FaCheckCircle, FaBriefcase, FaRocket, FaStar } from "react-icons/fa";

interface BusinessPlan {
  title: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
}

const plans: BusinessPlan[] = [
  {
    title: "Basic Plan",
    price: "₹599/month",
    features: [
      "✔ 5 Projects",
      "✔ Basic Support",
      "✔ 10GB Cloud Storage",
      "✔ Community Access",
    ],
    icon: <FaBriefcase className="text-blue-600 text-5xl" />,
  },
  {
    title: "Standard Plan",
    price: "₹999/month",
    features: [
      "✔ 15 Projects",
      "✔ Priority Support",
      "✔ 50GB Cloud Storage",
      "✔ Access to Premium Tools",
    ],
    icon: <FaRocket className="text-green-600 text-5xl" />,
  },
  {
    title: "Premium Plan",
    price: "₹1999/month",
    features: [
      "✔ Unlimited Projects",
      "✔ 24/7 Support",
      "✔ 1TB Cloud Storage",
      "✔ Exclusive Business Consulting",
    ],
    icon: <FaStar className="text-yellow-500 text-5xl" />,
  },
];

const BusinessPlansSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Business Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              {plan.icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{plan.title}</h3>
              <p className="text-2xl font-bold text-primary mt-2">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessPlansSection;
