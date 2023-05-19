import * as React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import LineChartComponent from '../chart/lineChart/LineChartComponent';

const CardComponent = () => {
  return (
    <Layout>
      <Text category="h5">Card Component</Text>
      <LineChartComponent />
    </Layout>
  );
};

export default CardComponent;
