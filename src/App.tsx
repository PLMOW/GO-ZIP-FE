import Router from './Router';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'theme';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import GlobalStyle from 'libs/client/GlobalStyle';
import Nav from 'components/partials/Nav/Nav';

function App() {
  const isDark = useSelector<RootState>((state) => state.themeToggle);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Nav />
      <Router />
    </ThemeProvider>
  );
}

export default App;
