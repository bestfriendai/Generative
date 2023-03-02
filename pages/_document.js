import { Html, Head, Main, NextScript } from "next/document";

import pkg from "../package.json";
import Footer from "components/footer";

export default function Document() {
  return (
    <Html>
      <Head></Head>

<body className="bg-black">
  <Main />
  <Footer />
  <NextScript />


      </body>
    </Html>
  );
}
