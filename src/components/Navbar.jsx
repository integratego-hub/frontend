import React from "react";
import "@/styles/Navbar.css";
import Image from "next/image";
import logo from '@/assests/logo-trans.png'

const options = ["Courses", "About", "Contact"];

const Navbar = () => {
  return (
    <header className=" main-container"> {/* background applied here, full width */}
      <nav className="container main-header">
        {/* Logo */}
        <div className="logo_name">
          <Image src={logo} className="bg-white inine-block"  alt="Logo" width={150} height={150}  />
        </div>

        {/* Menu */}
        <div className="flex items-center gap-[30px]">
          {options.map((ite) => (
            <div key={ite} className="nav_m_item">
              {ite}
            </div>
          ))}
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
