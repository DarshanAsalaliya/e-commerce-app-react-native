const themeColors = {
  transparent: 'transparent',
  lightBlackPrimary: '#181919',
  lightBlackSecondary: '#1A1A1A',
  green: '#18CE97',
  offWhite: '#F3F3F3',
  lightGrey: '#AAABAB',
  lightBlackPrimary: '#181919',
  lightBlackSecondary: '#1A1A1A',
  primary: '#1E232C',
  secondary: '#35C2C1',
  offWhitePrimary: '#E8ECF4',
  offWhiteSecondary: '#F7F8F9',
  grey: '#8391A1',
  darkGrey: '#6A707C',
  dark: '#1E232C',
  red: 'red',
  blackTransparent: '#181919aa',
};

const commonColors = {
  white: '#ffffff',
  black: '#000000',
  transparentBlack: '#00000000',
  transparentWhite: '#FFFFFF00',
};

const light = {
  ...themeColors,
  white: commonColors.white,
  black: commonColors.black,
  transparentBlack: commonColors.transparentBlack,
  transparentWhite: commonColors.transparentWhite,
};

const dark = {
  ...themeColors,
  white: commonColors.black,
  black: commonColors.white,
  transparentBlack: commonColors.transparentWhite,
  transparentWhite: commonColors.transparentBlack,
};

export { light, dark };
