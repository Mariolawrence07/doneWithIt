import React from "react";
import { View, StyleSheet, Image } from "react-native";
import {MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageSceern(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name="close"
          color="white"
          size={35}
        />
      </View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    top: 50,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 50,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageSceern;
