import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navigation from '../nagivation';

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
      <div className="flex h-screen w-screen">
        <div className="w-20 flex-shrink-0">
          <Navigation />
        </div>
        <div className="flex-grow">{children}</div>
      </div>
    </>
  );
};

export default PageWrapper;
