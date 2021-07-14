import { Platform } from 'react-native';

export const config = {
  isAndroid: Platform.OS === 'android',
  logNetworkMessages: __DEV__
};
