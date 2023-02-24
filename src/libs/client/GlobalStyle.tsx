import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: ${({ theme }) => theme.transitionOption}
  }
`;

export default GlobalStyle;
