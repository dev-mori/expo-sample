import React, { useState } from "react";
import { TextInput, Button } from "react-native";
import { useRecoilState } from "recoil";
import { todosState } from "./Recoil";
import { nanoid } from "nanoid/non-secure";

export default function Form() {
  const [value, set_value] = useState("");
  const [todos, set_todos] = useRecoilState(todosState);
  return (
    <>
      <TextInput
        style={{ height: 40, width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => set_value(text)}
        value={value}
        autoFocus={true}
      />
      <Button
        style={{ marginTop: 200 }}
        onPress={() => {
          if (value) {
            set_todos([...todos, { id: nanoid(), text: value }]);
            set_value("");
          }
        }}
        title="Submit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </>
  );
}
