"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Set the initial screen width
    setScreenWidth(window.innerWidth);

    // Update the width whenever the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 1, // Duration of the animation
      ease: "easeInOut", // Easing function
    },
  };

  // Determine the image source based on screen size
  const imageSrc =
    screenWidth >= 768
      ? "/images/gallery/ainManey.jpg"
      : "/images/gallery/ainManeyMobile.jpg";

  return (
    <div className="relative w-full h-[90vh] md:h-dvh ">
      {/* Background Image Gradient Overlay */}
      <div className="absolute inset-0  bg-primary/30 z-10" />

      {/* Animated Image */}
      <motion.div
        initial="initial"
        animate="animate"
        transition="transition"
        variants={imageVariants}
        className="absolute inset-0 "
      >
        <Image
          src={imageSrc}
          alt="chenanda"
          layout="fill"
          objectPosition="bottom center"
          priority
          className="object-contain md:object-cover"
        />
      </motion.div>

      {/* Content Overlay */}
      <div className="absolute flex flex-col items-center justify-center left-1/2 bottom-1 -translate-x-1/2 -translate-y-1/2 z-10">
        <h2 className="font-bold text-2xl md:text-5xl leading-tight text-center text-white">
          About us
        </h2>
        <motion.a href="#about" key="About">
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="Scroll Down"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
