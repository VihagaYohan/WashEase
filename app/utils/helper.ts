import {Platform} from 'react-native';

// get device platform OS
const isAndroid = Platform.OS === 'android';

// check if the device is mobile or not
const isMobile = Platform.isTV ? false : true;

export default {
  IS_ANDROID: isAndroid,
  IS_MOBILE: isMobile,
};
