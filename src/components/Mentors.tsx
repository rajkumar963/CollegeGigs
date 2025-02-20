import React from "react";
import { useNavigate } from "react-router-dom";

const CardSection: React.FC = () => {
  const navigate = useNavigate(); // Move useNavigate inside the component

  const cards = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739943961/Binny_Bansal_r08e7w.jpg",
      title: "Journey of Sachin and Binny Bansal",
      description:
        "From IIT Dreams to Building an Empire: Thespiring Journey of Sachin and Binny Bansal.",
      buttonText: "Learn More",
      link: "/sachinbinnystory",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1740047824/Ritesh-Agarwal-Success-Story-2023_jnwbq2.webp",
      title: "The Journey of Ritesh Agarwal and OYO Rooms",
      description:
        "Ritesh Agarwal grew up in Odisha with big dreams and an entrepreneurial spirit. Unlike most kids his age.",
      buttonText: "Learn More",
      link: "/riteshstory",
    },
    {
      id: 3,
      image: "https://img.freepik.com/free-photo/two-elegant-indian-fashionable-mans-model-suit-posed-winter-day_627829-1636.jpg?uid=R187627718&ga=GA1.1.856026252.1735303750&semt=ais_hybrid",
      title: "Journey of Ratan Tata",
      description:
        "Gain insights from seasoned mentors who help you navigate the startup landscape, overcoming challenges with strategic support.",
      buttonText: "Learn More",
      link: "/",
    },
  ];

  return (
    <div className="bg-gray-100 px-4 sm:px-6 py-8 mt-[65px]">
      <h1 className="text-4xl font-bold mb-12 text-primary text-center underline">The Successful people stories</h1>
      {/* <span className="text-xl mb-8 text-primary flex justify-center text-center">
        We are providing E-books that are very precise and focus on core concepts from an application point of view.
      </span> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center relative"
          >
            <img
              src={card.image}
              alt={card.title}
              className="rounded-md w-full h-50 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{card.description}</p>
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
