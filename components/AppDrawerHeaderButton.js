import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from './HeaderButton';
import { colors } from '../constants/colors';

const AppDrawerHeaderButton = ({ navData, color }) => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="menu"
        iconName="ios-menu"
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
        color={color || colors.PRIMARY}
      />
    </HeaderButtons>
  );
};

export default AppDrawerHeaderButton;
