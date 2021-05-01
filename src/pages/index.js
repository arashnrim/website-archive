import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDev } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Introduction = () => (
  <main>
    {/* Hero */}
    <div className="justify-center items-center flex flex-col lg:flex-row space-y-6 md:space-y-6 lg:space-y-0 lg:space-x-16 min-h-screen min-w-screen px-7 bg-gray-50 rounded-b-3xl">
      <StaticImage
        className="w-1/2 max-w-xs shadow-2xl rounded-full"
        src="../images/arash.jpg"
        alt="Arash Nur Iman"
        placeholder="dominantColor"
      />
      <div className="flex-row text-center lg:text-left">
        <p className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-heading font-semibold">
          Hello, world!
        </p>
        <h1 className="pt-2.5 text-4xl sm:text-6xl md:text-6xl 2xl:text-7xl font-heading font-extrabold">
          I'm Arash Nur Iman.
        </h1>
        <p className="pt-5 text-xl">
          I'm a student with a passion for making a change through technology.
        </p>

        <div className="pt-5 space-x-6">
          <a
            href="https://github.com/arashnrim"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://dev.to/arashnrim" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faDev} size="2x" />
          </a>
          <a href="mailto:hello@arashnrim.me">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </div>
    </div>

    {/* About */}
    <div className="min-h-screen min-w-screen"></div>
  </main>
);

export default Introduction;
