import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  light,
  moderateScale,
  verticalScale,
} from '../../theme';

// order placed screen style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: light.white,
    fontSize: moderateScale(16),
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: light.white,
    marginVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(34),
    paddingVertical: verticalScale(16),
    borderRadius: moderateScale(10),
  },
  buttonText: {
    color: light.green,
    fontSize: moderateScale(16),
  },
  priceText: {
    color: light.white,
    fontSize: moderateScale(24),
    fontWeight: '900',
  },
});

export default styles;
