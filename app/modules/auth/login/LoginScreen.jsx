import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { InputField } from '../../../components';
import { ButtonLabel, CommonStrings, PlaceHolder } from '../../../constant';
import { light } from '../../../theme';
import { IconView } from '../component';
import styles from './LoginScreenStyle';
import useLogin from './useLogin';

/**
 * login screen
 * @param navigation - it's represent navigation object
 * @returns - jsx element for login screen
 */
const LoginScreen = ({ navigation }) => {
  const { formik, isLoading, signupRoute } = useLogin(navigation);
  return (
    <View style={styles.mainView}>
      <View style={styles.container}>
        <Text style={styles.titleText}>{CommonStrings.welcome}</Text>
        <InputField
          placeHolder={PlaceHolder.email}
          val={formik.values.email}
          changeVal={formik.handleChange('email')}
          errors={formik.errors.email}
          touched={formik.touched.email}
        />
        <InputField
          placeHolder={PlaceHolder.password}
          val={formik.values.pass}
          changeVal={formik.handleChange('pass')}
          errors={formik.errors.pass}
          touched={formik.touched.pass}
        />
        <Text style={styles.subText}>{CommonStrings.forgetPassword}</Text>
        {!isLoading ? (
          <Pressable style={styles.loginButton} onPress={formik.handleSubmit}>
            <Text style={styles.buttonText}>{ButtonLabel.login}</Text>
          </Pressable>
        ) : (
          <Pressable style={styles.loginButton}>
            <ActivityIndicator color={light.white} />
          </Pressable>
        )}
        <IconView />
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.bottomText}>{CommonStrings.notRegister}</Text>
        <TouchableOpacity onPress={signupRoute}>
          <Text style={styles.registerNow}>{ButtonLabel.registerNow}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
