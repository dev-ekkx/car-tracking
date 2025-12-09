import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { ColorSchemeName } from 'react-native';

const primaryBrandColor = '#f48c25';
const appAccentColor = '#6D28D9'; 

export const LightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: primaryBrandColor,
    background: '#F7F9FB', 
    card: '#FFFFFF', 
    text: '#1F2937', 
    border: '#E5E7EB', 
    accent: appAccentColor, 
  },
};

export const DarkThemeCustom = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: primaryBrandColor,
    background: '#121212', 
    card: '#1E1E1E', 
    text: '#F9FAFB', 
    border: '#374151', 
    accent: appAccentColor, 
  },
};

export const getTheme = (scheme: ColorSchemeName) => {
  return scheme === 'dark' ? DarkThemeCustom : LightTheme;
};