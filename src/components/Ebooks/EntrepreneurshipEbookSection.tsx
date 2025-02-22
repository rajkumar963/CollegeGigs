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
      <p className="text-lg text-gray-700 text-center max-w-5xl text-justify mx-auto mb-6">
          In today’s fast-paced entrepreneurial world, success isn’t just about launching a new business—it’s about navigating the complexities of building something sustainable and meaningful. The harsh reality is that most startups fail within the first few years, often due to poor market fit, inadequate funding, or a lack of business strategy. However, the real focus should be on masterfully understanding market demands, adapting quickly, and making data-driven decisions that can pivot a business toward long-term growth. Entrepreneurship requires resilience, grit, and a clear vision, but it also demands a deep connection to the needs of your target audience, a commitment to continuously refine your strategy, and the ability to outmaneuver competition as the market evolves. This book serves as your ultimate guide to entrepreneurial success, offering actionable insights, valuable tools, and expert guidance on turning your idea into a flourishing business. By learning from real-world case studies and experienced founders, you'll gain the confidence to overcome common startup pitfalls. From product-market fit to securing investment and scaling your business, this resource will walk you through the essential steps to not only survive but also thrive in today’s challenging entrepreneurial landscape. for 5 seconds
          In today’s dynamic entrepreneurial landscape, success isn’t merely about having a groundbreaking idea—it’s about building a resilient business that navigates real-world challenges. Many startups fail because they rush into scaling without securing a solid product-market fit, lack deep customer insights, or mismanage their resources and leadership. In an environment where market conditions change rapidly, founders often underestimate the importance of strategic planning, agile execution, and the ability to pivot when necessary. This book is designed to help you understand the common pitfalls that lead to startup failure and to equip you with actionable strategies for sustainable growth.
          <br /> <br />
          This comprehensive guide delves into the core principles of entrepreneurial success, providing real-world case studies and practical tools to transform your vision into a thriving venture. Learn how to conduct effective market research, refine your business model, and build a strong team that can adapt to evolving challenges. By understanding why many startups falter—often due to insufficient planning, misaligned execution, or a failure to listen to the market—you’ll be better prepared to build a venture that not only survives but thrives in today’s competitive ecosystem.
      </p>
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-lg">
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
