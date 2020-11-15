import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyle from './style';
import theme from './style/theme';

import Header from './containers/Header';

import Routes from './routes';

import AuthReducer from './store/reducers/Auth';
import PostsReducer from './store/reducers/Posts';
import ProfileReducer from './store/reducers/Profile';

const persistConfig = {
  key: 'auth',
  whitelist: ['isLogged', 'userToken', 'userId'],
  storage,
};

const rootReducers = combineReducers({
  auth: persistReducer(persistConfig, AuthReducer),
  posts: PostsReducer,
  profile: ProfileReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));
const persistor = persistStore(store);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <Header />
              <Routes />
              <GlobalStyle />
            </ThemeProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
