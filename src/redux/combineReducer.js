import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './register/registerReducer';
import loginReducer from './login/loginReducer';
import subscriptionsReducer from './subscriptions/subscriptionsReducer';

const store = configureStore({
  reducer: {
    register: registerReducer, 
    login: loginReducer,
    subscriptions: subscriptionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
