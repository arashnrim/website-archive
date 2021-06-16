import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDev } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <div className="justify-center items-center flex flex-col space-y-5 lg:space-y-10 min-h-screen-1/3 min-w-screen bg-gray-900 text-center rounded-t-3xl">
    <p className="text-sm sm:text-lg 2xl:text-xl">
      Made with <FontAwesomeIcon icon={faHeart} /> by Arash Nur Iman.
    </p>
    <div className="mt-5 space-x-6">
      <a
        className="transition-all hover:opacity-75"
        href="https://github.com/arashnrim"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile"
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a
        className="transition-all hover:opacity-75"
        href="https://dev.to/arashnrim"
        target="_blank"
        rel="noreferrer"
        aria-label="Dev.to profile"
      >
        <FontAwesomeIcon icon={faDev} size="lg" />
      </a>
      <a
        className="transition-all hover:opacity-75"
        href="mailto:hello@arashnrim.me"
        aria-label="Email"
      >
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </a>
    </div>
  </div>
);

export default Footer;
