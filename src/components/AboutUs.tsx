import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
    return (
      <section id="about-us" className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-10 px-6">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-4xl font-bold tracking-wide text-gray-900 uppercase">About Us</h3>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed text-justify">
            At <span className="text-blue-600 font-bold ">The Startup Wallah</span>, we bridge the gap between startups and success by providing investor access, learning resources, and expert-backed business services. With a database of investors, 
            visually structured e-books on Marketing, Entrepreneurship, sales, and premium services like web development, pitch decks, and business model structuring—all backed by expert mentorship—we 
            equip startups with everything they need to grow.
          </p>
          <button onClick={() => navigate("/signin")} className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Sign Up for Free
          </button>
        </div>
        
        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative  ">
          <div className="relative ">
            <img
              src="https://img.freepik.com/premium-vector/picture-people-room-with-man-woman-sitting-desk_220346-8429.jpg?w=1800" 
              alt="Person working on a laptop"
              className="rounded w-[550px] h-[450px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r  via-transparent to-transparent opacity-30 rounded-lg"></div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  