"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const About = () => {
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
    <section className="relative flex  justify-center items-start p-6 sm:p-10 lg:p-20 mt-12" id="about">
      <div ref={ref} className="text-center md:text-left md:w-[60vw] lg:w[55vw]">
        <motion.h2
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={variants}
          className="text-5xl md:text-8xl font-semibold mb-4 text-yellow-500"
        >
          About
        </motion.h2>
        <motion.h1
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={variants}
          className="text-3xl md:text-5xl font-bold mb-10"
        >
          A Tale of Resilience and Achievement
        </motion.h1>
        <motion.p
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={variants}
          className="font-moonspace text-md md:text-xl"
        >
          <span className="block  mb-2 leading-relaxed ">
            In the misty hills of Kodagu (Coorg), a land renowned for its robust
            coffee, the air carrying the intoxicating scent of cardamom , the
            sharp tang of pepper and vibrant orange groves along with more
            robust people, lies a story of resilience and achievement. This is
            the tale of a clan whose roots run as deep as the verdant valleys of
            their homeland.
          </span>
          <br />
          <span className="block  mb-2 leading-relaxed">
            Among the twelve proud divisions (kombu) of Kodagu, spread across
            thirty-five diverse lands(naad), stands Kadiyathnaad. Here, Male
            Thambran, reigns from atop the dense, mist-shrouded mountain that
            pierce the heavens and watches over his children, our clan has
            flourished for some 350 years, their history intertwined with the
            very soil of the Bolli division( Bolli kombu) in Kokeri village.
          </span>
          <br />

          <span className="block  mb-2 leading-relaxed">
            The clan&apos;s saga begins with Godhari Utthaiah, the founding
            father whose legacy would grow to touch countless lives. As his
            descendants multiplied, they branched out like the strong arms of a
            banyan tree, each new generation adding to the clan&apos;s rich
            tapestry.
          </span>
          <br />

          <span className="block  mb-2 leading-relaxed">
            The main branch of the family took root in Kirundad village and
            further rooted on the soil of Mukkati in Kokeri village. But the
            clan members were not content to remain in one place. With the
            spirit of adventure that Kodagu is famous for, other branches of the
            family ventured forth, establishing new homes and livelihoods,
            acquiring lands in Kodambur, Banavara, Aluru Siddapura, Haleri, and
            Hassan.
          </span>
          <br />

          <span className="block  mb-2 leading-relaxed">
            Over the generations, our clan has not merely survived; it has
            thrived, leaving an indelible mark on the region and beyond. The
            clan&apos;s sons and daughters have distinguished themselves in
            diverse fields, from the arts to sciences, from literature to
            cultural, from sports to war field, their achievements echoing the
            indomitable spirit of their ancestors.
          </span>
          <br />

          <span className="block  mb-2 leading-relaxed">
            In the sporting arena, the clan has produced champions who have
            brought glory to their family and nation. The thunderous punches of
            Sabu Machaiah earned him the prestigious Arjuna Award, a testament
            to his boxing prowess. Following in these footsteps, Vishu
            Kuttappa&apos;s tactical genius in coaching was recognized with the
            prestigious Dronacharya Award. The clan&apos;s sporting legacy
            continued with Naveen Nanjappa, whose agility and skill in kabaddi
            secured a shining gold medal at the national level.
          </span>
          <br />

          <span className="block mb-2 leading-relaxed">
            Today, our clan stands over 450 strong, a testament to their
            resilience and vitality. From the coffee plantations of Kodagu to
            the bustling cities of India and beyond, clan members continue to
            make their mark, their successes a living tribute to their rich
            heritage.
          </span>
          <br />

          <span className="block mb-2 leading-relaxed">
            The story of this remarkable clan is more than a family chronicle;
            it&apos;s a celebration of the Kodagu spirit. It speaks of people
            who honor their past while fearlessly embracing the future, who
            remain rooted in tradition even as they reach for the stars. In the
            saga of this clan, we see reflected the very essence of Kodagu
            itself - proud, resilient, and ever-evolving.
          </span>
        </motion.p>
      </div>
      {/* <motion.div
        className="relative h-[20vh] lg:h-[60vh] w-full hidden md:block  md:w-1/3"
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={imageVariants}
      >
        <Image
          src="/about.jpg"
          alt="About Us"
          fill
          objectPosition="bottom center"
          className="object-cover"
          priority
        />
      </motion.div> */}
    </section>
  );
};

export default About;
