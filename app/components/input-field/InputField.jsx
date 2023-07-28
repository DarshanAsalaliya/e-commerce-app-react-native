import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { light } from '../../theme';
import styles from './InputFieldStyle';

/**
 *
 * @param val - 'it's represent value of input field
 * @param changeVal - 'it's represent change value function
 * @param placeHolder - 'it's represent place holder
 * @param touched - 'it's represent boolean value
 * @param errors - 'it's represent error message
 * @returns - jsx element represent custom input field
 */
const InputFeild = ({ val, changeVal, placeHolder, touched, errors }) => {
  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={val}
          autoCapitalize="none"
          onChangeText={changeVal}
          placeholder={placeHolder}
          style={styles.inputFeild}
          placeholderTextColor={light.grey}
        />
      </View>
      {errors && touched && <Text style={styles.errorText}>{errors}</Text>}
    </>
  );
};

export default InputFeild;
