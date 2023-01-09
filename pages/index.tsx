import Head from 'next/head';
import Page from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>resume-builder</title>
      </Head>
      <div>
        <Page />
      </div>
    </>
  );
}
