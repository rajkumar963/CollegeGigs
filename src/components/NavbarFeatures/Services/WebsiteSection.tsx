import React from "react";
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaCloud } from "react-icons/fa";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "We build modern, responsive websites with cutting-edge technologies.",
    icon: <FaLaptopCode className="text-blue-600 text-5xl" />,
  },
  {
    title: "Mobile App Development",
    description: "Custom mobile applications for Android & iOS platforms.",
    icon: <FaMobileAlt className="text-green-600 text-5xl" />,
  },
  {
    title: "Database Management",
    description: "Secure and scalable database solutions for your business.",
    icon: <FaDatabase className="text-red-600 text-5xl" />,
  },
  {
    title: "Cloud Services",
    description: "Deploy your applications on the cloud with high availability.",
    icon: <FaCloud className="text-purple-600 text-5xl" />,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Web Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2 leading-relaxed text-justify">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
