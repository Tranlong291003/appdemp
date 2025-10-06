import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TwoBoxLayout() {
  return (
    <View style={styles.container}>
      {/* BOX 1 */}
      <View style={styles.innerBox}>
        <View style={styles.row}>
          <Text style={styles.title}>VNINDEX</Text>
          <Text style={styles.value}>1,686.88</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.volume}>15.0M</Text>
          <Text style={styles.change}>+0.62%/+10.5</Text>
        </View>
        <View style={styles.square}></View>
      </View>
      <View style={styles.margin}></View>
      {/* BOX 2 */}
      <View style={styles.innerBox}>
        <View style={styles.row}>
          <Text style={styles.title}>VN30</Text>
          <Text style={styles.value}>1,865.23</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.volume}>15.0M</Text>
          <Text style={styles.change}>+2.01%/+36.8</Text>
        </View>
        <View style={styles.square}></View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container ngoài: 2 cột cân nhau
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#f3f4f6',
  },

  margin: {
    width: 5,
  },

  // mỗi box
  innerBox: {
    flex: 1,                // chiếm đều 2 bên
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    padding: 12,
  },

  // hàng tiêu đề trong box (title trái, value phải)
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },

  title: {
    fontWeight: '800',
    fontSize: 18,
  },
  value: {
    fontSize: 16,
  },
  volume: {
    fontSize: 16,
  },
  change: {
    fontSize: 16,
    color: '#79B593',
  },

  square: {
    width: '100%',
    minHeight: 70,
    backgroundColor: '#79B593',
  },
});
