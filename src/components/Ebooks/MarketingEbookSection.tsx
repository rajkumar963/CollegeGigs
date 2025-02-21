import React from "react";
import marketingBook from "../../assets/index"; // ✅ Correct path

const ebooks = [
  { id: 1, name: "Marketing Strategies for Startups", link: marketingBook.ATLBTLTTL },
  { id: 2, name: "Digital Marketing Essentials", link: marketingBook.AARRRmodle },
  { id: 3, name: "Social Media Growth Hacks", link: marketingBook.B2Bmarketingstrategy },
  { id: 4, name: "SEO Best Practices", link: marketingBook.Battersysteminmarketing },
  { id: 5, name: "Content Marketing Guide", link: marketingBook.BusinessModels },
  { id: 6, name: "Content Marketing Guide", link: marketingBook.BuildingCustomerLoyality },
  { id: 7, name: "Content Marketing Guide", link: marketingBook.StepFormulaforStrategicExecution},
  { id: 8, name: "BUSINESS MODELS", link: marketingBook.BusinessModels },
  { id: 9, name: "Content Marketing Guide", link: marketingBook.MomentMarketing },
  { id: 10, name: "Content Marketing Guide", link: marketingBook.thePowerofCrossPromotion },
  { id: 11, name: "Content Marketing Guide", link: marketingBook.TheUltimateGuidetoGuerrillaMarketing },
];

const MarketingEbookSection: React.FC = () => {
  return (
    <div id="marketing" className="bg-gray-100 px-4 sm:px-6 py-8 mt-12">
      <h1 className="text-4xl font-bold mb-3 text-primary text-center underline">Marketing E-book</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-6">
        Discover our collection of marketing e-books designed to help you master the fundamentals of marketing, 
        enhance your brand’s reach, and optimize your business strategies.
      </p>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border border-gray-300 px-5 py-3">S No.</th>
              <th className="border border-gray-300 px-5 py-3">Ebooks</th>
              <th className="border border-gray-300 px-5 py-3">View</th>
            </tr>
          </thead>
          <tbody>
            {ebooks.map((ebook) => (
              <tr key={ebook.id} className="text-center border border-gray-300">
                <td className="border border-gray-300 px-5 py-3">{ebook.id}</td>
                <td className="border border-gray-300 px-5 py-3">{ebook.name}</td>
                <td className="border border-gray-300 px-5 py-3">
                  <a
                    href={ebook.link}
                    target="_blank" // ✅ Opens PDF in a new tab
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketingEbookSection;
