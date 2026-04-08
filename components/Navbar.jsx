"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  const handleScroll = () => setScrolled(window.scrollY >= 80);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setActiveItem(window.location.pathname);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (path) => {
    setActiveItem(path);
    setMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/privacyPolicy", label: "Privacy Policy" },
    { href: "/termsCondition", label: "Terms & Conditions" },
  ];

  return (
    <>
      {/* Fixed navbar bar — logo stays pinned */}
      <header
        className={`z-50 h-20 flex items-center justify-between px-6 lg:px-16 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E8E8E4] shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo — always visible, always fixed */}
        <Link href="/" onClick={() => handleItemClick("/")}>
          <Image
            src="/images/Arqiv_Logo_Black 2.svg"
            alt="Arqiv"
            width={120}
            height={40}
            className="w-[110px] h-auto"
          />
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => handleItemClick(href)}
              className={`font-sans text-sm transition-colors duration-200 ${
                activeItem === href
                  ? "text-black font-medium"
                  : "text-[#888] hover:text-black"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F5F0] border border-[#E8E8E4] transition-colors hover:bg-[#EEEDE8]"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FaTimes size={15} className="text-black" />
          ) : (
            <FaBars size={15} className="text-black" />
          )}
        </button>
      </header>

      {/* Mobile drawer — slides down below the fixed bar */}
      <div
        className={`fixed top-20 left-0 right-0 z-40 bg-white border-b border-[#E8E8E4] shadow-lg transition-all duration-300 overflow-hidden lg:hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => handleItemClick(href)}
              className={`py-3 px-4 rounded-xl text-sm font-sans transition-all duration-200 ${
                activeItem === href
                  ? "bg-[#FFF8E7] text-[#D4A017] font-medium"
                  : "text-[#555] hover:bg-[#F8F8F5] hover:text-black"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/10 backdrop-blur-[2px] lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;