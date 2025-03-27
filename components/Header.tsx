"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleProgramsDropdown = () => {
    setIsProgramsOpen(!isProgramsOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProgramsOpen(false);
  };

  return (
    <header className="relative flex items-center justify-between w-full px-6 md:px-12 py-3 bg-white shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-xs text-gray-500">
            LOGO
          </div>
          <h1 className="ml-3 text-2xl font-bold text-green-800 font-inter">
            BESDDLI
          </h1>
        </div>
      </div>

      <button className="md:hidden z-20" onClick={toggleMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="black"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "fixed" : "hidden"
        } md:hidden top-0 left-0 right-0 bottom-0 bg-white z-10 pt-20 px-6`}
      >
        <nav className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-black font-roboto leading-6 hover:text-green-700 py-2"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-600 font-roboto leading-6 hover:text-green-700 py-2"
            onClick={closeMenu}
          >
            About Us
          </Link>

          {/* Programs Dropdown for Mobile */}
          <div className="relative">
            <button
              onClick={toggleProgramsDropdown}
              className="flex items-center w-full text-left text-gray-600 font-roboto leading-6 hover:text-green-700 focus:outline-none py-2"
            >
              <span>Programs</span>
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${
                  isProgramsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu Mobile */}
            {isProgramsOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/programs/education"
                  className="block py-2 text-sm text-gray-700 hover:text-green-700"
                  onClick={closeMenu}
                >
                  Education
                </Link>
                <Link
                  href="/programs/healthcare"
                  className="block py-2 text-sm text-gray-700 hover:text-green-700"
                  onClick={closeMenu}
                >
                  Healthcare
                </Link>
                <Link
                  href="/programs/community"
                  className="block py-2 text-sm text-gray-700 hover:text-green-700"
                  onClick={closeMenu}
                >
                  Community Support
                </Link>
                <Link
                  href="/programs/mentorship"
                  className="block py-2 text-sm text-gray-700 hover:text-green-700"
                  onClick={closeMenu}
                >
                  Mentorship
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/events"
            className="text-gray-600 font-roboto leading-6 hover:text-green-700 py-2"
            onClick={closeMenu}
          >
            Events
          </Link>

          <div className="pt-4 flex flex-col space-y-4">
            <Button
              variant="outline"
              size="md"
              onClick={closeMenu}
              href="/login"
            >
              Login
            </Button>

            <Button
              variant="primary"
              size="md"
              onClick={closeMenu}
              as={Link}
              href="/donate"
            >
              Donate
            </Button>
          </div>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-10">
        <Link
          href="/"
          className="text-black font-roboto leading-6 hover:text-green-700"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-gray-600 font-roboto leading-6 hover:text-green-700"
        >
          About Us
        </Link>

        {/* Programs Dropdown for Desktop */}
        <div className="relative">
          <button
            onClick={toggleProgramsDropdown}
            className="flex items-center text-gray-600 font-roboto leading-6 hover:text-green-700 focus:outline-none"
          >
            <span>Programs</span>
            <svg
              className={`ml-1 w-4 h-4 transition-transform ${
                isProgramsOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu Desktop */}
          {isProgramsOpen && (
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1">
                <Link
                  href="/programs/education"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Education
                </Link>
                <Link
                  href="/programs/healthcare"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Healthcare
                </Link>
                <Link
                  href="/programs/community"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Community Support
                </Link>
                <Link
                  href="/programs/mentorship"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Mentorship
                </Link>
              </div>
            </div>
          )}
        </div>

        <Link
          href="/events"
          className="text-gray-600 font-roboto leading-6 hover:text-green-700"
        >
          Events
        </Link>
      </nav>

      {/* Search Bar */}
      <div className="hidden md:flex items-center">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search in site"
            className="p-2 w-[338px] rounded-lg border border-black/30 text-sm text-black/50 font-roboto"
          />
          <button className="absolute right-3">
            <svg
              width={17}
              height={17}
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.469 13.8503C11.1485 14.9745 9.4368 15.6529 7.56667 15.6529C3.38771 15.6529 0 12.2652 0 8.08623C0 3.90727 3.38771 0.519562 7.56667 0.519562C11.7456 0.519562 15.1333 3.90727 15.1333 8.08623C15.1333 9.94505 14.4631 11.6473 13.351 12.9646L16.983 16.5966L16.0992 17.4804L12.469 13.8503ZM13.8833 8.08623C13.8833 11.5748 11.0553 14.4029 7.56667 14.4029C4.07807 14.4029 1.25 11.5748 1.25 8.08623C1.25 4.59763 4.07807 1.76956 7.56667 1.76956C11.0553 1.76956 13.8833 4.59763 13.8833 8.08623Z"
                fill="black"
                fillOpacity="0.7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/login">
          <Button variant="outline" size="md" onClick={closeMenu}>
            Login
          </Button>
        </Link>
        <Link href="/donate">
          <Button variant="primary" size="md" onClick={closeMenu}>
            Donate
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
