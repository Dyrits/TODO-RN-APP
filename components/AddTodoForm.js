import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function AddTodoForm({ addItem }) {
  const [text, setText] = useState(String());

  const handleTextChange = (text) => {
    setText(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={"New todo~"}
        value={text}
        onChangeText={(value) => {
          handleTextChange(value);
        }}
      />
      <Button
        title="Add Todo"
        onPress={() => {
          addItem(text);
          setText(String());
        }}
        color={"coral"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
});
