import { StatusBar } from "expo-status-bar";
import React from "react";
import { RecoilRoot } from "recoil";
import { View, Text } from "react-native";
import Form from "./Form";
import TodoList from "./TodoList";

export default function App() {
  return (
    <RecoilRoot>
      <View style={{ flex: 1, paddingVertical: 80, alignItems: "center" }}>
        <Form />
        <TodoList />
        <StatusBar style="auto" />
      </View>
    </RecoilRoot>
  );
}
