import { StyleSheet } from 'react-native';
import {
  globalMetrics,
  horizontalScale,
  light,
  moderateScale,
  verticalScale,
} from '../../../../theme';

// cart product style
const styles = StyleSheet.create({
  container: {
    height: verticalScale(120),
    marginVertical: verticalScale(6),
    paddingHorizontal: horizontalScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: light.white,
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: light.lightGrey,
  },
  imageView: {
    width: '30%',
    height: verticalScale(100),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    marginRight: horizontalScale(8),
  },
  imageStyle: {
    width: '100%',
    aspectRatio: globalMetrics.isPad ? 12 / 8 : 12 / 9,
    resizeMode: 'contain',
  },
  detailContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
  },
  titleText: {
    fontSize: moderateScale(14),
    maxWidth: '100%',
    color: light.black,
    fontWeight: '600',
    letterSpacing: 1,
  },
  subDetailContainer: {
    marginTop: verticalScale(4),
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.6,
  },
  subTitle: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    maxWidth: '85%',
    marginRight: horizontalScale(4),
  },
  qutRemoveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconView: {
    borderRadius: moderateScale(5),
    padding: moderateScale(2),
    borderWidth: moderateScale(1),
    borderColor: light.backgroundMedium,
    opacity: 0.5,
  },
  qutText: {
    marginHorizontal: horizontalScale(20),
    fontSize: moderateScale(14),
  },
  removeIconView: {
    padding: moderateScale(4),
  },
});

export default styles;
