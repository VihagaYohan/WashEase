import React from 'react';
import {StyleSheet, View} from 'react-native';

// constants
import {Constants} from '../utils';

interface propTypes {
  space?: number;
}

const AppSpacer = ({space = Constants.SPACES.medium}: propTypes) => {
  return <View style={{...styles.container, ...{height: space}}} />;
};

const styles = StyleSheet.create({
  container: {
    height: Constants.SPACES.medium,
  },
});

export default AppSpacer;
