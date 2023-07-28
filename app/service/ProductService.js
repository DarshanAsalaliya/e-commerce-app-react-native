import { Api } from '../config';
import { apiUrl } from '../constant';

// product service
export const getProducts = async () => {
  try {
    const products = await Api.get(apiUrl.products);
    return products.data.data;
  } catch (e) {}
};

export const checkoutProducts = async id => {
  try {
    const checkOutProducts = await Api.get(apiUrl.checkouts + id);
    return checkOutProducts.data.data;
  } catch (e) {}
};
