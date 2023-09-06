import React, { useState } from "react";
import Picker from "./Picker";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import Icon from "./Icon";
import defaultStyles from "../config/defaultStyles";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import Screen from "./Screen";
import { number } from "yup";

function AppPicker({
  icon,
  items,
  placeholder,
  onSelectedItem,
  selectedItem,
  PickerItemComponent = Picker,
  numberOfColumns=1,
  width = "50%",
}) {
  const [initialState, setModal] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModal(true);
        }}
      >
        <View style={styles.container} width={width}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}

          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          {icon && (
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color={colors.medium}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={initialState} animationType="slide">
        <Screen>
          <Button title="CLOSE" onPress={() => setModal(false)} />
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModal(false);
                  onSelectedItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
