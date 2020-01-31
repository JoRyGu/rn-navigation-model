import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import { Categories } from '../data/dummy-data';
import CategoryGridItem from '../components/CategoryGridItem';

const CategoriesScreen = props => {
  return (
    <FlatList
      data={Categories}
      renderItem={flatListProps => <CategoryGridItem {...flatListProps} navigation={props.navigation} />}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
