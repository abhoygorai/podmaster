import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { lightTheme, darkTheme } from '../themes/themes';
import Maincomponent from "../screens/Maincomponent"

const Main = () => {
  // const { darkMode, toggleTheme } = useTheme();
  // const theme = darkMode ? darkTheme : lightTheme;

  return (
    <>
      <Maincomponent />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'bottom',
    alignItems: 'center',
  },
});

export default Main;
