import { Api } from '../config';
import { apiUrl } from '../constant';

//category servoce
export const getCategory = async () => {
  try {
    const category = await Api.get(apiUrl.categories);
    return category.data.data;
  } catch (e) {}
};
