import { StyleSheet, Text, View } from "react-native";
export default function PtktScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 50, fontWeight: 'bold'}}>PTKT</Text>
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