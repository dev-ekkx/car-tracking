import React from "react";
import { StyleSheet, View } from "react-native";
import LocationIcon from "./LocationIcon";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <LocationIcon />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
