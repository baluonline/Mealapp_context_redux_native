import { StyleSheet, View, Text } from "react-native";

function List({ listItems }) {
  return listItems.map((item, index) => {
    return (
      <View key={index} style={styles.listItem}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    );
  });
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#5bb10a",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginHorizontal: 12,
    marginVertical:10,
    textAlign: "center",
  },
  itemText: {
    color: "#2d0808",
    textAlign: "center",
  },
});
