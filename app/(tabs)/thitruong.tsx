import { StyleSheet, Text, View } from 'react-native';
export default function ThitruongScreen() {
  return (
      <View style={styles.container}>
      <Text style={{fontSize: 50, fontWeight: 'bold'}}>Thị trường</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
