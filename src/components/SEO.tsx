import Head from "next/head";

import config from "../config";

interface SEOProps {
  page: string
}

const SEO = ({ page }: SEOProps) => (
  <Head>
    <title>
      {page} — {config.title}
    </title>
    <meta name="description" content={config.description} />
  </Head>
);

export default SEO;
