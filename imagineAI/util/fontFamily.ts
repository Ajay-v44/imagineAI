import { fontFamilies } from "@/constants/font";

export const getFontFamily = (
  isLTR: boolean,
  weight: "normal" | "medium" | "bold"
) => {
  const selectedFontFamily = isLTR ? fontFamilies.Arima : fontFamilies.RUBIK;
  return selectedFontFamily[weight];
};
