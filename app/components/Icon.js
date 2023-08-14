import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, } from "react-native";

function Icon({ name, size = 40, backgroundColor = "red", iconColor }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <MaterialIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
}

export default Icon;
