import Head from 'next/head';

const Template = ({children}) => {
  return (
    <>
      <Head>
        <title>Heritsilavo</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        {children}
      </div>
    </>
  );
};

export default Template;
