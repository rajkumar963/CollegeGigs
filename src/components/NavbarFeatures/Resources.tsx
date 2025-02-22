import React from "react";
import { useNavigate } from "react-router-dom";

const CardSection: React.FC = () => {
  const navigate = useNavigate(); // Move useNavigate inside the component

  const cards = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739793466/Investor_sqou1w.jpg",
      title: "Marketing",
      description:
        "Gain real-world insights and proven marketing techniques, created by industry-leading experts, that set your business apart.",
      buttonText: "Get E-Books",
      link: "/resources/marketing",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739794030/businessman_xa1s8p.avif",
      title: "Sales",
      description:
        "Discover actionable insights and time-tested sales strategies, developed by top sales innovators, that distinguish your business from the competition.",
      buttonText: "Get E-Books",
      link: "/resources/sales",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739793466/group_ywbyd6.jpg",
      title: "Entrepreneurship",
      description:
        "Discover actionable insights and time-tested entrepreneurial strategies, developed by visionary founders, that set your venture apart in today's competitive landscape.",
      buttonText: "Get E-Books",
      link: "/resources/entrepreneurship",
    },
  ];

  return (
    <div className="bg-gray-100 px-4 sm:px-6 py-8 mt-[65px] ">
      <h1 className="text-4xl font-bold mb-3 text-primary text-center underline">Resources</h1>
      <span className=" flex text-md mb-8  px-5  text-justify">
        Unlock the full potential of your business with our stunning suite of e-books—each a beautifully crafted guide designed to inspire and empower. 
        Discover real-world insights, proven strategies, and captivating success stories that turn everyday challenges into breakthrough opportunities. 
        Whether you're looking to elevate your marketing, supercharge your sales, 
        or ignite an entrepreneurial revolution, our resources are your trusted companions on the journey to transformative growth. Embrace these expert-driven, human-centered guides and let them become the spark that propels your brand to new heights.      
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center relative hover:shadow-xl transition"
          >
            <img
              src={card.image}
              alt={card.title}
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm mb-4 text-justify">{card.description}</p>
            <button
              onClick={() => navigate(card.link)}
              className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
