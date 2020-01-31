import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealDetailsScreen = ({ navigation }) => {
  const item = navigation.getParam('mealDetails');

  return (
    <View style={styles.screen}>
      <Text>{navigation.getParam('mealDetails').title}</Text>
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

export default MealDetailsScreen;
