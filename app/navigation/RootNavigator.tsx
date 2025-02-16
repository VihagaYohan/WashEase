import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {StaticParamList} from '@react-navigation/native';

// screens
import {OnboardingScreen, LoginScreen, HomeScreen} from '../screens';

// navigation
import {Routes} from './index';
import {createStaticNavigation} from '@react-navigation/native';

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
      screen: HomeScreen,
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
