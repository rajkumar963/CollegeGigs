const AboutUs = () => {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-12 px-6">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h4 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">About Us</h4>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 leading-tight">
            Helping businesses <span className="text-accent">succeed</span> through the power of video.
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Video is the future of business in this digital-focused world. Vidyard uses video to change the way companies
            connect and communicate. We help organizations of all sizes humanize their communications and personalize their
            customer experiences.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Sign Up for Free
          </button>
        </div>
        
        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative  ">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dsdcta1sr/image/upload/v1739704193/Business_Plan-cuate_cmvfjr.svg" 
              alt="Person working on a laptop"
              className="rounded-lg w-[500px] h-[450px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r  via-transparent to-transparent opacity-30 rounded-lg"></div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  