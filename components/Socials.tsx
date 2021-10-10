import React from "react";
import { SiGithub, SiLinkedin, SiPolywork } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

const Socials = () => (
  <nav className="flex flex-row justify-center items-center lg:justify-start lg:items-start mt-5 space-x-6">
    <a
      href="https://github.com/arashnrim"
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10"
      title="Go to GitHub profile"
      aria-label="Go to GitHub profile"
    >
      <SiGithub className="transition-opacity hover:opacity-75 w-full h-full" />
    </a>
    <a
      href="https://timeline.arash.codes"
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10"
      title="Go to Polywork profile"
      aria-label="Go to Polywork profile"
    >
      <SiPolywork className="transition-opacity hover:opacity-75 w-full h-full" />
    </a>
    <a
      href="https://www.linkedin.com/in/arashnrim/"
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10"
      title="Go to LinkedIn profile"
      aria-label="Go to LinkedIn profile"
    >
      <SiLinkedin className="transition-opacity hover:opacity-75 w-full h-full" />
    </a>

    <a
      href="mailto:hello@arashnrim.me"
      className="w-10 h-10"
      title="Contact via email"
      aria-label="Contact via email"
    >
      <FaEnvelope className="transition-opacity hover:opacity-75 w-full h-full" />
    </a>
  </nav>
);

export default Socials;
