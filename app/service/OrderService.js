import { Api } from '../config';
import { CommonStrings, apiUrl } from '../constant';

// order service
export const orderList = async id => {
  try {
    const orderList = await Api.get(
      `${apiUrl.customers}/${id}${apiUrl.orders}`,
    );
    if (orderList.data.data) {
      return orderList.data.data;
    } else {
      return orderList.data;
    }
  } catch (e) {}
};

export const generateCheckout = async data => {
  try {
    const tokenResponse = await Api.get(apiUrl.checkouts + data.id, {
      params: {
        type: data.type,
      },
    });
    const captureResponse = await Api.post(
      apiUrl.checkouts + tokenResponse.data.id,
      {
        customer: {
          id: data.customerId,
        },
        payment: {
          gateway: CommonStrings.testGateWay,
          card: {
            number: CommonStrings.cardNumber,
            expiry_month: 10,
            expiry_year: 2025,
            cvc: 342,
            postal_zip_code: CommonStrings.postalZipcode,
          },
        },
      },
    );
    return captureResponse.data;
  } catch (e) {}
};
