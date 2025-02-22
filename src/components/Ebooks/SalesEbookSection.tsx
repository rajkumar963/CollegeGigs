import React from "react";
import salesBook from "../../assets/sales"; // ✅ Correct path
const ebooks = [
  { id: 1, name: "Marketing Strategies for Startups", link: "/salesBook/BuildingCustomerLoyality.pdf" },
  { id: 2, name: "Digital Marketing Essentials", link: "/salesBook/StepFormulaforStrategicExecution.pdf" },
  { id: 3, name: "Social Media Growth Hacks", link: "/salesBook/B2BSalesStrategy.pdf" },
  { id: 4, name: "SEO Best Practices", link: "/salesBook/ColdCallstrategyforD2Cbrand.pdf" },
  { id: 5, name: "Content Marketing Guide", link: "/salesBook/CustomerCentricSales.pdf" },
];

const SalesEbookSection: React.FC = () => {
  return (
    <div id="sales" className="bg-gray-100 px-4 sm:px-6 py-8 mt-12">
      <h1 className="text-4xl font-bold mb-3 text-primary text-center underline">Sales E-books</h1>
      <p className="text-lg text-gray-700 text-center max-w-5xl mx-auto mb-6 text-justify">
          In today’s competitive sales environment, success isn’t just about closing deals—it’s about building trust at every stage of the sales process. This means truly understanding the unique challenges and pain points of your prospects, and tailoring your solutions to meet their needs in a way that stands out. By using customer insights, strategic storytelling, and a consultative approach, you transform cold leads into meaningful, long-term relationships, setting the stage for repeat business and sustained growth. This book is your ultimate guide to mastering modern sales techniques. Inside, you’ll find proven strategies, actionable tactics, and industry insights to sharpen your skills—from expert tips on making compelling pitches to tools for creating personalized outreach that resonates deeply with today’s buyer. Whether you’re a newcomer or a seasoned pro, this book equips you with the techniques to confidently close deals, exceed sales targets, and foster customer loyalty. for 5 seconds
          In today’s competitive sales landscape, success hinges on deeply understanding your prospects’ needs and aligning your solutions with their core challenges. It’s not just about closing a deal—it’s about building trust and fostering long-term partnerships through strategic, consultative selling. By honing your ability to listen actively, ask the right questions, and tailor your approach to address specific pain points, you can transform each interaction into an opportunity for meaningful engagement and lasting business relationships.
          <br /> <br />
          This books is your definitive guide to modern sales mastery, packed with actionable strategies, real-world case studies, and practical tools designed for today’s sales professionals. You’ll learn how to craft personalized pitches that resonate, overcome objections with confidence, and leverage data-driven insights to fine-tune your approach. Whether you’re making cold calls or leading a high-performing sales team, the techniques in this book will help you drive revenue growth, enhance customer satisfaction, and maintain a competitive edge in an ever-evolving market.

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

export default SalesEbookSection;
