import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function ListItem({
  image,
  title,
  subTitle,
  onPress,
  ImageComponent,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {ImageComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  detailsContainer: {
    marginLeft: 10,
    flexDirection: "column",
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default ListItem;
