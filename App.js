import { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodoForm from "./components/AddTodoForm";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy coffee", key: "1" },
    { text: "Create an app", key: "2" },
    { text: "Play on the switch", key: "3" },
  ]);

  function addItem(text) {
    (text = text.trim()) &&
      setTodos((previous) => {
        const key = (
          previous.reduce((max, todo) => Math.max(max, Number(todo.key)), 0) + 1
        ).toString();
        text = text.charAt(0).toUpperCase() + text.slice(1);
        return [{ text, key }, ...previous];
      });
  }

  function removeItem(key) {
    setTodos((previous) => {
      return previous.filter((todo) => todo.key !== key);
    });
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <AddTodoForm addItem={addItem} />
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} removeItem={removeItem} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
