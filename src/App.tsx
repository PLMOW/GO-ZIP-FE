import Router from './Router';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../theme';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from 'redux/store';

function App() {
  const isDark = useSelector<RootState>((state) => state.themeToggle);

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
