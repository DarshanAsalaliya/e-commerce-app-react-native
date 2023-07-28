import React from 'react';
import { Text, View } from 'react-native';
import { CommonStrings } from '../../../../constant';
import styles from './OrderCardStyle';

/**
 * order card for order screen
 * @param item - it's represent order data
 * @returns - jsx element for order screen
 */
const OrderCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.orderText}>{CommonStrings.orderId}</Text>
        <Text style={styles.orderText}>{item?.id}</Text>
      </View>
      {item?.order?.line_items?.map((data, index) => (
        <View key={index} style={styles.rowContainer}>
          <Text numberOfLines={1} style={styles.productText}>
            {data?.product_name}
          </Text>
          <Text style={styles.productPriceText}>
            {data?.price.formatted_with_symbol}
          </Text>
        </View>
      ))}
      <View style={styles.rowContainer}>
        <Text style={styles.orderText}>{CommonStrings.total}</Text>
        <Text style={styles.orderText}>
          {item?.order.total?.formatted_with_symbol}
        </Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.detailText}>{CommonStrings.status}</Text>
        <Text style={styles.status}>{item?.status_payment}</Text>
      </View>
    </View>
  );
};

export default OrderCard;
