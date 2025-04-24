"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import MainButton from "../MainButton";

function StatsSection() {
  return (
    <motion.div
      id="result-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col lg:flex-row px-6 sm:px-10 lg:px-20 justify-center items-center my-10 sm:my-20 gap-6 sm:gap-10 overflow-hidden"
    >
      {/* Animated Background Element */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-[#008A20] rounded-full opacity-20 filter blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <img
        src="/enterprenuer.png"
        alt="Stats Visual"
        className="w-full sm:w-3/4 lg:w-1/2 object-contain relative z-10 rounded-xl hidden sm:block"
      />

      <div className="py-6 sm:py-10 max-w-lg relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#008A20] px-4 sm:px-5 text-white rounded-full max-sm:m-auto py-2 text-center w-40 sm:w-52"
        >
          OUR CUSTOMERS
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl lg:text-4xl my-4 sm:my-6 max-sm:text-center font-bold"
        >
          BUILT FOR GROWING TEAMS AND INDEPENDENT PROFESSIONALS
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 items-center">
          <p className="text-gray-500 text-xs sm:text-sm w-full sm:w-64 max-sm:text-center">
            From entrepreneurs taking their first step to businesses scaling new
            heights, Bank of Anthos offers the trusted financial tools you need
            — with modern control, legacy-grade reliability, and zero guesswork.
          </p>
          <MainButton text="Learn more" />
        </div>

        <div className="mt-6 sm:mt-8">
          <img
            src="/StatsSection_Image2.png"
            alt="Stats Graph"
            className="w-full"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-[#e9e9e9] py-4 sm:py-6 rounded-b-xl flex flex-wrap justify-around items-center gap-4 sm:gap-6"
          >
            <StatItem value={200000} label="CUSTOMERS" post={"+"} />
            <StatItem value={0} label="MONTHLY FEE" pre={"₦"} />
            <StatItem
              value={500000000}
              label="FASTER PAYMENTS"
              pre={"₦"}
              post={"+"}
            />
            <StatItem value={4.9} label="APP RATING" />
          </motion.div>
        </div>

        {/* New Call-to-Action Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 sm:mt-12 rounded-xl p-4 sm:p-6 text-black/70 text-center"
        >
          <div className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
            Join Thousands of Happy Customers
          </div>
          <div className="mb-2 sm:mb-4 text-xs sm:text-sm">
            Experience the simplicity and power of Bank of Anthos&apos;s digital
            banking today.
          </div>
          <div className="flex items-center justify-center">
            <MainButton text="Get Started" />
          </div>{" "}
        </motion.div>
      </div>
    </motion.div>
  );
}

const StatItem = ({ value, label, pre, post }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div className="text-center" ref={ref}>
      <div className="text-xl sm:text-3xl font-semibold">
        {inView && (
          <div>
            {pre}
            <CountUp
              end={value}
              duration={2.5}
              formattingFn={(num) => formatNumber(num)}
              preserveValue={true}
            />
            {post}
          </div>
        )}
      </div>
      <div className="text-xs">{label}</div>
    </div>
  );
};

const formatNumber = (num) => {
  if (num >= 1_000_000) return Math.round(num / 1_000_000) + "M";
  if (num >= 1_000) return Math.round(num / 1_000) + "K";
  return num.toString();
};

export default StatsSection;
