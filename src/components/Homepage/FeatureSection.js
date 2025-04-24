"use client";
import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { MdLock } from "react-icons/md";
import { RiShieldCheckFill } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa";
import MainButton from "../MainButton";

// Original feature list
const features = [
  {
    title: "Banking Access, Reinvented",
    description:
      "Your Bank of Anthos account includes both a classic debit card and a secure virtual version — because convenience should never come at the cost of trust.",
  },
  {
    title: "Savings with Purpose",
    description:
      "Let your money grow the old-fashioned way — reliably and responsibly — backed by smart, modern tools that automate your financial goals.",
  },
  {
    title: "Payments Made Simple",
    description:
      "Send and receive money with ease. Whether across town or across borders, Bank of Anthos keeps it secure and seamless — with no hidden fees.",
  },
  {
    title: "Honest Banking, Always",
    description:
      "Built on a legacy of integrity, Bank of Anthos charges no hidden fees — just transparent service you can believe in.",
  },
];

// New testimonial data for carousel section
const testimonials = [
  {
    quote:
      "Bank of Anthos transformed the way I manage my business finances. The interface is both beautiful and intuitive!",
    author: "Alex D.",
    role: "Entrepreneur",
  },
  {
    quote:
      "The security and ease of use have made Bank of Anthos my go-to banking solution. I highly recommend it!",
    author: "Maria S.",
    role: "Freelancer",
  },
  {
    quote:
      "A seamless experience from sign-up to everyday banking. Bank of Anthos's features are exactly what I needed.",
    author: "John K.",
    role: "Small Business Owner",
  },
];

