/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useLinkBuilder, useTheme} from '@react-navigation/native';
import {Text, PlatformPressable} from '@react-navigation/elements';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';

// constants
import {Colors, Constants} from '../utils';

// hooks
import {useDeviceTheme} from '../hooks';

const CustomTabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const {colors} = useTheme();
  const {buildHref} = useLinkBuilder();
  const insets = useSafeAreaInsets();
  const deviceTheme = useDeviceTheme();

  const icon = {
    Home: (props: any) => <FeatherIcon name="home" size={20} {...props} />,
    Booking: (props: any) => (
      <FeatherIcon name="calendar" size={20} {...props} />
    ),
    Locations: (props: any) => <FeatherIcon name="map" size={20} {...props} />,
    Profile: (props: any) => <FeatherIcon name="user" size={20} {...props} />,
  };

  return (
    <View
      style={[
        styles.tabbar,
        {
          bottom: insets.bottom + Constants.SPACES.small,
          backgroundColor:
            deviceTheme === 'dark' ? Colors.black1 : Colors.white,
          shadowColor: deviceTheme === 'dark' ? Colors.white : '#222',
        },
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label: string =
          options.tabBarLabel !== undefined
            ? (options.tabBarLabel as string)
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <PlatformPressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            style={styles.tabbarItem}
            android_ripple={{color:'transparent'}}>
            {icon[route.name]({
              color: isFocused
                ? Colors.primary
                : deviceTheme === 'dark'
                ? Colors.white
                : '#222',
            })}
            <Text
              style={{
                color: isFocused
                  ? colors.primary
                  : deviceTheme === 'dark'
                  ? Colors.white
                  : colors.text,
              }}>
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Constants.SPACES.large,
    paddingVertical: Constants.SPACES.medium,
    borderRadius: Constants.SPACES.large * 2,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
});

export default CustomTabBar;
