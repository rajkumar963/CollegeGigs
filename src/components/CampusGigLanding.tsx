 "use client"

import type React from "react"
import {Link} from "react-router-dom"
import { useState, useRef } from "react"
import { type FormEvent } from "react"
import { toast } from "sonner"
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Rocket,
  GraduationCap,
  Heart,
  Star,
  CheckCircle,
  Play,
  Phone,
  Mail,
  Linkedin,
  Info,
  MessageCircleQuestionIcon as QuestionCircle,
  LineChartIcon as ChartLine,
  Target,
  Share,
  Handshake,
  Settings,
  PlaneIcon as PaperPlane,
} from "lucide-react"

export default function CampusGigLanding() {
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

  const openYouTubeVideo = () => {
    window.open("https://youtu.be/xN4kcOkxmN0?si=LgipNFbC__l-KKlC", "_blank")
  }

  const toggleFaq = (faqId: string) => {
    setOpenFaq(openFaq === faqId ? null : faqId)
  }

  const handleProjectTypeChange = (value: string, checked: boolean) => {
    if (value === "other") {
      setShowOtherProjectType(checked)
    }
  }

 const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const url = "https://script.google.com/macros/s/AKfycbz28pDV5_za8JkIOQ5DwG1SHCVxJhtcWQUJXZRj8SXawHW0Z-w9GAMxEZ6hooJPeQA/exec";

  const formData = new FormData(form);
  const formBody = new URLSearchParams(formData as any).toString();

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formBody
  })
  .then(res => res.text())
  .then(data => {
    toast(data);
    setFormSubmitted(true);
    form.reset();
  })
  .catch(err => console.error(err));
};


  const openVideoModal = () => {
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
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
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
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
      <section id="home" className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Where Top Talent
              <br />
              <span className="text-yellow-300">Meets Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect students from top institutions like (IITs, NITs, PWIOI) with startups for meaningful collaborations. Startups get skilled
              talent, students gain real-world experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToForm}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start a Project
              </button>
              <button
                onClick={openVideoModal}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeVideoModal()
            }
          }}
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/xN4kcOkxmN0?si=vOSS6_iUsTphJk5Q"
                title="CampusGig Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-t-2xl"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Learn More About CampusGig</h3>
              <p className="text-gray-600">
                Discover how we connect talented students from premier institutions with innovative startups to create
                meaningful collaborations and real-world impact.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Trust Building Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Students and Startups Nationwide
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform connects talent from premier institutions with innovative startups, creating meaningful
              partnerships that drive real results.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Students Connected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-600">Expert Mentors</div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* For Startups */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">For Startups</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Access top talent from premier institutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Get quality work on coding, design, content creation, and strategy
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Tap into fresh perspectives and cutting-edge knowledge</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Scale your team with driven, skilled collaborators</span>
                </li>
              </ul>
            </div>

            {/* For Students */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">For Students</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-purple-600 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Gain hands-on experience with real startup challenges</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-purple-600 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Build a professional portfolio while studying</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-purple-600 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Work on meaningful projects that make an impact</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-purple-600 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Network with industry professionals and entrepreneurs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Projects, Real Impact</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborative projects where students tackle startup challenges with expert guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Market Research */}
            <div className="bg-gradient-to-br from-pink-400 to-red-500 p-6 rounded-2xl text-white hover:transform hover:scale-105 transition-all shadow-lg">
              <div className="mb-4">
                <ChartLine className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Market Research</h3>
              </div>
              <ul className="space-y-2 text-sm mb-4">
                <li>• Industry analysis for market entry</li>
                <li>• Competitive landscape mapping</li>
                <li>• Consumer behavior studies</li>
                <li>• Trend analysis and forecasting</li>
              </ul>
              <p className="text-xs bg-black bg-opacity-20 p-2 rounded">
                <strong>Guided by:</strong> Industry professors and research faculty
              </p>
            </div>

            {/* Strategy Development */}
            <div className="bg-gradient-to-br from-blue-400 to-cyan-500 p-6 rounded-2xl text-white hover:transform hover:scale-105 transition-all shadow-lg">
              <div className="mb-4">
                <Target className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Strategy Development</h3>
              </div>
              <ul className="space-y-2 text-sm mb-4">
                <li>• Product launch planning</li>
                <li>• Pricing strategy development</li>
                <li>• Distribution channel optimization</li>
                <li>• Customer acquisition planning</li>
              </ul>
              <p className="text-xs bg-black bg-opacity-20 p-2 rounded">
                <strong>Guided by:</strong> Alumni entrepreneurs and business faculty
              </p>
            </div>

            {/* Marketing Campaigns */}
            <div className="bg-gradient-to-br from-green-400 to-teal-500 p-6 rounded-2xl text-white hover:transform hover:scale-105 transition-all shadow-lg">
              <div className="mb-4">
                <Share className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Marketing Campaigns</h3>
              </div>
              <ul className="space-y-2 text-sm mb-4">
                <li>• Content creation and strategy</li>
                <li>• Brand storytelling</li>
                <li>• Social media strategy</li>
                <li>• Campaign performance analytics</li>
              </ul>
              <p className="text-xs bg-black bg-opacity-20 p-2 rounded">
                <strong>Guided by:</strong> Marketing faculty and digital experts
              </p>
            </div>

            {/* Sales Development */}
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-6 rounded-2xl text-white hover:transform hover:scale-105 transition-all shadow-lg">
              <div className="mb-4">
                <Handshake className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Sales Development</h3>
              </div>
              <ul className="space-y-2 text-sm mb-4">
                <li>• Outreach strategy development</li>
                <li>• Sales process optimization</li>
                <li>• Lead generation systems</li>
                <li>• Network testing and validation</li>
              </ul>
              <p className="text-xs bg-black bg-opacity-20 p-2 rounded">
                <strong>Guided by:</strong> Sales professionals and business experts
              </p>
            </div>

            {/* Product Development */}
            <div className="bg-gradient-to-br from-teal-300 to-pink-300 p-6 rounded-2xl text-gray-800 hover:transform hover:scale-105 transition-all shadow-lg">
              <div className="mb-4">
                <Settings className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Product Development</h3>
              </div>
              <ul className="space-y-2 text-sm mb-4">
                <li>• MVP design and iteration</li>
                <li>• Feature prioritization</li>
                <li>• Cross-functional collaboration</li>
                <li>• Product roadmap planning</li>
              </ul>
              <p className="text-xs bg-black bg-opacity-20 p-2 rounded text-white">
                <strong>Guided by:</strong> Product managers and startup founders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Submission Form */}
      <section id="project-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Start Your Project</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Every project is supported by a dedicated team of 50+ members with extensive expertise from college
              faculty and experienced mentors with 10+ years in diverse domains.
            </p>
            <p className="text-lg text-gray-600">
              Ready to collaborate with talented students? Submit your project idea and we'll match you with the right
              team.
            </p>
          </div>

          <div className="bg-gray-200 p-8 rounded-2xl shadow-lg">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="CompanyName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your company or project name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
                  <input
                    type="text"
                    name="ContactPerson"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Primary contact name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Work email for communication"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="Phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="For quick coordination"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Title *</label>
                <input
                  type="text"
                  name="ProjectTitle"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="e.g., 'Market Research for EdTech Product'"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type (Select one or more) *
                </label>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    { value: "market_research", label: "Market Research" },
                    { value: "strategy", label: "Strategy Development" },
                    { value: "marketing", label: "Marketing Campaigns" },
                    { value: "sales", label: "Sales Development" },
                    { value: "product", label: "Product Development" },
                    { value: "other", label: "Other (specify)" },
                  ].map((type) => (
                    <label key={type.value} className="flex items-center">
                      <input
                        type="checkbox"
                        name="ProjectType"
                        value={type.value}
                        onChange={(e) => handleProjectTypeChange(type.value, e.target.checked)}
                        className="mr-2 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm">{type.label}</span>
                    </label>
                  ))}
                </div>
                {showOtherProjectType && (
                  <input
                    type="text"
                    name="OtherProjectType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-3 transition-colors"
                    placeholder="Please specify other project type"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
                <textarea
                  required
                  name="ProjectDescription"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="What challenge do you want students to solve? What outcome do you expect? (100–300 words)"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline *</label>
                  <input
                    type="text"
                    name="Timeline"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="e.g., 2 weeks, 1 month"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
                  <input
                    type="text"
                    name="HearAboutUs"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="LinkedIn, referral, website, etc."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea
                  rows={3}
                  name="AdditionalNotes"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Anything else you'd like us to know"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <PaperPlane className="w-4 h-4 mr-2 inline" />
                      Submit Your Project
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              We believe in full transparency—no hidden platform fees. Our focus is on helping students gain hands-on
              experience while providing startups with valuable support.
            </p>
            <p className="text-lg text-gray-600">
              Students work with guidance from expert mentors and faculty to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Impact Projects */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Impact Projects</h3>
                <div className="text-3xl font-bold text-green-600 mt-2">Free to ₹2,000</div>
              </div>
              <p className="text-gray-600 text-center mb-6">Learning-focused collaborations with expert guidance</p>
              <ul className="space-y-3">
                {[
                  "Expert mentorship included",
                  "Faculty guidance",
                  "Learning-focused approach",
                  "Collaborative environment",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Standard Projects */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Standard Projects</h3>
                <div className="text-3xl font-bold text-blue-600 mt-2">₹5,000 - ₹10,000</div>
              </div>
              <p className="text-gray-600 text-center mb-6">Professional-quality project work delivered efficiently</p>
              <ul className="space-y-3">
                {["Professional delivery", "Faster turnaround", "Quality assurance", "Dedicated support"].map(
                  (feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-blue-500 w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto">
              <Info className="text-yellow-600 w-5 h-5 mr-2 inline" />
              <span className="text-yellow-800 font-medium">
                No platform fees • Direct collaboration • Transparent pricing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg md:text-xl text-gray-600">Get answers to common questions about CampusGig</p>
          </div>

          <div className="space-y-6">
            {/* For Startups FAQ */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Rocket className="text-blue-600 w-6 h-6 mr-3" />
                For Startups
              </h3>
              <div className="space-y-4">
                {[
                  {
                    id: "startup-1",
                    question: "How do you verify student credentials?",
                    answer:
                      "We verify students through their official college email addresses and academic records. All students must be enrolled in top institutions and provide proof of enrollment.",
                  },
                  {
                    id: "startup-2",
                    question: "What if I'm not satisfied with the work?",
                    answer:
                      "We offer revision rounds and quality assurance. If you're still not satisfied, we'll work with you to find a solution or connect you with a different team.",
                  },
                  {
                    id: "startup-3",
                    question: "How does the mentorship work?",
                    answer:
                      "Every project is backed by expert mentors with 10+ years of experience and college faculty. They guide students through planning sessions and ensure quality delivery.",
                  },
                ].map((faq) => (
                  <div key={faq.id} className="bg-gray-50 p-6 rounded-lg">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left flex justify-between items-center"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      {openFaq === faq.id ? (
                        <ChevronUp className="text-gray-500 w-5 h-5" />
                      ) : (
                        <ChevronDown className="text-gray-500 w-5 h-5" />
                      )}
                    </button>
                    {openFaq === faq.id && <div className="mt-4 text-gray-600">{faq.answer}</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* For Students FAQ */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <GraduationCap className="text-purple-600 w-6 h-6 mr-3" />
                For Students
              </h3>
              <div className="space-y-4">
                {[
                  {
                    id: "student-1",
                    question: "How do I get selected for projects?",
                    answer:
                      "Selection is based on your skills, academic background, and interest in the project domain. We match students with projects that align with their expertise and career goals.",
                  },
                  {
                    id: "student-2",
                    question: "Can I work on multiple projects at once?",
                    answer:
                      "Yes, as long as you can manage your time effectively and maintain quality. We recommend starting with one project to understand the process.",
                  },
                ].map((faq) => (
                  <div key={faq.id} className="bg-gray-50 p-6 rounded-lg">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left flex justify-between items-center"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      {openFaq === faq.id ? (
                        <ChevronUp className="text-gray-500 w-5 h-5" />
                      ) : (
                        <ChevronDown className="text-gray-500 w-5 h-5" />
                      )}
                    </button>
                    {openFaq === faq.id && <div className="mt-4 text-gray-600">{faq.answer}</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* General FAQ */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <QuestionCircle className="text-green-600 w-6 h-6 mr-3" />
                General
              </h3>
              <div className="space-y-4">
                {[
                  {
                    id: "general-1",
                    question: "What makes CampusGig different from other platforms?",
                    answer:
                      "We focus specifically on connecting premier institution students with startups, provide expert mentorship, and charge no platform fees. Our goal is education and impact, not just transactions.",
                  },
                  {
                    id: "general-2",
                    question: "How do you ensure quality control?",
                    answer:
                      "Quality is ensured through mentor guidance, faculty involvement, peer review processes, and regular check-ins throughout the project lifecycle.",
                  },
                ].map((faq) => (
                  <div key={faq.id} className="bg-gray-50 p-6 rounded-lg">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left flex justify-between items-center"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      {openFaq === faq.id ? (
                        <ChevronUp className="text-gray-500 w-5 h-5" />
                      ) : (
                        <ChevronDown className="text-gray-500 w-5 h-5" />
                      )}
                    </button>
                    {openFaq === faq.id && <div className="mt-4 text-gray-600">{faq.answer}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                CampusGig
              </h3>
              <p className="text-gray-400 mb-6">
                We connect startups with skilled students from top institutions to collaborate on real-world projects,
                backed by expert mentorship. Our mission is to enable students to learn and grow through hands-on
                experience.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#project-form" className="hover:text-white transition-colors">
                    Start Project
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>contact.campusgig@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+91-9481912068</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-4 h-4 mr-3" />
                  <a href="#" className="hover:text-white transition-colors">
                    Follow us on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CampusGig. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}



