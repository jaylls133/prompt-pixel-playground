
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  // This would come from auth context in a real app
  const isLoggedIn = false;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-purple">
                <span className="heading-gradient">DreamCraft</span>
              </h1>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <Link to="/" className="text-gray-700 hover:text-purple px-3 py-2 rounded-md font-medium">
                  Home
                </Link>
                <Link to="/dashboard" className="text-gray-700 hover:text-purple px-3 py-2 rounded-md font-medium">
                  Create
                </Link>
                <Link to="/profile" className="text-gray-700 hover:text-purple px-3 py-2 rounded-md font-medium">
                  Profile
                </Link>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <Link to="/profile">
                  <div className="relative w-10 h-10 bg-purple rounded-full flex items-center justify-center text-white font-bold cursor-pointer">
                    U
                  </div>
                </Link>
              ) : (
                <>
                  <Button
                    variant="outline"
                    onClick={() => setLoginModalOpen(true)}
                    className="border-purple text-purple hover:bg-purple hover:text-white"
                  >
                    Log in
                  </Button>
                  <Button
                    onClick={() => setSignupModalOpen(true)}
                    className="bg-purple text-white hover:bg-purple-dark"
                  >
                    Sign up
                  </Button>
                </>
              )}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-purple block px-3 py-2 rounded-md font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className="text-gray-700 hover:text-purple block px-3 py-2 rounded-md font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Create
            </Link>
            <Link 
              to="/profile" 
              className="text-gray-700 hover:text-purple block px-3 py-2 rounded-md font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Profile
            </Link>
            
            {!isLoggedIn && (
              <div className="mt-4 space-y-2 px-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setLoginModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full border-purple text-purple hover:bg-purple hover:text-white"
                >
                  Log in
                </Button>
                <Button
                  onClick={() => {
                    setSignupModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-purple text-white hover:bg-purple-dark"
                >
                  Sign up
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
      
      <LoginModal open={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
      <SignupModal open={signupModalOpen} onClose={() => setSignupModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
