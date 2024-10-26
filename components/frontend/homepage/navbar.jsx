"use client";

import { useEffect, useState } from "react";
import { Updock } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation"; // Import usePathname for route tracking

const updock = Updock({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const pathname = usePathname(); // Get the current path
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Hide navbar if scrolled beyond 200px, show if below 200px
    if (scrollY > 200) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setLastScrollY(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Attach scroll listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up on unmount
    };
  }, []);

  const isActive = (href) => pathname === href; // Active link logic

  return (
    <header
      className={`fixed inset-x-0 top-0 transition-transform duration-300 z-50 shadow-lg ${
        !visible ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <nav className="flex justify-between items-center h-16 w-full container">
        {/* Animated h1 using Framer Motion */}
        <motion.h1
          initial={{ y: "150%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={
            updock.className +
            " text-4xl md:text-3xl font-bold text-nowrap pt-3"
          }
        >
          Chenanda Okka
        </motion.h1>

        {/* Animated ul items */}
        <motion.ul
          initial={{ x: "150%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{  duration: 0.7, ease: "easeOut" }}
          className={`list-none flex items-end gap-6 text-sm md:text-lg transition-all duration-300`}
        >
          {["/", "#about", "#address"].map((href, index) => (
            <li key={index}>
              <Link
                href={href}
                className={`px-3 py-1 rounded-md transition-colors duration-300 ${
                  isActive(href)
                    ? "bg-primary text-white"
                    : "hover:bg-primary hover:text-white"
                }`}
              >
                {href === "/"
                  ? "Home"
                  : href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
              </Link>
            </li>
          ))}
        </motion.ul>
      </nav>
    </header>
  );
};

export default Navbar;
