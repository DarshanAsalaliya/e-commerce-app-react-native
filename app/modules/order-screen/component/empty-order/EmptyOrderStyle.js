import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  light,
  moderateScale,
  verticalScale,
} from '../../../../theme';

// Empty order componet style
const styles = StyleSheet.create({
  container: {
    height: verticalScale(300),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loginButton: {
    width: horizontalScale(300),
    backgroundColor: light.dark,
    paddingVertical: verticalScale(19),
    borderRadius: moderateScale(8),
  },
  buttonText: {
    color: light.white,
    alignSelf: 'center',
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
});

export default styles;
