import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  light,
  moderateScale,
  verticalScale,
} from '../../../theme';

// sign up screen style
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: light.white,
  },
  container: {
    marginHorizontal: horizontalScale(22),
  },
  titleText: {
    color: light.primary,
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    marginTop: verticalScale(52),
    marginRight: horizontalScale(42),
    marginBottom: verticalScale(32),
  },
  subText: {
    fontSize: moderateScale(14),
    alignSelf: 'flex-end',
    fontWeight: '400',
    color: light.dark,
    marginBottom: verticalScale(30),
  },
  loginButton: {
    backgroundColor: light.dark,
    paddingVertical: verticalScale(19),
    borderRadius: moderateScale(8),
    marginTop: verticalScale(30),
  },
  buttonText: {
    color: light.white,
    alignSelf: 'center',
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'center',
    marginBottom: verticalScale(26),
    flex: 1,
  },
  bottomText: {
    fontSize: moderateScale(14),
  },
  registerNow: {
    color: light.secondary,
    fontSize: moderateScale(14),
  },
});

export default styles;
