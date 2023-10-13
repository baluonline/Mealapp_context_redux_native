import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  Platform,
} from "react-native";
import MealItem from "../MealItem";
import { useNavigation } from "@react-navigation/native";

function MealsList({ items }) {
    const navigation = useNavigation();
  function renderMealItems(itemData) {
    function pressHandler() {
      navigation.navigate("MealDetails", { mealId: itemData.item.id });
    }
    const mealData = {
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };
    return (
      <ScrollView style={styles.mealOverViewContainer}>
        <View>
          <Pressable
            android_ripple={{ color: "#a61c1c" }}
            onPress={pressHandler}
            style={({ pressed }) => {
              [styles.button, pressed ? styles.buttonPressed : null];
            }}
          >
            <Image
              source={{ uri: itemData.item.imageUrl }}
              style={styles.imageContainer}
            />
            <Text style={styles.itemTitle}>{itemData.item.title}</Text>
          </Pressable>
          <MealItem mealData={mealData} />
        </View>
      </ScrollView>
    );
  }
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItems}
      />
    </View>
  );
}
export default MealsList;

const styles = StyleSheet.create({
  mealOverViewContainer: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 0,
    overflow: Platform == -"android" ? "hidden" : "visible",
  },
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
