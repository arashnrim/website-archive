import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Socials from "./Socials";

const Footer = () => (
  <footer className="justify-center items-center flex flex-col space-y-5 lg:space-y-10 min-h-screen-1/3 min-w-screen bg-gray-900 text-center rounded-t-3xl">
    <p className="text-sm sm:text-lg 2xl:text-xl">
      Made with <FontAwesomeIcon icon={faHeart} /> by Arash Nur Iman.
    </p>
    <Socials />
  </footer>
);

export default Footer;
