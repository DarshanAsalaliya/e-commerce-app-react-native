import { useFormik } from 'formik';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CommonStrings, Route } from '../../../constant';
import { AuthAction } from '../../../redux';
import { ValidationSchema, messageAlert } from '../../../utils';

/**
 * custom hook of login screen
 * @param navigation - it's represent navigation object
 * @returns - object for login screens
 */
const useLogin = navigation => {
  const dispach = useDispatch();
  const { isLoading, userData } = useSelector(state => state.AuthReducer);
  useEffect(() => {
    if (userData) {
      if (userData?.pagination?.total === 0) {
        messageAlert(CommonStrings.noAccount);
        dispach(AuthAction.clear());
      } else {
        if (userData?.meta?.password === formik.values.pass) {
          dispach(AuthAction.login());
        } else {
          messageAlert(CommonStrings.wrongPasseord);
          dispach(AuthAction.clear());
        }
      }
    }
  }, [userData]);
  const formik = useFormik({
    initialValues: {
      email: '',
      pass: '',
    },
    onSubmit: () => onSubmitFormik(),
    validationSchema: ValidationSchema,
  });
  const onSubmitFormik = () => {
    const loginData = {
      email: formik.values.email,
      password: formik.values.pass,
    };
    dispach(AuthAction.loginPending(loginData));
  };

  const signupRoute = () => {
    navigation.navigate(Route.signup);
  };

  return { dispach, formik, isLoading, signupRoute };
};

export default useLogin;
