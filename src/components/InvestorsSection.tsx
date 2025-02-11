import React from "react";
import { motion } from "framer-motion";

const investors = [
  { name: "Microsoft", logo: "https://www.myinvestorlist.com/microsoft.svg" },
  { name: "Airbnb", logo: "https://www.myinvestorlist.com/airbnb.svg" },
  { name: "Amazon", logo: "https://www.myinvestorlist.com/amazon.svg" },
  { name: "Blume", logo: "	https://www.myinvestorlist.com/blume.svg" },
  { name: "YouTube", logo: "https://www.myinvestorlist.com/youtube.svg" },
  { name: "Adobe", logo: "https://www.myinvestorlist.com/adobe.svg" },
  { name: "Google", logo: "https://i.pinimg.com/736x/e2/19/d9/e219d9fe14c904b28e0e0898e4fcdd4c.jpg" },
  { name: "PW", logo: "https://images.seeklogo.com/logo-png/47/1/physics-wallah-logo-png_seeklogo-474856.png" },
];

const InvestorsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white">
      <h2 className="text-black-600 text-2xl font-semibold mb-[80px]">
      Supported by investors from:
      </h2>
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-12 animate-scroll"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {investors.map((investor) => (
            <img
              key={investor.name}
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
