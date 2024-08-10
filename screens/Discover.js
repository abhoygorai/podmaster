import * as React from 'react';
import { Text, View } from "react-native";
import { darkTheme } from '../themes/themes';
import SearchBox from '../components/ui/SearchBox';

export default function Discover() {
  const [textData, setTextData] = React.useState("");

  const handleSearch = (query) => {
    setTextData(query);
  }

  return (
    <View style={{ flex: 1, justifyContent: "top", alignItems: "center", backgroundColor: darkTheme.backgroundColor }}>
      <SearchBox onSearch={handleSearch}/>
      {/* <TextBox height={400}/> */}
      <Text>{textData}</Text>
    </View>
  );
}
