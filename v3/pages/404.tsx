import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import Meta from "../components/Meta";
import Layout from "../components/Layout";

const teasers = [
  "Uh oh.",
  "Whoops...",
  "Wait a minute...",
  "Huh?",
  "Oh, hey!",
  "Something's not right...",
];

const NotFound = () => {
  return (
    <>
      <Meta />
      <Layout>
        <section className="bg-black">
          <motion.div
            className="flex flex-col items-center justify-center min-h-screen px-10 text-xl text-center md:px-20 lg:px-36 min-w-screen sm:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            <p className="text-4xl">
              {teasers[Math.floor(Math.random() * teasers.length)]}
            </p>
            <span className="my-10">
              <h1 className="text-9xl">404</h1>
              <p className="font-mono">Not Found</p>
            </span>
            <p className="lg:w-2/3">
              Nothing was found at the requested page. For a single-page
              website, anyway, there shouldn&apos;t be anything else accessible
              but the root page!
            </p>
            <Link href="/" passHref={true}>
              <span className="mt-5 transition cursor-pointer dotted hover:opacity-75">
                Need help going to the root page?
              </span>
            </Link>
          </motion.div>
        </section>
      </Layout>
    </>
  );
};

export default NotFound;
