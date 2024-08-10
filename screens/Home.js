import * as React from "react";
import { Text, View, FlatList, ScrollView, StyleSheet } from "react-native";
import { darkTheme } from "../themes/themes";
import Podcast from "../components/Podcast";
import {
  useFonts,
  Manrope_400Regular,
  Manrope_700Bold,
} from "@expo-google-fonts/manrope";

const DATA = [
  {
    id: "1",
    category: "Trending",
    items: [
      {
        title: "Trending Podcast 1",
        shortDesc: "This is a trending podcast",
        image: require("../assets/profile-photo.jpg"),
      },
      {
        title: "Trending Podcast 2",
        shortDesc: "This is another trending podcast",
        image: require("../assets/profile-photo.jpg"),
      },
      {
        title: "Trending Podcast 3",
        shortDesc: "This is another trending podcast",
        image: require("../assets/profile-photo.jpg"),
      },
      {
        title: "Trending Podcast 4",
        shortDesc: "This is another trending podcast",
        image: require("../assets/profile-photo.jpg"),
      },
      // Add more items as needed
    ],
  },
  {
    id: "2",
    category: "New Release",
    items: [
      {
        title: "New Release 1",
        shortDesc: "This is a new release podcast",
        image: require("../assets/profile-photo.jpg"),
      },
      {
        title: "New Release 2",
        shortDesc: "This is another new release podcast",
        image: require("../assets/profile-photo.jpg"),
      },
      // Add more items as needed
    ],
  },
  {
    id: "3",
    category: "All Time Best",
    items: [
      {
        title: "All Time Best 1",
        shortDesc: "This is an all-time best podcast",
        image: require("../assets/profile-photo.jpg"),
      },
      {
        title: "All Time Best 2",
        shortDesc: "This is another all-time best podcast",
        image: require("../assets/profile-photo.jpg"),
      },
      // Add more items as needed
    ],
  },
];

export default function Home() {
  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_700Bold,
  });

  if(fontsLoaded)
  return (
    <ScrollView style={styles.container}>
      {DATA.map((section) => (
        <View key={section.id} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.category}</Text>
          <FlatList
            horizontal
            data={section.items}
            renderItem={({ item }) => (
              <Podcast title={item.title} shortDesc={item.shortDesc} image={item.image} />
            )}
            keyExtractor={(item) => item.title}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.backgroundColor,
  },
  section: {
    marginVertical: 5,
  },
  sectionTitle: {
    fontSize: 24,
    color: "white",
    marginLeft: 20,
    marginBottom: 10,
    fontFamily: "Manrope_700Bold",

  },
  flatListContainer: {
    paddingHorizontal: 10,
  },
});
