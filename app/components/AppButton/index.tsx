import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
  showIcon?: boolean;
  leadingIcon?: any;
  trailingIcon?: any;
}

const AppButton = ({
  label,
  onPress,
  isPrimary = true,
  buttonStyle,
  labelStyle,
  showIcon = false,
  leadingIcon,
  trailingIcon,
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
      {showIcon && leadingIcon && (
        <Icon
          name={leadingIcon}
          size={25}
          color={
            isPrimary
              ? Colors.white
              : deviceTheme === 'dark'
              ? Colors.white
              : Colors.primary
          }
        />
      )}
      <AppText
        text={label}
        textStyle={{
          ...styles.label,
          ...labelStyle,
          color: isPrimary ? Colors.white : Colors.primary,
        }}
      />
      {showIcon && trailingIcon && (
        <Icon
          name={trailingIcon}
          size={25}
          color={
            isPrimary
              ? Colors.white
              : deviceTheme === 'dark'
              ? Colors.white
              : Colors.primary
          }
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1.5,
    paddingVertical: Constants.SPACES.medium,
    paddingHorizontal: Constants.SPACES.medium,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Constants.SPACES.large,
    flexDirection: 'row',
  },
  label: {
    fontSize: Constants.FONT_SIZE.medium,
    fontFamily: Constants.FONTS.SemiBold,
  },
  icon: {
    marginLeft: Constants.SPACES.small,
  },
});

export default AppButton;
