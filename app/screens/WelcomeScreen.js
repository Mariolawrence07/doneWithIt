import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/splash.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
