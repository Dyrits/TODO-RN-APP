import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function TodoItem({ item, onPress }) {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(item.key);
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
