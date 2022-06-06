/* istanbul ignore file */
import App, { AppContext, AppInitialProps, AppProps } from "next/app";

import { setCssCustomProperties } from "@/theme/utils";

import "../styles/globals.css";

// client side only
if (typeof window !== "undefined") {
  setCssCustomProperties();
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const data: AppInitialProps = await App.getInitialProps(appContext);

  return {
    ...data.pageProps,
  };
};
