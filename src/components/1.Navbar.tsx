"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-8 py-4 ${
        isScrolled
          ? "bg-white text-slate-800 shadow-sm"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Simple placeholder logo */}
          <div className="w-8 h-8 bg-gradient-to-tr from-emerald-400 to-emerald-600 rounded-md flex items-center justify-center font-bold text-white text-lg shadow-sm">
            C
          </div>
          <span className="font-bold text-xl tracking-tight">CiniCloud</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <Link href="#features" className="hover:text-emerald-400 transition-colors">
            Features
          </Link>
          <Link href="#customers" className="hover:text-emerald-400 transition-colors">
            Customers
          </Link>
          <Link href="#pricing" className="hover:text-emerald-400 transition-colors">
            Pricing
          </Link>
          <Link href="#about" className="hover:text-emerald-400 transition-colors">
            About Us
          </Link>
          <Link href="#demo" className="hover:text-emerald-400 transition-colors">
            Demo Videos
          </Link>
        </div>

        <div className="hidden md:block">
          <Link
            href="/signup"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-sm"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span
            className={`block w-6 h-0.5 transition-transform duration-300 ${
              isScrolled ? "bg-slate-800" : "bg-white"
            } ${isMobileMenuOpen ? "transform rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-opacity duration-300 ${
              isScrolled ? "bg-slate-800" : "bg-white"
            } ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-transform duration-300 ${
              isScrolled ? "bg-slate-800" : "bg-white"
            } ${isMobileMenuOpen ? "transform -rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-4 right-4 mt-2 bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden text-slate-800">
          <div className="flex flex-col py-6 px-6 gap-6 font-medium">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-emerald-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-emerald-500 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#customers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-emerald-500 transition-colors"
            >
              Customers
            </Link>
            <Link
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-emerald-500 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-emerald-500 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#demo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-emerald-500 transition-colors"
            >
              Demo Videos
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-sm text-center w-max mt-2"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
