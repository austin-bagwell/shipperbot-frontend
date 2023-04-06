// TODO adjust colors to match my color scheme

/* BASE COLORS */
export const colorWhite = "#ffffff";
export const colorBlack = "#262626";

export const colorGrey = "#82908d"; // green/grey

export const colorGreen = "#008080";
export const colorRed = "#b04846";
export const colorLightBlue = "#ADD8E6";
export const colorYellow = "#d1d156";

/* COLORS */
export const colorPrimary = "#ADD8E6";
export const colorBackground = colorWhite;

export const colorFontPrimary = colorBlack;

export const colorSuccess = colorLightBlue;
export const colorCaution = colorRed;
export const colorWarning = colorYellow;

/**
 * greyScale
 * @param {number} degree - Number, 0 - 10. 0 being black 10 being white
 */
export function greyScale(degree) {
  return `hsl(0, 0%, ${degree * 10}%)`;
}
