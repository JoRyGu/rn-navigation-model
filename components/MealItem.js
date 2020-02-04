import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import DefaultText from './DefaultText';

const MealItem = ({ item, navigate }) => {
  function goToMealDetailsScreen() {
    navigate({
      routeName: 'MealDetails',
      params: {
        mealDetails: item
      }
    });
  }

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={goToMealDetailsScreen}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: item.imageUrl }} style={styles.bgImg}>
              <Text style={styles.title} numberOfLines={1}>
                {item.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <DefaultText>{item.duration}m</DefaultText>
            <DefaultText>{item.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{item.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10
  },
  bgImg: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
    paddingHorizontal: 10
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center'
  }
});

export default MealItem;
