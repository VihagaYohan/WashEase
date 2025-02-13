import React from 'react';
import {StyleSheet, SafeAreaView, ViewStyle} from 'react-native';

// constants
import {Constants, Colors} from '../../utils';

// hooks
import {useDeviceTheme} from '../../hooks';

interface propTypes {
  children: React.ReactNode;
  containerStyle?: ViewStyle;
}

const AppContainer = ({children, containerStyle}: propTypes) => {
  const deviceTheme = useDeviceTheme();

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        ...containerStyle,
        backgroundColor: deviceTheme === 'dark' ? Colors.black : Colors.white,
      }}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Constants.SCREEN_WIDTH,
    height: Constants.SCREEN_HEIGHT,
  },
});

export default AppContainer;