// A simple testimonial slider component using Framer Motion
function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const testimonialCount = testimonials.length;

  const nextTestimonial = () =>
    setCurrent((prev) => (prev + 1) % testimonialCount);
  const prevTestimonial = () =>
    setCurrent((prev) => (prev - 1 + testimonialCount) % testimonialCount);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl p-8 shadow-md"
        >
          <p className="text-lg italic text-gray-700 mb-4">
            &ldquo;{testimonials[current].quote}&rdquo;{" "}
          </p>
          <div className="text-right">
            <p className="font-bold text-gray-900">
              {testimonials[current].author}
            </p>
            <p className="text-sm text-gray-500">
              {testimonials[current].role}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-between mt-4">
        <button
          onClick={prevTestimonial}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Prev
        </button>
        <button
          onClick={nextTestimonial}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function FeatureSection() {
  const [expanded, setExpanded] = useState(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.5 });
  const isLeftInView = useInView(leftRef, { once: true, threshold: 0.5 });
  const isRightInView = useInView(rightRef, { once: true, threshold: 0.5 });

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div id="resources-section" className="relative overflow-hidden">
      {/* Animated decorative blob in the background */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-[#008A20] rounded-full filter blur-3xl opacity-30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pb-20 px-20 max-sm:px-4 flex flex-col lg:flex-row gap-10 max-sm:mt-20 lg:px-2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Section - Enhanced Hero with overlay */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isLeftInView ? 1 : 0, x: isLeftInView ? 0 : -50 }}
          transition={{ duration: 0.5 }}
          className="relative w-full lg:w-[40%] max-sm:w-full flex gap-2 bg-white rounded-xl p-10 shadow-lg overflow-hidden max-sm:p-6"
        >
          {/* Background overlay pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-20"></div>
          <div className="w-64 relative z-10 max-sm:w-full">
            <div className="text-4xl font-bold text-black/70 leading-tight max-sm:text-2xl">
              MODERN BANKING, <br />
              ROOTED IN
              <p className="px-1 text-[#008A20]">TRUST</p>
            </div>

            <div className="text-sm text-gray-500 mt-6 max-sm:mt-4">
              At Bank of Anthos, we blend timeless banking values with next-gen
              tools — so you can manage, monitor, and secure your money with
              confidence.
            </div>

            <div className="my-5 max-sm:my-3">
              <MainButton text={"Learn more"} />
            </div>
          </div>

          <div className="flex flex-col gap-2 items-end max-sm:items-center">
            <div>
              <img
                src="/handshake.jpg"
                alt="Feature showcasing online banking"
                className="rounded-xl w-52 max-sm:w-32"
              />
            </div>
            <div className="">
              <img
                src="/smiling-babe.png"
                alt="Feature showcasing online banking"
                className="rounded-xl w-52 max-sm:w-32"
              />
            </div>
            <div>
              <img
                src="/happy-couple.png"
                alt="Feature showcasing online banking"
                className="rounded-xl w-52 max-sm:w-32"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Section - Accordion & Benefits with Tab-like Header */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: isRightInView ? 1 : 0,
            x: isRightInView ? 0 : 50,
          }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[55%] rounded-xl shadow-md max-sm:p-4"
        >
          <div className="flex text-lg">
            <div className="bg-white py-4 px-8 rounded-tl-xl flex justify-center max-sm:px-4">
              <div className="bg-[#008A20] px-4 h-8 flex items-center rounded-full text-white max-sm:text-sm">
                BENEFITS
              </div>
            </div>
          </div>

          <div className="bg-white w-full p-8 rounded-b-xl space-y-6 max-sm:p-4">
            {features.map((feature, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <motion.h3
                    className={`text-xl font-medium ${
                      expanded === index ? "text-[#008A20]" : "text-black"
                    } max-sm:text-lg`}
                  >
                    {feature.title}
                  </motion.h3>
                  <FontAwesomeIcon
                    icon={expanded === index ? faChevronUp : faChevronDown}
                    className="text-gray-500 w-4 max-sm:w-3"
                  />
                </div>

                <AnimatePresence>
                  {expanded === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-gray-500 mt-2 w-96 max-sm:w-full">
                        {feature.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <hr className="border-2 border-gray-300 mt-4" />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Additional Info Section with Security/FDIC details */}
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl p-8 md:p-14 w-full mx-auto max-sm:p-6"
      >
        <div className="flex flex-col md:flex-row items-center md:justify-around gap-8 max-sm:gap-4">
          <div className="text-center flex items-center justify-center md:justify-start">
            <div>
              <div className="flex gap-2 text-2xl items-center max-sm:text-xl">
                <RiShieldCheckFill className="text-[#008A20] text-3xl max-sm:text-2xl" />
                <span>NDIC insured</span>
              </div>
              <div className="text-sm text-gray-500 mt-2 max-w-xs max-sm:text-xs">
                Your money is insured up to &#8358;250,000,000 through our
                partner bank — so every transfer, deposit, or withdrawal is
                backed by real protection.
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex gap-2 text-2xl items-center max-sm:text-xl">
              <MdLock className="text-[#008A20] text-3xl max-sm:text-2xl" />
              <span>Powerful security</span>
            </div>
            <div className="text-sm text-gray-500 mt-2 max-w-xs mx-auto md:mx-0 max-sm:text-xs">
              Our bank-grade encryption ensures that your information remains
              safe and secure at all times.
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="flex gap-2 text-2xl items-center max-sm:text-xl">
              <FaCreditCard className="text-[#008A20] text-3xl max-sm:text-2xl" />
              <span>Instant card controls</span>
            </div>
            <div className="text-sm text-gray-500 mt-2 max-w-xs mx-auto md:mx-0 max-sm:text-xs">
              Freeze or unfreeze your cards anytime with just a few taps through
              our mobile app.
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center mt-10 max-sm:gap-4">
          <img
            src="/FeatureSection_Image2.png"
            alt="Feature Image 2"
            className="h-48 sm:h-64 object-contain hidden lg:block max-sm:h-32"
          />
          <img
            src="/people-at-ban.jpg"
            alt="Feature Image 3"
            className="h-48 sm:h-64 object-contain max-sm:h-32 rounded-3xl"
          />
        </div>
      </motion.div>

      {/* New Call-to-Action (CTA) Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-20 rounded-xl p-6 text-black/70 text-center shadow-xl w-full lg:w-1/2 mx-auto space-y-6 max-sm:p-4"
      >
        <div className="text-2xl font-bold mb-4 max-sm:text-xl">
          Ready to elevate your banking experience?
        </div>
        <div className="mb-4 text-sm max-sm:text-xs">
          Join thousands of savvy business owners who trust Bank of Anthos for
          secure, seamless, and innovative banking solutions tailored to your
          needs.{" "}
        </div>

        <div className="flex items-center justify-center">
          <MainButton text="Get Started" />
        </div>
      </motion.div>

      {/* New Testimonials Carousel Section */}
      <TestimonialSlider />
    </div>
  );
}

export default FeatureSection;
