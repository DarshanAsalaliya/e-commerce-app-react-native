import React from 'react';
import { Image, Text, View } from 'react-native';
import { Images } from '../../../../assets';
import { CommonStrings } from '../../../../constant';
import styles from './IconViewStyle';

/**
 *
 * @returns - jsx element google,facebook,apple icon view component
 */
const IconView = () => {
  return (
    <View style={styles.bottomView}>
      <View style={styles.orLoginWithView}>
        <View style={styles.line}></View>
        <Text style={styles.orLoginText}>{CommonStrings.orLoginWith}</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.iconView}>
          <Image
            source={Images.facebook}
            style={styles.iconImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.horizontalSpace}></View>
        <View style={styles.iconView}>
          <Image
            source={Images.google}
            style={styles.iconImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.horizontalSpace}></View>
        <View style={styles.iconView}>
          <Image
            source={Images.apple}
            style={styles.iconImage}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default IconView;
