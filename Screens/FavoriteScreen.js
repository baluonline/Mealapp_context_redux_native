import { useContext } from "react";
import { Text, View } from "react-native";
import { FavoritesContext } from "../store/context/context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

function FavoriteScreen() {
//   const favoritesCtx = useContext(FavoritesContext);
// const ids = favoritesCtx.ids;
  const ids =  useSelector((state) => state.favorieMeals.ids);
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favoriteMeals.length < 1) {
    return (
      <View style={styles.favoriteContainer}>
        <Text style={styles.noDataTitle}>
          You do not have favorite meals list{" "}
        </Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  favoriteContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent:'center'
  },
  noDataTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
});
