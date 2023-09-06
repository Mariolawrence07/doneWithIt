import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Icon from "./Icon";
import defaultStyles from "../config/defaultStyles";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, width="100%", ...otherProps }) {
  return (
    <View style={[styles.container, {width}]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}

      <TextInput
        style={defaultStyles.text}
        {...otherProps}
        placeholderTextColor={colors.medium}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    // width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
