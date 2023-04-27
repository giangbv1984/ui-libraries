module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      borderRadius: {
        small: "5px",
        large: "40px",
      },
      colors: {
        title: "#25292D",
        "primary-bottom": "#28292F",
        "primary-top": "#41434C",
        "cta-bottom": "#00DCFF",
        "cta-top": "#4BD5BA",
        secondary: "#F3F3F4",
        green: "#49BDCA",
        "green-light": "#00FFF9",
        "green-dark": "#1E5F6F",
        grey: "#e2e8f0",
        disabled: "rgba(0,0,0,0.5)",
        white: "#FFFFFF",
      },
      backgroundColor: {
        default: "#F3F3F4",
        menu: "#25292D",
        primary: "#292A2F",
        "primary-active": "rgba(243,243,244,0.21)",
        white: "#FFFFFF",
      },
      gradientColorStops: {
        primary: "#28292F",
      },
      fontFamily: {
        sans: ['"Noto Sans JP"'],
      },
      spacing: {
        "75px": "4.6rem",
      },
      fontSize: {
        sm: ["11px", "20px"],
        medium: ["14px", "24px"],
        "13px": "0.813rem",
        subtitle: ["14px", "16px"],
        "table-data": ["13px", "18px"],
      },
      margin: {
        "38px": "38px",
      },
      divideColor: {
        primary: "#f3f3f4",
      },
      minWidth: {
        80: "20rem",
      },
      inset: {
        "-92": "-22rem",
      },
      height: {
        74: "4.625rem",
      },
      width: {
        74: "4.625rem",
      },
    },
  },
  variants: {
    extend: {},
  },
};
