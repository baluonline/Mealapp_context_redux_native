import {
  Platform,
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function MealCategories({ navigation }) {
  function navigateToFavoriteScreen() {
    navigation.navigate("FavoriteMeals");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name="star"
            color="white"
            onPress={navigateToFavoriteScreen}
          />
        );
      },
    });
  }, [navigation, navigateToFavoriteScreen]);

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealOverview", { categoryId: itemData.item.id });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  // console.log(JSON.stringify(CATEGORIES));
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

export default MealCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
