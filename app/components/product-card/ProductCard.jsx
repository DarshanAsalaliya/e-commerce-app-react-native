import { useNavigation } from '@react-navigation/native';
import { Circle } from 'phosphor-react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Images } from '../../assets';
import { CommonStrings, Route } from '../../constant';
import { light, moderateScale } from '../../theme';
import styles from './ProductCardStyle';

/**
 *
 * @param item - it's represent product data
 * @returns - jsx element for show product in home screen
 */
const ProductCard = ({ item }) => {
  const navigation = useNavigation();
  const productInfoRoute = () => {
    navigation.navigate(Route.productInfoRoute, { data: item?.item });
  };

  return (
    <TouchableOpacity onPress={productInfoRoute} style={styles.container}>
      <View style={styles.offerView}>
        <Text style={styles.offerText}>{item?.discountPercentage ?? 25}%</Text>
      </View>
      <View style={styles.imageView}>
        <Image
          resizeMode="contain"
          src={item?.item?.image.url ?? Images.imageLoader}
          style={styles.image}
        />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>
          {item?.item?.name ?? CommonStrings.productName}
        </Text>
        <View style={styles.rowContainer}>
          <Circle
            size={moderateScale(12)}
            style={styles.circle}
            color={light.green}
            weight="fill"
          />
          <Text style={styles.availbaleText}>{CommonStrings.availabel}</Text>
        </View>
        <Text style={styles.priceText}>
          {item?.item?.price.formatted_with_symbol ?? 200}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
