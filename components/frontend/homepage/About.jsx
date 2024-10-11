import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="relative flex flex-col md:flex-row justify-around items-start  p-14">
      <div className="text-center md:text-left w-full md:w-1/2">
        <h2 className="text-7xl font-semibold mb-4 text-yellow-500">About</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          laborum temporibus repellendus impedit labore id error natus iusto,
          ipsa sequi velit architecto laudantium maxime itaque? Consequuntur
          animi quaerat iusto exercitationem? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Recusandae laborum temporibus
          repellendus impedit labore id error natus iusto, ipsa sequi velit
          architecto laudantium maxime itaque? Consequuntur animi quaerat iusto
          exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Recusandae laborum temporibus repellendus impedit labore id
          error natus iusto, ipsa sequi velit architecto laudantium maxime
          itaque? Consequuntur animi quaerat iusto exercitationem?
        </p>
      </div>
      <div className="relative h-[60vh] w-full md:w-1/4">
        <Image
          src="/about.jpg"
          alt="About Us"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default About;
