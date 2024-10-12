"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Gallery = () => {
  // Define responsive behavior for the carousel
  const responsive = {
    mobile: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  const variants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen with 50px down
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3, // Delay before the animation starts (in seconds)
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className="relative flex flex-col  justify-center p-6 my-3">
      <div ref={ref} className="text-center md:text-left ">
        <motion.h2
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={variants}
          className="text-5xl md:text-8xl font-semibold  text-yellow-500 text-center"
        >
          Nanga
        </motion.h2>
      </div>
      <div className="relative w-full mt-5">
        <Carousel
          responsive={responsive}
          showDots={false}
          swipeable
          minimumTouchDrag={80}
          arrows={false}
          autoPlay
          autoPlaySpeed={5000}
          shouldResetAutoplay
          // pauseOnHover
          infinite
          additionalTransfrom={0}
          itemClass=""
          centerMode={false}
        >
          <div
            key={index}
            className="relative h-[35vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] w-full pb-3"
          >
            <div className="relative w-full h-full">
              <Image
                src="https://www.chenanda.in/images/gallery/chenandaokka1.jpg" // Use the first image from the array
                alt={`Banner ${index + 1}`}
                fill
                priority={true} // Priority loading for the first images
                className="object-contain object-center"
              />
            </div>
          </div>
          <div
            key={index}
            className="relative h-[35vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] w-full pb-3"
          >
            <div className="relative w-full h-full">
              <Image
                src="https://www.chenanda.in/images/gallery/chenandaokka2.jpg" // Use the first image from the array
                alt={`Banner ${index + 1}`}
                fill
                priority={true} // Priority loading for the first images
                className="object-contain object-center"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
