import React from 'react';
import { Text, View } from 'react-native';
import { CommonStrings } from '../../../../constant';
import styles from './CartEmptyComponentStyle';

// cart empty component
const CartEmptyComponent = () => {
  return (
    <View style={styles.emptyView}>
      <Text style={styles.emptyText}>{CommonStrings.noItemInCart}</Text>
    </View>
  );
};

export default CartEmptyComponent;
