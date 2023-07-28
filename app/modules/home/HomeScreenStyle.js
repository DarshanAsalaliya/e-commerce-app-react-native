import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  light,
  moderateScale,
  verticalScale,
} from '../../theme';

// home screen style
const styles = StyleSheet.create({
  container: {
    backgroundColor: light.offWhite,
    padding: moderateScale(16),
  },
  textInputContainer: {
    backgroundColor: light.white,
    borderColor: light.lightGrey,
    borderWidth: 0.5,
    borderRadius: moderateScale(5),
    padding: moderateScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(4),
  },
  textInput: {
    letterSpacing: 1,
    fontSize: moderateScale(14),
    marginLeft: horizontalScale(8),
    flex: 1,
  },

  verticalSpacing: {
    height: verticalScale(16),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subHeading: {
    fontSize: moderateScale(18),
    color: light.black,
    fontWeight: '500',
    letterSpacing: 1,
  },
  subTitle: {
    fontSize: moderateScale(14),
    color: light.black,
    fontWeight: '400',
    opacity: 0.5,
    marginLeft: horizontalScale(10),
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  backButtonContainer: {
    backgroundColor: light.white,
    borderRadius: moderateScale(10),
    padding: moderateScale(8),
    margin: moderateScale(4),
    borderColor: light.lightGrey,
    borderWidth: 0.5,
  },
  flatList: { marginVertical: verticalScale(10) },
  cartIconContainer: {
    position: 'relative',
  },
  badgeContainer: {
    position: 'absolute',
    backgroundColor: 'red',
    zIndex: 1,
    right: 0,
    top: 0,
    paddingHorizontal: horizontalScale(7),
    paddingVertical: verticalScale(4),
    borderRadius: moderateScale(10),
  },
  badgeCover: {},
  badgeText: {
    color: light.white,
    fontSize: moderateScale(14),
  },
  columnGap: {
    gap: verticalScale(10),
  },
});

export default styles;
