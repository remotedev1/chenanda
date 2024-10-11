"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1574776491123-1cd258f63f47?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-cover bg-center md:bg-fixed bg-no-repeat h-[50vh] md:h-dvh">
      <div className="absolute inset-0 bg-black/40  from-white/95 to-white/25 ltr:bg-gradient-to-r rtl:bg-gradient-to-l"></div>

      {/* Overlay content */}
      <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 text-center  z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-4xl xl:text-8xl leading-tight">
           <span className="text-yellow-500">Chenanda</span>  Family Welcomes You!
          </h1>
        </motion.div>

        <Link href="#contact-form" passHref>
          <motion.button
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-white hover:text-black hover:font-semibold transition duration-300"
          >
            Contact us
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
