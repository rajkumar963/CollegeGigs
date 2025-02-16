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
    title: "Data Science and AI Bootcamp",
    description:
      "Includes: Python, Pandas, NumPy, Machine Learning, Data Visualization and more",
    hours: "50 Hrs of Live Classes",
    schedule: "Weekday Evenings",
    image: "https://img.freepik.com/premium-vector/flat-world-photography-day-illustration_23-2149507701.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
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
    image: "https://img.freepik.com/premium-vector/flat-world-photography-day-illustration_23-2149507701.jpg?ga=GA1.1.856026252.1735303750&semt=ais_authors_boost",
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
            <FaCalendarAlt className="text-blue-600 mr-2" />
            {schedule}
          </p>
        </div>
      </div>
      {/* <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mt-6">
        View Course Details
      </button> */}
    </div>
  );
};

const CourseList: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 mt-12">
      <h1 className="text-4xl font-bold mb-2 text-primary text-center">The Successful people story's</h1>
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
