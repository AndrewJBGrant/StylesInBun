import { useEffect, useState } from "react";
import { set_ToLS, get_FromLS } from "../utils/storage";
import _ from "lodash";

export const useTheme = () => {
const themes = get_FromLS("all-themes");
const [theme, setTheme] = useState(themes.data.light);
const [themeLoaded, setThemeLoaded] = useState(false);

const setMode = mode => {
  set_ToLS("theme", mode)
  setTheme(mode);
}

const getFonts = () => {
  const allFonts = _.values(_.mapValues(themes.data, "font"));
  return allFonts;
}

useEffect(() => {
  const localTheme = get_FromLS("theme");
  localTheme ? setTheme(localTheme) : setTheme(theme.data.seaWave);
  setThemeLoaded(true);
  console.log(localTheme, "my local theme", theme.data, "theme.data")
}, [theme.data]);

console.log(theme.colors.button.text, " Idunno anymore??");
return { theme, themeLoaded, setMode, getFonts, useTheme}
};
