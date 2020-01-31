import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default CategoryGridItem = props => {
  function goToCategoryMealsScreen() {
    props.navigation.navigate({
      routeName: 'CategoryMeals',
      params: {
        categoryId: props.item.id
      }
    });
  }

  return (
    <TouchableOpacity onPress={goToCategoryMealsScreen} style={styles.gridItem}>
      <View style={{ ...styles.container, ...{ backgroundColor: props.item.color } }}>
        <Text style={styles.title} numberOfLines={2}>
          {props.item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right'
  }
});
