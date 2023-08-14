import React from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import { View, StyleSheet, FlatList } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";

const menuItems = [
  {
    name: "My listing",
    Icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.danger,
    },
  },
  {
    name: "My Message",
    Icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];
function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hammedi"
          subTitle="xyz@gamil.com"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.name}
          renderItem={({ item }) => (
            <ListItem title={item.name} ImageComponent={<Icon  backgroundColor={item.Icon.backgroundColor} name={item.Icon.name}/>} />
          )}
          ItemSeparatorComponent={<ListItemSeperator />}
        />
      </View>
      <View style={styles.container}>
        <ListItem ImageComponent={<Icon backgroundColor="#ffe66d"/>} title=" logout"/>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
export default AccountScreen;
