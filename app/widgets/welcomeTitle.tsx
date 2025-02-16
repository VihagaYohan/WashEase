import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// components
import {AppText} from '../components';

// constants
import {Constants, Colors, Helpers} from '../utils';

const WelcomeTitle = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.container,
        ...{
          position: 'absolute',
          left: Constants.SPACES.small,
          top: Helpers.IS_ANDROID
            ? insets.top + Constants.SPACES.large * 2.5
            : insets.top,
        },
      }}>
      <View>
        <AppText text="Hi, Welcome back" textStyle={styles.welcomeText} />
        <AppText text="Samantha Martin" textStyle={styles.userName} />
      </View>

      <Icon name="bell-o" size={25} color={Colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    zIndex: 100,
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: Constants.FONTS.Medium,
    color: Colors.white,
  },
  userName: {
    fontSize: 24,
    fontFamily: Constants.FONTS.Bold,
    color: Colors.white,
  },
});

export default WelcomeTitle;
