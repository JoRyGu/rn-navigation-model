import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import DefaultText from './DefaultText';
import { colors } from '../constants/colors';

const Filter = props => {
  return (
    <View style={styles.filterContainer}>
      <DefaultText>{props.name}</DefaultText>
      <Switch
        value={props.isActive}
        onValueChange={props.onChange}
        trackColor={{ true: colors.PRIMARY }}
        thumbColor="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10
  }
});

export default Filter;
