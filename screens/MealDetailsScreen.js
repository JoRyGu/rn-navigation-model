import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DefaultText from '../components/DefaultText';

const MealDetailsScreen = ({ navigation }) => {
  const item = navigation.getParam('mealDetails');

  return (
    <ScrollView>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{item.duration}m</DefaultText>
        <DefaultText>{item.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{item.affordability.toUpperCase()}</DefaultText>
      </View>
      <DefaultText style={styles.title}>Ingredients</DefaultText>
      {item.ingredients.map(ingredient => (
        <DefaultText key={ingredient} style={styles.listItem}>
          {ingredient}
        </DefaultText>
      ))}
      <DefaultText style={styles.title}>Steps</DefaultText>
      {item.steps.map(step => (
        <DefaultText key={step} style={styles.listItem}>
          {step}
        </DefaultText>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#CCC',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailsScreen;
