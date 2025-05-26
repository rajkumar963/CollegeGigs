import { useState, useEffect, useRef } from "react"
import {
  Search,
  Target,
  Hash,
  TrendingUp,
  Rocket,
  Settings,
  CheckCircle,
  Building,
  GraduationCap,
  UserIcon as UserGraduate,
  Laptop,
  Lightbulb,
  Users,
  Star,
  Check,
  Menu,
  X,
} from "lucide-react"

export default function CampusGigAbout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [openFaq, setOpenFaq] = useState<string | null>(null)
    const [showOtherProjectType, setShowOtherProjectType] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)
  
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  
    const scrollToForm = () => {
      const formSection = document.getElementById("project-form")
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CampusGig
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Projects
              </a>
              <a href="/CampusGigAbout" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                  Home
                </a>
                <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                  Projects
                </a>
                <a href="/CampusGigAbout" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                  About
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section className="pt-16 pb-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden pt-[150px]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                Where Student Talent Meets Startup Innovation
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Connecting bright minds from India's top institutions with startups looking to solve real-world
                challenges.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-4/5 md:w-3/4 bg-white rounded-lg p-6 shadow-2xl animate-pulse">
                <div className="flex items-center mb-6">
                  <div className="rounded-full p-3 bg-blue-100 mr-4">
                    <Lightbulb className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-bold text-lg">Bridging the Gap</h3>
                    <p className="text-gray-600">Academic Excellence + Industry Innovation</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="rounded-full p-3 bg-blue-100 mr-4">
                    <Users className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-bold text-lg">Mentored Growth</h3>
                    <p className="text-gray-600">Expert-guided project experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed mb-6">
                At CampusGig, we believe the best learning happens outside the classroom—where theory meets practice and
                talent meets opportunity.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We are a platform that connects high-potential students from India's top institutions—IITs, NITs, and
                PWIOI—with startups looking to solve real-world challenges. Our model fosters mutual growth: students
                gain practical exposure and build portfolios, while startups benefit from fresh ideas, cutting-edge
                academic insights, and execution support—all at minimal cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <div className="w-24 h-1 bg-blue-600 mb-8"></div>
              <p className="text-lg leading-relaxed mb-6">
                To bridge the gap between academic excellence and industry innovation by enabling meaningful, mentored
                collaborations between students and startups.
              </p>
              <div className="flex items-center mt-8">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Star className="text-blue-600 w-6 h-6" />
                </div>
                <p className="font-medium">Creating win-win partnerships through mentored projects</p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-lg transform translate-x-3 translate-y-3"></div>
                <div className="relative bg-white border-4 border-blue-600 rounded-lg p-8 shadow-lg">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-2 mt-1 mr-4">
                        <Check className="text-blue-600 w-4 h-4" />
                      </div>
                      <p>Students gain practical experience beyond textbooks</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-2 mt-1 mr-4">
                        <Check className="text-blue-600 w-4 h-4" />
                      </div>
                      <p>Startups access top-tier talent at minimal cost</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-2 mt-1 mr-4">
                        <Check className="text-blue-600 w-4 h-4" />
                      </div>
                      <p>Mentors ensure quality outcomes and student growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              We facilitate impact-driven projects where students work under the guidance of experienced
              mentors—industry professionals, alumni entrepreneurs, and faculty members. These projects span across
              various domains:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Service Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Search className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Market Research</h3>
              <p className="text-gray-600">
                In-depth analysis of markets, competitors, and trends to help startups make informed decisions.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Go-to-Market Strategy</h3>
              <p className="text-gray-600">
                Strategic planning for product launches and market penetration with innovative approaches.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Hash className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Social Media & Marketing</h3>
              <p className="text-gray-600">
                Creative campaigns and strategic content to build brand presence and engage target audiences.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sales</h3>
              <p className="text-gray-600">
                Developing effective sales strategies and pipelines to drive revenue growth and customer acquisition.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Rocket className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Prototyping</h3>
              <p className="text-gray-600">
                Creating functional prototypes to test concepts and gather user feedback before full development.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Settings className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Product Development Strategy</h3>
              <p className="text-gray-600">
                Roadmapping and planning the evolution of products with focus on user needs and market fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why It Matters</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          </div>

          <div className="bg-blue-700 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed mb-6">
                Startups often struggle to find affordable, high-quality support in early stages. At the same time,
                students seek real-world experience to complement their academics. CampusGig solves both problems with
                one solution—creating win-win collaborations that are structured, mentored, and outcome-focused.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white text-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">For Startups</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-3 w-5 h-5 flex-shrink-0" />
                  <span>Access to fresh talent and innovative perspectives</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-3 w-5 h-5 flex-shrink-0" />
                  <span>Cost-effective execution of critical projects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-3 w-5 h-5 flex-shrink-0" />
                  <span>Quality ensured through experienced mentor oversight</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-3 w-5 h-5 flex-shrink-0" />
                  <span>Connection to academic research and cutting-edge knowledge</span>
                </li>
              </ul>
            </div>

            <div className="bg-white text-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">For Students</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-3 w-5 h-5 flex-shrink-0" />
                  <span>Hands-on experience with real-world business challenges</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-3 w-5 h-5 flex-shrink-0" />
                  <span>Mentorship from industry experts with 10+ years experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-3 w-5 h-5 flex-shrink-0" />
                  <span>Portfolio-building opportunities that stand out to employers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-3 w-5 h-5 flex-shrink-0" />
                  <span>Networking with startup founders and industry professionals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Backed by Mentorship</h2>
              <div className="w-24 h-1 bg-blue-600 mb-8"></div>
              <p className="text-lg leading-relaxed mb-6">
                Every project is designed with expert oversight. Students don't just "freelance"; they learn through
                doing, guided by mentors who ensure quality and growth.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our mentors are industry professionals with{" "}
                <span className="font-bold text-blue-600">10+ years of experience</span> across various domains. They
                provide guidance, feedback, and insights that transform project work into valuable learning experiences.
              </p>
              <div className="flex items-center mt-8">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <GraduationCap className="text-blue-600 w-6 h-6" />
                </div>
                <p className="font-medium">Projects designed for both business impact and student growth</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Our Mentor Network Includes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <div className="rounded-full bg-blue-100 p-2 mr-3">
                        <Building className="text-blue-600 w-5 h-5" />
                      </div>
                      <h4 className="font-bold">Industry Professionals</h4>
                    </div>
                    <p className="text-gray-700">Experts from leading companies who bring practical knowledge</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <div className="rounded-full bg-blue-100 p-2 mr-3">
                        <UserGraduate className="text-blue-600 w-5 h-5" />
                      </div>
                      <h4 className="font-bold">Faculty Members</h4>
                    </div>
                    <p className="text-gray-700">Professors who bridge academic theory with practical applications</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <div className="rounded-full bg-blue-100 p-2 mr-3">
                        <Rocket className="text-blue-600 w-5 h-5" />
                      </div>
                      <h4 className="font-bold">Alumni Entrepreneurs</h4>
                    </div>
                    <p className="text-gray-700">Successful founders who understand both education and business</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <div className="rounded-full bg-blue-100 p-2 mr-3">
                        <Laptop className="text-blue-600 w-5 h-5" />
                      </div>
                      <h4 className="font-bold">Domain Specialists</h4>
                    </div>
                    <p className="text-gray-700">Technical experts who provide specialized knowledge and guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


