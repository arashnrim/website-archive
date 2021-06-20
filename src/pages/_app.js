import "../styles/global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Head from "next/head";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="icon" href="favicon.ico" />
    </Head>
    <Component {...pageProps} />;
  </>
);

export default MyApp;
