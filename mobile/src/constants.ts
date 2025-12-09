const sharedColors = {
  primaryBrand: '#FF6F61',
  white: '#FFFFFF',
  black: '#000000',
  error: '#B00020',
};

const lightTheme = {
  ...sharedColors,
  background: sharedColors.white,
  text: sharedColors.black,
  cardBackground: '#F0F0F0',
  tint: sharedColors.primaryBrand,
};

const darkTheme = {
  ...sharedColors,
  background: '#121212',
  text: sharedColors.white,
  cardBackground: '#1E1E1E',
  tint: sharedColors.primaryBrand,
};

export const ColorPalettes = {
  light: lightTheme,
  dark: darkTheme,
};