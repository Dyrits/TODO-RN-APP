import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function TodoItem({ item, removeItem }) {
  return (
    <TouchableOpacity
      onPress={() => {
        removeItem(item.key);
      }}
    >
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#BBB",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
