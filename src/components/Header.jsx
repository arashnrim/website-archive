import * as React from "react";
import Link from "next/link";

const Header = () => (
  <>
    <div
      id="header"
      className="fixed flex z-50 p-5 items-center w-screen h-max lg:h-20 bg-black bg-opacity-2-5 backdrop-filter backdrop-blur-sm"
    >
      <Link href="/">
        <a className="bg-opacity-5 p-3 w-min">
          <span className="font-mono font-bold text-2xl">#</span>
          <span className="font-sans font-bold text-2xl">A</span>
        </a>
      </Link>
    </div>
  </>
);

export default Header;
