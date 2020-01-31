import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import { colors } from '../constants/colors';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import AppDrawerHeaderButton from '../components/AppDrawerHeaderButton';

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: getFavoritesNavigationOptions
    },
    MealDetails: {
      screen: MealDetailsScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.PRIMARY
      },
      headerTintColor: 'white'
    }
  }
);

function getFavoritesNavigationOptions(navData) {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => <AppDrawerHeaderButton navData={navData} color="white" />
  };
}

export default FavoritesNavigator;
