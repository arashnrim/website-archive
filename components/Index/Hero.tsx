import React from "react";
import Image from "next/image";
import profilePicture from "../../public/arash.jpg";
import Socials from "../Socials";

const Hero = () => (
  <section className="flex flex-col lg:flex-row justify-center items-center min-h-screen min-w-screen px-10 md:px-12 lg:px-20 space-y-10 lg:space-y-0 lg:space-x-16 bg-black rounded-b-3xl">
    <object className="w-1/2 max-w-sm">
      <Image
        className="pointer-events-none rounded-full"
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
      <p className="mt-5 max-w-3xl sm:text-xl md:text-2xl">
        I&#39;m a student developer from Singapore passionate about delivering
        simple, efficient, and easy-to-use creations of technology.
      </p>
      <Socials />
    </div>
  </section>
);

export default Hero;
