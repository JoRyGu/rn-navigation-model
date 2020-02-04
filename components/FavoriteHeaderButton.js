import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';

import CustomHeaderButton from './HeaderButton';
import { colors } from '../constants/colors';
import { toggleFavorite } from '../store/actions/meals';

const FavoriteHeaderButton = props => {
  const dispatch = useDispatch();
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  const favoriteMealsIds = favoriteMeals.map(meal => meal.id);

  function handleToggleFavorite() {
    dispatch(toggleFavorite(props.mealId));
  }

  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="favorite"
        iconName="ios-star"
        onPress={handleToggleFavorite}
        color={favoriteMealsIds.includes(props.mealId) ? colors.ACCENT : colors.PRIMARY}
      />
    </HeaderButtons>
  );
};

export default FavoriteHeaderButton;
