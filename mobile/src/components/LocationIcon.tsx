import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import React from "react";
import { StyleSheet, View } from "react-native";

const LocationIcon = () => {
    return (
      <View style={styles.container}>
        <SimpleLineIcons name="location-pin" size={80} color="gray" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d3d3d3ff",
    width: 150,
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
});

export default LocationIcon;
