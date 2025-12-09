import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { getTheme } from "theme";

export default function RootLayout() {
    const scheme = useColorScheme();
    const currentTheme = getTheme(scheme);

  return (
    <ThemeProvider value={currentTheme}>
    <Stack />
      </ThemeProvider>
  )
}
