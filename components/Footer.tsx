import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Socials from "./Socials";
import InlineLink from "./InlineLink";

const Footer = () => (
  <footer className="justify-center items-center flex flex-col space-y-5 md:space-y-10 min-h-screen-1/3 min-w-screen bg-black text-center rounded-t-3xl">
    <p className="text-xl">
      Made with <FontAwesomeIcon icon={faHeart} /> by Arash Nur Iman;{" "}
      <InlineLink link="https://github.com/arashnrim/website" redirect={true}>
        open-sourced on GitHub
      </InlineLink>
      .
    </p>
    <Socials />
  </footer>
);

export default Footer;
