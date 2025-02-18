import React from "react";

const ebooks = [
  { id: 1, name: "Marketing Strategies for Startups ", link: "#" },
  { id: 2, name: "Digital Marketing Essentials", link: "#" },
  { id: 3, name: "Social Media Growth Hacks", link: "#" },
  { id: 4, name: "SEO Best Practices", link: "#" },
  { id: 5, name: "Content Marketing Guide", link: "#" },
];

const MarketingEbookSection: React.FC = () => {
  return (
    <div className="bg-gray-100 px-4 sm:px-6 py-8 mt-12">
      <h1 className="text-4xl font-bold mb-3 text-primary text-center underline">Entrepreneurship E-book</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-6">
        Discover our collection of marketing e-books designed to help you master the fundamentals of marketing, 
        enhance your brand’s reach, and optimize your business strategies. These resources cover essential topics 
        like digital marketing, social media growth, SEO, and content marketing.
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
