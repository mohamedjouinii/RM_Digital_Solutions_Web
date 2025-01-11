"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ModeSwitcher from "../common/ModeSwitcher";
import { openMenu } from "@/utlis/toggleMenu";
import addScrollspy from "@/utlis/addScrollSpy";

const navLinks = [
  { href: "/", text: "Home", className: "current" },
 
  { href: "#service", text: "Service" },
  { href: "#projects", text: "Projects" },
  { href: "#team", text: "Meet The Team" },
//  { href: "#contact", text: "Contact With Us" },
];

export default function Header5({ btnClass = "btn-default btn-small round" }) {
  useEffect(() => {
    // Scrollspy functionality on scroll
    const handleScroll = () => {
      addScrollspy("", ".scrollSpyLinks", "current");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Smooth scroll for anchor links
    const links = document.querySelectorAll('.scrollSpyLinks a[href^="#"]');

    // Define a named function so we can remove it later
    function smoothScrollHandler(e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute("href"));
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    // Attach event listener
    links.forEach((anchor) => {
      anchor.addEventListener("click", smoothScrollHandler);
    });

    // Cleanup: remove the same function reference
    return () => {
      links.forEach((anchor) => {
        anchor.removeEventListener("click", smoothScrollHandler);
      });
    };
  }, []);

  return (
    <header className="rainbow-header header-default header-transparent header-center-align header-sticky">
      <div className="container position-relative">
        <div className="row align-items-center">
          {/* Logo Section */}
          <div className="col-lg-2 col-md-6 col-6">
            <div className="header-left d-flex">
              <div className="logo">
                <Link href={`/`}>
                  <Image
                    className="logo-light"
                    alt="Corporate Logo"
                    src="/assets/images/imagelogo.png"
                    width={488}
                    height={200}
                  />
                  <Image
                    className="logo-dark"
                    alt="Corporate Logo"
                    src="/assets/images/logo/logo-dark.png"
                    width={488}
                    height={200}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="col-lg-8 position-static d-none d-lg-block">
            <nav className="mainmenu-nav onepagenav">
              <ul className="mainmenu justify-content-center scrollSpyLinks">
                {navLinks.map((link, index) => (
                  <li key={index} className={link.className || ""}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Buttons and Mobile Menu */}
          <div className="col-lg-2 col-md-6 col-6">
            <div className="header-right scrollSpyLinks">
              <div className="header-btn d-none d-xl-block ">
                <a
                  className={btnClass}
                 
                  href="#contact"
               
                >
                  Contact  Us
                </a>
              </div>
              <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                <div className="hamberger">
                  <button onClick={openMenu} className="hamberger-button">
                    <i className="feather-menu" />
                  </button>
                </div>
              </div>
             { /*<ModeSwitcher />*/}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
