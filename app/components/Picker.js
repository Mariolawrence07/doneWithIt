import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";

function Picker({ onPress, item }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.text}>
      <AppText>{item.label}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
export default Picker;
