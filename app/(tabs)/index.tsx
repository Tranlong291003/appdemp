import OneBoxLayout from '@/app/oneboxlayout';
import TwoBoxLayout from '@/app/twoboxlayout';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabsScreen from '../tab';
// import Headercompement from '../headercompement';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Fialda</Text>
      </View>
      <TwoBoxLayout />
      <View style={styles.height}></View>
      <OneBoxLayout />
      <View style={styles.height}></View>
      {/* <ContentScreen /> */}
      {/* <Headercompement /> */}
      <TabsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 5,
  },
  header: {
    paddingTop: 25,
  },
  headerText: {
    color: '#000000',
    fontSize: 50,
    fontWeight: 'bold',
    padding: 10,
  },
  height: {
    height: 10,
  },
});
