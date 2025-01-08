import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './register/registerReducer';
import loginReducer from './login/loginReducer';

const store = configureStore({
  reducer: {
    register: registerReducer, 
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
