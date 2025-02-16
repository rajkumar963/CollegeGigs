import React from "react";

const experienceLevels = [
  {
    years: "1-3 Yrs",
    description: "Explore startup opportunities and innovate in emerging markets. Learn the fundamentals of entrepreneurship and build your network."
  },
  {
    years: "3-9 Yrs",
    description: "Take on leadership roles in startups, scale innovative solutions, and drive growth through strategic execution."
  },
  {
    years: "10+ Yrs",
    description: "Mentor startup founders, guide entrepreneurship efforts, and contribute to building successful businesses."
  }
];


const ExperienceSection: React.FC = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-black mb-10">
        Who is Thestartupwallah for?
      </h2>
      <div className="relative w-full max-w-7xl mx-auto h-[650px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-vector/background-school-objects_23-2147496284.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost')",
            filter: "brightness(50%)",
          }}
        ></div> 

        {/* Foreground Content */}
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-8 px-6 py-[130px]">
          {experienceLevels.map((level, index) => (
            <div
              key={index}
              className="bg-black/40 text-white p-6 rounded-lg w-full md:w-1/3 border border-white"
            >
              <h3 className="text-2xl font-semibold">{level.years}</h3>
              <p className="text-sm mt-2">{level.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
