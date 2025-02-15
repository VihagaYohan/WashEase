import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Canvas, Path, ImageSVG, useSVG} from '@shopify/react-native-skia';
import {useNavigation} from '@react-navigation/native';

// constants
import {Colors, Constants} from '../../utils';

// components
import {AppContainer, AppText} from '../../components';

// shapes
import {Shapes} from '../../widgets';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const sourceImage = useSVG(require('../../assets/images/onboarding.svg'));
  return (
    <AppContainer containerStyle={styles.contianer} edges={[]}>
      <Canvas style={styles.topCanvas}>
        <Path path={Shapes.topShapePath} color={Colors.primaryVariant1} />
      </Canvas>
      <View style={styles.contentContainer}>
        <Canvas style={styles.image}>
          <ImageSVG svg={sourceImage} width={300} height={300} />
        </Canvas>
        <AppText text="WashEase" textStyle={styles.title} />
        <AppText
          text={
            'Fresh Clothes, Fresh Start – Effortless Laundry at Your Fingertips!'
          }
          textStyle={styles.tagLine}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.getStatedButton}>
          <AppText text="Get Started" />
        </TouchableOpacity>
      </View>
      {/*    <Canvas style={styles.bottomCanvas}>
        <Path
          path={Shapes.bottomShapePath}
          style="fill"
          color={Colors.primaryVariant1}
        />
      </Canvas> */}
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
    paddingHorizontal: Constants.SPACES.medium,
  },
  image: {width: 300, height: 300},
  title: {
    fontFamily: Constants.FONTS.Bold,
    fontSize: 33,
    marginBottom: Constants.SPACES.large,
  },
  tagLine: {
    fontFamily: Constants.FONTS.Medium,
    fontSize: 15,
    textAlign: 'center',
  },
  getStatedButton: {
    backgroundColor: Colors.secondary,
    paddingVertical: Constants.SPACES.medium,
    paddingHorizontal: Constants.SPACES.large,
    borderRadius: Constants.SPACES.medium,
    marginTop: Constants.SPACES.large,
  },
});

export default OnboardingScreen;
