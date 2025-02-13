/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// screens
import {OnboardingScreen} from './app/screens';

const App = () => {
  return (
    <SafeAreaProvider>
      <OnboardingScreen />
    </SafeAreaProvider>
  );
};

export default App;
