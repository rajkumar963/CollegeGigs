import React from "react";
import { motion } from "framer-motion";

const investors = [
  { name: "Microsoft", logo: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739702754/microsoft_dmktzc.svg" },
  { name: "Airbnb", logo: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739702754/airbnb_yvllmb.svg" },
  { name: "Amazon", logo: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739702754/amazon_kmcavr.svg" },
  { name: "Blume", logo: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739702754/blume_bbuefl.svg" },
  { name: "YouTube", logo: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739702754/youtube_g7mvej.svg" },
  { name: "Adobe", logo: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739702754/adobe_qdbt6o.svg" },
  { name: "Google", logo: "https://i.pinimg.com/736x/e2/19/d9/e219d9fe14c904b28e0e0898e4fcdd4c.jpg" },
  { name: "PW", logo: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739704193/physics-wallah_rwjz5c.png" },
];

const InvestorsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white py-[80px]">
      <h2 className="text-black text-2xl font-semibold mb-[80px]">
        Our Investors come from:
      </h2>
      <div className="overflow-hidden w-full relative">
        <motion.div
          className="flex w-max gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
        >
          {[...investors, ...investors].map((investor, index) => (
            <img
              key={index}
              src={investor.logo}
              alt={investor.name}
              className="h-11 w-auto"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InvestorsSection;
