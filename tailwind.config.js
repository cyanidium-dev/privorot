const plugin = require("tailwindcss/plugin");
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{dark-to-light,dark-to-light-2,dark-to-light-3}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "360px",
        s: "425px",
      },
      colors: {
        txtColor: "#FFF1E2",
        txtColor2: "#E2E2FF",
        txtColor3: "#FFE2F7",
        main: "#B72837",
        darkRed: "#5B0D0D",
        dark: "#190303",
        borederColor: "#D0B594",
      },
      backgroundImage: {
        "button-gradient":
          "linear-gradient(94deg, #FF7C89 -14.73%, #C83D4A 22.87%, #9C1724 97.81%)",
        "button-gradient-2":
          "linear-gradient(94deg, #7CA8FF -14.73%, #3D70C8 22.87%, #172D9C 97.81%)",
        "button-gradient-3":
          "linear-gradient(94deg, #FF7CF0 -14.73%, #C83D92 22.87%, #9C1772 97.81%)",

        "accent-gradient":
          "linear-gradient(81deg, #FF7C89 22.78%, #C83D4A 94.41%, #9C1724 237.16%)",
        "accent-gradient-2":
          "linear-gradient(81deg, #7C9DFF 22.78%, #3D70C8 94.41%, #17319C 237.16%)",
        "accent-gradient-3":
          "linear-gradient(81deg, #FF7CE1 22.78%, #C83D90 94.41%, #9C176E 237.16%)",

        "card-gradient":
          "linear-gradient(94deg, #36070B -14.73%, #28060A 22.87%, #9C1724 97.81%)",

        "light-gradient":
          "linear-gradient(94deg, #FFF1E2 -4.1%, #A07946 112.18%)",
        "light-gradient-2":
          "linear-gradient(94deg, #E6E2FF -4.1%, #464EA0 112.18%)",
        "light-gradient-3":
          "linear-gradient(94deg, #FFE2FC -4.1%, #B633A0 112.18%)",
      },
      fontFamily: {
        forum: ["Forum", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        marianna: ["Marianna", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui(),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".txt-gradient": {
          background: "linear-gradient(94deg, #FFF1E2 -4.1%, #A07946 112.18%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },

        ".dark-txt-gradient": {
          background:
            "linear-gradient(93deg, #1E0202 2.35%, rgba(72, 13, 13, 0.40) 114.91%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },

        ".dark-txt-gradient-2": {
          background:
            "linear-gradient(93deg, #020B1E 2.35%, rgba(13, 19, 72, 0.40) 114.91%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },

        ".dark-txt-gradient-3": {
          background:
            "linear-gradient(93deg, #1E0215 2.35%, rgba(72, 13, 55, 0.40) 114.91%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },

        ".dark-to-light": {
          background:
            "linear-gradient(93deg, #1E0202 2.35%, rgba(72, 13, 13, 0.00) 114.91%)",
          backgroundOrigin: "padding-box, padding-box",
          backgroundClip: "content-box, padding-box",
        },

        // ".border-gradient-rounded": {
        //   border: "1px solid #FFF1E2",
        //   borderRadius: "4px",
        //   background:
        //     "linear-gradient(94deg, #36070B -14.73%, #28060A 22.87%, #9C1724 97.81%)",
        //   backgroundClip: "padding-box, border-box",
        //   backgroundOrigin: "padding-box, border-box",
        // },
        ".transition-default": {
          transition: "all 300ms ease-in-out",
        },
      });
    }),
  ],
};
