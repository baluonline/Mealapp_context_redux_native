import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  console.log("Prpps" + JSON.stringify(props));

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#ddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed})=> pressed && styles.pressableItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#5e0acc",
    color: "white",
},
goalText: {
    color: "white",
    padding: 8,
  },
  pressableItem:{
    backgroundColor:'red'
  }
});
