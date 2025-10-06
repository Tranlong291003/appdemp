import OneBoxLayout from '@/app/oneboxlayout';
import TwoBoxLayout from '@/app/twoboxlayout';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Headercompement from '../headercompement';

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Fialda</Text>
        </View>
        <TwoBoxLayout />
        <View style={styles.padding}></View>
        <OneBoxLayout />
        <View style={styles.padding}></View>
        <Headercompement />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 15,
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
  padding: {
    height: 10,
  },
});
