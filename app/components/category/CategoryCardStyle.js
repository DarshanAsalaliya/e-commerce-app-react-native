import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  light,
  moderateScale,
  verticalScale,
} from '../../theme';

// category card style
const styles = StyleSheet.create({
  container: {
    backgroundColor: light.white,
    marginRight: horizontalScale(6),
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
    borderColor: light.lightGrey,
    borderWidth: moderateScale(0.5),
    borderRadius: moderateScale(10),
    alignItems: 'center',
  },
  detailText: {
    height: verticalScale(20),
    fontSize: moderateScale(14),
    color: light.black,
  },
  selectContainer: {
    backgroundColor: light.dark,
    marginRight: horizontalScale(6),
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
    borderColor: light.lightGrey,
    borderWidth: moderateScale(0.5),
    borderRadius: moderateScale(10),
    alignItems: 'center',
  },
  selectText: {
    height: verticalScale(20),
    fontSize: moderateScale(14),
    color: light.white,
  },
});

export default styles;
