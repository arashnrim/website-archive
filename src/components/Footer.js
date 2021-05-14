import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDev } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const Footer = () => (
  <div className="justify-center items-center flex flex-col space-y-5 lg:space-y-10 h-screen-1/3 min-w-screen bg-gray-50 text-center rounded-t-3xl">
    <p className="text-sm sm:text-lg 2xl:text-xl">
      Made with <FontAwesomeIcon icon={faHeart} /> by Arash Nur Iman.
    </p>
    <ul className="space-x-5 font-mono">
      <li className="inline text-sm sm:text-lg 2xl:text-xl">
        <Link
          to="/"
          activeClassName="no-underline"
          className="underline hover:no-underline"
        >
          intro
        </Link>
      </li>
      <li className="inline text-sm sm:text-lg 2xl:text-xl">
        <Link
          to="/about"
          activeClassName="no-underline"
          className="underline hover:no-underline"
        >
          about
        </Link>
      </li>
      <li className="inline text-sm sm:text-lg 2xl:text-xl">
        <Link
          to="/skills"
          activeClassName="no-underline"
          className="underline hover:no-underline"
        >
          skills
        </Link>
      </li>
      <li className="inline text-sm sm:text-lg 2xl:text-xl">
        <Link
          to="/works"
          activeClassName="no-underline"
          className="underline hover:no-underline"
        >
          works
        </Link>
      </li>
    </ul>
    <div className="mt-5 space-x-6">
      <a href="https://github.com/arashnrim" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a href="https://dev.to/arashnrim" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faDev} size="lg" />
      </a>
      <a href="mailto:hello@arashnrim.me">
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </a>
    </div>
  </div>
);

export default Footer;
