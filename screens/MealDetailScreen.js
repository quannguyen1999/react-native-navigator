import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetail";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeals = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("hehe")
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="star" color="white"  onPress={headerButtonPressHandler}/>
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeals.imageUrl }} />

      <Text style={styles.title}>{selectedMeals.title}</Text>
      <MealDetails
        duration={selectedMeals.duration}
        complexity={selectedMeals.complexity}
        affordability={selectedMeals.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>ingredients</Subtitle>
          <List data={selectedMeals.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeals.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
