import React from "react";

interface ExperienceCardProps {
  heading: string;
  description: string;
  bgImage: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ heading, description, bgImage }) => {
  return (
    <div
      className="relative bg-black text-white p-6 shadow-lg overflow-hidden h-[350px] flex flex-col justify-end rounded-xl"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage}) center/cover no-repeat`,
      }}
    >
      {/* Card Content */}
      <div className="relative z-10 bg-opacity-70 rounded-lg">
        <h2 className="text-xl md:text-2xl font-bold">{heading}</h2>
        <p className="mt-2 text-sm md:text-md leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const experienceLevels = [
    {
      heading: "1. Aspiring Entrepreneurs",
      description: "Access 1,800+ investors, step-by-step e-books on Marketing, Sales, and Entrepreneurship, and expert mentorship to build a solid foundation. Perfect for transforming innovative concepts into scalable ventures.",
      bgImage: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1740047824/concept_tlvlrg.avif",
    },
    {
      heading: "2. Business Students & Early-Stage Founders",
      description: "Learn to scale smarter with frameworks for business model structuring, funding opportunities from our investor network, and actionable insights from industry experts.",
      bgImage: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1740047824/successful-startup_fufkgb.avif",
    },
    {
      heading: "3. Established Professionals & Innovators",
      description: "Leverage premium services like web development, operational audits, and strategic investments to refine your vision. Ideal for leaders aiming to innovate or expand their impact.",
      bgImage: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1740047824/serious-confident_gvlp6q.avif",
    },
  ];

  return (
    <section className="py-12 px-6 mt-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Who is The Startup Wallah for?</h2>
      <p className="text-lg text-center text-gray-500 mb-6">We support entrepreneurs at every stage of their journey</p>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-3 gap-6 mt-10">
        {experienceLevels.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-6">
        {experienceLevels.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
