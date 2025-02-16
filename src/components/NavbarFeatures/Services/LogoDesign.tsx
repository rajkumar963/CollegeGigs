import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaPaintBrush } from "react-icons/fa";

const LogoDesign: React.FC = () => {
  return (
    <section id="logo-design" className="py-12 bg-gray-100 mt-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Logo Design Services</h2>
        <p className="text-gray-600 mt-2">
          Logo design is a crucial aspect of brand identity. A well-designed logo establishes a strong visual presence 
          and conveys the essence of a company’s values and mission. Our expert designers create professional and unique logos 
          tailored to your brand’s needs.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-6">
        <Card className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <CardHeader>
            <div className="flex justify-center">
              <FaPaintBrush className="text-red-600 text-4xl" />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800">Custom Logo Design</CardTitle>
            <p className="text-gray-600 mt-2">
              Our custom logo design service ensures a unique, tailored logo that aligns perfectly with your brand’s vision and goals.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <CardHeader>
            <div className="flex justify-center">
              <FaPaintBrush className="text-red-600 text-4xl" />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800">Brand Identity Design</CardTitle>
            <p className="text-gray-600 mt-2">
              A complete branding solution including logo, color schemes, typography, and style guides to maintain a consistent brand identity.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <CardHeader>
            <div className="flex justify-center">
              <FaPaintBrush className="text-red-600 text-4xl" />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold text-gray-800">Logo Redesign</CardTitle>
            <p className="text-gray-600 mt-2">
              Upgrade your existing logo to match modern design trends while preserving its core identity and message.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LogoDesign;