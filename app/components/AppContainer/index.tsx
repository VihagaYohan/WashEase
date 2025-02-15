import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {
  useSafeAreaInsets,
  SafeAreaView,
  Edge,
} from 'react-native-safe-area-context';

// constants
import {Constants, Colors} from '../../utils';

// hooks
import {useDeviceTheme} from '../../hooks';

interface propTypes {
  children: React.ReactNode;
  containerStyle?: ViewStyle;
  edges?: Edge[];
}

const AppContainer = ({
  children,
  containerStyle,
  edges = ['top', 'bottom', 'right', 'left'],
}: propTypes) => {
  const deviceTheme = useDeviceTheme();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: deviceTheme === 'dark' ? Colors.black : Colors.white1,
        ...containerStyle,
        paddingBottom: insets.bottom,
      }}
      edges={edges}>
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
