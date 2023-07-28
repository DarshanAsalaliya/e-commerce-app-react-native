import { Dimensions, Platform } from 'react-native';

let { width, height } = Dimensions.get('window');

if (width > height) {
  [width, height] = [height, width];
}

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const globalMetrics = {
  isAndroid: Platform.OS === 'android',
  isIos: Platform.OS === 'ios',
  isPad: Platform.OS === 'ios' && Platform.isPad,
  isTv: Platform.isTV,
};

export {
  horizontalScale,
  verticalScale,
  moderateScale,
  globalMetrics,
  width,
  height,
};
