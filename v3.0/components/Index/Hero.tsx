import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import profilePicture from "../../public/arash.jpg";
import Socials from "../Socials";

const Hero = () => {
  return (
    <section className="bg-black rounded-b-3xl">
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen px-10 space-y-10 lg:flex-row min-w-screen md:px-12 lg:px-20 lg:space-y-0 lg:space-x-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <object className="w-1/2 max-w-sm">
          <Image
            className="rounded-full pointer-events-none"
            src={profilePicture}
            alt="Arash Nur Iman"
            layout="responsive"
            priority
            quality={60}
          />
        </object>
        <div className="flex-row text-center lg:text-left">
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-heading">
            <span role="img" aria-label="Waving hand">
              👋
            </span>{" "}
            Hello, world!
          </p>
          <h1 className="mt-2.5 text-4xl sm:text-6xl 2xl:text-7xl font-heading font-semibold">
            I&#39;m Arash Nur Iman.
          </h1>
          <p className="max-w-3xl mt-5 sm:text-xl md:text-2xl">
            I&#39;m a student developer from Singapore ardent about creating
            designed, intuitive, and practical products using technology.
          </p>
          <Socials />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
