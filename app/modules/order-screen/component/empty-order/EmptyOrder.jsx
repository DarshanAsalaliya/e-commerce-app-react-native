import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { ButtonLabel, Route } from '../../../../constant';
import styles from './EmptyOrderStyle';
import { useSelector } from 'react-redux';

/**
 * empty order component
 * @returns jsx element for empty order
 */
const EmptyOrder = () => {
  const navigation = useNavigation();
  const homeNavigation = () => navigation.navigate(Route.homeScreen);
  const { isOrderListLoad } = useSelector(state => state.OrderReducer);

  return (
    <View style={styles.container}>
      {isOrderListLoad ? (
        <ActivityIndicator size="large" />
      ) : (
        <Pressable style={styles.loginButton} onPress={homeNavigation}>
          <Text style={styles.buttonText}>{ButtonLabel.goToHome}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default EmptyOrder;
