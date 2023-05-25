import * as React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Layout, Text } from '@ui-kitten/components';
import LineChartComponent from '../chart/lineChart/LineChartComponent';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  indicatorText: {
    fontSize: 16,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonHalf: {
    width: '50%',
  },
  selectBorder: {
    borderStyle: 'solid',
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
  paddingCustom: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  divideByTwo: {
    flex: 2,
  },
});

const LineCardComponent = ({
  chart,
  setChart,
  records,
  firstRecord = { ppm: 0, temperature: 0, createdAt: null },
}) => {
  const dateLatest = new Date(firstRecord.createdAt ?? null);

  return (
    <ScrollView>
      <SafeAreaView style={{ padding: 10 }}>
        <Layout>
          <View style={{ paddingVertical: 10 }}>
            <Text>Data terbaru diambil pada {dateLatest.toLocaleString()}</Text>
          </View>
          <View style={[styles.flexRow]}>
            <TouchableOpacity
              style={[
                styles.divideByTwo,
                chart === 'konsentrasi' && styles.selectBorder,
              ]}
              onPress={() => setChart('konsentrasi')}>
              <View style={styles.flexRow}>
                <Icon style={styles.icon} fill="#8F9BB3" name="funnel" />
                <View style={styles.flexColumn}>
                  <Text>Konsentrasi</Text>
                  <Text style={styles.indicatorText} category="label">
                    {firstRecord && firstRecord.ppm} ppm
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.divideByTwo,
                chart === 'suhu' && styles.selectBorder,
              ]}
              onPress={() => setChart('suhu')}>
              <View style={styles.flexRow}>
                <Icon style={styles.icon} fill="#8F9BB3" name="thermometer" />
                <View>
                  <Text>Suhu</Text>
                  <Text style={styles.indicatorText} category="label">
                    {firstRecord && firstRecord.temperature} °C
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <LineChartComponent chart={chart} records={records} />
        </Layout>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LineCardComponent;
