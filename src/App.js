import React from 'react';
import { ThemeProvider } from 'styled-components';

import Theme from './style/Theme';
import GlobalStyle from './style';

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
