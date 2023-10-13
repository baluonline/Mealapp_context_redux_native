import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MealCategories from "./Screens/MealCategories";
import MealDeatsilScreen from "./Screens/MealDetailsScreen";
import MealOverView from "./Screens/MealOverView";
import FavoritesContextProvider from "./store/context/context";
import FavoriteScreen from "./Screens/FavoriteScreen";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  const startAddModalVisible = () => {
    setVisibleModal(true);
  };

  const addGoalHandler = (enteredGoalText) => {
    console.log(enteredGoalText);
    if (enteredGoalText.trim != "" || enteredGoalText != "") {
      // setCourseGoals((currentCourseGoals) => [
      //   ...currentCourseGoals,
      //   enteredGoalText,
      // ]);
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
      setVisibleModal(false);
    }
  };
  const onCancelHandle = () => {
    setVisibleModal(false);
  };

  const deleteItemHandler = (id) => {
    console.log("Delete item " + id);
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id != id);
    });
  };
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
      {/* <FavoritesContextProvider> */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              animation: "fade",
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#272320" },
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={MealCategories}
              options={{
                title: "Meals Categories",
              }}
            />
            <Stack.Screen
              name="MealOverview"
              component={MealOverView}
              options={{
                title: "Meal Overview",
              }}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDeatsilScreen}
              options={{
                title: "Meal Details",
              }}
            />
            <Stack.Screen
              name="FavoriteMeals"
              component={FavoriteScreen}
              options={{
                title: "Favorite Meals List",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </FavoritesContextProvider> */}
      </Provider>

      {/* <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddModalVisible}
        />
        <GoalInput
          visibleModal={visibleModal}
          onAddGoal={addGoalHandler}
          onCancel={onCancelHandle}
        />
        <View style={styles.goalsContainer}>
          {/* <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
      {/* <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteItemHandler}
                />
              );
            }}
            alwaysBounceVertical={false}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          ></FlatList>
        </View>
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  goalsContainer: {
    flex: 5,
  },

  conentContainer: {
    paddingVertical: 10,
  },
});
