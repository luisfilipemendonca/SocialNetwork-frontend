import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import UserReducer from './reducers/user';
import PostsReducer from './reducers/posts';
import LoadingReducer from './reducers/loading';

const persistConfig = {
  key: 'socialNetwork',
  storage,
};

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, UserReducer),
  posts: PostsReducer,
  loading: LoadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
