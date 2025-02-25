import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Canvas, Path} from '@shopify/react-native-skia';

// components
import {AppContainer} from '../../components';

// constants
import {Colors, Constants} from '../../utils';

// widgets
import {WelcomeTitle, Shapes, HomeCarousel, SubTitle} from '../../widgets';

const HomeScreen = () => {
  return (
    <AppContainer edges={['bottom', 'left', 'right']}>
      <Canvas style={styles.canvas}>
        <Path path={Shapes.topShapePath} color={Colors.primaryVariant1} />
      </Canvas>
      <View style={styles.backgroundOverlay} />
      <WelcomeTitle />

      <HomeCarousel />

      <SubTitle
        title="Services"
        isAction={true}
        actionTitle="View all"
        onPress={() => console.log('view all pressed')}
      />
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  backgroundOverlay: {
    height: Constants.SCREEN_HEIGHT * 0.5,
    width: Constants.SCREEN_WIDTH,
    backgroundColor: Colors.primary,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  canvas: {
    width: Constants.SCREEN_WIDTH,
    height: Constants.SCREEN_HEIGHT * 0.2,
    zIndex: 10,
  },
});

export default HomeScreen;
