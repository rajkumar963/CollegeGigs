"use client"

import { useState, useEffect, useRef } from "react"
import {
  Menu,
  X,
  Rocket,
  LineChartIcon as ChartLine,
  BookOpen,
  Microscope,
  PieChartIcon as ChartPie,
  Users,
  Database,
  FileCodeIcon as FileContract,
  MessageCircle,
  RotateCcw,
  Clock,
  Shield,
  Gem,
  Infinity,
  Phone,
  Mail,
  Globe,
  Info,
  Ban,
  RotateCw,
  Gift,
  Linkedin,
  Twitter,
  Instagram,
  QrCode,
} from "lucide-react"

export default function StartupKhazana() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const priceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)

    const cards = document.querySelectorAll(".feature-card")
    cards.forEach((card) => {
      const element = card as HTMLElement
      element.style.opacity = "0"
      element.style.transform = "translateY(30px)"
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80
      const targetPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="bg-gray-50 font-sans">
      <style>{`
        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        .fade-in {
          animation: fadeIn 1s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .pulse-glow {
          animation: pulseGlow 2s infinite;
        }
        
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.3); }
          50% { box-shadow: 0 0 30px rgba(102, 126, 234, 0.6); }
          100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.3); }
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .feature-icon {
          transition: all 0.3s ease;
        }
        
        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        .price-reveal {
          animation: priceReveal 1.5s ease-out;
        }
        
        @keyframes priceReveal {
          0% { opacity: 0; transform: scale(0.8); }
          50% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .whatsapp-pulse {
          animation: whatsappPulse 2s infinite;
        }
        
        @keyframes whatsappPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .typing-animation {
          overflow: hidden;
          border-right: .15em solid orange;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: .15em;
          animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: orange; }
        }
        
        .qr-code-container {
          background: linear-gradient(45deg, #f0f9ff, #e0f2fe);
          border: 3px solid #0ea5e9;
          border-radius: 20px;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }
        
        .qr-code-container::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
          transform: rotate(45deg);
          animation: shine 3s infinite;
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        
        .navbar {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
          transition: all 0.3s ease;
        }
        
        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 2px 20px rgba(0,0,0,0.1);
        }
        
        .logo-placeholder {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 20px;
        }
        
        .section-padding {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
      `}</style>

      {/* Navigation Bar */}
      <nav className={`navbar fixed top-0 left-0 right-0 z-50 py-4 ${isScrolled ? "scrolled" : ""}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div>
                <img src="https://res.cloudinary.com/dsdcta1sr/image/upload/v1749321811/Untitled_design_4_kzzrpb.svg" alt="logo" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text ">PWCS</h1>
                <p className="text-sm text-gray-600 ">Startup Khazana</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("payment")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all font-medium"
              >
                Get Access
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="mt-4 md:hidden bg-white rounded-lg shadow-lg p-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-left"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("benefits")}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-left"
                >
                  Benefits
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-left"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection("payment")}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all font-medium text-center"
                >
                  Get Access
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="gradient-bg min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ marginTop: "80px" }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Introducing <span className="text-yellow-300">Startup Khazana</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
              The Ultimate Founder Toolkit
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Investor data, legal docs, marketing blueprints, and exclusive access, curated by PWCS
            </p>
            <button
              onClick={() => scrollToSection("features")}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 pulse-glow"
            >
              <Rocket className="w-5 h-5 inline mr-2" />
              Discover What's Inside
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white float-animation">
          <div className="w-6 h-6">⌄</div>
        </div>
      </section>

      {/* What's Included Section */}
      <section id="features" className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 slide-in-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6">
              What's Included in Startup Khazana
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, grow, and scale your startup — all in one comprehensive toolkit
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Marketing & Sales Strategy */}
            <div className="feature-card card-hover bg-gradient-to-br from-blue-50 to-indigo-100 p-6 md:p-8 rounded-xl border border-blue-200">
              <div className="feature-icon text-3xl md:text-4xl text-blue-600 mb-4">
                <ChartLine className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Marketing & Sales Strategy Handbooks</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Proven marketing playbooks and sales guides for B2B/B2C success including digital marketing blueprints,
                conversion strategies, and customer acquisition frameworks.
              </p>
              <ul className="text-xs md:text-sm text-gray-500 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>50+ Digital Marketing Templates
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Sales Funnel Optimization Guides
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Customer Acquisition Playbooks
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Content Marketing Strategies
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Social Media Marketing Blueprints
                </li>
              </ul>
            </div>

            {/* Entrepreneurship Case Book */}
            <div className="feature-card card-hover bg-gradient-to-br from-purple-50 to-pink-100 p-6 md:p-8 rounded-xl border border-purple-200">
              <div className="feature-icon text-3xl md:text-4xl text-purple-600 mb-4">
                <BookOpen className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Entrepreneurship Case Book</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Learn from real startup journeys, pivots, and scale stories with detailed analysis of successful
                entrepreneurs and their strategies.
              </p>
              <ul className="text-xs md:text-sm text-gray-500 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>300+ Real Startup Journey Stories
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Pivot Strategy Deep Dives
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Scaling Methodologies & Frameworks
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Leadership & Team Building Insights
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Crisis Management Case Studies
                </li>
              </ul>
            </div>

            {/* Startup Case Studies */}
            <div className="feature-card card-hover bg-gradient-to-br from-green-50 to-emerald-100 p-6 md:p-8 rounded-xl border border-green-200">
              <div className="feature-icon text-3xl md:text-4xl text-green-600 mb-4">
                <Microscope className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Startup Case Studies</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Deep analysis of successful and failed startups across industries with actionable insights and lessons
                learned from their journeys.
              </p>
              <ul className="text-xs md:text-sm text-gray-500 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Industry-wise Analysis Reports
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Success Factors Breakdown & Patterns
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Common Failure Points & Solutions
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Market Entry Strategy Analysis
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Product-Market Fit Case Studies
                </li>
              </ul>
            </div>

            {/* Market Research Reports */}
            <div className="feature-card card-hover bg-gradient-to-br from-yellow-50 to-orange-100 p-6 md:p-8 rounded-xl border border-yellow-200">
              <div className="feature-icon text-3xl md:text-4xl text-yellow-600 mb-4">
                <ChartPie className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Market Research Reports</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Industry insights and customer behavior data for strategic decision-making with comprehensive market
                analysis and trend forecasting.
              </p>
              <ul className="text-xs md:text-sm text-gray-500 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>100+ Industry-specific Reports
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Consumer Behavior Analytics
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Market Size & Growth Projections
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Competitive Landscape Analysis
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Emerging Market Opportunities
                </li>
              </ul>
            </div>

            {/* Investor Database */}
            <div className="feature-card card-hover bg-gradient-to-br from-red-50 to-pink-100 p-6 md:p-8 rounded-xl border border-red-200">
              <div className="feature-icon text-3xl md:text-4xl text-red-600 mb-4">
                <Users className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">2000+ Verified Investor Database</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Comprehensive investor contacts with emails, LinkedIn profiles, and sector focus areas to help you
                fundraise smarter and faster.
              </p>
              <ul className="text-xs md:text-sm text-gray-500 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Angel Investors Contact Directory
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>VC Fund Database with Preferences
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Sector-wise Investment Mapping
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Pitch Deck Templates & Examples
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Email Outreach Templates
                </li>
              </ul>
            </div>

            {/* Public Database */}
            <div className="feature-card card-hover bg-gradient-to-br from-indigo-50 to-blue-100 p-6 md:p-8 rounded-xl border border-indigo-200">
              <div className="feature-icon text-3xl md:text-4xl text-indigo-600 mb-4">
                <Database className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                Public Database with 100+ Crore Contacts
              </h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Massive segmented database for targeted outreach including CXOs, CEOs, HNIs, MSMEs, professionals, and
                more across industries.
              </p>
              <ul className="text-xs md:text-sm text-gray-500 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>10+ Crore CXO & CEO Contacts
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>50+ Crore MSME Database
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Professional Networks & Communities
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Industry-wise Contact Segmentation
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Email & LinkedIn Profile Access
                </li>
              </ul>
            </div>

            {/* Legal Documents */}
            <div className="feature-card card-hover bg-gradient-to-br from-teal-50 to-cyan-100 p-6 md:p-8 rounded-xl border border-teal-200">
              <div className="feature-icon text-3xl md:text-4xl text-teal-600 mb-4">
                <FileContract className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">1000+ Legal & Business Documents</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Complete legal documentation toolkit including NDAs, MOUs, term sheets, co-founder agreements, and
                regulatory compliance guides.
              </p>
              <ul className="text-xs md:text-sm text-gray-500 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Legal Templates Library (50+ docs)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Compliance Checklists & Guides
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Contract Templates & Agreements
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>GST & ROC Registration Help
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>IP Protection Guidelines
                </li>
              </ul>
            </div>

            {/* Community Access */}
            <div className="feature-card card-hover bg-gradient-to-br from-gray-50 to-slate-100 p-6 md:p-8 rounded-xl border border-gray-200">
              <div className="feature-icon text-3xl md:text-4xl text-gray-600 mb-4">
                <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">PWCS Founders-Only Community</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Exclusive access to a private community of successful founders, active investors, experienced mentors,
                and industry experts.
              </p>
              <ul className="text-xs md:text-sm text-gray-500 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>5000+ Active Founder Network
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Direct Access to Mentors & Experts
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Peer Learning & Collaboration
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Weekly Expert Webinars
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>1-on-1 Mentorship Opportunities
                </li>
              </ul>
            </div>

            {/* Weekly Updates */}
            <div className="feature-card card-hover bg-gradient-to-br from-violet-50 to-purple-100 p-6 md:p-8 rounded-xl border border-violet-200">
              <div className="feature-icon text-3xl md:text-4xl text-violet-600 mb-4">
                <RotateCcw className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Weekly Updates & Resources</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Stay ahead with regular updates including fresh research, startup news, new business tools, and
                government scheme notifications.
              </p>
              <ul className="text-xs md:text-sm text-gray-500 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Latest Industry Trends & News
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>New Tool Discoveries & Reviews
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Government Scheme Updates
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Fresh Market Intelligence
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Weekly Success Stories
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Founders Need This */}
      <section id="benefits" className="section-padding bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 slide-in-right">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Why Every Founder Needs This Khazana
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your startup journey with proven resources and exclusive access
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center fade-in">
              <div className="bg-blue-500 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 float-animation">
                <Clock className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Save 100+ Hours</h3>
              <p className="text-gray-600 text-sm md:text-base">Of research, documentation, and outreach work</p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-green-500 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 float-animation">
                <Shield className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Legal Protection</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Safeguard your startup from day one with proper documentation
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-purple-500 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 float-animation">
                <Gem className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">High-Value Access</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Data and resources that would cost thousands separately
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-orange-500 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 float-animation">
                <Infinity className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Lifetime Value</h3>
              <p className="text-gray-600 text-sm md:text-base">Pay once, get lifetime access and regular updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6">How It Works</h2>
            <p className="text-lg md:text-xl text-gray-600">Simple 3-step process to get instant access</p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center slide-in-left">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-lg md:text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Pay via Google Pay</h3>
              <p className="text-gray-600 text-sm md:text-base">Use our QR code or direct link for instant payment</p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-lg md:text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Send Payment Screenshot</h3>
              <p className="text-gray-600 text-sm md:text-base">
                WhatsApp us the payment confirmation for verification
              </p>
            </div>

            <div className="text-center slide-in-right">
              <div className="bg-gradient-to-r from-pink-500 to-red-600 text-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-lg md:text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Receive Full Access</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Get instant access to all resources via WhatsApp or email
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="price-reveal" ref={priceRef}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Unlock the Startup Khazana</h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8">One-Time Payment</p>

            <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md mx-auto shadow-2xl mb-8">
              <div className="text-4xl md:text-6xl font-bold gradient-text mb-4">₹189</div>
              <div className="text-gray-500 line-through text-lg md:text-xl mb-2">Original Price: ₹1999</div>
              <div className="text-green-600 font-bold text-base md:text-lg mb-6">Special Launch Offer - 90% OFF!</div>
              <ul className="text-left text-gray-600 space-y-2 mb-6 text-sm md:text-base">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Lifetime access to all resources
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Free weekly updates forever
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>No recurring charges
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>Immediate delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
        <section id="payment" className="section-padding bg-gray-900 text-white py-16">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-yellow-400">Pay ₹189 via Google Pay</h2>
              <p className="text-lg md:text-xl text-gray-300">Choose your preferred payment method</p>
            </div>

            {/* Payment Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              
              {/* QR Code Section */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6 text-white">Scan QR Code</h3>
                <div className="w-52 h-52 md:w-64 md:h-64 mx-auto bg-gray-100 rounded-xl flex items-center justify-center shadow-lg mb-4">
                  <img
                    className="w-full h-full object-contain rounded-md"
                    src="https://res.cloudinary.com/dsdcta1sr/image/upload/v1749322922/Untitled_design_5_zvbcna.svg"
                    alt="GPay QR Code"
                  />
                </div>
                <p className="text-gray-400 text-sm">Scan using any UPI App to pay ₹189</p>
              </div>

              {/* Direct Payment Link Section */}
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">Or Click to Pay</h3>
                <a
                  href="upi://pay?pa=asutiwari232-2@okicici&pn=Asu%20Tiwari&aid=uGICAgICrvuC0Qw"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105 shadow-md block"
                >
                  Pay via UPI Link
                </a>

                <div className="bg-gray-800 p-4 rounded-lg shadow-inner">
                  <p className="text-gray-400 text-sm">Contact Number:</p>
                  <p className="text-2xl font-bold text-yellow-400">+91-9481912068</p>
                </div>

                <a
                  href="https://wa.me/message/DB45B2CA3YBTE1"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105 shadow-md block"
                >
                  Send Payment Proof on WhatsApp
                </a>
              </div>
            </div>

            {/* Offer Banner */}
            <div className="text-center mt-16">
              <div className="bg-yellow-400 text-gray-900 py-4 px-6 rounded-lg max-w-xl mx-auto shadow-md">
                <p className="font-bold text-sm md:text-base">⚡ Limited Time Offer ⚡</p>
                <p className="text-sm md:text-base">This 90% discount won't last long. Secure your access today!</p>
              </div>
            </div>
          </div>
        </section>



      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 md:py-12">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="https://res.cloudinary.com/dsdcta1sr/image/upload/v1749321811/Untitled_design_4_kzzrpb.svg" alt="logo image" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold gradient-text">PWCS</h3>
                  <p className="text-sm text-gray-400">Startup Khazana</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                Empowering founders with the tools and knowledge they need to succeed.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-bold mb-4">Contact Details</h4>
              <div className="space-y-2 text-gray-300 text-sm md:text-base">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +91-9481912068
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  contact.f2xo@gmail.com
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-bold mb-4">Important Notes</h4>
              <div className="text-gray-300 space-y-2 text-xs md:text-sm">
                <p className="flex items-center">
                  <Info className="w-4 h-4 mr-2" />
                  This is a digital product
                </p>
                <p className="flex items-center">
                  <Ban className="w-4 h-4 mr-2" />
                  No refunds after access is shared
                </p>
                <p className="flex items-center">
                  <RotateCw className="w-4 h-4 mr-2" />
                  PWCS updates Startup Khazana weekly
                </p>
                <p className="flex items-center">
                  <Gift className="w-4 h-4 mr-2" />
                  All customers receive free updates for life
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
            <p className="text-gray-400 text-xs md:text-sm">
              &copy; 2024 PWCS. All rights reserved. | Startup Khazana for Founders
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
