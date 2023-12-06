import { FC, useMemo } from "react";
import { useLocalStorage } from "../../lib/client/hooks/useLocalStorage";
import { darkTheme, lightTheme } from "../../styles/Theme";
import { ThemeProvider } from "styled-components";

export const ManagedUIContext: FC<any> = ({ children }) => {
  // External Store 를 사용하는 경우 //
  // const [mounted, setMounted] = useState(false);
  // const [themeMode, setThemeMode] = useState("light");

  // useEffect(() => {
  //   setMounted(true); // 리렌더링을 다시 한번 더 하게 강제 합니다.
  //   const theme = localStorage.getItem("theme");
  //   if (theme) {
  //     setThemeMode(theme);
  //   } else {
  //     setThemeMode(
  //       window.matchMedia("(prefers-color-scheme: dark)").matches
  //         ? "dark"
  //         : "light"
  //     );
  //   }
  // }, []);

  const [localTheme, _] = useLocalStorage("theme");

  const themeMode = useMemo((): string => {
    if (localTheme) return localTheme;
    else
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  }, [localTheme]);

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};
