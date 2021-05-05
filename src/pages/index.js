import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDev } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

const Introduction = () => (
  <main>
    {/* Hero */}
    <div className="justify-center items-center flex flex-col lg:flex-row space-y-6 md:space-y-6 lg:space-y-0 lg:space-x-16 min-h-screen min-w-screen px-7 bg-gray-50 rounded-b-3xl">
      <StaticImage
        className="pointer-events-none w-1/2 max-w-xs shadow-2xl rounded-full"
        src="../images/arash.jpg"
        alt="Arash Nur Iman"
        placeholder="dominantColor"
      />
      <div className="flex-row text-center lg:text-left">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading">
          <span role="img" aria-label="Waving hand">
            👋
          </span>{" "}
          Hello, world!
        </p>
        <h1 className="mt-2.5 text-4xl sm:text-6xl md:text-6xl 2xl:text-7xl font-heading font-semibold">
          I'm Arash Nur Iman.
        </h1>
        <p className="mt-5 text-xl sm:text-2xl">
          I'm a student with a passion for making a change through technology.
        </p>

        <div className="mt-5 space-x-6">
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
    <div className="justify-center items-center flex flex-col min-h-screen h-auto min-w-screen text-center lg:text-left px-7 md:px-12 lg:px-24">
      <h1 className="mt-10 text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-heading">
        An <span className="text-blue-500">active contributor</span>, a{" "}
        <span className="text-blue-500">life-changer</span>, and a{" "}
        <span className="text-blue-500">friend</span> to all.
      </h1>
      <p className="mt-5 w-full text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-heading">
        Bold dreams for an individual, but a goal for me.
      </p>
      <div className="mt-10 mb-10 flex flex-col lg:flex-row lg:space-x-5">
        <p className="text-sm sm:text-lg 2xl:text-xl lg:w-2/3">
          I wish to develop myself into someone who contributes back to society,
          influences the life of many, and be there for those I’m close with.
          <br />
          <br />
          In a way, I’m already working my way towards that idealistic goal — I
          like to think that the many relationships I’ve forged over 16 years of
          my life have allowed me to learn from others as much as others have
          learned from me. I’ve been known by many to be someone friendly,
          trusted, and responsible, and I hope to continue developing myself on
          the right track.
        </p>

        <div className="mt-10 lg:mt-0 lg:mb-0 lg:justify-center lg:items-center lg:flex lg:w-1/3">
          <button className="h-12 lg:h-16 w-40 lg:w-56 lg:text-xl rounded-lg bg-black text-white font-bold shadow-xl hover:shadow-none">
            <FontAwesomeIcon icon={faUser} color="white" /> About
          </button>
        </div>
      </div>
    </div>
  </main>
);

export default Introduction;
