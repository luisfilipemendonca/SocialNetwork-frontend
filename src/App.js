import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import { persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { PersistGate } from 'redux-persist/integration/react';

// import AuthReducer from './store/reducers/Auth';
// import PostsReducer from './store/reducers/Posts';
// import ProfileReducer from './store/reducers/Profile';

// const persistConfig = {
//   key: 'auth',
//   whitelist: ['isLogged', 'userToken', 'userId'],
//   storage,
// };

// const rootReducers = combineReducers({
// auth: persistReducer(persistConfig, AuthReducer),
// posts: PostsReducer,
// profile: ProfileReducer,
// });

// const store = createStore(rootReducers, applyMiddleware(thunk));
// const persistor = persistStore(store);

import GlobalStyle from './style';
import Theme from './style/Theme';

import ToastContainer from './layout/ToastContainer';
import Header from './layout/Header';

import ToastsReducer from './store/reducers/Toasts';

const rootReducers = combineReducers({
  // auth: persistReducer(persistConfig, AuthReducer),
  // posts: PostsReducer,
  // profile: ProfileReducer,
  toasts: ToastsReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

const App = () => {
  return (
    <>
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
        <BrowserRouter>
          <ThemeProvider theme={Theme}>
            <ToastContainer />
            <Header />
            <GlobalStyle />
          </ThemeProvider>
        </BrowserRouter>
        {/* </PersistGate> */}
      </Provider>
    </>
  );
};

export default App;
