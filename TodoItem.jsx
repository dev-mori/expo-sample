import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useRecoilState } from "recoil";
import { todosState } from "./Recoil";

export default function TodoItem({ title, id }) {
  const styles = StyleSheet.create({
    item: {
      width: 200,
      height: 50,
      backgroundColor: "#fff8e8",
      marginVertical: 8,
      borderLeftWidth: 10,
      borderLeftColor: "#ffc06e",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 25,
    },
    button: {
      color: "white",
      height: 10,
      width: 10,
    },
  });
  const [todos, set_todos] = useRecoilState(todosState);

  return (
    <>
      <View style={styles.item}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <Button
        style={styles.button}
        title="✕"
        color="black"
        onPress={() => {
          set_todos(
            todos.filter((todo) => {
              return todo.id !== id;
            })
          );
        }}
      />
    </>
  );
}
