import * as React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import CardComponent from '../components/card/CardComponent';

const Home = () => {
  return (
    <Layout>
      <Text category="h1">Home Page</Text>
      <CardComponent />
    </Layout>
  );
};

export default Home;
