/* istanbul ignore file */
import type { AppProps } from "next/app";

import { setCssCustomProperties } from "@/theme/utils";

import "../styles/globals.css";

// client side only
if (typeof window !== "undefined") {
  setCssCustomProperties();
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
