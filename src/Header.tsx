// src/components/Header.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "industries", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => (window.location.href = "/")}
            className="text-3xl sm:text-4xl font-extrabold tracking-wide text-navy-900 focus:outline-none"
          >
            <span className="text-blue-600">WEXX</span>{" "}
            <span className="text-base font-semibold text-gray-800">TECHNOLOGIES</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8">
            {["home", "about", "services", "industries", "contact"].map((item) => {
              const label =
                item === "contact"
                  ? "Contact Us"
                  : item.charAt(0).toUpperCase() + item.slice(1);

              return (
                <button
                  key={item}
                  onClick={() => {
                    if (window.location.pathname !== "/") {
                      window.location.href = `/#${item}`;
                    } else {
                      const el = document.getElementById(item);
                      el?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="relative group flex items-center gap-1 font-medium transition-all duration-300 text-gray-700 hover:text-blue-600"
                >

                  {/* Hover dot */}
                  <span className="absolute -left-4 w-2 h-2 rounded-full bg-blue-600 transform scale-50 opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100"></span>
                  {item === "contact" ? (
                    <span className="flex items-center gap-2">
                      {label}
                      <motion.span
                        className="inline-block"
                        animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      >
                        <Phone className="w-6 h-6 text-blue-500" />
                      </motion.span>
                    </span>
                  ) : (
                    label
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {["home", "about", "services", "industries", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (window.location.pathname !== "/") {
                    window.location.href = `/#${item}`;
                  } else {
                    const el = document.getElementById(item);
                    el?.scrollIntoView({ behavior: "smooth" });
                  }
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 capitalize"
              >
                {item === "home" ? "Home" : item.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
