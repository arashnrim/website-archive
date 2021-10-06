import React from "react";
import { SiGithub } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

const Socials = () => (
  <nav className="flex flex-row justify-center items-center lg:justify-start lg:items-start mt-5 space-x-6">
    <a
      className="w-10 h-10"
      href="https://github.com/arashnrim"
      target="_blank"
      rel="noreferrer"
      title="Go to GitHub profile"
      aria-label="Go to GitHub profile"
    >
      <SiGithub className="transition-opacity hover:opacity-75 w-full h-full" />
    </a>

    <a
      className="w-10 h-10"
      href="mailto:hello@arashnrim.me"
      title="Contact via email"
      aria-label="Contact via email"
    >
      <FaEnvelope className="transition-opacity hover:opacity-75 w-full h-full" />
    </a>
  </nav>
);

export default Socials;
