import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { CommonStrings } from '../../../../constant';
import styles from './EmptyCategoryStyle';
import { useSelector } from 'react-redux';

// empty category component
const EmptyCategory = () => {
  const { isLoading } = useSelector(state => state.CategoryReducer);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>{CommonStrings.noCategory}</Text>
        </View>
      )}
    </>
  );
};

export default EmptyCategory;
