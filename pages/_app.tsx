import Head from 'next/head';
// import localFont from 'next/font/local'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalStateProvider from '../context/globalState'

// Font files can be colocated inside of `pages`
// const myFont = localFont({ src: '../fonts/basement-grotesqueRegularRegular.woff2' });

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>Basement Supply</title>
      <link rel="icon" type="image/x-icon" href="/favicon.svg" />
    </Head>
    <div>
      <GlobalStateProvider>
        <Component {...pageProps} />
      </GlobalStateProvider>
    </div>
  </>
  )
}
