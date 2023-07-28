import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  light,
  moderateScale,
  verticalScale,
} from '../../theme';

// product card style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: verticalScale(10),
    backgroundColor: light.white,
    borderRadius: moderateScale(10),
    borderColor: light.lightGrey,
    borderWidth: moderateScale(0.5),
  },
  offerView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: light.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
    zIndex: 1,
  },
  offerText: {
    fontSize: moderateScale(10),
    color: light.white,
    fontWeight: 'bold',
    letterSpacing: 1,
    padding: moderateScale(5),
  },
  imageView: {
    width: '100%',
    height: verticalScale(120),
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(8),
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
  },
  detailContainer: {
    marginLeft: horizontalScale(10),
    marginBottom: verticalScale(6),
  },
  title: {
    fontSize: moderateScale(12),
    marginBottom: verticalScale(2),
    fontWeight: '600',
    color: light.black,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  availbaleText: {
    fontSize: moderateScale(12),
    color: light.green,
  },
  circle: {
    marginRight: horizontalScale(6),
  },
  priceText: {
    fontSize: moderateScale(14),
  },
});

export default styles;
