import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/images/slrmn.png" />
        <meta
          name="description"
          content="This is a collection of my previous work and projects."
        />
        <meta property="og:image" content="/images/slrmn.png" />
        <meta
          property="og:description"
          content="This is a collection of my previous work and projects."
        />
        <meta property="og:title" content="Cordelia's Portfolio" />
        <title>Cordelia's Portfolio</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
