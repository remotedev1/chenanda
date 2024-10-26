"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id, index, totalImages }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // Calculate the translateY value to center the image when the previous image is halfway out
  const thresholdStart = (index - 1) / totalImages; // Start moving when the previous image is 50% out
  const thresholdEnd = index / totalImages; // End moving when the current image is fully visible

  // Smooth spring effect for centering
  const translateY = useSpring(
    useTransform(scrollYProgress, [thresholdStart, thresholdEnd], [200, 0]),
    {
      stiffness: 200,
      damping: 20,
    }
  );

  return (
    <section className="achievement bg-primary/35">
      <div ref={ref} className="translate-x-[-30%] md:translate-x-0">
        <motion.img
          src={`/${id}.jpg`}
          alt={`chenanda ${id}`}
          style={{ y: translateY }} // Apply Y translation
          className="transition-transform duration-500" // Add transition for smoothness
        />
      </div>
      <motion.h2 style={{ y: translateY }} className="text-center text-white">{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function Achievement() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const totalImages = 5; // Total number of images

  return (
    <>
      {[1, 2, 3, 4, 5].map((image, index) => (
        <Image key={image} id={image} index={index + 1} totalImages={totalImages} />
      ))}
      <motion.div className="progress" style={{ scaleX }} /> {/* Progress bar */}
    </>
  );
}
