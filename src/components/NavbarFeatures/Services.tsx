import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaLaptopCode, FaChartLine, FaBusinessTime, FaPaintBrush } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Services: React.FC = () => {
  const pitchDeckRef = useRef<HTMLDivElement>(null);
  const websiteRef = useRef<HTMLDivElement>(null);
  const businessPlanRef = useRef<HTMLDivElement>(null);
  const logoDesignRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="services" className="py-12 bg-gray-100 mt-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="text-gray-600 mt-2">Providing top-notch solutions for your business success.</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3 px-6">
        <Card className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <CardHeader>
            <div className="flex justify-center">
              <FaChartLine className="text-blue-600 text-4xl" />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800">Pitch Deck Services</CardTitle>
            <p className="text-gray-600 mt-2">
              Crafting compelling pitch decks to attract investors and secure funding.
            </p>
            <button
              onClick={() => navigate('/services/pitch-deck')}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              More Details
            </button>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <CardHeader>
            <div className="flex justify-center">
              <FaLaptopCode className="text-green-600 text-4xl" />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800">Website Services</CardTitle>
            <p className="text-gray-600 mt-2">
              Building responsive and high-performance websites for businesses and startups.
            </p>
            <button
              onClick={() => navigate('/services/website')}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              More Details
            </button>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <CardHeader>
            <div className="flex justify-center">
              <FaBusinessTime className="text-purple-600 text-4xl" />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800">Business Plan Services</CardTitle>
            <p className="text-gray-600 mt-2">
              Developing detailed business plans to guide startups and enterprises.
            </p>
            <button
              onClick={() => navigate('/services/business')}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              More Details
            </button>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <CardHeader>
            <div className="flex justify-center">
              <FaPaintBrush className="text-red-600 text-4xl" />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800">Logo Design Services</CardTitle>
            <p className="text-gray-600 mt-2">
              Creating unique and professional logo designs tailored to your brand identity.
            </p>
            <button
              onClick={() => navigate('/services/logodesign')}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              More Details
            </button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;
