import React from "react";
import { useRecoilValue } from "recoil";
import { todosList } from "./Recoil";
import TodoItem from "./TodoItem";
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default function TodoList() {
  const todos = useRecoilValue(todosList);
  const renderItem = ({ item }) => <TodoItem title={item.text} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
