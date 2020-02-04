import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import { colors } from '../constants/colors';
import { Categories } from '../data/dummy-data';
import AppDrawerHeaderButton from '../components/AppDrawerHeaderButton';
import FavoriteHeaderButton from '../components/FavoriteHeaderButton';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: getCategoriesNavigationOptions
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      navigationOptions: getCategoryMealsNavigationOptions
    },
    MealDetails: {
      screen: MealDetailsScreen,
      navigationOptions: getMealDetailsNavigationOptions
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.PRIMARY
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold'
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans'
      },
      headerTintColor: 'white'
    },
    mode: 'card'
  }
);

function getCategoryMealsNavigationOptions(navigationData) {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = Categories.find(category => category.id === categoryId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: selectedCategory.color
    },
    headerTintColor: 'black'
  };
}

function getMealDetailsNavigationOptions(navData) {
  const item = navData.navigation.getParam('mealDetails');

  return {
    headerTitle: item.title,
    headerRight: () => <FavoriteHeaderButton mealId={item.id}/>,
    headerStyle: {
      backgroundColor: 'white'
    },
    headerTintColor: colors.PRIMARY
  };
}

function getCategoriesNavigationOptions(navData) {
  return {
    headerLeft: () => <AppDrawerHeaderButton navData={navData} color="white" />
  };
}

export default MealsNavigator;
