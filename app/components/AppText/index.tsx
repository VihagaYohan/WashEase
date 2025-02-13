import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

// constants
import {Constants, Colors} from '../../utils';

// hooks
import {useDeviceTheme} from '../../hooks';

interface propTypes {
  text: string;
  textStyle?: TextStyle;
}

const AppText = ({text, textStyle}: propTypes) => {
  const deviceTheme = useDeviceTheme();

  return (
    <Text
      style={{
        ...styles.text,
        color: deviceTheme === 'dark' ? Colors.white : Colors.black,
        ...textStyle,
      }}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Constants.FONTS.Medium,
  },
});

export default AppText;
