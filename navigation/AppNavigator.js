import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import TabNavigator from './TabNavigator';
import FiltersScreen from '../screens/FiltersScreen';
import AppDrawerHeaderButton from '../components/AppDrawerHeaderButton';
import HeaderButton from '../components/HeaderButton';
import { colors } from '../constants/colors';

const AppNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: TabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals & Favorites'
      }
    },
    Filters: {
      screen: createStackNavigator({
        Filters: {
          screen: FiltersScreen,
          navigationOptions: getFiltersNavigationOptions
        }
      })
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.PRIMARY
      },
      headerTintColor: 'white'
    },
    contentOptions: {
      activeTintColor: colors.ACCENT,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  }
);

function getFiltersNavigationOptions(navData) {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: () => <AppDrawerHeaderButton navData={navData} />,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Save" iconName="ios-save" onPress={navData.navigation.getParam('save')} />
      </HeaderButtons>
    )
  };
}

export default createAppContainer(AppNavigator);
