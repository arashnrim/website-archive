import * as React from "react";

const Header = () => (
  <>
    <div
      id="header"
      className="fixed flex z-50 p-5 items-center w-screen h-max lg:h-20 bg-black bg-opacity-2-5"
    >
      <div className="flex w-1/2 md:flex-grow items-center space-x-6">
        <span className="select-none">
          <span className="font-mono font-bold text-2xl">#</span>
          <span className="font-sans font-bold text-2xl">A</span>
        </span>
      </div>
    </div>
  </>
);

export default Header;
