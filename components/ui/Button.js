import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  useFonts,
  Manrope_400Regular,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from "@expo-google-fonts/manrope";

const Button = ({ title, onPress, height }) => {
  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_700Bold,
    Manrope_800ExtraBold
  });

  const styles = StyleSheet.create({
    button: {
      backgroundColor: "#f97535",
      paddingTop: 7,
      paddingBottom: 9,
      paddingHorizontal: 16,
      borderRadius: 8,
      justifyContent: 'center',
      height: height,
    },
    text: {
      color: "white",
      fontSize: 16,
      textAlign: "center",
      fontFamily: "Manrope_800ExtraBold",
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};


export default Button;
