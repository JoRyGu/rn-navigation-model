import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from './HeaderButton';

const FavoriteHeaderButton = props => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="favorite" iconName="ios-star" onPress={() => {}} />
    </HeaderButtons>
  );
};

export default FavoriteHeaderButton;
