import Document, { Head, Main, NextScript, Html } from 'next/document'

class Doc extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Megrim"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-white text-black dark:bg-bg dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc
