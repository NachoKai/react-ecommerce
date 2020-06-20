import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './User';
import cartReducer from './Cart';
import directoryReducer from './Directory';
import shopReducer from './Shop';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
