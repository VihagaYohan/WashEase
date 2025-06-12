import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

// components
import {AppText} from '../components';

// constants
import {Constants, Colors} from '../utils';

// hooks
import {useDeviceTheme} from '../hooks';

interface propTypes {
  title: string;
  isAction?: boolean;
  actionTitle?: string;
  onPress?: () => void;
}

const SubTitle = ({
  title,
  isAction = false,
  actionTitle = 'View All',
  onPress,
}: propTypes) => {
  const deviceTheme = useDeviceTheme();

  return (
    <View style={styles.container}>
      <AppText text={title} textStyle={styles.title} />
      {isAction && (
        <TouchableOpacity
          onPress={onPress}
          style={{
            ...styles.action,
            ...{
              backgroundColor:
                deviceTheme === 'dark'
                  ? Colors.primaryVariant1Transparent
                  : Colors.white1,
            },
          }}>
          <AppText text={actionTitle} textStyle={styles.actionTitle} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: Constants.FONT_SIZE.medium * 1.2,
  },
  action: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Constants.SPACES.large,
    paddingHorizontal: Constants.SPACES.small,
    paddingVertical: Constants.SPACES.small / 2,
  },
  actionTitle: {
    fontSize: Constants.FONT_SIZE.small,
    color: Colors.primary,
  },
});

export default SubTitle;
