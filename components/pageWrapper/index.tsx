import React, { ReactNode } from 'react';
import Head from 'next/head';

interface Props {
  title: string;
  children: ReactNode;
}

const PageWrapper = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>Boiler - {title} </title>
      </Head>
      <div className="h-screen w-screen">{children}</div>
    </>
  );
};

export default PageWrapper;
