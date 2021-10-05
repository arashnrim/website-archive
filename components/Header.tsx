import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="fixed flex z-50 p-5 items-center w-screen lg:h-20 bg-black bg-opacity-2-5 backdrop-filter backdrop-blur-sm"
      initial={{ y: "-5rem" }}
      animate={{ y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <Link href="/" passHref={true}>
        <span className="transition bg-opacity-5 p-3 w-min cursor-pointer hover:opacity-75">
          <span className="font-mono font-bold text-2xl">#</span>
          <span className="font-sans font-bold text-2xl">A</span>
        </span>
      </Link>
    </motion.header>
  );
};

export default Header;
