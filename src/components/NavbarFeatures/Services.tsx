import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Pitch Deck Services",
    description: "Crafting compelling pitch decks to attract investors and secure funding.",
    link: "/services/pitch-deck",
    img: "https://img.freepik.com/free-vector/business-landing-page-with-illustrated-men_23-2148286817.jpg?uid=R187627718&ga=GA1.1.856026252.1735303750&semt=ais_hybrid",
  },
  {
    title: "Website Services",
    description: "Building responsive and high-performance websites for businesses and startups.",
    link: "/services/website",
    img: "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg",
  },
  {
    title: "Business Plan Services",
    description: "Developing detailed business plans to guide startups and enterprises.",
    link: "/services/business",
    img: "https://img.freepik.com/free-vector/business-people-illustration_52683-34772.jpg?t=st=1739902440~exp=1739906040~hmac=67b77f245ada749632efcaf77ba7676b218a4adabf354dc8bdf5fbdf300007be&w=996",
  },
  {
    title: "Logo Design Services",
    description: "Creating unique and professional logo designs tailored to your brand identity.",
    link: "/services/logodesign",
    img: "https://img.freepik.com/premium-vector/modern-web-graphics-pack-vector-eps_1348508-20.jpg?uid=R187627718&ga=GA1.1.856026252.1735303750&semt=ais_hybrid",
  },
];

const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-12 bg-gray-100 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 underline">Our Services</h2>
        <p className="text-gray-600 mt-2">Providing top-notch solutions for your business success.</p>
        
      </div>

      <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {services.map((service, index) => (
          <Card key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition">
            <img src={service.img} alt={service.title} className="w-full h-60 object-cover px-6 mt-6 rounded-lg" />
            <CardContent className="p-6 text-center">
              <CardTitle className="text-xl font-semibold text-gray-800">{service.title}</CardTitle>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <button
                onClick={() => navigate(service.link)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                More Details
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
