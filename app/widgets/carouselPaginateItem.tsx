import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

// constants
import {Constants, Colors} from '../utils';

const DOT_SIZE = 12;

interface propTypes {
  index: number;
  translateX: SharedValue<number>;
}

const CarouselPaginateItem = ({index, translateX}: propTypes) => {
  const rStyle = useAnimatedStyle(() => {
    const inputRange: number[] = [
      (index - 1) * Constants.CARD_WIDTH,
      index * Constants.CARD_WIDTH,
      (index + 1) * Constants.CARD_WIDTH,
    ];
    const outputRange: number[] = [DOT_SIZE, DOT_SIZE * 2, DOT_SIZE];
    const backgroundColorOutputRange: string[] = [
      Colors.white,
      Colors.secondary,
      Colors.white,
    ];

    // animate paginate item width
    const width = interpolate(
      translateX.value,
      inputRange,
      outputRange,
      Extrapolation.CLAMP,
    );

    // animate paginate item background color
    const backgroundColor = interpolateColor(
      translateX.value,
      inputRange,
      backgroundColorOutputRange,
    );

    return {
      width: width,
      backgroundColor,
    };
  });

  return <Animated.View style={[styles.paginateItem, rStyle]} />;
};

const styles = StyleSheet.create({
  paginateItem: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    marginRight: Constants.SPACES.small,
    backgroundColor: Colors.white,
  },
});

export default CarouselPaginateItem;
