import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              Thestartupwallah
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/investors" className="text-gray-600 hover:text-primary transition-colors">
              Investors
            </Link>
            {/* <Link to="/courses" className="text-gray-600 hover:text-primary transition-colors">
              Courses
            </Link> */}
            <Link to="/resources" className="text-gray-600 hover:text-primary transition-colors">
              Resources
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
              Services
            </Link>
            <Button variant="outline" className="mr-2">Sign In</Button>
            <Button>Login</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/investors" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary transition-colors">
                Investors
              </Link>
              {/* <Link to="/courses" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary transition-colors">
                Courses
              </Link> */}
              <Link to="/resources" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary transition-colors">
                Resources
              </Link>
              <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary transition-colors">
                Services
              </Link>
              <div className="mt-4 space-y-2">
                <Button variant="outline" className="w-full">Sign In</Button>
                <Button className="w-full">Login</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


