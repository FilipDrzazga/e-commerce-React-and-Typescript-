import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    padding: string[];
    fontsSize: {
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
    colors: {
      black: string;
      purple: string;
      lightBlue: string;
    };
  }
}

const theme: DefaultTheme = {
  padding: ["1rem", "2rem"],
  fontsSize: {
    s: "0.5rem",
    m: "0.8rem",
    l: "1.5rem",
    xl: "5rem",
    xxl: "6rem",
  },
  colors: {
    black: "#292929",
    purple: "#D197FF",
    lightBlue: "#E3F9FF",
  },
};

export default theme;
