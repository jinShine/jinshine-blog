import { CONFIG } from 'config'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang={CONFIG.lang}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/apple-touch-icon.png"></link>
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS 2.0"
            href="/feed"></link>
          <meta property="og:title" content={CONFIG.blog.title} />
          <meta property="og:description" content={CONFIG.blog.description} />
          <meta property="og:image" content={CONFIG.profile.image} />
          <meta property="article:author" content={CONFIG.profile.nickname} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
