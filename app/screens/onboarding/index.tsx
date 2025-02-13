import React from 'react';
import {StyleSheet, View} from 'react-native';
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
      <View style={styles.contentContainer}>
        <AppText text="WashEase" textStyle={styles.title} />
        <AppText
          text={`Get ready to make your life easy\nwith single click of app. Which makes\nlaundry things handle better`}
          textStyle={styles.tagLine}
        />
      </View>
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
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: Constants.FONTS.Bold,
    fontSize: 33,
  },
  tagLine: {
    fontFamily: Constants.FONTS.Regular,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default OnboardingScreen;
