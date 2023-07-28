import { useDispatch, useSelector } from 'react-redux';
import { CommonStrings, Route } from '../../../constant';
import { CartAction, OrderAction } from '../../../redux';
import { useEffect } from 'react';

/**
 * custome hook for product screen
 * @param navigation - it's represent navigation object
 * @param route - it's represent of route object
 * @returns object for product info screen
 */
const useProduct = (navigation, route) => {
  const { data } = route?.params;
  const dispach = useDispatch();
  const { cartData, isCartLoading } = useSelector(state => state.CartReducer);
  const { userData } = useSelector(state => state.AuthReducer);
  const { isLoading, isCheckOutSuccess } = useSelector(
    state => state.OrderReducer,
  );

  useEffect(() => {
    if (isCheckOutSuccess) {
      dispach(OrderAction.toggleSuccess());
      navigation.navigate(Route.orderPlaced);
    }
  }, [isLoading]);

  const checkCart = cartData?.line_items?.filter(
    item => item.product_id === data.id,
  );

  const goback = () => navigation.goBack();

  const generateCheckout = () => {
    dispach(
      OrderAction.generateCheckoutPending({
        id: data?.id,
        customerId: userData?.id,
        type: CommonStrings.productId,
      }),
    );
  };

  const addToCart = () => {
    dispach(
      CartAction.addToCartPending({
        productId: data?.id,
        cartId: userData?.meta.cartId,
      }),
    );
  };

  return {
    data,
    dispach,
    cartData,
    isCartLoading,
    userData,
    isLoading,
    checkCart,
    goback,
    generateCheckout,
    addToCart,
  };
};

export default useProduct;
