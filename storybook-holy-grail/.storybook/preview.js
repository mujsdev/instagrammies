import { create } from "@storybook/theming";
import "../src/assets/scss/main.scss";

const lightTheme = create({
  base: "light",
  appBg: "#FAF3EC",
  appContentBg: "#FFFFFF",
  appBorderRadius: 8,
  colorPrimary: "#A04163",
  colorSecondary: "#A04163",
  textColor: "#27272B",
  barBg: "#FFFFFF",
  fontCode: "'Operator Mono', monospace",
});

const darkTheme = create({
  base: "dark",
  appBg: "#27272B",
  appContentBg: "#1D1D20",
  appBorderRadius: 8,
  colorPrimary: "#1EA896",
  colorSecondary: "#1EA896",
  textColor: "#FAF3EC",
  barBg: "#1D1D20",
  fontCode: "'Operator Mono', monospace",
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
    stylePreview: true,
  },
};
