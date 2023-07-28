import { CaretRight } from 'phosphor-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { light, moderateScale } from '../../theme';
import styles from './AddressCardStyle';

/**
 *
 * @param heading - it's heading
 * @param icon - it is for icon
 * @param title - it's title for address
 * @param subTitle - it's sub title for address
 * @returns - jsx element use for common screen
 */
const AddressCard = ({ heading, icon, title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.rowContainer}>
        <View style={styles.subRowContainer}>
          <View style={styles.iconView}>{icon}</View>
          <View>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.subTitleText}>{subTitle}</Text>
          </View>
        </View>
        <CaretRight size={moderateScale(24)} color={light.black} />
      </View>
    </View>
  );
};

export default AddressCard;
