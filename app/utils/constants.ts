import {Dimensions} from 'react-native';

const FONTS = {
  Black: 'Montserrat-Black',
  Bold: 'Montserrat-Bold',
  ExtraBold: 'Montserrat-ExtraBold',
  Italic: 'Montserrat-Italic',
  Light: 'Montserrat-Light',
  Medium: 'Montserrat-Medium',
  Regular: 'Montserrat-Regular',
  SemiBold: 'Montserrat-SemiBold',
  Thin: 'Montserrat-Thin',
};

const SPACES = {
  small: 8,
  medium: 16,
  large: 24,
};

const FONT_SIZE = {
  small: 12,
  medium: 16,
  large: 20,
};

// device screen width and height
const {width, height} = Dimensions.get('screen');

// home screen carousel card width
const CARD_WIDTH = width - SPACES.small * 3;

export default {
  FONTS,
  SPACES,
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  FONT_SIZE,
  CARD_WIDTH,
};
