"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import MainButton from "../MainButton";
import Image from "next/image";

function SolutionSection() {
  const router = useRouter();
  const handleGetStarted = () => {
    console.log("Get Started");
    router.push("/register");
  };

  const cards = [
    {
      badgeText: "INVOICING",
      title: "SMART INVOICING",
      description:
        "Send branded, professional invoices straight from your Bank of Anthos account, no extra tools needed. Fast. Secure. Reliable.",
      image: "/SolutionSection_Image1.png",
    },
    {
      badgeText: "INTEGRATIONS",
      title: "SEAMLESS INTEGRATIONS",
      description:
        "Connect your Anthos account with platforms like Stripe, Shopify, and more. Run your finances without ever switching tabs.",
      image: "/SolutionSection_Image2.png",
    },
    {
      badgeText: "BUSINESS PERKS",
      title: "EXCLUSIVE BUSINESS PERKS",
      description:
        "Gain access to exclusive savings on trusted tools like Gusto and Hubspot, designed to grow your business, not your expenses.",
      image: "/SolutionSection_Image1.png",
    },
    {
      badgeText: "SUPPORT",
      title: "24/7 HUMAN SUPPORT",
      description:
        "Get real help, anytime. Our dedicated support team is here day or night, no bots, just answers you can count on.",
      image: "/SolutionSection_Image2.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      id="solution-section"
      className="relative my-8 px-4 sm:px-8 py-16 bg-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-[#008A20] rounded-full opacity-20 filter blur-2xl"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-50px] right-[-50px] w-48 h-48 bg-[#000D03] rounded-full opacity-20 filter blur-2xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -360, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 flex flex-col sm:flex-row justify-between items-center"
      >
        <div className="text-2xl sm:text-3xl text-center sm:text-left font-bold">
          <div>OUR SOLUTION MAKES IT EASIER</div>
          <div>FOR YOU IN ALL TRANSACTIONS</div>
        </div>
        <div className="flex gap-4 items-center mt-4 sm:mt-0">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="swiper-button-prev-custom text-black bg-gray-200 rounded-full px-4 py-1 cursor-pointer text-2xl"
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            className="swiper-button-next-custom bg-[#008A20] text-white rounded-full px-4 py-1 cursor-pointer text-2xl"
          />
        </div>
      </motion.div>

      {/* Swiper Carousel */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`p-8 h-80 rounded-xl transition-all duration-300 flex flex-col justify-between ${
                index === activeIndex
                  ? "bg-[#008A20] text-white shadow-xl"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <div>
                <div
                  className={`border rounded-full text-center px-3 py-2 w-40 mx-auto ${
                    index === activeIndex
                      ? "border-white text-white"
                      : "border-gray-500 text-gray-700"
                  }`}
                >
                  {card.badgeText}
                </div>
                <div className="text-2xl my-4 text-center font-semibold">
                  {card.title}
                </div>
                <div
                  className={`text-xs text-center ${
                    index === activeIndex ? "text-gray-200" : "text-gray-500"
                  }`}
                >
                  {card.description}
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="mt-4 rounded-xl max-h-28 object-contain"
                />
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CTA Banner Section */}
      <div className="relative overflow-hidden rounded-xl my-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/tech-bank.png"
            alt="Banking technology background"
            fill
            className="object-cover brightness-95"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col sm:flex-row justify-between items-center p-8 sm:p-12 gap-8"
        >
          <div className="flex flex-col gap-5 sm:max-w-md">
            <div className="text-3xl sm:text-4xl text-center text-white sm:text-left font-bold">
              ALL IN ONE MONEY{" "}
              <span className="text-[#00A025]">MANAGEMENT</span>
            </div>

            <div className="text-white mb-2 text-center sm:text-left">
              Running a business is complicated enough. Your banking solution
              should be simple and help you focus on what matters.
            </div>
            <div className="text-white">
              <MainButton text="Get Started" />
            </div>
          </div>

          <div className="bg-white bg-opacity-90 p-6 rounded-lg max-w-md text-gray-700 text-center sm:text-left shadow-lg">
            <h3 className="font-semibold text-xl mb-3 text-[#008A20]">
              Simplified Banking
            </h3>
            Spend less time managing your finances and more time running your
            business with Bank of Anthos. Our comprehensive tools help you track
            expenses, manage cash flow, and plan for growth.
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SolutionSection;
