import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyle, { MainContainer } from './style';
import Theme from './style/Theme';

import { persistor, store } from './store';

import Routes from './routes';

import Navbar from './layout/Navbar';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <ThemeProvider theme={Theme}>
              <Navbar />
              <MainContainer>
                <Routes />
              </MainContainer>
              <GlobalStyle />
            </ThemeProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
