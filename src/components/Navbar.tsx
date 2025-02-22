import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/Utils/axiosInstance";
import Profile from "./Profile/Profile";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  function onLogout() {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }

  const getUserInfo = useCallback(async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser._id) {
        setUserInfo(storedUser);
        return;
      }
      const response = await axiosInstance.get(`/userInfo/${storedUser?._id}`);
      if (response.data?.user) {
        setUserInfo(response.data?.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.clear();
        setUserInfo(null);
      }
    }
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    } else {
      getUserInfo();
    }
  }, [getUserInfo]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-primary w-[245px]">
              The Startup Wallah
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/investors" className="text-gray-600 hover:text-primary transition-colors">
              Investors
            </Link>
            <Link to="/resources" className="text-gray-600 hover:text-primary transition-colors">
              Resources
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
              Services
            </Link>
            {userInfo ? (
              <Profile userInfo={userInfo} onLogout={onLogout} />
            ) : (
              <>
                <Link to="/signin">
                  <Button variant="outline" className="mr-2">Sign In</Button>
                </Link>
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              </>
            )}
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

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/investors" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary transition-colors">
                Investors
              </Link>
              <Link to="/resources" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary transition-colors">
                Resources
              </Link>
              <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary transition-colors">
                Services
              </Link>
              <div className="mt-4 space-y-2">
                {userInfo ? (
                  <Profile userInfo={userInfo} onLogout={onLogout} />
                ) : (
                  <>
                    <Link to="/signin" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full mb-3">Sign In</Button>
                    </Link>
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-blue-600">Login</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
