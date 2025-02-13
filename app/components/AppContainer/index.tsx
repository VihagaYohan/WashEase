import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {useSafeAreaInsets, SafeAreaView} from 'react-native-safe-area-context';

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
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        ...containerStyle,
        backgroundColor: deviceTheme === 'dark' ? Colors.black : Colors.white,
        paddingBottom: insets.bottom,
      }}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Constants.SCREEN_WIDTH,
    height: Constants.SCREEN_HEIGHT,
    paddingHorizontal: Constants.SPACES.small,
  },
});

export default AppContainer;
