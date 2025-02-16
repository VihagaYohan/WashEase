import React from 'react';
import {StyleSheet} from 'react-native';

// components
import {AppContainer, AppText} from '../../components';
import {Constants} from '../../utils';

const LoginScreen = () => {
  return (
    <AppContainer>
      <AppText text="WashEase" textStyle={styles.title} />
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Constants.FONTS.Bold,
    fontSize: 33,
    marginBottom: Constants.SPACES.large,
  },
});

export default LoginScreen;
