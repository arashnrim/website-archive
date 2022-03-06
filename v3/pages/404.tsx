import React, { useEffect, useState } from "react";

import Meta from "../components/Meta";
import Layout from "../components/Layout";
import InlineLink from "../components/InlineLink";

const teasers = [
  "Uh oh.",
  "Whoops...",
  "Wait a minute...",
  "Huh?",
  "Oh, hey!",
  "Something's not right...",
];

const NotFound = () => {
  const [teaser, setTeaser] = useState("");

  useEffect(() => {
    setTeaser(teasers[Math.floor(Math.random() * teasers.length)]);
  }, [setTeaser]);

  return (
    <>
      <Meta />
      <Layout>
        <section className="bg-black">
          <div className="flex flex-col items-center justify-center min-h-screen px-10 text-xl text-center md:px-20 lg:px-36 min-w-screen sm:text-2xl">
            <p className="text-4xl">{teaser}</p>
            <span className="my-10">
              <h1 className="text-9xl">404</h1>
              <p className="font-mono">Not Found</p>
            </span>
            <p className="mb-5 lg:w-2/3">
              Nothing was found at the requested page. For a single-page
              website, anyway, there shouldn&apos;t be anything else accessible
              but the root page!
            </p>
            <InlineLink link="/" redirect={false}>
              Need help going to the root page?
            </InlineLink>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default NotFound;
