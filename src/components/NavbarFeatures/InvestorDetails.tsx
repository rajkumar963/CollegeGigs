import React from "react";

interface Investor {
  name: string;
  investment: string;
  company: string;
  bio: string;
  image: string;
}

const investors: Investor[] = [
  {
    name: "Elon Musk",
    investment: "$10M",
    company: "Tesla, SpaceX",
    bio: "Tech visionary and entrepreneur with investments in AI and renewable energy.",
    image: "https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Warren Buffett",
    investment: "$25M",
    company: "Berkshire Hathaway",
    bio: "Legendary investor focused on long-term value and financial growth.",
    image: "https://img.freepik.com/free-photo/smiling-woman-glasses_23-2147767429.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Mark Cuban",
    investment: "$15M",
    company: "Shark Tank, Dallas Mavericks",
    bio: "Entrepreneur and investor with interests in AI, blockchain, and sports.",
    image: "https://img.freepik.com/premium-photo/portrait-beautiful-businesswoman_23-2148816856.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Jeff Bezos",
    investment: "$50M",
    company: "Amazon, Blue Origin",
    bio: "Founder of Amazon, investing in space exploration and AI-driven commerce.",
    image: "https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Sundar Pichai",
    investment: "$12M",
    company: "Google, Alphabet",
    bio: "CEO of Google, focused on AI, cloud computing, and sustainable tech.",
    image: "https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Tim Cook",
    investment: "$8M",
    company: "Apple",
    bio: "CEO of Apple, investing in smart devices and sustainable technologies.",
    image: "https://img.freepik.com/free-photo/close-up-smiley-woman-outdoors_23-2149002410.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Larry Page",
    investment: "$20M",
    company: "Google, Alphabet",
    bio: "Co-founder of Google, interested in AI, biotech, and self-driving cars.",
    image: "https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186124.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Sergey Brin",
    investment: "$18M",
    company: "Google, Alphabet",
    bio: "Co-founder of Google, investing in AI-driven solutions and space tech.",
    image: "https://img.freepik.com/premium-photo/non-binary-person-with-glasses-portrait_23-2148760535.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Richard Branson",
    investment: "$30M",
    company: "Virgin Group",
    bio: "Founder of Virgin Group, investing in space travel and innovative startups.",
    image: "https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Peter Thiel",
    investment: "$22M",
    company: "PayPal, Palantir",
    bio: "Early investor in Facebook, investing in fintech and AI-driven security.",
    image: "https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Bill Gates",
    investment: "$40M",
    company: "Microsoft, Gates Foundation",
    bio: "Tech leader focused on software, AI, and global philanthropy.",
    image: "https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Jack Dorsey",
    investment: "$14M",
    company: "Twitter, Square",
    bio: "Founder of Twitter and Square, investing in fintech and blockchain.",
    image: "https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    name: "Satya Nadella",
    investment: "$16M",
    company: "Microsoft",
    bio: "CEO of Microsoft, focused on AI, cloud, and enterprise solutions.",
    image: "https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
];

const InvestorDetails: React.FC = () => {
  return (
    <section id="investors" className="py-12 bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 underline">
          Meet Our Investors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {investors.map((investor, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition transform hover:scale-105"
            >
              <img
                src={investor.image}
                alt={investor.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{investor.name}</h3>
              <p className="text-lg text-blue-600 font-bold">{investor.investment} Invested</p>
              <p className="text-gray-600 italic">{investor.company}</p>
              <p className="text-gray-700 mt-2">{investor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorDetails;
