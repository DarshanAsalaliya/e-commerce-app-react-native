import { Api } from '../config';
import { apiUrl } from '../constant';

// cart service
export const createCart = async () => {
  try {
    const createCartResponse = await Api.get(apiUrl.carts);
    return createCartResponse.data;
  } catch (e) {}
};

export const getCarts = async id => {
  try {
    const getCartsResponse = await Api.get(`${apiUrl.carts}/${id}`);
    return getCartsResponse.data;
  } catch (e) {}
};

export const addToCart = async data => {
  try {
    const addToCartResponse = await Api.post(`${apiUrl.carts}/${data.cartId}`, {
      id: data.productId,
    });
    return addToCartResponse.data;
  } catch (e) {}
};

export const removeItem = async data => {
  try {
    const removeResponse = await Api.delete(
      `${apiUrl.carts}/${data.cartId}${apiUrl.items}/${data.lineId}`,
    );
    return removeResponse.data;
  } catch (e) {}
};

export const updateQty = async data => {
  try {
    const updateResponse = await Api.put(
      `${apiUrl.carts}/${data.cartId}${apiUrl.items}/${data.lineId}`,
      {
        quantity: data.qty,
      },
    );
    return updateResponse.data;
  } catch (e) {}
};
