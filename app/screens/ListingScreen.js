import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import { View, StyleSheet, FlatList } from "react-native";
import colors from "../config/colors";

function ListingScreen(props) {
  const ListItems = [
    {
      image: require('../assets/jacket.jpg'),
      title: "Red jacket for sale",
      price: "$1600",
    },
    {
      image: require('../assets/couch.jpg'),
      title: "Couch in great condition",
      price: "$100",
    },
  ];
  return (
    <Screen style={styles.screen}>
      <View style={styles.cardWrapper}>
        <FlatList
          data={ListItems}
          keyExtractor={(ListItem) => ListItem.title}
          renderItem={({ item }) => (
            <Card image={item.image} title={item.title} subTitle={item.price} />
          )}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  cardWrapper: {
    margin: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
export default ListingScreen;
