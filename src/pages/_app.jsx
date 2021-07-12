import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="icon" href="favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
