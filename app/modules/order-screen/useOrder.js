import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OrderAction } from '../../redux';

/**
 * custom hook of order screen
 * @param navigation - it's represent navigation object
 * @returns - object for order screens
 */
const useOrder = navigation => {
  const dispach = useDispatch();
  const userData = useSelector(state => state.AuthReducer.userData);
  const orderData = useSelector(state => state.OrderReducer.orderData);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispach(OrderAction.orderListPending(userData?.id));
    });
    return unsubscribe;
  }, [navigation]);

  return { userData, orderData, dispach };
};

export default useOrder;
