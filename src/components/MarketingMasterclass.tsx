import React from "react";

interface ExperienceCardProps {
  heading: string;
  description: string;
  bgImage: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ heading, description, bgImage }) => {
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
        <h2 className="text-2xl font-bold">{heading}</h2>
        {/* <p className="text-sm opacity-80">of Experience</p> */}
        <p className="mt-2 text-md">{description}</p>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const experienceLevels = [
    {
      heading: "1. Aspiring Entrepreneurs",
      description: "Perfect for those ready to transform their innovative ideas into scalable ventures. Get access to essential resources and expert guidance.",
      bgImage: "/images/startup-1.jpg",
    },
    {
      heading: "2. Growth-Stage Startups",
      description: "Scale your business with strategic support, funding opportunities, and professional services tailored for expansion.",
      bgImage: "https://img.freepik.com/free-photo/urban-double-exposure-portrait_23-2149885648.jpg?uid=R187627718&ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
    },
    {
      heading: "3. Investors & Mentors",
      description: "Connect with high-potential startups and shape the future of innovation through mentorship and strategic investments.",
      bgImage: "https://img.freepik.com/premium-photo/full-shot-business-rocket-man_23-2150613035.jpg?uid=R187627718&ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
    },
  ];

  return (
    <section className="py-12 px-4 mt-18">
      <h2 className="text-3xl font-bold text-center mb-2">Who is The Startup Wallah for? </h2>
      <p className="text-md text-center ">We support entrepreneurs at every stage of their journey</p>

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
