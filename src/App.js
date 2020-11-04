import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './style';
import theme from './style/theme';

import AuthPage from './pages/Auth';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthPage />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
