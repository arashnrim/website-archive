import "../styles/global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { AppProps } from "next/app";
import Head from "next/head";
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="icon" href="favicon.ico" />
    </Head>
    <Component {...pageProps} />;
  </>
);

export default MyApp;
