import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Button from './Button';
import {
  useFonts,
  Manrope_400Regular,
  Manrope_700Bold,
} from "@expo-google-fonts/manrope";

const SearchBox = ({ onSearch }) => {
  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_700Bold,
  });
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="gray"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10,
  },
  input: {
    flex: 1,
    height: 60,
    borderRadius: 8,
    padding: 20,
    marginRight: 10,
    color: 'white',
    fontFamily: "Manrope_700Bold",
    backgroundColor: "#181818",
     
  },
});

export default SearchBox;
