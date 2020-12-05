import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, paddingVertical: 80, alignItems: "center" }}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>hello</Text>
      <Button
        title="Click Me"
        onPress={() => {
          alert("アラート表示");
          console.log("コンソールログ");
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}
