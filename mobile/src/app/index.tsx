import HomeScreen from "@/components/HomeScreen";
import { StyleSheet, View } from "react-native";

export default function Index() {

  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
