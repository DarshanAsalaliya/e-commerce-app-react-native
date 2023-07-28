import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  light,
  moderateScale,
  verticalScale,
  width,
} from '../../theme';

// cart screen style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.offWhite,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    flexDirection: 'row',
  },
  backButtonContainer: {
    backgroundColor: light.white,
    borderRadius: moderateScale(10),
    padding: moderateScale(8),
    borderColor: light.lightGrey,
    borderWidth: 0.5,
    marginLeft: horizontalScale(16),
    marginTop: verticalScale(16),
  },

  flatListView: {
    paddingHorizontal: horizontalScale(16),
    marginBottom: verticalScale(80),
  },
  myCartText: {
    fontSize: moderateScale(20),
    color: light.black,
    fontWeight: '500',
    letterSpacing: 1,
    paddingTop: verticalScale(20),
    marginBottom: verticalScale(10),
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

  totalText: {
    fontSize: moderateScale(18),
    fontWeight: '500',
    color: light.black,
  },
  emptyView: {
    height: verticalScale(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: moderateScale(18),
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
  },
  buttonText: {
    fontSize: moderateScale(14),
    fontWeight: '700',
    letterSpacing: 1,
    color: light.white,
    textTransform: 'uppercase',
  },
  cartButton: {
    position: 'relative',
    padding: moderateScale(12),
    backgroundColor: light.black,
    borderRadius: moderateScale(10),
  },
  horizontalSpace: {
    width: horizontalScale(10),
  },
  badgeText: {
    paddingHorizontal: moderateScale(5),
    paddingVertical: moderateScale(2),
    color: light.white,
  },
  total: {
    fontSize: moderateScale(14),
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: light.blackTransparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
