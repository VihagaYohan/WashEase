import {useColorScheme} from 'react-native';

const useThemeScheme = () => {
  const scheme = useColorScheme();
  return scheme;
};

export default useThemeScheme;
