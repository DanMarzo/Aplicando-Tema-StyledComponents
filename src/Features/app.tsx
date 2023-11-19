import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyled from "../styles/GlobalStyled";
import light from "../styles/themes/light";
import LayoutHome from "./layout";
import dark from "../styles/themes/dark";
import { usePersistState } from "./layout/usePersistedState";

const App = () => {
  const [theme, setTheme] = usePersistState<DefaultTheme>("theme", light);
  const toggleTheme = () => {
    setTheme(theme.title == "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <LayoutHome toggle={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
