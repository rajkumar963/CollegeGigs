import React from "react";
import { Mail, Search, Phone } from "lucide-react";

const cards = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739793466/Investor_sqou1w.jpg",
    title: "Connect with Investors Ready to Support You",
    description:
      "Present your unique business ideas and gain access to investors eager to foster growth in emerging startups like yours.",
    icon: <Mail className="text-blue-600 w-6 h-6" />,
    buttonText: "Get Started",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739794030/businessman_xa1s8p.avif",
    title: "Unlock Resources Crafted for Your Success",
    description:
      "Leverage our extensive library of e-books filled with actionable insights that will guide your startup to new heights.",
    icon: <Search className="text-blue-600 w-6 h-6" />,
    buttonText: "Explore",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739793466/group_ywbyd6.jpg",
    title: "Expert Mentorship to Guide Your Growth",
    description:
      "Gain insights from seasoned mentors who help you navigate the startup landscape, overcoming challenges with strategic support.",
    icon: <Phone className="text-blue-600 w-6 h-6" />,
    buttonText: "Learn More",
  },
];

const CardSection: React.FC = () => {
  return (
    <div className="bg-gray-100 px-4 sm:px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center relative"
          >
            <img
              src={card.image}
              alt={card.title}
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{card.description}</p>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              {card.buttonText}
            </button>
            <div className="absolute bottom-[-20px] bg-white p-3 rounded-full shadow-md">
              {card.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
