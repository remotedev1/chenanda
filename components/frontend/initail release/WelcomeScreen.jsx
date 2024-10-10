"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WelcomeScreen = () => {
  // const [isFirstVisit, setIsFirstVisit] = useState(true);

  // useEffect(() => {
  //   const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
  //   if (hasVisitedBefore) {
  //     setIsFirstVisit(false);
  //   } else {
  //     localStorage.setItem("hasVisitedBefore", true);
  //   }
  // }, []);

  // if (!isFirstVisit) {
  //   return null; // Or redirect to the desired page
  // }

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Background Image */}
      <div className="relative w-full h-[80vh] lg:h-[80vh]">
        <Image
          src="/images/welcome_screen/index.jpg"
          alt="chenanda"
          layout="fill"
          objectPosition="bottom center"
          priority
          className="z-0 object-cover md:object-contain "
        />
      </div>

      {/* Overlay content */}
      <div className="absolute bottom-0 left-0 p-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-yellow-500 font-bold text-7xl sm:text-8xl lg:text-[9rem] xl:text-[10rem] leading-tight">
            Hello!
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          
          <h1 className="text-white font-bold text-2xl sm:text-4xl lg:text-4xl xl:text-6xl leading-tight">
            Chenanda Family Welcomes You!
          </h1>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          // onClick={() => setIsFirstVisit(false)}
          className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-white hover:text-black hover:font-semibold transition duration-300"
        >
          Continue
        </motion.button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
