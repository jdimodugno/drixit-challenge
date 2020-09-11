import { DefaultTheme } from "styled-components";

interface IColors {
  [x: string]: string;
}

export interface ITheme extends DefaultTheme {
  colors: IColors;
}