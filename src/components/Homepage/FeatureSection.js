"use client";
import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { MdLock } from "react-icons/md";
import { RiShieldCheckFill } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa";

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
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <p className="text-lg italic text-gray-700 mb-4">
            "{testimonials[current].quote}"
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
          className=" relative w-[40%] max-sm:w-full flex gap-2 bg-white rounded-xl p-10 shadow-lg overflow-hidden"
        >
          {/* Background overlay pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-20"></div>
          <div className="w-64 relative z-10">
  {/* <div className="h-40"></div> */}

  <div className="text-4xl font-bold text-black/70 leading-tight">
    MODERN BANKING, <br />
    ROOTED IN 
    <p className="px-1 text-[#008A20]">TRUST</p>
  </div>

  <div className="text-sm text-gray-500 mt-6">
    At Bank of Anthos, we blend timeless banking values with next-gen tools — so you can manage, monitor, and secure your money with confidence.
  </div>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="mt-6 px-6 py-2 bg-[#008A20] text-white rounded-full shadow-md"
  >
    Learn More
  </motion.button>
</div>

          <div className="flex items-end z-10">
            <img
              src="/handshake.jpg"
              alt="Feature showcasing online banking"
              className="rounded-xl w-52 max-sm:hidden"
            />
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
          className="w-full lg:w-[55%] rounded-xl shadow-md"
        >
          <div className="flex text-lg">
            <div className="bg-white py-4 px-8 rounded-tl-xl flex justify-center">
              <div className="bg-[#008A20] px-4 h-8 flex items-center rounded-full text-white">
                BENEFITS
              </div>
            </div>
            {/* <div className="bg-[#F6F6F6] flex flex-wrap max-sm:gap-1 gap-4 w-full px-4 rounded-tr-xl">
              {["Invoice", "Integration", "Partner Perks", "Nova Boost"].map(
                (item) => (
                  <div key={item} className="py-2">
                    <div className="bg-[#E5E4E4] px-4 py-1 rounded-full text-sm">
                      {item}
                    </div>
                  </div>
                )
              )}
            </div> */}
          </div>

          <div className="bg-white w-full p-8 rounded-b-xl space-y-6">
            {features.map((feature, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <motion.h3
                    className={`text-xl font-medium ${
                      expanded === index ? "text-[#008A20]" : "text-black"
                    }`}
                  >
                    {feature.title}
                  </motion.h3>
                  <FontAwesomeIcon
                    icon={expanded === index ? faChevronUp : faChevronDown}
                    className="text-gray-500 w-4"
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
                      <p className="text-sm text-gray-500 mt-2 w-96">
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
        className="bg-white rounded-xl p-8 md:p-14 w-full mx-auto shadow-xl"
      >
        <div className="flex flex-col md:flex-row md:justify-around gap-8">
          <div className="text-center md:text-left flex items-center justify-center md:justify-start">
            <div>
              <div className="flex gap-2 text-2xl items-center">
                <RiShieldCheckFill className="text-[#008A20] text-3xl" />
                <span>NDIC insured</span>
              </div>
              <div className="text-sm text-gray-500 mt-2 max-w-xs">
              Your money is insured up to &#8358;250,000,000 through our partner bank — so every transfer, deposit, or withdrawal is backed by real protection.
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="flex gap-2 text-2xl items-center">
              <MdLock className="text-[#008A20] text-3xl" />
              <span>Powerful security</span>
            </div>
            <div className="text-sm text-gray-500 mt-2 max-w-xs mx-auto md:mx-0">
              Our bank-grade encryption ensures that your information remains
              safe and secure at all times.
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="flex gap-2 text-2xl items-center">
              <FaCreditCard className="text-[#008A20] text-3xl" />
              <span>Instant card controls</span>
            </div>
            <div className="text-sm text-gray-500 mt-2 max-w-xs mx-auto md:mx-0">
              Freeze or unfreeze your cards anytime with just a few taps
              through our mobile app.
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center mt-10">
          <img
            src="/FeatureSection_Image2.png"
            alt="Feature Image 2"
            className="h-48 sm:h-64 object-contain"
          />
          <img
            src="/people-at-ban.jpg"
            alt="Feature Image 3"
            className="h-48 sm:h-64 object-contain max-sm:hidden"
          />
        </div>
      </motion.div>

      {/* New Call-to-Action (CTA) Card */}
      <motion.div
  className="mt-16 bg-gradient-to-br from-[#008A20] to-green-800 rounded-xl p-10 max-w-3xl mx-auto shadow-2xl text-white flex flex-col items-center relative overflow-hidden"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
>
  {/* Abstract decorative elements */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
  <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />
  
  {/* Subtle pattern overlay */}
  <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNjZmQiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]" />


  <motion.h2 
    className="text-4xl font-bold mb-2 text-center"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    Ready to elevate your banking experience?
  </motion.h2>
  
  <motion.div 
    className="w-16 h-1 bg-white bg-opacity-50 rounded-full mb-6"
    initial={{ width: 0 }}
    animate={{ width: 64 }}
    transition={{ delay: 0.4, duration: 0.5 }}
  />
  
  <motion.p 
    className="mb-8 text-center text-lg leading-relaxed font-light max-w-lg"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    Join thousands of savvy business owners who trust Bank of Anthos for secure,
    seamless, and innovative banking solutions tailored to your needs.
  </motion.p>
  
  <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)" }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 bg-white text-green-700 rounded-full font-semibold shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
    >
      <span>Get Started Today</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </motion.button>
    
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold w-full sm:w-auto"
    >
      Learn More
    </motion.button>
  </div>
</motion.div>

      {/* New Testimonials Carousel Section */}
      <TestimonialSlider />
    </div>
  );
}

export default FeatureSection;
