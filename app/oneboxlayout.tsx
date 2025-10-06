import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OneBoxLayout() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Thị Trường Quick View</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // container ngoài: 2 cột cân nhau
  container: {
    backgroundColor: '#fff',
    height: 200,
    padding: 20,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },



});
