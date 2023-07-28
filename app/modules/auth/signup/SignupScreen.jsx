import React from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { InputField } from '../../../components';
import { ButtonLabel, CommonStrings, PlaceHolder } from '../../../constant';
import { light } from '../../../theme';
import { IconView } from '../component';
import styles from './SignupScreenStyle';
import useSignup from './useSignup';

/**
 * signup screen
 * @param navigation - it's reperesent navigation object
 * @returns - jsx element for signup screen
 */
const SignupScreen = ({ navigation }) => {
  const { formik, isLoading, loginRoute } = useSignup(navigation);

  return (
    <View style={styles.mainView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Text style={styles.titleText}>{CommonStrings.hellomsj}</Text>
            <InputField
              placeHolder={PlaceHolder.firstname}
              val={formik.values.firstname}
              changeVal={formik.handleChange('firstname')}
              errors={formik.errors.firstname}
              touched={formik.touched.firstname}
            />
            <InputField
              placeHolder={PlaceHolder.lastname}
              val={formik.values.lastname}
              changeVal={formik.handleChange('lastname')}
              errors={formik.errors.lastname}
              touched={formik.touched.lastname}
            />
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
            {!isLoading ? (
              <Pressable
                style={styles.loginButton}
                onPress={formik.handleSubmit}>
                <Text style={styles.buttonText}>{ButtonLabel.register}</Text>
              </Pressable>
            ) : (
              <Pressable style={styles.loginButton}>
                <ActivityIndicator color={light.white} />
              </Pressable>
            )}
            <IconView />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.bottomView}>
        <Text style={styles.bottomText}>{CommonStrings.alreadyRegister}</Text>
        <TouchableOpacity onPress={loginRoute}>
          <Text style={styles.registerNow}>{CommonStrings.loginNow}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
