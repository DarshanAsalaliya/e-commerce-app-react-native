import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  light,
  moderateScale,
  verticalScale,
  width,
} from '../../../../theme';

// emplty product component style
const styles = StyleSheet.create({
  container: {
    backgroundColor: light.white,
    borderRadius: moderateScale(10),
    marginTop: verticalScale(10),
  },
  imageStyle: {
    width: horizontalScale(350),
    height: verticalScale(300),
  },
  text: {
    fontSize: moderateScale(14),
    alignSelf: 'center',
    marginBottom: verticalScale(10),
  },
});

export default styles;
