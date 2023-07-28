import { StyleSheet } from 'react-native';
import {
  globalMetrics,
  horizontalScale,
  light,
  moderateScale,
  verticalScale,
  width,
} from '../../../theme';

// product info style
const styles = StyleSheet.create({
  imageView: {
    width: width,
    height: verticalScale(300),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: globalMetrics.isPad ? 12 / 7 : 12 / 9,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    marginBottom: verticalScale(90),
  },
  sliderContainer: {
    width: '100%',
    backgroundColor: light.white,
    borderBottomRightRadius: moderateScale(20),
    borderBottomLeftRadius: moderateScale(20),
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(4),
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: verticalScale(16),
    paddingLeft: horizontalScale(16),
    zIndex: 1,
  },
  backButtonContainer: {
    backgroundColor: light.offWhite,
    borderRadius: moderateScale(10),
    padding: moderateScale(12),
  },
  sliderIndicatorView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(16),
    marginTop: verticalScale(32),
  },
  animatedView: {
    width: '16%',
    height: verticalScale(2.4),
    backgroundColor: light.black,
    marginHorizontal: horizontalScale(4),
    borderRadius: moderateScale(100),
  },
  detailContainer: {
    paddingHorizontal: horizontalScale(16),
    marginTop: verticalScale(6),
  },
  shoppingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(14),
  },
  rowContainer: {
    flexDirection: 'row',
    marginVertical: verticalScale(4),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceText: {
    fontSize: moderateScale(18),
    fontWeight: '500',
    maxWidth: '85%',
    color: light.black,
    marginBottom: verticalScale(4),
  },
  productName: {
    fontSize: moderateScale(24, 0.4),
    fontWeight: '600',
    letterSpacing: 0.5,
    marginVertical: verticalScale(4),
    color: light.black,
  },
  description: {
    fontSize: moderateScale(12),
    color: light.black,
    fontWeight: '400',
    letterSpacing: 1,
    opacity: 0.5,
    lineHeight: verticalScale(20),
    maxWidth: '85%',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: verticalScale(14),
    borderBottomColor: light.lightGrey,
    borderBottomWidth: moderateScale(1),
    paddingBottom: verticalScale(20),
  },
  subRowContainer: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
  },
  mapIconView: {
    color: light.blue,
    backgroundColor: light.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(12),
    borderRadius: moderateScale(100),
    marginRight: horizontalScale(10),
  },
  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: verticalScale(10),
    height: '8%',
    width: width,
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
  },
  buttonView: {
    flex: 1,
    height: '90%',
    backgroundColor: light.green,
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  buttonText: {
    fontSize: moderateScale(14),
    fontWeight: '700',
    letterSpacing: 1,
    color: light.white,
    textTransform: 'uppercase',
  },
  cartContainer: {
    position: 'relative',
    marginLeft: horizontalScale(10),
  },
  cartButton: {
    padding: moderateScale(12),
    backgroundColor: light.black,
    borderRadius: moderateScale(10),
    marginRight: horizontalScale(4),
    marginTop: verticalScale(10),
  },
  horizontalSpace: {
    width: horizontalScale(10),
  },
  badgeText: {
    paddingHorizontal: moderateScale(5),
    paddingVertical: moderateScale(2),
    color: light.white,
  },
  removeView: {
    flex: 1,
    height: '90%',
    backgroundColor: light.dark,
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },

  badgeContainer: {
    position: 'absolute',
    backgroundColor: 'red',
    zIndex: 1,
    right: 0,
    paddingHorizontal: horizontalScale(7),
    paddingVertical: verticalScale(4),
    borderRadius: moderateScale(10),
  },
  badgeText: {
    color: light.white,
    fontSize: moderateScale(14),
  },
});

export default styles;
