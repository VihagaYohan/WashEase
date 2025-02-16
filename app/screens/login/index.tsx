import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// components
import {AppButton, AppContainer, AppText} from '../../components';

// constants
import {Constants, Colors} from '../../utils';

// hooks
import {useDeviceTheme} from '../../hooks';

const LoginScreen = () => {
  const deviceTheme = useDeviceTheme();
  const navigation = useNavigation();
  return (
    <AppContainer
      containerStyle={{
        ...styles.container,
        ...{
          backgroundColor:
            deviceTheme === 'dark' ? Colors.black : Colors.white1,
        },
      }}>
      <AppText text="WashEase" textStyle={{...styles.title}} />
      <AppText
        text="Welcome to WashEase! Sign in with Google to get started."
        textStyle={{
          ...styles.tagLine,
          ...{
            color: deviceTheme === 'dark' ? Colors.white : Colors.black,
          },
        }}
      />
      <AppButton
        label="Login with google"
        onPress={() => navigation.navigate('Home')}
        showIcon={true}
        trailingIcon="google"
      />
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontFamily: Constants.FONTS.Bold,
    fontSize: 33,
    marginBottom: Constants.SPACES.large,
    textAlign: 'center',
    color: Colors.primary,
  },
  tagLine: {
    fontFamily: Constants.FONTS.Medium,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: Constants.SPACES.large,
  },
});

export default LoginScreen;
