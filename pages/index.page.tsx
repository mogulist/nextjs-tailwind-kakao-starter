import type { NextPage } from 'next';
import Head from 'next/head';
import KakaoMap from 'components/KakaoMap';

const Home: NextPage = () => {
  return (
    <div className="flex ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="absolute w-screen h-screen left-0 top-0">
        <KakaoMap />
      </main>
    </div>
  );
};

export default Home;
