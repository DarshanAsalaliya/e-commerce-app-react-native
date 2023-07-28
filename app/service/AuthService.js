import { Api } from '../config';
import { apiUrl } from '../constant';

// auth service
export const signUp = async data => {
  try {
    const signupResponse = await Api.post(apiUrl.customers, data);
    return signupResponse.data;
  } catch (e) {}
};

export const login = async data => {
  try {
    const loginResponse = await Api.get(apiUrl.customers, {
      params: {
        query: data.email,
      },
    });
    return loginResponse.data.data[0] ?? loginResponse.data.meta;
  } catch (e) {}
};

export const customerUpdate = async data => {
  try {
    const updateResponse = await Api.put(
      `${apiUrl.customers}/${data.customer.id}`,
      {
        meta: {
          ...data.customer.meta,
          cartId: data.cartId,
        },
      },
    );
    return updateResponse.data;
  } catch (e) {}
};
