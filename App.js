import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageSceern from "./app/screens/ViewImageSceern";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import { View } from "react-native";
import MessageScreen from "./app/screens/MessageScreen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import { useState } from "react";


const categories = [
  {
    label:"Furniture", value:1
  },
  {
    label:"Clothing", value:2
  },
  {
    label:"Cameras", value:3 
  },
]
export default function App() {
  const [category, setCategory] =useState();
  return (
    <Screen>
      <AppPicker selectedItem={category} onSelectedItem={item =>setCategory(item)} items={categories} icon="app" placeholder="Categories"/>
    </Screen>
  );
}
