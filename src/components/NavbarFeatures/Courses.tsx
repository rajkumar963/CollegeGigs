import React from "react";
import { FaClock, FaCalendarAlt } from "react-icons/fa";

interface CourseCardProps {
  title: string;
  description: string;
  hours: string;
  schedule: string;
  startDate: string;
  image: string;
}

const courses: CourseCardProps[] = [
  {
    title: "ChatGPT Training Course: Beginners to Advanced",
    description:
      "Includes: NLP, OpenAI API, ChatGPT Use Cases, Deploying ChatGPT and more",
    hours: "18 Hrs of Live Classes",
    schedule: "Weekend Classes",
    startDate: "29th March 2025",
    image: "https://img.freepik.com/premium-vector/ai-robot-illustration_52683-176519.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    title: "Machine Learning Course Masters",
    description:
      "Includes 12 courses: Linux, Big Data, PySpark, Power BI, and more.",
    hours: "162 Hrs of Live Classes",
    schedule: "Weekend Classes",
    startDate: "Starting on every Weekend",
    image: "https://img.freepik.com/free-vector/landing-page-artificial-intelligence-template_23-2148376199.jpg?ga=GA1.1.856026252.1735303750",
  },
  {
    title: "Artificial Intelligence Certification Course",
    description:
      "Includes: NLP, Text Processing, Deep Learning, TensorFlow, OpenCV, and more",
    hours: "30 Hrs of Live Classes",
    schedule: "Weekend Classes",
    startDate: "15th February 2025",
    image: "https://img.freepik.com/premium-vector/gradient-technology-background-template_23-2151550654.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
];

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  hours,
  schedule,
  startDate,
  image,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full hover:shadow-xl transition flex flex-col mt-12">
      <img src={image} alt={title} className=" w-full h-48 object-cover" />
      <div className="mt-4">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4 space-y-2">
          <p className="flex items-center text-gray-700">
            <FaClock className="text-blue-600 mr-2" />
            {hours}
          </p>
          <p className="flex items-center text-gray-700">
            <FaCalendarAlt className="text-blue-600 mr-2" />
            {schedule}
          </p>
        </div>
        <p className="text-green-600 mt-4 italic">Classes starting on {startDate}</p>
      </div>
      <button className="mt-auto w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        View Course Details
      </button>
    </div>
  );
};

const CourseList: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseList;
