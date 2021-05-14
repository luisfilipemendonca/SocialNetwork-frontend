import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import UserReducer from './reducers/user';
import PostsReducer from './reducers/posts';
import LoadingReducer from './reducers/loading';
import ProfileReducer from './reducers/profile';
import ToastsReducer from './reducers/toasts';

const persistConfig = {
  key: 'socialNetwork',
  storage,
  blacklist: ['userPosts', 'userFollowers', 'userFollowing'],
};

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, UserReducer),
  posts: PostsReducer,
  loading: LoadingReducer,
  profile: ProfileReducer,
  toasts: ToastsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
