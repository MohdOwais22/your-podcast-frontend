import { configureStore } from '@reduxjs/toolkit';
import {
  loadUserReducer,
  loginReducer,
  registerReducer,
} from '../reducers/userReducer.js';

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    auth: loadUserReducer,
  },
});
