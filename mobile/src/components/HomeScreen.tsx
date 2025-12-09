import useLocation from "@/hooks/useLocation";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LocationIcon from "./LocationIcon";

const HomeScreen = () => {

  const {errorMsg, longitude, latitude} = useLocation();

  console.log("Longitude: ", longitude);
  console.log("Latitude: ", latitude);
  console.log("Error: ", errorMsg);

  const {colors} = useTheme();

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 24,
    paddingInline: 24,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },
  desc: {
    fontSize: 16,
    color: colors.text,
    textAlign: "center",
  },
  btn: {
    backgroundColor: colors.primary,
    paddingInline: 24,
    paddingBlock: 16,
    borderRadius: 8,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});

  return (
    <View style={styles.container}>
      <LocationIcon />

      <Text style={styles.text}>Use Location</Text>

      <Text style={styles.desc}>
        When you click on the use location button, your location will be used to
        get your position.
      </Text>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Get Location</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;


