
import { Mail, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-accent mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Investment Gurus</h3>
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
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  Investment Process
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  E-books
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <Button
              variant="secondary"
              className="w-full flex items-center justify-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </Button>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-white hover:text-accent-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center text-sm text-white/60">
            <p>© 2024 Investment Gurus. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
