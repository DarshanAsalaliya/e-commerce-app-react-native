import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  light,
  moderateScale,
  verticalScale,
} from '../../../../theme';

// google,facebook,apple icon view component style
const styles = StyleSheet.create({
  orLoginWithView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomView: {
    marginTop: verticalScale(35),
  },
  line: {
    height: verticalScale(1),
    backgroundColor: light.offWhitePrimary,
    flex: 1,
  },
  orLoginText: {
    marginHorizontal: horizontalScale(12),
    color: light.darkGrey,
    fontSize: moderateScale(14),
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(22),
  },
  iconView: {
    flex: 1,
    alignItems: 'center',
    borderRadius: moderateScale(8),
    paddingVertical: verticalScale(15),
    borderColor: light.offWhitePrimary,
    borderWidth: moderateScale(1),
    justifyContent: 'center',
  },
  horizontalSpace: {
    width: horizontalScale(8),
  },
});

export default styles;
