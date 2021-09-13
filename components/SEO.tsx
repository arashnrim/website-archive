import Head from "next/head";

interface SEOProps {
  page: string;
}

const SEO = ({ page }: SEOProps) => (
  <Head>
    <title>{page} — ArashNrIm</title>
    <meta name="title" content="Arash Nur Iman" />
    <meta
      name="description"
      content="I'm a student with a passion for making a change through technology."
    />
  </Head>
);

export default SEO;
