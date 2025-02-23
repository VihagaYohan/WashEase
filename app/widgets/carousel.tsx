import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

// constants
import {Constants} from '../utils';

// widgets
import {HomeCarouselPage, HomeCarouselPaginateItem} from '../widgets';

const DATA = [1, 2, 3];
const DOT_SIZE = 10;

const HomeCarousel = () => {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <View
      style={{
        height: Constants.SCREEN_HEIGHT * 0.3,
      }}>
      <Animated.FlatList
        data={DATA}
        keyExtractor={(_, index) => `carousel-${index}`}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <HomeCarouselPage
              key={`carousel-item-${index}`}
              item={item}
              index={index}
              translateX={translateX}
            />
          );
        }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      />

      <View style={styles.paginateContainer}>
        {DATA.map((_, index) => {
          return (
            <HomeCarouselPaginateItem index={index} translateX={translateX} />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paginateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: Constants.SPACES.small,
  },
  paginateItem: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    marginRight: Constants.SPACES.small,
  },
});

export default HomeCarousel;
