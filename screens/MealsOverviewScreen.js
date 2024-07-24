import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";
import MealList from "../components/MealList";
function MealsOverviewScreen({ route, navigation }) {
  const catId = useRoute();

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId.params.categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitles = CATEGORIES.find(
      (category) => category.id === catId.params.categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitles,
    });
  }, [catId, navigation]);

  return <MealList items={displayedMeals}/>
  
}

export default MealsOverviewScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
// });
