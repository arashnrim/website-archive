import React from "react";
import Link from "next/link";

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
        <section className="justify-center items-center flex flex-col min-h-screen min-w-screen px-7 text-center text-xl sm:text-2xl bg-black">
          <p>{teasers[Math.floor(Math.random() * teasers.length)]}</p>
          <span className="my-10">
            <h1 className="text-9xl font-heading font-bold">404</h1>
            <p className="font-mono">Not Found</p>
          </span>
          <p className="lg:w-2/3">
            Nothing was found at the requested page. For a single-page website,
            anyway, there shouldn&#39;t be anything else accessible but the root
            page!
          </p>
          <Link href="/" passHref={true}>
            <span className="mt-5 transition dotted hover:opacity-75 cursor-pointer">
              Need help going to the root page?
            </span>
          </Link>
        </section>
      </Layout>
    </>
  );
};

export default NotFound;
