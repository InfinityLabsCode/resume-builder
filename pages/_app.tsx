import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import '../styles/globals.scss';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>resume-builder</title>
        <meta name="description" content="resume-builder App" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
