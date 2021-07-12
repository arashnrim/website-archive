import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="icon" href="favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
