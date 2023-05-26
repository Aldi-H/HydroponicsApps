import * as React from 'react';
import { useState, useEffect } from 'react';
import { Layout, Text, Toggle, Icon, Button } from '@ui-kitten/components';
import LineCardComponent from '../components/card/LineCardComponent';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  textControl: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  icon: {
    width: 32,
    height: 32,
  },
  toggleArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Home = () => {
  const [chart, setChart] = useState('konsentrasi');
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function getRecords() {
      try {
        const recordsApi = await axios.get(
          'https://d685-175-45-191-251.ngrok-free.app/records',
        );
        setRecords(recordsApi.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getRecords();
  }, []);

  async function updateData() {
    try {
      const recordsApi = await axios.get(
        'https://d685-175-45-191-251.ngrok-free.app/records',
      );
      setRecords(recordsApi.data.results);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function addAbMix() {
    try {
      await axios.get(
        'https://d685-175-45-191-251.ngrok-free.app/actions/ssr/on',
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Layout>
      <Text category="h4" style={{ padding: 10 }}>
        Yuan Hidroponik
      </Text>
      <LineCardComponent
        chart={chart}
        setChart={setChart}
        records={records}
        firstRecord={records[0]}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ marginBottom: 15 }} category="h6">
          Control
        </Text>
        <View>
          <Button
            style={{ marginBottom: 15 }}
            status="info"
            onPress={() => updateData()}>
            Perbaharui Grafik
          </Button>
          <Button status="warning" onPress={() => addAbMix()}>
            Tambah AB Mix
          </Button>
        </View>
      </View>
    </Layout>
  );
};

export default Home;
