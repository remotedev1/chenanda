"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const Achievers = () => {
  const headingRef = useRef(null); // Ref for the heading section
  const listRef = useRef(null); // Ref for the lists section

  // Animates when 20% of the element is visible
  const isHeadingInView = useInView(headingRef, {
    once: true,
    margin: "0px 0px -20% 0px",
  });
  const isListInView = useInView(listRef, {
    once: true,
    margin: "0px 0px -20% 0px",
  });

  return (
    <div className="relative bg-cover bg-center flex flex-col items-center">
      {/* Banner Section */}
      <div
        ref={headingRef}
        className="achievers__main mx-auto bg-white bg-opacity-50 p-8"
        style={{
          backgroundImage: "url('../images/patterns/inspiration-geometry.png')",
        }}
      >
        <div className="flex justify-around gap-6 text-white">
          {/* Heading Section */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={
              isHeadingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 1.5 }}
          >
            <h3 className="text-4xl font-bold flex items-center">
              <span>Celebrate our Achievers</span>
              <motion.span
                className="ml-2 text-4xl text-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
              >
                _
              </motion.span>
            </h3>
          </motion.div>
        </div>
      </div>

      {/* List Section */}
      <div className="w-full p-8 md:p-28 " ref={listRef}>
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-around space-x-5 cursor-pointer">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-start"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isListInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <div className="min-w-[250px] w-full h-[230px] bg-primary rounded-md"></div>
                <div className="title mt-4">
                  <h3 className="text-black text-md font-semibold inline-block">
                    Title description
                  </h3>
                  <p className="date">
                    On, <span>01 January 2022</span>
                  </p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Achievers;
