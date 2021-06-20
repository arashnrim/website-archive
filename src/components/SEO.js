import Head from "next/head";

import config from "../config";

const SEO = ({ page }) => (
    <Head>
        <title>{page} — {config.title}</title>
        <meta name="description" content={config.description} />
    </Head>
)

export default SEO;