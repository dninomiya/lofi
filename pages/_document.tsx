import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-dot">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
