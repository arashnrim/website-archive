import React from "react";
import Image from "next/image";
import profilePicture from "../../public/arash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Hero = () => (
  <section
    className={
      "flex flex-col lg:flex-row justify-center items-center min-h-screen min-w-screen px-10 md:px-12 lg:px-20 space-y-10 lg:space-y-0 lg:space-x-16 bg-black rounded-b-3xl"
    }
  >
    <div className={"w-1/2 max-w-sm"}>
      <Image
        className={"pointer-events-none rounded-full"}
        src={profilePicture}
        alt={"Arash Nur Iman"}
        layout={"responsive"}
        priority={true}
        quality={60}
      />
    </div>
    <div className={"flex-row text-center lg:text-left"}>
      <p className={"text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-heading"}>
        <span role={"img"} aria-label={"Waving hand"}>
          👋
        </span>{" "}
        Hello, world!
      </p>
      <h1
        className={
          "mt-2.5 text-4xl sm:text-6xl 2xl:text-7xl font-heading font-semibold"
        }
      >
        I&#39;m Arash Nur Iman.
      </h1>
      <p className={"mt-5 max-w-3xl sm:text-xl md:text-2xl"}>
        I&#39;m a student developer from Singapore passionate about delivering
        simple, efficient, and easy-to-use creations of technology.
      </p>

      <div className={"mt-5 space-x-6"}>
        <a
          className={"transition-all hover:opacity-75"}
          href={"https://github.com/arashnrim"}
          target={"_blank"}
          rel={"noreferrer"}
          aria-label={"GitHub profile"}
        >
          <FontAwesomeIcon icon={faGithub} size={"2x"} />
        </a>
        <a
          className={"transition-all hover:opacity-75"}
          href={"mailto:hello@arashnrim.me"}
          aria-label={"Email"}
        >
          <FontAwesomeIcon icon={faEnvelope} size={"2x"} />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
