import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import TabNavigator from './TabNavigator';
import FiltersScreen from '../screens/FiltersScreen';
import AppDrawerHeaderButton from '../components/AppDrawerHeaderButton';

const AppNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: TabNavigator
  },
  Filters: {
    screen: createStackNavigator({
      Filters: {
        screen: FiltersScreen,
        navigationOptions: getFiltersNavigationOptions
      }
    })
  }
});

function getFiltersNavigationOptions(navData) {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: () => <AppDrawerHeaderButton navData={navData} />
  };
}

export default createAppContainer(AppNavigator);
