import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

const isTablet = () => {
  if (Platform.OS === 'ios' && Platform.isPad) {
    return true;
  }

  const aspectRatio = height / width;
  const isLargeScreen = Math.min(width, height) >= 600;
  const isAspectRatioTablet = aspectRatio < 1.6;

  return isLargeScreen || isAspectRatioTablet;
};

export const IS_TABLET = isTablet();
