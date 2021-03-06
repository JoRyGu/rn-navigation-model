import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayMeals = availableMeals.filter(meal => meal.categoryIds.includes(catId));

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        renderItem={flatlistProps => <MealItem {...flatlistProps} navigate={props.navigation.navigate} />}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
});

export default CategoryMealsScreen;
