import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const INITIAL_STATE = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);

      if (existingIndex >= 0) {
        const newFavorites = state.favoriteMeals.filter(meal => meal.id !== action.mealId);
        return { ...state, favoriteMeals: newFavorites };
      } else {
        const newFavorites = [...state.favoriteMeals, state.meals.find(meal => meal.id === action.mealId)];
        return { ...state, favoriteMeals: newFavorites };
      }
    case SET_FILTERS:
      const { glutenFree, lactoseFree, vegetarian, vegan } = action.filterSettings;

      const filteredMeals = state.meals.filter(meal => {
        if (glutenFree && !meal.isGlutenFree) {
          return false;
        }

        if (lactoseFree && !meal.isLactoseFree) {
          return false;
        }

        if (vegetarian && !meal.isVegetarian) {
          return false;
        }

        if (vegan && !meal.isVegan) {
          return false;
        }

        return true;
      });

      return { ...state, filteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
