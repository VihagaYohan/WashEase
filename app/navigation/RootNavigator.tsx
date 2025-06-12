/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {StaticParamList} from '@react-navigation/native';

// screens
import {
  OnboardingScreen,
  LoginScreen,
  HomeScreen,
  BookingScreen,
  LocationsScreen,
  ProfileScreen,
} from '../screens';

// navigation
import {Routes, CustomTabBar} from './index';
import {createStaticNavigation} from '@react-navigation/native';

// bottom tab navigator
const Tabs = createBottomTabNavigator({
  initialRouteName: Routes.home,
  tabBar: props => <CustomTabBar {...props} />,
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {},
    },
    Booking: {
      screen: BookingScreen,
    },
    Locations: {
      screen: LocationsScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
});

// root stack navigator
export const RootStack = createNativeStackNavigator({
  initialRouteName: Routes.onboarding,
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Onboarding: {
      screen: OnboardingScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: Tabs,
    },
  },
});

const RootNavigation = createStaticNavigation(RootStack);
/* type RootStackParamList = StaticParamList<typeof RootStack>;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} */

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StaticParamList<typeof RootStack> {}
  }
}

export default RootNavigation;
