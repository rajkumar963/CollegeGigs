import { useState } from "react";

const faqs = [
  { question: "Where is the National Portrait Gallery?", answer: "The National Portrait Gallery is located in London, UK." },
  { question: "How do I get to the National Portrait Gallery?", answer: "You can reach the gallery via public transport, including the underground and buses." },
  { question: "What are the Gallery's opening hours?", answer: "The gallery is open daily from 10 AM to 6 PM." },
  { question: "Is photography allowed in the Gallery?", answer: "Photography is allowed but without flash." },
  { question: "Who can I contact about lost property?", answer: "You can contact the gallery's help desk for lost property inquiries." },
  { question: "Can I sketch in the Gallery?", answer: "Yes, sketching is allowed in designated areas." },
  { question: "How can I be put on your mailing list?", answer: "You can sign up for the mailing list on the gallery's official website." },
  { question: "Can I link to your website?", answer: "Yes, you can link to our website following our guidelines." }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className="max-w-4xl mx-auto p-6 mt-12">
      <h1 className="text-4xl font-bold text-center mb-6">FAQ</h1>
      <p className="text-center mb-6">Frequently asked questions mainly relating to opening information.</p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              className="w-full text-left text-lg font-medium flex justify-between items-center py-2"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
