import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { LoaderModal } from '../../components';
import { ButtonLabel, CommonStrings } from '../../constant';
import { light, moderateScale } from '../../theme';
import styles from './CartScreenStyle';
import useCart from './useCart';

/**
 * cart screen
 * @param navigation - it's represent navigation object
 * @returns - jsx element for cart screen
 */
const CartScreen = ({ navigation }) => {
  const {
    cartData,
    userData,
    goBack,
    placeOrder,
    cartRenderiItem,
    cartEmptyComponent,
    isCartCheckoutLoading,
    isQtyUpdate,
    isCartLoading,
  } = useCart(navigation);

  const headerComponent = () => (
    <Text style={styles.myCartText}>{CommonStrings.myCart}</Text>
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={goBack} style={styles.backButtonContainer}>
            <ArrowLeft
              size={moderateScale(24, 0.4)}
              color={light.darkGrey}
              weight="bold"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.flatListView}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cartData?.line_items}
            renderItem={cartRenderiItem}
            ListEmptyComponent={cartEmptyComponent}
            ListHeaderComponent={headerComponent}
            keyExtractor={key => key.id.toString()}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View>
            <Text style={styles.total}>{CommonStrings.total}</Text>
            <Text style={styles.totalText}>
              {cartData?.subtotal?.formatted_with_symbol}
            </Text>
          </View>
          <View style={styles.horizontalSpace}></View>
          <TouchableOpacity
            onPress={() =>
              placeOrder({
                customerId: userData?.id,
                id: cartData?.id,
              })
            }
            style={styles.buttonView}>
            <Text style={styles.buttonText}>{ButtonLabel.placeOrder}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <LoaderModal
        isVisible={isCartCheckoutLoading || isCartLoading || isQtyUpdate}
      />
    </>
  );
};

export default CartScreen;
