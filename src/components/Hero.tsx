
import { useState } from "react";
import { Button } from "@/components/ui/button";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

const Hero = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-background pt-16 pb-8 sm:pb-16 lg:pb-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-light/10 to-purple-dark/5"></div>
        <svg
          className="absolute right-0 top-0 h-full w-full"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(139, 92, 246, 0.05)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 md:pt-32">
        <div className="text-center">
          <h1 className="animate-fade-in text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block heading-gradient">Create stunning images</span>
            <span className="block text-purple-dark">powered by AI</span>
          </h1>
          <p className="animate-slide-up mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Transform your ideas into breathtaking visuals with our powerful AI image generator.
            Simple to use, endless possibilities.
          </p>
          <div className="animate-slide-up mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button
                onClick={() => setSignupModalOpen(true)}
                className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-purple hover:bg-purple-dark md:py-4 md:text-lg md:px-10"
              >
                Get started
              </Button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Button
                variant="outline"
                onClick={() => setLoginModalOpen(true)}
                className="w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-purple bg-white hover:bg-purple hover:text-white md:py-4 md:text-lg md:px-10"
              >
                Log in
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Example Images */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="overflow-hidden rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="AI generated portrait"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300">
            <img
              src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
              alt="AI generated landscape"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="AI generated abstract"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
      
      <LoginModal open={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
      <SignupModal open={signupModalOpen} onClose={() => setSignupModalOpen(false)} />
    </div>
  );
};

export default Hero;
