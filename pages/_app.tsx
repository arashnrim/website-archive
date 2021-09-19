import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";

import "../styles/globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
  </>
);

export default MyApp;
