import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDev } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const Header = () => (
  <div className="fixed flex z-50 p-5 items-center w-screen h-20 bg-gray-50 shadow-sm">
    <div className="flex flex-grow items-center space-x-5">
      <span>
        <span className="font-mono font-bold text-2xl">#</span>
        <span className="font-sans font-bold text-2xl">A</span>
      </span>
      <a
        className="hidden md:inline"
        href="https://github.com/arashnrim"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a
        className="hidden md:inline"
        href="https://dev.to/arashnrim"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faDev} size="lg" />
      </a>
      <a className="hidden md:inline" href="mailto:hello@arashnrim.me">
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </a>
    </div>
    <div className="flex items-center space-x-5 font-mono">
      <Link
        to="/"
        activeClassName="no-underline"
        className="underline hover:no-underline"
      >
        intro
      </Link>
      <Link
        to="/about"
        activeClassName="no-underline"
        className="underline hover:no-underline"
      >
        about
      </Link>
      <Link
        to="/skills"
        activeClassName="no-underline"
        className="underline hover:no-underline"
      >
        skills
      </Link>
      <Link
        to="/works"
        activeClassName="no-underline"
        className="underline hover:no-underline"
      >
        works
      </Link>
    </div>
  </div>
);

export default Header;
