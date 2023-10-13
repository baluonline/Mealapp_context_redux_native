import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredGoalText) => {
    setEnteredGoalText(enteredGoalText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };
  const cancelGoalHandler = () => {
    props.onCancel();
    setEnteredGoalText("");
  };
  return (
    <Modal visible={props.visibleModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/images/check.png")}
        style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Please enter goals"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" color='blue' onPress={addGoalHandler} />
          <Button title="Cancel" color="red" onPress={cancelGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 24,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    gap: 10,
  },
  textInput: {
    color: "red",
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 10,
    padding: 0,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-start",
  },
  image: {
    width:200,
    height:200,
    padding:10
  }
});
