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
            className="flex flex-col justify-center items-center px-7 min-h-screen text-xl text-center min-w-screen sm:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            <p>{teasers[Math.floor(Math.random() * teasers.length)]}</p>
            <span className="my-10">
              <h1 className="text-9xl font-bold font-heading">404</h1>
              <p className="font-mono">Not Found</p>
            </span>
            <p className="lg:w-2/3">
              Nothing was found at the requested page. For a single-page
              website, anyway, there shouldn&#39;t be anything else accessible
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
