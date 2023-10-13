import { View, Text, Pressable, Image, StyleSheet } from "react-native";

function MealItem({ mealData }) {
  return (
    <View style={styles.mealDeatsilContainer}>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>
          duration: {mealData.duration}ms
        </Text>
      </View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>
          complexity:{mealData.complexity.toUpperCase()}
        </Text>
      </View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>
          complexity:{mealData.affordability}
        </Text>
      </View>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  imageContainer: {
    height: 300,
    width: "100%",
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 4,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 8,
    marginHorizontal: 10,
  },
  buttonPressed: {
    opacity: 4,
  },
  button: {
    borderRadius: 5,
  },
  mealDeatsilContainer: {
    fontSize: 18,
    color: "white",
    flex: 1,
  },
  subTitleContainer: {
    padding: 6,
    borderBottomColor: "#3e2e02",
    borderBottomWidth: 2,
    marginHorizontal: 6,
    marginVertical: 4,
  },
  subTitle: {
    fontSize: 18,
    color: "#752be4",
    textAlign: "center",
  },
});
