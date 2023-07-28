import { StyleSheet } from 'react-native';
import {
  height,
  horizontalScale,
  light,
  moderateScale,
  verticalScale,
} from '../../theme';

// loader component style
const styles = StyleSheet.create({
  container: {
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: light.transparent,
  },
  imageStyle: {
    width: horizontalScale(100),
    height: verticalScale(100),
  },
  text: { fontSize: moderateScale(18) },
});

export default styles;
