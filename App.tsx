/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {AppText, AppButton, AppContainer} from './app/components';

const App = () => {
  return (
    <AppContainer>
      <AppText text="Hello, world" />
      <AppButton
        label="Click me"
        onPress={() => console.log('hello, world')}
        isPrimary={false}
      />
    </AppContainer>
  );
};

export default App;
