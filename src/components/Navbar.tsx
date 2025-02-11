
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex-shrink-0 flex items-center">
//             <a href="/" className="text-xl font-bold text-primary">
//               Investment Gurus
//             </a>
//           </div>
          
//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#" className="text-gray-600 hover:text-primary transition-colors">
//               Investors
//             </a>
//             <a href="#" className="text-gray-600 hover:text-primary transition-colors">
//               Courses
//             </a>
//             <a href="#" className="text-gray-600 hover:text-primary transition-colors">
//               Resources
//             </a>
//             <a href="#" className="text-gray-600 hover:text-primary transition-colors">
//               Services
//             </a>
//             <Button variant="outline" className="mr-2">
//               Sign In
//             </Button>
//             <Button>Login</Button>
//           </div>

//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-600 hover:text-primary transition-colors"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary transition-colors"
//               >
//                 Investors
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary transition-colors"
//               >
//                 Courses
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary transition-colors"
//               >
//                 Resources
//               </a>
//               <a
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary transition-colors"
//               >
//                 Services
//               </a>
//               <div className="mt-4 space-y-2">
//                 <Button variant="outline" className="w-full">
//                   Sign In
//                 </Button>
//                 <Button className="w-full">
//                   Login
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState(""); // Store user email

  const handleLogin = () => {
    // Simulate login (replace with real authentication logic)
    setEmail("");
    setIsLoggedIn(true);
    setIsOpen(false); // Close mobile menu after login
  };

  const handleLogout = () => {
    setEmail("");
    setIsLoggedIn(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-bold text-primary">
              Investment Gurus
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Investors
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Courses
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Resources
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Services
            </a>

            {/* Show Profile if logged in */}
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <User size={24} className="text-gray-600" />
                <span className="text-gray-700">{email}</span>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button variant="outline" onClick={handleLogin}>
                  Sign In
                </Button>
                <Button onClick={handleLogin}>Login</Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary transition-colors">
                Investors
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary transition-colors">
                Courses
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary transition-colors">
                Resources
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary transition-colors">
                Services
              </a>

              {/* Show Profile if logged in */}
              {isLoggedIn ? (
                <div className="flex flex-col items-center mt-4 space-y-2">
                  <User size={24} className="text-gray-600" />
                  <span className="text-gray-700">{email}</span>
                  <Button variant="outline" className="w-full" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="mt-4 space-y-2">
                  <Button variant="outline" className="w-full" onClick={handleLogin}>
                    Sign In
                  </Button>
                  <Button className="w-full" onClick={handleLogin}>
                    Login
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
