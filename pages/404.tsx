import * as React from "react";
import Link from "next/link";

import SEO from "../components/SEO";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <main className="bg-gray-800 text-white">
      <SEO emoji="💀"/>
      <Layout>
        <div className="justify-center items-center flex flex-col min-h-screen min-w-screen px-7 bg-gray-900">
          <p className="text-xl sm:text-2xl">Woah oh.</p>
          <h1 className="text-9xl font-heading font-bold">404</h1>
          <p className="lg:w-2/3 mt-5 text-xl sm:text-2xl text-center">
            Nothing was found at the requested page. For a single-page website,
            anyway, there shouldn&#39;t be anything else accessible but the root
            page!
          </p>
          <Link href="/">
            <a className="transition-all mt-5 font-bold underline hover:no-underline">
              Need help going to the root page?
            </a>
          </Link>
        </div>
      </Layout>
    </main>
  );
};

export default NotFound;
