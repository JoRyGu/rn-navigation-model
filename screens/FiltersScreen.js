import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import DefaultText from '../components/DefaultText';
import Filter from '../components/Filter';
import { setFilters } from '../store/actions/meals';

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegetarian: isVegetarian,
      vegan: isVegan
    };

    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <DefaultText style={styles.title}>Filters</DefaultText>
      <Filter isActive={isGlutenFree} onChange={newVal => setIsGlutenFree(newVal)} name="Gluten Free" />
      <Filter isActive={isLactoseFree} onChange={newVal => setIsLactoseFree(newVal)} name="Lactose Free" />
      <Filter isActive={isVegetarian} onChange={newVal => setIsVegetarian(newVal)} name="Vegetarian" />
      <Filter isActive={isVegan} onChange={newVal => setIsVegan(newVal)} name="Vegan" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  }
});

export default FiltersScreen;
