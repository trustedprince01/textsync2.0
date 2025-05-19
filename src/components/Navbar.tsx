import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav
        className={`transition-all duration-300 rounded-full mx-auto my-4 max-w-4xl ${
          isScrolled
            ? "bg-primary text-white shadow-md backdrop-blur-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        {/* Added max-w-5xl to limit width and mx-auto to center it */}
        <div className="px-4 md:px-8">
          {/* Centered navigation - new layout */}
          <div className="flex justify-center items-center relative">
            {/* Logo - absolute positioned on left for larger screens */}
            <div className="absolute left-4 md:static flex items-center md:mr-8">
              <span className={`text-2xl font-bold ${isScrolled ? "text-white" : "text-gray-800"}`}>
                Text<span className={`${isScrolled ? "text-white" : "text-primary"}`}>Sync</span>
              </span>
            </div>

            {/* Desktop Navigation - centered */}
            <div className="hidden md:flex items-center gap-8 mx-auto">
              <a
                href="#features"
                className={`${isScrolled ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-primary"} transition-colors`}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className={`${isScrolled ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-primary"} transition-colors`}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className={`${isScrolled ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-primary"} transition-colors`}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className={`${isScrolled ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-primary"} transition-colors`}
              >
                Contact
              </a>
            </div>

            {/* CTA Button - only visible on desktop */}
            <div className="absolute right-4 hidden md:block">
              <Button className={isScrolled ? "bg-white text-primary hover:bg-white/90" : ""}>
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-auto">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`${isScrolled ? "text-white" : "text-gray-700"} focus:outline-none`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="text-gray-700 py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-gray-700 py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-gray-700 py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button>Get Started</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;