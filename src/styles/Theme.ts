// export type Mode = "light" | "dark";

export const lightTheme: object = {
  themeMode: "light",
  // background_color: "#F8F9FA",
  background_color: "#FBFBF9",
  text_primary_color: "#313131",
  symbol_color: "#3897F0",
  secondary_symbol_color: "#7b61ff",
  white: "#F0F0F0",
  transparent_10: "#21212110",
  transparent_50: "#21212150",
  gray_500: "#B3B3B3AA",
};

export const darkTheme: object = {
  themeMode: "dark",
  background_color: "#212121",
  text_primary_color: "#f5f5f7",
  symbol_color: "#3897F0",
  secondary_symbol_color: "#7b61ff",
  white: "#F0F0F0",
  transparent_10: "#FBFBF910",
  transparent_50: "#FBFBF950",
};

const Theme = {
  lightTheme,
  darkTheme,
};

export default Theme;
