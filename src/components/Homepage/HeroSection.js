"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomChatbot from "./Chatbot";
import { Icons } from "../Icons";
import Image from "next/image";
import MainButton from "../MainButton";
import Link from "next/link";

function HeroSection() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

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
      <div className="pb-28 px-20 max-sm:px-4 flex flex-col lg:flex-row gap-10 mt-10 relative z-10">
        {/* Left Column: Content & CTAs */}
        <div className="w-full lg:w-[30%] relative px-4">
          <div
            className="text-[40px] lg:text-[50px] text-center sm:text-left leading-none absolute max-sm:relative w-full lg:w-[600px] z-20 
              bg-clip-text text-transparent bg-black/70 font-extrabold max-sm:text-[30px]"
          >
            Banking You Can
            <span className="mx-1 text-[#008A20]">
              {" "}
              Believe{" "}
              <Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 text-[#008A20] w-44 hidden lg:block" />{" "}
            </span>
            In{" "}
          </div>
          <div className="h-20 lg:h-32 max-sm:h-0"></div>
          <div className="lg:pt-10 max-sm:pt-10 text-center lg:text-left pb-10 text-gray-400 text-sm lg:text-base max-sm:text-xs">
            From daily spending to long-term saving, Bank of Anthos makes it
            simple, safe, and stress-free.
          </div>
          <div>
            <MainButton text="Get Started" />
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex gap-3 text-black rounded-full px-8 py-2 items-center mt-4 border border-gray-300 transition-all duration-200"
              onClick={handleLiveChat}
            >
              <img src="/Arrow.png" alt="Chat" className="w-7" />
              <div>Live Chat</div>
            </motion.button> */}
          </div>
        </div>

        {/* Middle Column: Hero Image & Info Cards */}
        <div className="w-full lg:w-[60%] flex justify-end rounded-3xl relative h-[300px] lg:h-[500px] max-sm:h-[200px]">
          <Image
            src="/fine-girl.jpg"
            alt="HeroImage"
            fill
            className="hidden lg:block w-full h-full object-cover rounded-3xl image-step max-sm:rounded-lg"
          />
          <Image
            src="/fine-girl.jpg"
            alt="HeroImage"
            fill
            className="w-full h-full object-cover rounded-3xl block lg:hidden max-sm:rounded-lg"
          />
          <motion.div
            className="bg-gray-400/20 text-white backdrop-blur-sm border border-gray-100 rounded-2xl px-4 py-1 absolute top-24 left-8 lg:top-52 lg:left-32 flex gap-2 items-center justify-center max-sm:top-16 max-sm:left-4"
            variants={fadeInFromLeft}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/naira.png"
              alt="Naira"
              width={40}
              height={40}
              className="h-8 lg:h-10 max-sm:h-6"
            />{" "}
            <div>
              <div className="text-white max-sm:text-xs">Account Balance</div>
              <div className="text-xs max-sm:text-[10px]">&#8358;170,500</div>
            </div>
          </motion.div>
          <motion.div
            className="bg-gray-400/20 text-white backdrop-blur-sm border border-gray-100 rounded-2xl px-4 py-1 absolute top-40 right-5 lg:top-72 lg:right-10 flex gap-2 items-center justify-center max-sm:top-28 max-sm:right-2"
            variants={fadeInFromRight}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/tick.png"
              alt="Tick"
              width={40}
              height={40}
              className="h-8 lg:h-10 max-sm:h-6"
            />
            <div>
              <div className="text-white max-sm:text-xs">Transfer</div>
              <div className="text-xs max-sm:text-[10px]">&#8358;90,000</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Secondary Image & Feature Card */}
        <div className="w-full lg:w-[30%] px-4">
          <Image
            src="/stock.jpg"
            alt="HeroImage"
            width={500}
            height={400}
            className="rounded-2xl w-full h-auto max-sm:rounded-lg"
          />
          <div className="mt-8 flex items-center gap-4">
            <div>
              <div className="font-medium text-lg lg:text-xl text-nowrap max-sm:text-base">
                Modern Investing, Traditional Trust.{" "}
              </div>
              <div className="text-sm mt-1 text-gray-500 max-sm:text-xs text-right">
                With Bank of Anthos, monitoring your stock portfolio and market
                movements has never been easier. Powered by industry-leading
                security and built on a legacy of trust, our platform gives you
                real-time insights, empowering you to make confident, informed
                decisions, wherever your financial journey takes you.
              </div>

              <Link href="/stock-market">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex gap-3 text-black rounded-full px-8 py-2 items-center mt-4 border border-gray-300 transition-all duration-200 justify-self-end"
                >
                  <img src="stock-icon.png" alt="Stock" className="w-10" />
                  <div>View Stocks</div>
                </motion.button>
              </Link>
            </div>
          </div>
        </div>

        {isChatbotVisible && <CustomChatbot />}
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 max-sm:bottom-5"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="w-8 h-8 text-gray-500 max-sm:w-6 max-sm:h-6"
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
