import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';

// components
import {AppText} from '../';

// constants
import {Colors, Constants} from '../../utils';

// hooks
import {useDeviceTheme} from '../../hooks/';

interface propTypes {
  label: string;
  onPress: () => void;
  isPrimary?: boolean;
  buttonStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

const AppButton = ({
  label,
  onPress,
  isPrimary = true,
  buttonStyle,
  labelStyle,
}: propTypes) => {
  const deviceTheme = useDeviceTheme();
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...buttonStyle,
        backgroundColor: isPrimary
          ? Colors.primary
          : deviceTheme === 'dark'
          ? Colors.black
          : Colors.white,
        borderColor: Colors.primary,
      }}
      onPress={() => onPress()}>
      <AppText
        text={label}
        textStyle={{
          ...styles.label,
          ...labelStyle,
          color: isPrimary ? Colors.white : Colors.primary,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1.5,
    paddingVertical: Constants.SPACES.medium,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Constants.SPACES.large,
  },
  label: {
    fontSize: Constants.FONT_SIZE.medium,
    fontFamily: Constants.FONTS.SemiBold,
  },
});

export default AppButton;
