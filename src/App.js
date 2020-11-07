import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './style';
import theme from './style/theme';

import Header from './containers/Header';

import MainRoutes from './routes/MainRoutes';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <MainRoutes />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
