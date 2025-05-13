"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar relative font-[family-name:var(--font-poppins)]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <div className="flex justify-between items-center gap-7">
            <h3 className="font-semibold text-2xl">
              <Link href={"/"}>Rezaysya</Link>
            </h3>
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex gap-10 font-semibold text-sm">
            <li>
              <Link href={"#about"} className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href={"#contact"} className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href={"#product"}
                target="_blank"
                className="hover:underline"
              >
                Product
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden block" onClick={handleClick}>
            <i className="ri-menu-3-line ri-2x font-bold"></i>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={handleClick}>
            <i className="ri-close-line ri-2x"></i>
          </button>
        </div>
        <ul className="flex flex-col gap-6 font-semibold text-sm p-6">
          <li onClick={handleClick}>
            <Link href={"#about"}>
              <i className="ri-bar-chart-box-ai-line mr-3"></i>
              About
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link href={"#contact"}>
              <i className="ri-contacts-line mr-3"></i>
              Contact
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link href={"#product"} target="_blank">
              <i className="ri-list-check-3 mr-3"></i>
              Product
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay Background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={handleClick}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
