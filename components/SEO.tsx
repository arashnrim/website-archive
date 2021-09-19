import Head from "next/head";

interface SEOProps {
    emoji: string;
}

const SEO = ({emoji}: SEOProps) => (
    <Head>
        <title>{emoji} — ArashNrIm</title>
        <meta name="title" content="Arash Nur Iman"/>
        <meta
            name="description"
            content="I'm a student with a passion for making a change through technology."
        />
        <link rel="icon" href={"../public/favicon.ico"}/>
    </Head>
);

export default SEO;
