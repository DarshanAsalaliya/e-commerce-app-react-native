import { useDispatch, useSelector } from 'react-redux';
import { OrderAction } from '../../redux';
import { CartProductCard } from './component/cart-product-card';
import { CartEmptyComponent } from './component/empty-component';
import { Route } from '../../constant';
import { useEffect } from 'react';

/**
 *
 * @param navigation- it's represent navigation object
 * @returns return object for cart screen
 */
const useCart = navigation => {
  const { cartData, isQtyUpdate, isCartLoading } = useSelector(
    state => state.CartReducer,
  );
  const userData = useSelector(state => state.AuthReducer.userData);
  const { isCartCheckoutLoading, isCheckOutSuccess } = useSelector(
    state => state.OrderReducer,
  );

  const dispach = useDispatch();

  useEffect(() => {
    if (isCheckOutSuccess) {
      dispach(OrderAction.toggleSuccess());
      navigation.navigate(Route.orderPlaced);
    }
  }, [isCartCheckoutLoading]);

  const goBack = () => {
    navigation.goBack();
  };
  const placeOrder = data => {
    dispach(
      OrderAction.generateCartCheckoutPending({
        type: 'cart',
        customerId: data.customerId,
        id: data.id,
      }),
    );
  };

  const cartRenderiItem = item => <CartProductCard item={item} />;
  const cartEmptyComponent = () => <CartEmptyComponent />;

  return {
    cartData,
    userData,
    dispach,
    goBack,
    placeOrder,
    cartRenderiItem,
    cartEmptyComponent,
    isCartCheckoutLoading,
    isQtyUpdate,
    isCartLoading,
  };
};

export default useCart;
