import * as React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => (
  <div className="fixed flex z-50 p-5 items-center w-screen h-20 bg-gray-50 shadow-sm">
    <div className="flex flex-grow items-center space-x-5">
      <span>
        <span className="font-mono font-bold text-2xl">#</span>
        <span className="font-sans font-bold text-2xl">A</span>
      </span>
    </div>
    <div className="flex flex-1 flex-col md:flex-row items-end gap-6 md:gap-0 md:gap-x-6 font-mono">
      <button className="md:hidden self-end" id="menu-button"><FontAwesomeIcon icon={faBars} size="lg" /></button>
      <Link to="/" className="hidden md:inline font-regular" activeClassName="font-medium" id="header-intro">intro</Link>
      <Link to="/about" className="hidden md:inline font-regular" activeClassName="font-medium" id="header-about">about</Link>
      <Link to="/skills" className="hidden md:inline font-regular" activeClassName="font-medium" id="header-skills">skills</Link>
      <Link to="/works" className="hidden md:inline font-regular" activeClassName="font-medium" id="header-works">works</Link>
    </div>
  </div>
);

export default Header;
