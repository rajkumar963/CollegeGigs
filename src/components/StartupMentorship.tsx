import { link } from "fs";
import React from "react";
import { useNavigate } from "react-router-dom";


const cards = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739793466/Investor_sqou1w.jpg",
    title: "Get Connected to Investors in Seconds! ",
    description:
       "Connect with investors, pitch your idea confidently, and secure funding to bring your vision to life. Build relationships, gain insights, and unlock growth opportunities for success.",
    buttonText: "Get Started",
    link:"/investors"
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739794030/businessman_xa1s8p.avif",
    title: "Essential Startup Resources – Instant Access.",
    description:
      "Grab free e-books on marketing, sales, and entrepreneurship-- everything you need to build and grow your startup.",
    buttonText: "Explore",
    link:"/resources"

  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739793466/group_ywbyd6.jpg",
    title: "Build. Launch. Grow – We’ve Got You Covered! 🚀✨",
    description:
      "Our startup services include web & app development, pitch decks, and more—everything you need to bring your vision to life. You focus on the idea, we handle the rest!",
    buttonText: "Learn More",
    link:"/services"
  },
];

const CardSection: React.FC = () => {
  const navigate = useNavigate(); // Move useNavigate inside the component
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
            <p className="text-gray-600 text-sm mb-4 leading-relaxed text-justify">{card.description}</p>
            <button onClick={() => navigate(card.link)}  className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
