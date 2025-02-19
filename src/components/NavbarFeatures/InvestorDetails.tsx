import React from "react";

interface Investor {
  name: string;
  company: string;
  bio: string;
  image: string;
}

const investors: Investor[] = [
  {
    name: "Elon Musk",
    company: "Tesla, SpaceX",
    bio: "Tech visionary and entrepreneur with investments in AI.",
    image: "https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg",
  },
  {
    name: "Warren Buffett",
    company: "Berkshire Hathaway",
    bio: "Legendary investor focused on long-term value.",
    image: "https://img.freepik.com/free-photo/smiling-woman-glasses_23-2147767429.jpg",
  },
  {
    name: "Mark Cuban",
    company: "Shark Tank, Dallas Mavericks",
    bio: "Entrepreneur and investor with interests in AI, blockchain, and sports.",
    image: "https://img.freepik.com/premium-photo/portrait-beautiful-businesswoman_23-2148816856.jpg",
  },
  {
    name: "Jeff Bezos",
    company: "Amazon, Blue Origin",
    bio: "Founder of Amazon, investing in space exploration and AI-driven commerce.",
    image: "https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Sundar Pichai",
    company: "Google, Alphabet",
    bio: "CEO of Google, focused on AI, cloud computing, and sustainable tech.",
    image: "https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Tim Cook",
    company: "Apple",
    bio: "CEO of Apple, investing in smart devices and sustainable technologies.",
    image: "https://img.freepik.com/free-photo/close-up-smiley-woman-outdoors_23-2149002410.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Larry Page",
    company: "Google, Alphabet",
    bio: "Co-founder of Google, interested in AI, biotech, and self-driving cars.",
    image: "https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186124.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Sergey Brin",
    company: "Google, Alphabet",
    bio: "Co-founder of Google, investing in AI-driven solutions and space tech.",
    image: "https://img.freepik.com/premium-photo/non-binary-person-with-glasses-portrait_23-2148760535.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Richard Branson",
    company: "Virgin Group",
    bio: "Founder of Virgin Group, investing in space travel and innovative startups.",
    image: "https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Peter Thiel",
    company: "PayPal, Palantir",
    bio: "Early investor in Facebook, investing in fintech and AI-driven .",
    image: "https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Bill Gates",
    company: "Microsoft, Gates Foundation",
    bio: "Tech leader focused on software, AI, and global philanthropy.",
    image: "https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Jack Dorsey",
    company: "Twitter, Square",
    bio: "Founder of Twitter and Square, investing in fintech and blockchain.",
    image: "https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Satya Nadella",
    company: "Microsoft",
    bio: "CEO of Microsoft, focused on AI, cloud, and enterprise solutions.",
    image: "https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
];

const InvestorDetails: React.FC = () => {
  return (
    <section id="investors" className="py-16 bg-gradient-to-b from-gray-100 to-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6 underline ">Meet Our Investors</h2>
        <h3 className="flex item-center justify-center mb-5 text-xl font-bold ">🚀 Traditional vs. Modern Fundraising – What’s Best for You?</h3>
        <table className="w-full border-collapse border border-gray-300 mb-10 ">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border border-gray-300 px-5 py-3">❌ The Old Way (Traditional Fundraising)</th>
              <th className="border border-gray-300 px-5 py-3">✅ The Smarter Way (Modern Fundraising)</th>
            </tr>
          </thead>
          <tbody>
              <tr className=" border border-gray-300 bg-white">
                <td className="border border-gray-300 px-8 py-3">🔴 Endless struggle to find the right investors</td>
                <td className="border border-gray-300 px-8 py-3">💡 Instant Access – 1,800+ verified investors at your fingertips</td>
              </tr>
              <tr className=" border border-gray-300 bg-white">
                <td className="border border-gray-300 px-8 py-3">🔴 Hours wasted on research instead of building your startup .</td>
                <td className="border border-gray-300 px-8 py-3">📩 Direct Outreach – Email your pitch deck in just a few clicks </td>
              </tr>
              <tr className=" border border-gray-300 bg-white">
                <td className="border border-gray-300 px-8 py-3">🔴 Sending 1000s of LinkedIn requests with little response</td>
                <td className="border border-gray-300 px-8 py-3">⏳ Save Time – Focus on scaling, not chasing investors.</td>
              </tr>
              <tr className=" border border-gray-300 bg-white">
                <td className="border border-gray-300 px-8 py-3">🔴 Losing 2% of your hard-earned funds in platform fees.</td>
                <td className="border border-gray-300 px-8 py-3">💰 Keep 100% – No commissions, no hidden fees.  </td>
              </tr>
          </tbody>
        </table>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {investors.map((investor, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-xl w-70 p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={investor.image}
                alt={investor.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">{investor.name}</h3>
              <p className="text-blue-600 italic w-80">{investor.company}</p>
              <p className="text-gray-700 mt-2 w-70">{investor.bio}</p>
              <button className="mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">View Profile</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorDetails;
