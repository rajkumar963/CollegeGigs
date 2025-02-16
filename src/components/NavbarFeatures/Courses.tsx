import React from "react";
import { FaClock, FaCalendarAlt } from "react-icons/fa";

interface CourseCardProps {
  title: string;
  description: string;
  hours: string;
  schedule: string;
  image: string;
}

const courses: CourseCardProps[] = [
  {
    title: "ChatGPT Training Course: Beginners to Advanced",
    description:
      "Includes: NLP, OpenAI API, ChatGPT Use Cases, Deploying ChatGPT and more",
    hours: "18 Hrs of Live Classes",
    schedule: "Weekend Classes",
    image: "https://img.freepik.com/premium-vector/ai-robot-illustration_52683-176519.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    title: "Machine Learning Course Masters",
    description:
      "Includes 12 courses: Linux, Big Data, PySpark, Power BI, and more.",
    hours: "162 Hrs of Live Classes",
    schedule: "Weekend Classes",
    image: "https://img.freepik.com/free-vector/landing-page-artificial-intelligence-template_23-2148376199.jpg?ga=GA1.1.856026252.1735303750",
  },
  {
    title: "Artificial Intelligence Certification Course",
    description:
      "Includes: NLP, Text Processing, Deep Learning, TensorFlow, OpenCV, and more",
    hours: "30 Hrs of Live Classes",
    schedule: "Weekend Classes",
    image: "https://img.freepik.com/premium-vector/gradient-technology-background-template_23-2151550654.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    title: "Data Science and AI Bootcamp",
    description:
      "Includes: Python, Pandas, NumPy, Machine Learning, Data Visualization and more",
    hours: "50 Hrs of Live Classes",
    schedule: "Weekday Evenings",
    image: "https://img.freepik.com/premium-vector/data-analysis-background-design_23-2151908050.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
  {
    title: "Web Development Full Stack Course",
    description:
      "Includes: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB and more",
    hours: "120 Hrs of Live Classes",
    schedule: "Weekend Classes",
    image: "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg",
  },
  {
    title: "Cloud Computing Certification Course",
    description:
      "Includes: AWS, Azure, Google Cloud, DevOps, Docker, Kubernetes and more",
    hours: "80 Hrs of Live Classes",
    schedule: "Weekday Evenings",
    image: "https://img.freepik.com/premium-vector/cloud-computing-services-background-isometric-style_98292-37255.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
  },
];

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  hours,
  schedule,
  image,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full hover:shadow-xl transition flex flex-col mt-12">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
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
      </div>
      <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mt-6">
        View Course Details
      </button>
    </div>
  );
};

const CourseList: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 mt-12">
      <h1 className="text-4xl font-bold mb-2 text-primary text-center">Courses</h1>
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
