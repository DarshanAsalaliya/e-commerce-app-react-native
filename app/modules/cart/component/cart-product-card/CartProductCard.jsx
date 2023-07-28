import { Minus, Plus, Trash } from 'phosphor-react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Images } from '../../../../assets';
import { CommonStrings } from '../../../../constant';
import { CartAction } from '../../../../redux';
import { light, moderateScale } from '../../../../theme';
import { deleteAlert } from '../../../../utils';
import styles from './CartProductCardStyle';

/**
 * cart card component for cart screen
 * @param item - it's represent cart data
 * @returns - jsx element for cart screen
 */
const CartProductCard = ({ item }) => {
  const dispach = useDispatch();
  const { cartData } = useSelector(state => state.CartReducer);

  const confirmDelete = () => {
    dispach(
      CartAction.removeItemPending({
        cartId: cartData?.id,
        lineId: item?.item.id,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          src={item?.item?.image.url ?? Images.sample}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.titleText} numberOfLines={2}>
            {item?.item?.name ?? CommonStrings.productName}
          </Text>
          <View style={styles.subDetailContainer}>
            <Text style={styles.subTitle}>
              {CommonStrings.rupee}
              {item?.item?.price.raw ?? 20200}
            </Text>
          </View>
        </View>
        <View style={styles.qutRemoveContainer}>
          <View style={styles.qutContainer}>
            <TouchableOpacity
              onPress={() =>
                dispach(
                  CartAction.updateQuantityPending({
                    cartId: cartData?.id,
                    lineId: item?.item?.id,
                    qty: item?.item?.quantity - 1,
                  }),
                )
              }>
              <View style={styles.iconView}>
                <Minus color={light.red} size={moderateScale(20)} />
              </View>
            </TouchableOpacity>
            <Text style={styles.qutText}>{item?.item?.quantity ?? 1}</Text>
            <TouchableOpacity
              onPress={() =>
                dispach(
                  CartAction.updateQuantityPending({
                    cartId: cartData?.id,
                    lineId: item?.item?.id,
                    qty: item?.item?.quantity + 1,
                  }),
                )
              }>
              <View style={styles.iconView}>
                <Plus size={moderateScale(20)} color={light.green} />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.removeIconView}
            onPress={() => deleteAlert(confirmDelete)}>
            <Trash color={light.red} size={moderateScale(22)} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartProductCard;
