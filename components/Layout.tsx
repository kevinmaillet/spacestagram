import React from 'react';
import Head from 'next/head';

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Head>
        <title>Spacestagram</title>
        <meta name="author" content="kevinrmaillet" />
        <meta
          name="description"
          content="Spacestagram shows you NASA's photos of the day for you to like."
        />
        <meta
          name="keywords"
          content="Spacestagram, Space, NASA, Shopify, The Matrix, Aliens, Landrover, HAL 9000, Photo of the Day, Billionaire Space Race"
        />
      </Head>
      <div className="wrapper">{children}</div>
    </>
  );
};

export default Layout;
