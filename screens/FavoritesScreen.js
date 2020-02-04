import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealItem from '../components/MealItem';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {
  const availableMeals = useSelector(({ meals }) => meals.favoriteMeals);

  return (
    <View style={styles.screen}>
      {availableMeals.length > 0 ? (
        <FlatList
          data={availableMeals}
          renderItem={flatlistProps => <MealItem {...flatlistProps} navigate={props.navigation.navigate} />}
          style={{ width: '100%' }}
        />
      ) : (
        <DefaultText style={styles.fallbackText}>No Favorites Saved!</DefaultText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fallbackText: {
    fontFamily: 'open-sans-bold',
    fontSize: 22
  }
});

export default FavoritesScreen;
