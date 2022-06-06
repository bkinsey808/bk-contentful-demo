import { Html, Head, Main, NextScript } from "next/document";
import { FC } from "react";

const Body: FC = () => {
  return (
    <body>
      <Main />
      <NextScript />
    </body>
  );
};

const Document: FC = () => {
  return (
    <Html lang="en" className="scrollbar-gutter-stable">
      <Head />
      <Body />
    </Html>
  );
};

export default Document;
