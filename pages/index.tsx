import IndexPage from '@/src/components/page/Index';
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <title>首頁 | PC01</title>
      </Head>
      {/* <h1 className="p-2 text-3xl font-bold underline">Hello world!</h1> */}
      <IndexPage />
    </>
  );
};

export default index;
