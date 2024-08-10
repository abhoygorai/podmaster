import React, { useEffect, useState } from "react";
import { Keyboard, View, StyleSheet, Text, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from "../assets/home.svg";
import HomeIconInactive from "../assets/home-inactive.svg";
import DiscoverIcon from "../assets/discover.svg";
import DiscoverIconInactive from "../assets/discover-inactive.svg";
import MicIcon from "../assets/microphone.svg";
import MicIconInactive from "../assets/microphone-inactive.svg";
import Home from "./Home";
import Discover from "./Discover";
import CreatePodcast from "./CreatePodcast";
import {
  useFonts,
  Manrope_400Regular,
  Manrope_700Bold,
} from "@expo-google-fonts/manrope";

const Tab = createBottomTabNavigator();

export default function Maincomponent() {
  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_700Bold,
  });

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: {
              backgroundColor: "#121212",
              borderTopWidth: 0,
              height: 60,
              paddingBottom: 10,
              display: keyboardVisible ? "none" : "flex", // Hide the tab bar when keyboard is visible
            },
            headerStyle: {
              backgroundColor: "#121212",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              height: 130,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 34,
              fontFamily: "Manrope_700Bold",
              color: "#f97535",
              fontWeight: "bold",
            },
            tabBarIcon: ({ focused, color, size }) => {
              let IconComponent;

              if (route.name === "Home") {
                IconComponent = focused ? HomeIcon : HomeIconInactive;
              } else if (route.name === "Discover") {
                IconComponent = focused ? DiscoverIcon : DiscoverIconInactive;
              } else if (route.name === "Create Podcast") {
                IconComponent = focused ? MicIcon : MicIconInactive;
              }

              return <IconComponent width={size} height={size} fill={color} />;
            },
            tabBarActiveTintColor: "#f97535",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Discover" component={Discover} />
          <Tab.Screen name="Create Podcast" component={CreatePodcast} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
