import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  light,
  moderateScale,
  verticalScale,
} from '../../theme';

// custom input feild style
const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(15),
  },
  text: {
    fontSize: moderateScale(14, 0.4),
    color: light.black,
    fontWeight: '600',
    letterSpacing: 1,
    opacity: 0.6,
  },
  inputFeild: {
    paddingHorizontal: horizontalScale(18),
    paddingVertical: verticalScale(18),
    fontSize: moderateScale(15),
    borderColor: light.offWhitePrimary,
    borderWidth: moderateScale(1),
    backgroundColor: light.offWhiteSecondary,
    borderRadius: moderateScale(8),
    color: light.grey,
    fontWeight: '400',
  },
  errorText: {
    color: light.red,
    fontSize: moderateScale(14),
  },
});

export default styles;
