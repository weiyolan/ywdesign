import { Html, Head, Main, NextScript } from 'next/document'
// import { useRouter } from 'next/router'

export default function Document() {
  // const {locale} = useRouter()
  
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json"/>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6600ff"/>
        <meta name="msapplication-TileColor" content="#00aba9"/>
        <meta name="theme-color" content="#165174"/>

        
      </Head>
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
