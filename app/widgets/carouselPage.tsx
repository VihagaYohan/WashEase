import {StyleSheet} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

// components
import {AppText} from '../components';

// constants
import {Constants, Colors} from '../utils';

interface propTypes {
  item: number;
  index: number;
  translateX: SharedValue<number>;
}

const Page = ({item, index, translateX}: propTypes) => {
  const rStyle = useAnimatedStyle(() => {
    const inputRange: number[] = [
      (index - 1) * Constants.CARD_WIDTH,
      index * Constants.CARD_WIDTH,
      (index - 1) * Constants.CARD_WIDTH,
    ];
    const scaleOutputRange: number[] = [0.7, 1, 0.7];

    // animate carousel page scale
    const scale = interpolate(
      translateX.value,
      inputRange,
      scaleOutputRange,
      Extrapolation.CLAMP,
    );
    return {
      transform: [{scale}],
    };
  });

  return (
    <Animated.View style={[styles.itemContainer, rStyle]}>
      <AppText text={`${index} - ${item}`} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: Constants.CARD_WIDTH,
    height: Constants.SCREEN_HEIGHT * 0.26,
    borderRadius: Constants.SPACES.medium,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Constants.SPACES.small / 2,
  },
});

export default Page;
