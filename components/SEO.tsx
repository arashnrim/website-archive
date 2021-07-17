import Head from "next/head";

interface SEOProps {
  page: string;
}

const SEO = ({ page }: SEOProps) => (
  <Head>
    <title>{page} — ArashNrIm</title>
    <meta
      name="description"
      content="The digital website for Arash Nur Iman."
    />
  </Head>
);

export default SEO;
