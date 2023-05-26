import * as React from 'react';
import { Text } from '@ui-kitten/components';
import { Dimensions, View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const customLabel = val => {
  return (
    <View style={styles.customLabelContainer}>
      <Text style={styles.customLabelText} category="label">
        {val}
      </Text>
    </View>
  );
};

const LineChartComponent = ({ chart, records }) => {
  const ppmData = records.map(record => {
    const date = new Date(record.createdAt);
    return {
      value: record.ppm,
      dataPointText: record.ppm,
      labelComponent: () =>
        customLabel(`
          ${date.getHours()}:${date.getMinutes()} \n  ${date.getDate()}/${date.getMonth()}/${date
          .getFullYear()
          .toString()
          .substring(2)}`),
    };
  });

  const tempData = records.map(record => {
    const date = new Date(record.createdAt);
    return {
      value: record.temperature,
      dataPointText: record.temperature,
      labelComponent: () =>
        customLabel(`
          ${date.getHours()}:${date.getMinutes()} \n  ${date.getDate()}/${date.getMonth()}/${date
          .getFullYear()
          .toString()
          .substring(2)}`),
    };
  });

  const lineData = [
    {
      dataPointText: 1278,
      value: 1278,
      labelComponent: () => customLabel('10:00 \n 20/05/23'),
    },
    {
      dataPointText: 876,
      value: 876,
      labelComponent: () => customLabel('10:00 \n 20/05/23'),
    },
    { dataPointText: 900, value: 900 },
    { dataPointText: 1435, value: 1435 },
    { dataPointText: 1278, value: 1278 },
    { dataPointText: 543, value: 543 },
  ];

  const lineDataSuhu = [
    {
      dataPointText: 27,
      value: 27,
      labelComponent: () => customLabel('10:00 \n 20/05/23'),
    },
    {
      dataPointText: 25,
      value: 25,
      labelComponent: () => customLabel('10:00 \n 20/05/23'),
    },
    { dataPointText: 26, value: 26 },
    { dataPointText: 24, value: 24 },
    { dataPointText: 27, value: 27 },
    { dataPointText: 23, value: 23 },
  ];

  return (
    <View style={styles.chartContainer}>
      <LineChart
        width={Dimensions.get('window').width - 100}
        curved
        rotateLabel
        // hideRules
        hideYAxisText
        height={150}
        data={chart === 'konsentrasi' ? ppmData : tempData}
        initialSpacing={30}
        noOfSections={5}
        thickness={2}
        dataPointsHeight={6}
        dataPointsWidth={6}
        rulesColor="lightgray"
        yAxisColor="lightgray"
        xAxisColor="lightgray"
        xAxisThickness={0}
        yAxisLabelTexts={styles.pointerLabelText}
        yAxisTextStyle={styles.yAxisTextStyle}
        yAxisThickness={0}
        textColor1="green"
        color1="lightblue"
        dataPointsColor1="skyblue"
        startFillColor="rgba(20,105,81,0.3)"
        endFillColor="rgba(20,85,81,0.01)"
        startOpacity={0.8}
        endOpacity={0.3}
        pointerConfig={{
          pointerStripHeight: 150,
          pointerStripColor: 'lightblue',
          pointerColor: 'lightgray',
          activatePointersOnLongPress: true,
          // autoAdjustPointerLabelPosition: false,
          pointerLabelWidth: 100,
          pointerLabelHeight: 50,
          // eslint-disable-next-line react/no-unstable-nested-components
          pointerLabelComponent: items => {
            return (
              <View style={styles.pointerLabelContainer}>
                <Text style={styles.pointerLabelText}>{`${items[0].value}${
                  chart === 'konsentrasi' ? 'ppm' : '°C'
                }`}</Text>
              </View>
            );
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  customLabelContainer: {
    width: 60,
    marginLeft: 7,
  },
  customLabelText: {
    color: 'lightgray',
  },
  chartContainer: {
    // paddingLeft: 20,
    paddingVertical: 30,
  },
  yAxisTextStyle: {
    color: 'lightgray',
    fontSize: 10,
  },
  pointerLabelContainer: {
    paddingHorizontal: 5,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: 'lightblue',
  },
  pointerLabelText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
});

export default LineChartComponent;
