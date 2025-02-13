import React from 'react';
import {StyleSheet} from 'react-native';
import {Canvas, Path} from '@shopify/react-native-skia';

// constants
import {Colors, Constants} from '../../utils';

// components
import {AppContainer, AppText} from '../../components';

// shapes
import {Shapes} from '../../widgets';

const OnboardingScreen = () => {
  return (
    <AppContainer containerStyle={styles.contianer} edges={[]}>
      <Canvas style={styles.topCanvas}>
        <Path path={Shapes.topShapePath} color={Colors.primaryVariant1} />
      </Canvas>
      <AppText text="Onboarding screen" />
      <Canvas style={styles.bottomCanvas}>
        <Path
          path={Shapes.bottomShapePath}
          style="fill"
          color={Colors.primaryVariant1}
        />
      </Canvas>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 0,
  },
  topCanvas: {
    width: Constants.SCREEN_WIDTH,
    height: Constants.SCREEN_HEIGHT * 0.2,
  },
  bottomCanvas: {
    width: Constants.SCREEN_WIDTH,
    height: Constants.SCREEN_HEIGHT * 0.2,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

export default OnboardingScreen;
