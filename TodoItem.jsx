import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function TodoItem({ title }) {
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
  });
  return (
    <View style={styles.item}>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
}
