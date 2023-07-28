import {
  ArrowLeft,
  LinkSimpleHorizontal,
  MapPin,
  ShoppingCart,
} from 'phosphor-react-native';
import React from 'react';
import {
  Animated,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AddressCard, LoaderModal } from '../../../components';
import { ButtonLabel, CommonStrings } from '../../../constant';
import { horizontalScale, light, moderateScale, width } from '../../../theme';
import styles from './ProductInfoStyle';
import useProduct from './useProduct';

const scrollX = new Animated.Value(0);
let position = Animated.divide(scrollX, width);

/**
 * product info screen
 * @param navigation - it's represent navigation object
 * @param route - it's represent route object
 * @returns - jsx element for product info screen
 */
const ProductInfo = ({ navigation, route }) => {
  const {
    data,
    isCartLoading,
    isLoading,
    checkCart,
    goback,
    generateCheckout,
    addToCart,
  } = useProduct(navigation, route);

  const RenderProduct = ({ item }) => {
    return (
      <View style={styles.imageView}>
        <Image source={{ uri: item }} style={styles.image} />
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.sliderContainer}>
            <View style={styles.headerContainer}>
              <TouchableOpacity
                onPress={goback}
                style={styles.backButtonContainer}>
                <ArrowLeft
                  size={moderateScale(24, 0.4)}
                  color={light.darkGrey}
                  weight="bold"
                />
              </TouchableOpacity>
            </View>
            <FlatList
              data={[data?.image.url]}
              horizontal
              renderItem={RenderProduct}
              showsHorizontalScrollIndicator={false}
              decelerationRate={0.8}
              snapToInterval={width}
              bounces={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false },
              )}
            />
            <View style={styles.sliderIndicatorView}>
              {[data?.image.url] &&
                [data?.image.url].map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: 'clamp',
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={[
                        styles.animatedView,
                        { opacity },
                      ]}></Animated.View>
                  );
                })}
            </View>
          </View>
          <View style={styles.detailContainer}>
            <View style={styles.shoppingContainer}>
              <ShoppingCart
                size={moderateScale(18)}
                color={light.black}
                marginRight={horizontalScale(6)}
              />
              <Text
                style={{
                  fontSize: moderateScale(12),
                  color: light.black,
                }}>
                {CommonStrings.shopping}
              </Text>
            </View>
            <View style={styles.rowContainer}>
              <View>
                <Text style={styles.priceText}>
                  {data?.price.formatted_with_symbol ?? 20000}
                </Text>
                <Text style={{ fontSize: moderateScale(14) }}>
                  {CommonStrings.offer} {25}%~ {CommonStrings.rupee}
                  {((data?.price.raw * 25) / 100).toFixed(2)} (
                  {CommonStrings.rupee}
                  {(data?.price.raw - (data?.price.raw * 25) / 100).toFixed(2)})
                </Text>
              </View>
              <LinkSimpleHorizontal
                size={moderateScale(24)}
                color={light.green}
              />
            </View>
            <View>
              <Text style={styles.productName}>
                {data?.name ?? CommonStrings.title}
              </Text>
            </View>
            <Text style={styles.description}>
              {data?.description.replace(CommonStrings.avoidP, '') ??
                CommonStrings.description}
            </Text>
            <AddressCard
              heading={CommonStrings.headQuater}
              icon={<MapPin size={moderateScale(16)} color={light.green} />}
              title={CommonStrings.flatTwo}
              subTitle={CommonStrings.cityTwo}
            />
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={generateCheckout}
            style={styles.buttonView}>
            <Text style={styles.buttonText}>{ButtonLabel.buyNow}</Text>
          </TouchableOpacity>
          <View style={styles.cartContainer}>
            <TouchableOpacity onPress={addToCart} style={styles.cartButton}>
              <ShoppingCart size={moderateScale(24)} color={light.white} />
            </TouchableOpacity>
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>
                {checkCart[0]?.quantity ?? 0}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <LoaderModal isVisible={isLoading || isCartLoading} />
    </>
  );
};

export default ProductInfo;
