import { CheckCircle } from 'phosphor-react-native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { ButtonLabel, CommonStrings, Route } from '../../constant';
import { light, moderateScale } from '../../theme';
import styles from './OrderPlacedStyle';
import { useSelector } from 'react-redux';

/**
 * order placed screen
 * @param navigation - it's represent navigation object
 * @returns - jsx element represent order placed screen
 */
const OrderPlaced = ({ navigation }) => {
  const { checkoutData } = useSelector(state => state.OrderReducer);

  const gotoHome = () => {
    navigation.navigate(Route.homeScreen);
  };

  return (
    <View style={styles.container}>
      <CheckCircle
        size={moderateScale(150)}
        color={light.white}
        weight="fill"
      />
      <Text style={styles.priceText}>
        {checkoutData?.order?.total?.formatted_with_symbol}
      </Text>
      <Text style={styles.textStyle}>{CommonStrings.orderMessage}</Text>
      <Pressable onPress={gotoHome} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{ButtonLabel.gotoShopping}</Text>
      </Pressable>
    </View>
  );
};

export default OrderPlaced;
