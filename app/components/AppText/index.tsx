import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

// constants
import {Constants} from '../../utils';

interface propTypes {
  text: string;
  textStyle?: TextStyle;
}

const AppText = ({text, textStyle}: propTypes) => {
  return <Text style={{...styles.text, ...textStyle}}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Constants.FONTS.Medium,
  },
});

export default AppText;
