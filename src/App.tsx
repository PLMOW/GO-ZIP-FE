import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { darkTheme, lightTheme } from 'theme';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import GlobalStyle from 'libs/client/style/GlobalStyle';
import Router from './Router';
import Nav from 'components/partials/Nav/Nav';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { next } from 'redux/modules/carousel';
import { Cookies } from 'react-cookie';
import { login } from 'redux/modules/login';

function App() {
  const isDark = useSelector<RootState>((state) => state.themeToggle);
  const { index, imgs } = useSelector((state: RootState) => state.carousel);
  const dispatch = useDispatch();
  const cookie = new Cookies();

  if (cookie.get('ACCESS_TOKEN')) {
    const stringData = localStorage.getItem('userInfo');
    if (stringData) {
      const userInfo = JSON.parse(stringData);
      dispatch(login(userInfo));
    }
  }

  useEffect(() => {
    /* Carousel Infinity Animate */
    setInterval(() => dispatch(next()), 7000);

    /* Image preLoad */
    imgs.forEach((v) => {
      const myImage = new Image();
      myImage.src = v.src;
    });
  }, []);

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
