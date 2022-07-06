import { createContext } from "react";

export interface IThemeModeContext {
  dark: string;
  light: string;
  darkMode: boolean;
  handleToggleTheme: () => void;
  englishMode: boolean;
  handleToggleLanguage: () => void;
  styles: any;
}

export const ThemeModeContext =
  createContext<IThemeModeContext | undefined>(undefined);
