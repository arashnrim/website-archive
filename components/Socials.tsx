import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Socials = () => (
  <nav className="mt-5 space-x-6">
    <a
      className="transition-all hover:opacity-75"
      href="https://github.com/arashnrim"
      target="_blank"
      rel="noreferrer"
      title="Go to GitHub profile"
      aria-label="Go to GitHub profile"
    >
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
    <a
      className="transition-all hover:opacity-75"
      href="mailto:hello@arashnrim.me"
      title="Contact via email"
      aria-label="Contact via email"
    >
      <FontAwesomeIcon icon={faEnvelope} size="2x" />
    </a>
  </nav>
);

export default Socials;
