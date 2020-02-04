import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import MealsNavigator from './MealsNavigator';
import FavoritesNavigator from './FavoritesNavigator';
import { colors } from '../constants/colors';

const TabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      }
    },
    Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: {
        tabBarLabel: 'Favorites',
        tabBarIcon: tabInfo => <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: colors.ACCENT,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  }
);

export default TabNavigator;
