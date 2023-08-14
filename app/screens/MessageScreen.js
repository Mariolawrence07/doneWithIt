import React, { useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialmessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];
function MessageScreen() {
  const [messages, setMessages] = useState(initialmessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("press")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={<ListItemSeperator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "andriod" ? StatusBar.currentHeight : 0,
  },
});

export default MessageScreen;
