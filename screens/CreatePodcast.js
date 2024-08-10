import * as React from 'react';
import { Text, View } from "react-native";
import { darkTheme } from '../themes/themes';

export default function CreatePodcast() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: darkTheme.backgroundColor }}>
      <Text style={{color: darkTheme.color}}>CreatePodcast!</Text>
    </View>
  );
}
