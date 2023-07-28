import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthAction, CartAction } from '../../../redux';
import { ValidationSchemaSignup } from '../../../utils';
import { Route } from '../../../constant';

/**
 * custom hook of signup screen
 * @param navigation - it's represent navigation object
 * @returns - object for signup screen
 */
const useSignup = navigation => {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(CartAction.createCartPending());
  }, []);

  const { isLoading } = useSelector(state => state.AuthReducer);
  const { cartData } = useSelector(state => state.CartReducer);

  const formik = useFormik({
    initialValues: {
      email: '',
      firstname: '',
      pass: '',
      lastname: '',
    },
    onSubmit: () => onSubmitFormik(),
    validationSchema: ValidationSchemaSignup,
  });

  const onSubmitFormik = async () => {
    const signupData = {
      firstname: formik.values.firstname,
      lastname: formik.values.lastname,
      email: formik.values.email,
      meta: {
        password: formik.values.pass,
        cartId: cartData?.id,
      },
    };
    dispach(AuthAction.signupPending(signupData));
  };

  const loginRoute = () => {
    navigation.navigate(Route.login);
  };

  return { formik, isLoading, loginRoute };
};

export default useSignup;
