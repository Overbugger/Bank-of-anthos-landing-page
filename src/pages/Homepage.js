"use client";  

import React, { useState, useEffect } from "react";
import HeroSection from "@/components/Homepage/HeroSection";
import FeatureSection from "@/components/Homepage/FeatureSection";
import StatsSection from "@/components/Homepage/StatsSection";
import SolutionSection from "@/components/Homepage/SolutionSection";
import { motion } from "framer-motion";

function Homepage() {
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <StatsSection />
      <SolutionSection />

      {/* Scroll to top button */}
      {showButton && (
        <motion.button
        onClick={scrollToTop}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: showButton ? 1 : 0.8, 
          opacity: showButton ? 1 : 0,
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)"
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        aria-label="Scroll to top"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 15l7-7 7 7" 
          />
        </svg>
      </motion.button>
      )}
    </div>
  );
}
export default Homepage;

