import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import List from "../components/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, removeFavories } from "../store/redux/favorites";

function MealDeatsilScreen({ route, navigation }) {
  const id = route.params.mealId;
  // const favoritesMealCtx = useContext(FavoritesContext);
  const favorieMealIds = useSelector((state) => state.favorieMeals.ids);

  // const mealIsFavorite = favoritesMealCtx.ids.includes(id);
  const mealIsFavorite = favorieMealIds.includes(id);

  const dispatch = useDispatch();

  const selectedMeal = MEALS.find((meal) => meal.id == id);
  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // favoritesMealCtx.removeFavorites(id);
      dispatch(removeFavories({ id: id }));
    } else {
      // favoritesMealCtx.addFavorites(id);
      dispatch(addFavorites({ id: id }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.imageContainer}>
        <Image style={[styles.image]} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
      </View>

      <View style={styles.innerContainer}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>ingredients</Text>
        </View>
        <List listItems={selectedMeal.ingredients} />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Steps</Text>
        </View>
        <List listItems={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
}

export default MealDeatsilScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    paddingBottom: 10,
  },
  mealDeatsilContainer: {
    fontSize: 18,
    color: "white",
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },

  image: {
    height: 300,
    width: "100%",
  },
  innerContainer: {
    margin: 10,
    alignItems: "stretch",
    maxWidth: "80%",
  },
  title: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
  },
  subTitle: { fontSize: 18, color: "#e4b32b", textAlign: "center" },
});
