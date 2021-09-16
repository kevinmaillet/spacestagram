import '../styles/main.scss';
import React from 'react';
import { SiteProvider } from '../context/siteContext';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SiteProvider>
  );
}

export default MyApp;
