"use client";
import { useEffect, useState } from "react";
import { Updock } from "next/font/google";
import Link from "next/link";

const updock = Updock({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY && scrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollY(scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-black/50 transition-transform duration-300 `}
    >
      <nav>
        <h1
          className={
            updock.className +
            " text-4xl md:text-5xl font-bold text-white text-center pt-3"
          }
        >
          Chennada Okka
        </h1>
        <ul
          className={`list-none flex justify-center items-center gap-4 w-full h-10 z-50 text-white text-sm md:text-lg translate-y-0 transition-all duration-300 ${
            visible ? "translate-y-0" : "translate-y-10 w-0 opacity-0 h-2 "
          }`}
        >
          <li>
            <Link href="/" className="hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-yellow-500">
              About
            </Link>
          </li>
          <li>
            <Link href="#address" className="hover:text-yellow-500">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
