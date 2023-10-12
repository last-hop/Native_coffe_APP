import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
  } from "react-native";
  import React, { useCallbackr,useState, useEffect } from "react";
  import SPACING from "../config/SPACING";
  import { BlurView } from "expo-blur";
  import { Ionicons } from "@expo/vector-icons";
  import * as SplashScreen from 'expo-splash-screen';
 
const Splash = () => {
 
  SplashScreen.preventAutoHideAsync();
  
  const [appIsReady,setAppIsReady] = useState(false);

  useEffect( () => {
    async function show_splash_screen(){
    try{
        // our api calls will be here.
        new Promise(resolve => setTimeout(resolve,5000)); // wait for 5 secs
    }catch(e){
        console.warn(e);
    }finally{
        setAppIsReady(true); // application to render.
    }
    }
    show_splash_screen();
});
/* const onLayoutRootView = useCallback(async () => {
    if(appIsReady){
    // hide the splash screen.
    await SplashScreen.hideAsync();
    }
  },[appIsReady]);
  
  if(!appIsReady){
    return null;
} */

  return (
    <SafeAreaView><View style={{ width: "80%", marginVertical: SPACING * 3 }}>
    <Text
      style={{
        color:"fff",
        fontSize: SPACING * 3.5,
        fontWeight: "600",
      }}
    >
      Find the best coffee for you
    </Text>
  </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({});
