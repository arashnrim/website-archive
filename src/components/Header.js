import * as React from "react";
import { withPrefix, Link } from "gatsby";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

const Header = () => (
  <>
  <Helmet>
    <script type="text/javascript" src={withPrefix("menu.js")} />
  </Helmet>
    <div
      id="header"
      className="fixed flex z-50 p-5 items-center w-screen h-max lg:h-20 bg-black bg-opacity-2-5"
    >
    <div className="flex w-1/2 md:flex-grow items-center space-x-6">
      <span>
        <span className="font-mono font-bold text-2xl">#</span>
        <span className="font-sans font-bold text-2xl">A</span>
      </span>
    </div>
    <div className="transition-all flex flex-1 flex-col md:flex-row items-end md:items-start md:justify-end gap-6 md:gap-0 md:gap-x-6 font-mono" id="menu-links">
      <button className="w-min md:hidden justify-self-end" id="menu-button"><FontAwesomeIcon icon={faBars} size="lg" /></button>
      <Link to="/" className="hidden md:inline font-regular" activeClassName="font-medium" id="header-intro">intro</Link>
      <Link to="/about" className="hidden md:inline font-regular" activeClassName="font-medium" id="header-about">about</Link>
      <Link to="/skills" className="hidden md:inline font-regular" activeClassName="font-medium" id="header-skills">skills</Link>
      <Link to="/works" className="hidden md:inline font-regular" activeClassName="font-medium" id="header-works">works</Link>
    </div>
  </div>
  </>
);

export default Header;
