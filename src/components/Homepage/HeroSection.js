"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import CustomChatbot from "./Chatbot";
import {Icons} from "../Icons";
import Image from "next/image";

function HeroSection() {
  const router = useRouter();
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const handleGetStarted = () => {
    // router.push("/register");
    console.log("to reg")
  };

  const handleLiveChat = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated Decorative Blobs */}
      {/* <motion.div
        className="absolute top-[-80px] left-[-80px] w-40 h-40 bg-[#008A20] rounded-full opacity-30 filter blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      /> */}
      <motion.div
        className="absolute bottom-[-80px] right-[-80px] w-56 h-56 bg-[#000D03] rounded-full opacity-30 filter blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="pb-28 px-20 max-sm:px-4 flex flex-col lg:flex-row gap-10 mt-10 relative z-10">
        {/* Left Column: Content & CTAs */}
        <div className="w-full lg:w-[30%] relative px-4">
          <div
            className="text-[40px] lg:text-[50px] text-center sm:text-left leading-none absolute max-sm:relative w-full lg:w-[600px] z-20 
              bg-clip-text text-transparent bg-black/70 font-extrabold"
          >
            Banking You Can
            
            <span className="mx-1 text-[#008A20]"> Believe  <Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 text-[#008A20] w-44 hidden lg:block" /> </span>
             
              In{" "}
          </div>
          <div className="h-32 max-sm:h-0"></div>
          <div className="pt-10 max-sm:pt-10 max-sm:text-center pb-10 text-gray-400 text-sm lg:text-base">
            From daily spending to long-term saving, Bank of Anthos makes it
            simple, safe, and stress-free.
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex gap-2 max-sm:m-auto border border-gray-300 rounded-full px-4 py-2 items-center text-lg transition-all duration-200"
              onClick={handleGetStarted}
            >
              <Image
  src="/Arrow.png"
  alt="Arrow"
  width={32} // Add width prop
  height={32} // Add height prop
  className="w-8 h-8" // Keep or adjust className as needed for styling
/>
              <div>Get Started</div>
            </motion.button>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex gap-3 text-black rounded-full px-8 py-2 items-center mt-4 border border-gray-300 transition-all duration-200"
              onClick={handleLiveChat}
            >
              <Image src="/Arrow.png" alt="Chat" className="w-7" />
              <div>Live Chat</div>
            </motion.button> */}
          </div>
        </div>

        {/* Middle Column: Hero Image & Info Cards */}
        <div className="w-full lg:w-[60%] flex justify-end rounded-3xl relative h-[300px] lg:h-[500px]">
        <Image
    src="/fine-girl.jpg"
    alt="HeroImage"
    fill
    className="w-full h-full object-cover rounded-3xl image-step"
/>
          <motion.div
            className="bg-gray-400/20 text-white backdrop-blur-sm border border-gray-100 rounded-2xl px-4 py-1 absolute top-24 left-8 lg:top-52 lg:left-32 flex gap-2 items-center justify-center"
            variants={fadeInFromLeft}
            initial="hidden"
            animate="visible"
          >
<Image src="/naira.png" alt="Naira" width={40} height={40} className="h-8 lg:h-10" />            <div>
              <div className="text-white">Account Balance</div>
              <div className="text-xs">&#8358;170,500</div>
            </div>
          </motion.div>
          <motion.div
            className="bg-gray-400/20 text-white backdrop-blur-sm border border-gray-100 rounded-2xl px-4 py-1 absolute top-40 right-5 lg:top-72 lg:right-10 flex gap-2 items-center justify-center"
            variants={fadeInFromRight}
            initial="hidden"
            animate="visible"
          >
<Image src="/tick.png" alt="Tick" width={40} height={40} className="h-8 lg:h-10" />
<div>
              <div className="text-white">Transfer</div>
              <div className="text-xs">&#8358;90,000</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Secondary Image & Feature Card */}
        <div className="w-full lg:w-[30%] px-4">
        <Image
    src="/better-bank.png"
    alt="HeroImage"
    width={500} 
    height={400}
    className="rounded-2xl w-full h-auto"
/>
          <div className="mt-8 flex items-center gap-4">
            {/* <Image src="/Arrow.png" alt="HeroImage" className="h-16 lg:h-20" /> */}
            <div>
              <div className="font-medium text-lg lg:text-xl text-nowrap">
                The Future of Safe Banking.{" "}
              </div>
              <div className="text-sm mt-1 text-gray-500">
                Trusted by thousands across the country, Bank of Anthos blends
                cutting-edge technology with uncompromising security. From
                instant transfers to smart finance monitoring tools, we make managing your
                money effortless, efficient, and safe — wherever you are.
              </div>
            </div>
          </div>
        </div>

        {isChatbotVisible && <CustomChatbot />}
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="w-8 h-8 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </motion.div>
    </div>
  );
}

export default HeroSection;
