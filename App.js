import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";
import Splash from "./app/screens/SplashScreen";
const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.dark }}>
      <Splash/>
      <HomeScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
