import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealList from "./MealList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  // const favoriteMealCtx = useContext(FavoritesContext);

  const favoriteMealCtx = useSelector(state => state.favoriteMeals.ids);

  console.log("hehe")
  console.log(favoriteMealCtx)


  const favo = MEALS.filter((meal) => favoriteMealCtx.includes(meal.id));

  console.log(favo)
  if(favo.length === 0){
    return <View style={styles.rootContainer}>
      <Text style={styles.text}>No item</Text>
    </View>
  }
  console.log("Call")
  return <MealList item={favo} />;
}

export default FavoritesScreen;


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})