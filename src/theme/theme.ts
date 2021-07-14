import { StyleSheet } from 'react-native';

/* ------------- Colors ------------- */
const colors = {
  primary: '#00d474',
  primaryVariant: '#00af60',

  transparentBlack: 'rgba(0,0,0,0.6)',
  transparentBlack2: 'rgba(0,0,0,0.4)',
  transparentBlack3: 'rgba(0,0,0,0.2)',
  transparentBlack4: 'rgba(0,0,0,0.1)',
  transparentWhite: 'rgba(255,255,255,0.6)',
  transparentWhite2: 'rgba(255,255,255,0.4)',
  transparentWhite3: 'rgba(255,255,255,0.2)',
  transparentWhite4: 'rgba(255,255,255,0.1)',

  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
};

/* ------------- Theme ------------- */
export const theme = {
  // --- Dimensions ---
  spacing: {
    xTiny: 4,
    tiny: 8,
    small: 16,
    base: 24,
    large: 48,
    xLarge: 64,
  },
 

  // --- Colors ---
  colors: {
    ...colors,
    background: colors.primary,
    header: colors.primaryVariant,
    bottomNavbar: colors.primaryVariant,
  }
}
