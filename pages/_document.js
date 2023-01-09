import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="ywdesign.co is a one-man web development business providing personalised digital support." />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6600ff"/>
        <meta name="msapplication-TileColor" content="#00aba9"/>
        <meta name="theme-color" content="#171b4d"/>

        
      </Head>
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
