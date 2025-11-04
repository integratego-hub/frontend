"use client"

import React, { useState } from "react";
import "@/styles/Navbar.css";
import Image from "next/image";
import logo from "@/assests/logo-trans.png";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [newFeture,setNewFeature] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="main-container">
      <nav className="container main-header">
        {/* Logo */}
        <div className="logo_name">
          <Link href="/">
            <Image
              src={logo}
              className="bg-white inline-block"
              alt="Logo"
              width={150}
              height={150}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-[30px]">
          <Link
            href="/course-overview"
            className="nav_m_item"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Courses
          </Link>
          <Link
            href="/about-us"
            className="nav_m_item"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="/course-overview"
              className="nav_m_item block px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/about-us"
              className="nav_m_item block px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;