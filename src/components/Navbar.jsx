import React from "react";
import "@/styles/Navbar.css";
import Image from "next/image";
import logo from "@/assests/logo-trans.png";
import Link from "next/link";


const Navbar = () => {
  return (
    <header className=" main-container">
      {" "}
      {/* background applied here, full width */}
      <nav className="container main-header">
        {/* Logo */}
        <div className="logo_name">
          <Image
            src={logo}
            className="bg-white inine-block"
            alt="Logo"
            width={150}
            height={150}
          />
        </div>

        {/* Menu */}
        <div className="flex items-center gap-[30px]">
          <Link
            href="/course-overview"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="nav_m_item">Courses</div>
          </Link>
          <div className="nav_m_item">About</div>

          <div className="nav_m_item">Contact</div>
        </div>

        {/* Buttons */}
        <div className="nav_buttons flex items-center gap-3">
          <div className="login_btn">Sign In</div>
          <div className="signup_btn">
            <div className="signup_btn_text">Get Started</div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
