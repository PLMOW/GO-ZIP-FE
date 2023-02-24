import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { darkTheme, lightTheme } from 'theme';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import GlobalStyle from 'libs/client/GlobalStyle';
import Router from './Router';
import Nav from 'components/partials/Nav/Nav';

function App() {
  const isDark = useSelector<RootState>((state) => state.themeToggle);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Nav />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
