import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    padding: string[];
    fontsSize: {
      s: string;
      m: string;
      l: string;
      doubleL: string;
      xl: string;
      xxl: string;
      special: string;
    };
    colors: {
      black: string;
      lightBlack: string;
      gray: string;
      purple: string;
      lightBlue: string;
    };
    listItemColors: string[];
  }
}

const theme: DefaultTheme = {
  padding: ["1rem", "2rem"],
  fontsSize: {
    s: "0.5rem",
    m: "1rem",
    l: "1.5rem",
    doubleL: "3rem",
    xl: "5rem",
    xxl: "8rem",
    special: "18rem",
  },
  colors: {
    black: "#292929",
    lightBlack: "#29292909",
    gray: "#AEB7C8",
    purple: "#D197FF",
    lightBlue: "#E3F9FF",
  },
  listItemColors: ["#EEF5FF", "#D2DAFF", "#F1EAFF"],
};

export default theme;
