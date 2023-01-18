import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.scss';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>resume-builder</title>
        <meta name="description" content="resume-builder App" />
      </Head>
      <Component {...pageProps} />

    </>
  );
}
