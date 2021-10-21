import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="fixed flex z-50 p-5 items-center w-screen lg:h-20 bg-black bg-opacity-[0.025] backdrop-filter backdrop-blur-sm"
      initial={{ y: "-5rem" }}
      animate={{ y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <Link href="/" passHref={true}>
        <span className="p-3 w-min bg-opacity-5 transition cursor-pointer hover:opacity-75">
          <span className="font-mono text-2xl font-bold">#</span>
          <span className="font-sans text-2xl font-bold">A</span>
        </span>
      </Link>
    </motion.header>
  );
};

export default Header;
