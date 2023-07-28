import React from 'react';
import { Image, Text, View } from 'react-native';
import { Images } from '../../../../assets';
import { CommonStrings } from '../../../../constant';
import styles from './EmptyProductStyle';

// empty product component
const EmptyProduct = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          resizeMode="contain"
          source={Images.notFound}
        />
      </View>
      <Text style={styles.text}>{CommonStrings.noProduct}</Text>
    </View>
  );
};

export default EmptyProduct;
