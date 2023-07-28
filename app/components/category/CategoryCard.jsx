import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CommonStrings } from '../../constant';
import styles from './CategoryCardStyle';

/**
 *
 * @param item - it's represent category data
 * @param setCategory - it's represent set selected category
 * @param category - it's represent to slected category
 * @returns - jsx element for show category in home screen
 */
const CategoryCard = ({ item, setCategory, category }) => {
  const setCategoryOnSelect = () => {
    setCategory(item?.item?.id);
  };

  return (
    <TouchableOpacity onPress={setCategoryOnSelect}>
      <View
        style={
          category === item?.item.id ? styles.selectContainer : styles.container
        }>
        <Text
          style={
            category === item?.item.id ? styles.selectText : styles.detailText
          }>
          {item?.item?.name ?? CommonStrings.phone}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
