import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import {
  useFonts,
  Manrope_400Regular,
  Manrope_700Bold,
} from "@expo-google-fonts/manrope";

const Podcast = ({ title, shortDesc, image }) => {
  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_700Bold,
  });

  if (fontsLoaded)
    return (
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{shortDesc}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#121212",
    borderRadius: 8,
    padding: 16,
    justifyContent: "left",
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    width: 150,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "left",
    fontFamily: "Manrope_700Bold",
  },
  description: {
    width: 150,
    fontSize: 13,
    color: "#666",
    textAlign: "left",
    fontFamily: "Manrope_700Bold",
    overflow: "auto",
  },
});

export default Podcast;
