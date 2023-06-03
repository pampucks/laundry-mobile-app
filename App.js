import "react-native-gesture-handler";
import { LogBox } from "react-native";
import WidgetBaseDrawer from "./widgets/base/WidgetBaseDrawer";
import { PaperProvider } from "react-native-paper";
import { MD3LightTheme as DefaultTheme } from "react-native-paper";

LogBox.ignoreAllLogs([
  "Non-serializable values were found in the navigation state",
]);

const theme = {
  ...DefaultTheme,

  colors: {
    primary: "rgb(191, 207, 95)",
    onPrimary: "rgb(45, 52, 0)",
    primaryContainer: "rgb(66, 75, 0)",
    onPrimaryContainer: "rgb(219, 236, 120)",
    secondary: "rgb(248, 188, 73)",
    onSecondary: "rgb(66, 44, 0)",
    secondaryContainer: "rgb(94, 65, 0)",
    onSecondaryContainer: "rgb(255, 222, 169)",
    tertiary: "rgb(255, 183, 132)",
    onTertiary: "rgb(79, 37, 0)",
    tertiaryContainer: "rgb(113, 55, 0)",
    onTertiaryContainer: "rgb(255, 220, 197)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(28, 28, 23)",
    onBackground: "rgb(229, 226, 218)",
    surface: "rgb(28, 28, 23)",
    onSurface: "rgb(229, 226, 218)",
    surfaceVariant: "rgb(71, 72, 59)",
    onSurfaceVariant: "rgb(200, 199, 183)",
    outline: "rgb(145, 146, 131)",
    outlineVariant: "rgb(71, 72, 59)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(229, 226, 218)",
    inverseOnSurface: "rgb(49, 49, 43)",
    inversePrimary: "rgb(88, 100, 0)",
    elevation: {
      level0: "transparent",
      level1: "rgb(36, 37, 27)",
      level2: "rgb(41, 42, 29)",
      level3: "rgb(46, 48, 31)",
      level4: "rgb(48, 50, 32)",
      level5: "rgb(51, 53, 33)",
    },
    surfaceDisabled: "rgba(229, 226, 218, 0.12)",
    onSurfaceDisabled: "rgba(229, 226, 218, 0.38)",
    backdrop: "rgba(48, 49, 38, 0.4)",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <WidgetBaseDrawer />
    </PaperProvider>
  );
}
