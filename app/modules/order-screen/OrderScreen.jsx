import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { CommonStrings } from '../../constant';
import styles from './OrderScreenStyle';
import { EmptyOrder, OrderCard } from './component';
import useOrder from './useOrder';

// order screen component
/**
 * order screen component
 * @param navigation - it's represent navigation object
 * @returns - jsx element for login screens
 */
const OrderScreen = ({ navigation }) => {
  const { orderData } = useOrder(navigation);
  const orderCard = item => <OrderCard item={item.item} />;
  const headerComponent = () => (
    <Text style={styles.myCartText}>{CommonStrings.orderDetail}</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.flatListView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={orderData}
          renderItem={orderCard}
          ListEmptyComponent={EmptyOrder}
          ListHeaderComponent={headerComponent}
          keyExtractor={key => key.id.toString()}
        />
      </View>
    </View>
  );
};

export default OrderScreen;
