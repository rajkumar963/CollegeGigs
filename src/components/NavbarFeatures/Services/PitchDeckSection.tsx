import React from "react";

const InvestmentPitchDeck: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-12">
      <h1 className="text-4xl font-bold mb-3 flex justify-center items-center underline">Pitch Deck Services</h1>
      <span className="block text-center font-semibold mb-8">Professional pitch deck creation services to help you impress investors and secure funding</span>
      <h2 className="text-2xl font-bold mb-6">1. Who Should Use an Investment Pitch Deck?</h2>
      <ul className="list-disc pl-5 space-y-3">
        <li><strong>Entrepreneurs and Startups:</strong> Entrepreneurs use pitch decks to showcase business concepts to investors.</li>
        <li><strong>Small and Medium-sized Enterprises (SMEs):</strong> SMEs use pitch decks to introduce new products and seek funding.</li>
        <li><strong>Business Owners Seeking Investment:</strong> Helps business owners communicate their company’s value to potential investors.</li>
        <li><strong>Investors:</strong> Used by investors such as venture capitalists and private equity firms.</li>
        <li><strong>Financial Advisors and Consultants:</strong> Useful for financial professionals to share insights.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">2. Advantages of Investment Pitch Decks</h2>
      <ul className="list-disc pl-5 space-y-3">
        <li><strong>Enhancing the brand of the company:</strong> Helps refine and market the business message effectively.</li>
        <li><strong>Creating Awareness:</strong> Assists in gaining media and public attention.</li>
        <li><strong>Helping raise capital:</strong> Provides structured information to attract investors.</li>
        <li><strong>Generating interest:</strong> Enhances the value proposition and attracts executives and investors.</li>
        <li><strong>Sending a powerful message:</strong> Ensures clear communication of business goals and value.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">3. Key Elements of a Pitch Deck</h2>
      <ul className="list-disc pl-5 space-y-3">
        <li><strong>Intensified Pitch Summary:</strong> The first slides should clearly communicate the company idea and goal.</li>
        <li><strong>Team Building:</strong> Investors value knowledgeable and committed staff; highlight your team.</li>
      </ul>
    </div>
  );
};

export default InvestmentPitchDeck;
