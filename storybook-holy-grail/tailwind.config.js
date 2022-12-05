// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      none: "none",
      transparent: "transparent",
      yellow: {
        500: "#FAD161",
        400: "#FBDA7F",
        300: "#FCE29C",
        200: "#FDEBBA",
        100: "#FEF4D8",
        50: "#FEF8E6",
      },
      maroon: {
        500: "#A04163",
        400: "#BB597C",
        300: "#CA7D99",
        200: "#D9A1B5",
        100: "#E8C5D2",
        50: "#EFD8E0",
      },
      red: {
        500: "#FF005B",
        400: "#FF337C",
        300: "#FF669D",
        200: "#FF99BD",
        100: "#FFCCDE",
        50: "#FFE5EF",
      },
      green: {
        500: "#7AFAD4",
        400: "#93FBDC",
        300: "#ABFCE4",
        200: "#C4FDEC",
        100: "#DCFEF4",
        50: "#E9FEF8",
      },
      black: {
        500: "#27272B",
        400: "#47474E",
        300: "#666671",
        200: "#878792",
        100: "#AAAAB2",
        50: "#BBBBC1",
      },
      white: "#FAF3EC",
    },
    spacing: {
      0: "0px",
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      24: "24px",
      32: "32px",
      40: "40px",
      48: "48px",
      56: "56px",
      64: "64px",
      72: "72px",
      80: "80px",
      96: "96px",
      112: "112px",
      120: "120px",
      128: "128px",
      144: "144px",
      160: "160px",
      176: "176px",
      192: "192px",
      208: "208px",
    },
    fontFamily: {
      sans: [
        "Montserrat",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      handwriting: [
        "Architects Daughter",
        "Montserrat",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    fontSize: {
      12: "1.2rem", // 12px
      14: "1.4rem", // 14px
      16: "1.6rem", // 16px
      18: "1.8rem", // 18px
      20: "2.0rem", // 20px
      24: "2.4rem", // 24px
      32: "3.2rem", // 32px
      48: "4.8rem", // 48px
      56: "5.6rem", // 56px
      64: "6.4rem", // 64px
    },
    fontWeight: {
      medium: 500,
      extrabold: 800,
      black: 900,
    },
    letterSpacing: {
      wide: "0.25em",
    },
    lineHeight: {
      none: "1",
      heading: "1.2",
      link: "1.3",
      normal: "1.5",
    },
    borderWidth: {
      2: "2px",
      4: "4px",
    },
    borderRadius: {
      none: "0rem",
      12: "1.2rem",
      24: "2.4rem",
      full: "9999rem",
    },
    extend: {
      backgroundImage: {
        noise: "url('/src/assets/patterns/noise.svg')",
      },
    },
  },
  plugins: [],
};
