"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleGetStartedClick = () => {
    // router.push("/register");
    console.log("Go to auth")
  };

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div className={`top-0 left-0 w-full bg-white/70 z-50 py-6 px-4 lg:px-16 block`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
          <img src="/favicon.png" alt="logo" className="w-8" />
          <p className="text-lg font-semibold">Bank of Anthos</p>
        </div>
     
        <div className="hidden lg:flex gap-8 items-center">
      
            <>
              <button
                className="flex gap-2 border-[1px] border-gray-300 rounded-full px-4 py-2 items-center text-lg hover:bg-gray-100"
                onClick={handleGetStartedClick}
              >
                <img src="/Arrow.png" alt="Arrow" className="w-6" />
                <div>Get Started</div>
              </button>
            </>
         
        </div>
        <div className="lg:hidden">
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            onClick={toggleMenu}
            className="text-2xl cursor-pointer"
          />
        </div>
      </div>
      <motion.div
        className="lg:hidden fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-50 p-8"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col gap-8 text-lg font-medium text-gray-700">
         
          <div className="flex flex-col gap-4">
              <>
                <button
                  className="flex gap-2 border-[1px] border-gray-300 rounded-full px-4 py-2 items-center text-lg hover:bg-gray-100"
                  onClick={handleGetStartedClick}
                >
                  <img src="/Arrow.png" alt="Arrow" className="w-6" />
                  <div>Get Started</div>
                </button>
              </>
         
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
