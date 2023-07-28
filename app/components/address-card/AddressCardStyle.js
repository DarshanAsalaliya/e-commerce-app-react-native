import { StyleSheet } from 'react-native';
import {
  verticalScale,
  moderateScale,
  light,
  horizontalScale,
} from '../../theme';

// address card style
const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(10),
  },
  heading: {
    fontSize: moderateScale(16),
    color: light.black,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: verticalScale(14),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  iconView: {
    backgroundColor: light.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(12),
    borderRadius: moderateScale(10),
    marginRight: horizontalScale(18),
  },
  titleText: {
    fontSize: moderateScale(14),
    color: light.black,
    fontWeight: '500',
  },
  subTitleText: {
    fontSize: moderateScale(14),
    color: light.black,
    fontWeight: '400',
    lineHeight: verticalScale(20),
    opacity: 0.5,
  },
});

export default styles;
