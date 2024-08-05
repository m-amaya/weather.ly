import {
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  mergeMantineTheme,
  Switch,
  TabsTab
} from "@mantine/core";

const themeOverride = createTheme({
  autoContrast: true,
  colors: {
    skyBlue: [
      "#dffcff",
      "#cbf5ff",
      "#9ae7ff",
      "#64daff",
      "#3ccffe",
      "#24c8fe",
      "#09c4ff",
      "#00ade4",
      "#009acc",
      "#0085b5"
    ]
  },
  cursorType: "pointer",
  defaultRadius: 6,
  focusRing: "auto",
  fontFamily: "'Inter Variable', sans-serif",
  headings: {
    fontFamily: "'Lexend Variable', sans-serif"
  },
  primaryColor: "skyBlue",
  components: {
    Switch: Switch.extend({
      styles: (theme) => ({
        thumb: {
          "--switch-thumb-bd": theme.colors.skyBlue[6]
        },
        track: {
          "--switch-bd": theme.colors.skyBlue[6],
          "--switch-bg": theme.colors.skyBlue[3],
          "--switch-text-color": theme.black
        }
      })
    }),
    TabsTab: TabsTab.extend({
      defaultProps: {
        px: "lg",
        py: "md"
      }
    })
  }
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const resolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {},
  dark: {}
});
