"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { motion } from "framer-motion";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md bg-gray-100"
      >
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          className="fixed top-0 left-0 w-full h-screen bg-white shadow-md z-50 flex flex-col items-center py-6 space-y-8"
        >
          {/* Top Section: Logo & Donate */}
          <div className="flex justify-between items-center w-full px-6">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-xs text-gray-500">
                LOGO
              </div>
              <h1 className="ml-3 text-2xl font-bold text-green-800 font-inter">
                BESDDLI
              </h1>
            </div>

            {/* Donate Button */}
            <Button className="bg-green-700 text-white px-4 py-2 rounded-lg">
              Donate
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-6 text-lg font-medium">
            <Link
              href="/"
              className="text-black hover:text-green-700"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-green-700"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/programs"
              className="text-gray-600 hover:text-green-700"
              onClick={toggleMenu}
            >
              Programs
            </Link>
            <Link
              href="/events"
              className="text-gray-600 hover:text-green-700"
              onClick={toggleMenu}
            >
              Events
            </Link>
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default MobileMenu;
