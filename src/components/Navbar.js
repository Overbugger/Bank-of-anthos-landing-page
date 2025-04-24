"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import MainButton from "./MainButton";

function Navbar() {
  const router = useRouter();
  

  return (
    <div className={`top-0 left-0 w-full bg-white/70 z-50 p-4 lg:px-16 block`}>
      <motion.div
        className="absolute top-[-80px] left-[-80px] w-40 h-40 bg-[#008A20] rounded-full opacity-30 filter blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-80px] right-[-80px] w-56 h-56 bg-[#008A20] rounded-full opacity-30 filter blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <img src="/favicon.png" alt="logo" className="w-8" />
          <p className="text-lg font-semibold">Bank of Anthos</p>
        </div>

        <div className="hidden lg:flex gap-8 items-center">
          <MainButton text="Get Started" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
