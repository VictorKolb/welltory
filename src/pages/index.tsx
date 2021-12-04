import type { GetServerSideProps } from 'next';
import React from 'react';

import Layout from 'components/Layout';
import MainPage from 'components/PageComponents/MainPage';
import BlurBg from 'components/basic/BlurBg';

export default function Home() {
  return (
    <Layout>
      <BlurBg />
      <MainPage />
    </Layout>
  );
}
