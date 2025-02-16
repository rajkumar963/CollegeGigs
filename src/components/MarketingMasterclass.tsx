import React from "react";

interface ExperienceCardProps {
  years: string;
  description: string;
  bgImage: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ years, description, bgImage }) => {
  return (
    <div
      className="relative bg-black text-white p-6 shadow-lg overflow-hidden h-[350px] flex flex-col justify-end"
      style={{
        background: `url(${bgImage}) center/cover no-repeat`,
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Card Content */}
      <div className="relative z-10">
        <h2 className="text-2xl font-bold">{years} Yrs</h2>
        <p className="text-sm opacity-80">of Experience</p>
        <p className="mt-2 text-md">{description}</p>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const experienceLevels = [
    {
      years: "1-3",
      description: "Explore startup opportunities and innovate in emerging markets. Learn the fundamentals of entrepreneurship and build your network.",
      bgImage: "/images/startup-1.jpg",
    },
    {
      years: "3-9",
      description: "Take on leadership roles in startups, scale innovative solutions, and drive growth through strategic execution.",
      bgImage: "https://img.freepik.com/free-photo/urban-double-exposure-portrait_23-2149885648.jpg?uid=R187627718&ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
    },
    {
      years: "10+",
      description: "Mentor startup founders, guide entrepreneurship efforts, and contribute to building successful businesses.",
      bgImage: "https://img.freepik.com/premium-photo/full-shot-business-rocket-man_23-2150613035.jpg?uid=R187627718&ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
    },
  ];

  return (
    <section className="py-12 px-4 mt-18">
      <h2 className="text-3xl font-bold text-center mb-8">Who is Thestartupwallah for?</h2>

      {/* Desktop View */}
      <div className="hidden md:flex justify-center gap-6 mt-[100px]">
        {experienceLevels.map((exp, index) => (
          <div key={index} className="w-1/3">
            <ExperienceCard {...exp} />
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-4">
        {experienceLevels.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
