import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = props => {
  const displayMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

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
    alignItems: 'center'
  }
});

export default FavoritesScreen;
