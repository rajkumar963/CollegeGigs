
import { Mail} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { LuYoutube } from "react-icons/lu";
import { Button } from "./ui/button";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-blue-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">The Startup Wallah</h3>
            <p className="text-sm opacity-80">
              Connecting ambitious startups with experienced investors to create
              successful ventures.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about-us" className="text-sm opacity-80 hover:opacity-100">
                  About Us
                </a>
              </li>
              <li>
                <Link to="/services" className="text-sm opacity-80 hover:opacity-100">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm opacity-80 hover:opacity-100">
                  Investment Process
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm opacity-80 hover:opacity-100">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-sm opacity-80 hover:opacity-100">
                  E-books
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm opacity-80 hover:opacity-100">
                  Newsletters
                </Link>
              </li>
            
              <li>
                <a href="#faq" className="text-sm opacity-80 hover:opacity-100">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          {/* Rules */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Rules & Policies</h4>
            <ul className="space-y-2">
              <li>
                <a href="./public/Privacy_Policy.pdf" className="text-sm opacity-80 hover:opacity-100">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <Button
              variant="secondary"
              className="w-full flex items-center justify-center gap-2 text-black"
            >
              <Mail className="h-4 w-4 text-black" />
              Contact Us
            </Button>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-white hover:text-accent-foreground transition-colors"
              >
                <FaLinkedinIn  className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent-foreground transition-colors"
              >
                <FiTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent-foreground transition-colors"
              >
                <LuYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center text-sm text-white/60">
            <p>© 2025 TheStartupWallah. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
