import { StyleSheet } from 'react-native';
import { config } from '~/config/config';
import { theme } from './theme';



export const globalStyles = StyleSheet.create({
  empty: {},
  screenContainer: {
    flex: 1,
    backgroundColor: theme.colors.transparentBlack3,
  },
  flexContainer: {
    flex: 1,
  },
  defaultShadow: {
    shadowColor: theme.colors.transparentBlack,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  inputPaddingVertical: {
    paddingVertical: config.isAndroid ? 10 : theme.spacing.small,
  },
});
