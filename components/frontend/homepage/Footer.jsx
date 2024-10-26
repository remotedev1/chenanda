"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState("");

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubscribeChange = (e) => {
    setSubscribeEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log(subscribeEmail);
    setSubscribeEmail("");
  };

  const handleSubmitContact = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulating a submission process for demo
    setTimeout(() => {
      setLoading(false);
      setContactForm({ name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  return (
    <div className="relative bg-primary text-white overflow-hidden">
      {/* Animated Wave on Top of Footer */}
      <motion.div
        className="absolute top-0 left-0 w-full h-16 sm:h-24 md:h-24"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,234.7C384,245,480,235,576,208C672,181,768,139,864,117.3C960,96,1056,96,1152,122.7C1248,149,1344,203,1392,229.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </motion.div>

      <div className="flex flex-col lg:flex-row justify-between items-center space-y-5 max-w-5xl px-4 mx-auto pt-20 pb-6">
        <div className="text-center" id="address">
          <h3 className="text-xl font-semibold mb-4">Chenanda Okka Ainmane</h3>
          <p className="text-sm">Kokeri Village, Cheyandane Post, 571212</p>
          <p className="text-sm">Kodagu, Karnataka, India</p>
        </div>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <Link
            target="_blank"
            href="https://in.linkedin.com"
            className="text-white/50 transition-colors duration-300 hover:text-white"
          >
            <FaLinkedin />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/"
            className="text-white/50 transition-colors duration-300 hover:text-white"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.youtube.com"
            target="_blank"
            className="text-white/50 transition-colors duration-300 hover:text-white"
          >
            <FaYoutube />
          </Link>
        </div>
        <p className="text-sm text-white/50 text-center select-none">
          © Copyright 2024 chenanda. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
