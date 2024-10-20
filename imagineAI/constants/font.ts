import { isIOS } from "@/util/platform";

export const fontFamilies = {
  Arima: {
    normal: isIOS() ? "Arima-Regular" : "ArimaRegular",
    medium: isIOS() ? "Arima-Medium" : "ArimaMedium",
    bold: isIOS() ? "Arima-Bold" : "ArimaBold",
  },
  RUBIK: {
    normal: isIOS() ? "Rubik-Regular" : "RubikRegular",
    medium: isIOS() ? "Rubik-Medium" : "RubikMedium",
    bold: isIOS() ? "Rubik-Bold" : "RubikBold",
  },
  // Adjust the above code to fit your chosen fonts' names
};
