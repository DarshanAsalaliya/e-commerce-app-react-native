import React from 'react';
import { Image, Text, View } from 'react-native';
import { Images } from '../../assets';
import { CommonStrings } from '../../constant';
import styles from './LoaderStyle';

/**
 *
 * @returns - jsx element for loader
 */
const Loader = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.loader} style={styles.imageStyle} />
      <Text style={styles.text}>{CommonStrings.loading}</Text>
    </View>
  );
};

export default Loader;
