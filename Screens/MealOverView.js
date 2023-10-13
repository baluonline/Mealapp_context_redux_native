import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealOverviewContainer from "../components/MealItem";
import MealsList from "../components/MealsList/MealsList";
import { useLayoutEffect } from "react";

function MealOverView({ route, navigation }) {
  const catId = route.params.categoryId;
  const mealList = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={mealList} />;
}

export default MealOverView;
