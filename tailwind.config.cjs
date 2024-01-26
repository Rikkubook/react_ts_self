/** @type {import('tailwindcss').Config} */

import forms from "@tailwindcss/forms";

import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        25: 100,
        12: 48,
        10: 40,
        8: 32,
        7: 28,
        6: 24,
        5: 20,
      },
      colors: {
        primary: {
          DEFAULT: "#BF9D7D",
          100: "#BF9D7D",
          120: "#7B6651",
          80: "#D0B79F",
          60: "#E1D1C2",
          40: "#F1EAE4",
          20: "#FAF7F5",
        },
        success: {
          DEFAULT: "#52DD7E",
          100: "#52DD7E",
          120: "#299F65",
          20: "#BCFBBD",
          10: "#E8FEE7",
        },
        info: {
          DEFAULT: "#3BADEF",
          100: "#3BADEF",
          120: "#1D66AC",
          20: "#B1EFFD",
          10: "#E6FBFE",
        },
        error: {
          DEFAULT: "#DA3E51",
          100: "#DA3E51",
          120: "#C22538",
          20: "#F5CCD1",
          10: "#FDECEF",
        },
        black: {
          DEFAULT: "#000000",
          100: "#000000",
          120: "#140F0A",
          80: "#4B4B4B",
          60: "#909090",
          40: "#ECECEC",
          10: "#F9F9F9",
          0: "#FFFFFF",
        },
      },
      spacing: {
        18: 72,
      },
      height: {
        18: 72,
      },
      minWidth: {
        104: 416,
      },
      lineHeight: {
        "120p": 1.2,
        "150p": 1.5,
      },
      letterSpacing: {
        "2p": "0.02em",
        "5p": "0.05em",
      },
      fontFamily: {
        serif: ["Noto Serif TC", ...fontFamily.serif], //添無趁線加字體
      },
      boxShadow: {
        input: "0px 0px 0px 4px rgba(190, 156, 124,0.10);",
        hidden: "none",
      },
    },
  },
  plugins: [forms()],
};
