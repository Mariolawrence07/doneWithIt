import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import Ionicons from "@expo/vector-icons/Ionicons";


function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>

    <View style={styles.container}>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70, 
    justifyContent:"center",
    alignItems:"center"
  },
});

export default ListItemDeleteAction;
