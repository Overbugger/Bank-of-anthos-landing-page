"use client";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  return (
    <footer className="bottom-0 left-0 w-full bg-white shadow-lg mt-auto">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <img src="/favicon.png" alt="logo" className="w-8" />
            <p className="text-lg font-semibold">Bank of Anthos</p>
          </div>

          <div>
            <div className="mt-10 flex space-x-4">
              <a href="#">
                <i className="fa-brands fa-facebook fa-xl text-gray-700"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-square-instagram fa-xl text-gray-700"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-square-x-twitter fa-xl text-gray-700"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
