import * as React from "react";
import { GetStaticProps } from "next";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

interface PortfolioProps {
  downloadLink: string;
  portfolioLink: string;
}

export const getStaticProps: GetStaticProps = () => {
  const downloadLink = process.env.DOWNLOAD_LINK;
  const portfolioLink = process.env.PORTFOLIO_LINK;

  return {
    props: {
      downloadLink,
      portfolioLink,
    },
  };
};

const Portfolio = ({ downloadLink, portfolioLink }: PortfolioProps) => (
  <main className="bg-gray-800 text-white">
    <SEO page="📄" />
    <Layout>
      {/* Hero */}
      <div className="justify-center items-center flex flex-col lg:flex-row space-y-6 md:space-y-6 lg:space-y-0 lg:space-x-16 min-h-screen h-auto min-w-screen px-7 bg-gray-900 rounded-b-3xl">
        <div className="flex-row text-center lg:text-left">
          <span
            className="text-4xl sm:text-6xl md:text-6xl 2xl:text-7xl"
            role="img"
            aria-label="Page facing up"
          >
            📄
          </span>
          <h1 className="mt-2.5 text-4xl sm:text-6xl md:text-6xl 2xl:text-7xl font-heading font-semibold">
            Portfolio
          </h1>
          <p className="mt-5 text-xl sm:text-2xl">
            Click the button below to download it as a PDF document or scroll
            below for an embedded preview.
          </p>
          <a href={downloadLink} download>
            <button className="transition-all mt-10 h-12 lg:h-16 w-40 lg:w-56 lg:text-xl rounded-lg bg-gray-800 hover:bg-white text-white hover:text-gray-800 font-medium font-mono ring-white ring-opacity-5 hover:ring-50 ring-2 hover:ring-8">
              Download
            </button>
          </a>
        </div>
      </div>

      <iframe src={portfolioLink} className="my-20 h-screen w-screen"></iframe>
    </Layout>
  </main>
);

export default Portfolio;
