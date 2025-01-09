// redux/store.js
import { createStore, applyMiddleware } from 'redux';
import registerReducer from './register/registerReducer';

// Middleware pour persister les données dans localStorage
const localStorageMiddleware = store => next => action => {
  console.log('Middleware déclenché:', action); // Ajoute un log ici pour vérifier
  const result = next(action);
  // Sauvegarder l'état dans le localStorage
  localStorage.setItem('register', JSON.stringify(store.getState().register));
  return result;
};

const store = createStore(
  registerReducer,
  applyMiddleware(localStorageMiddleware)  // Assure-toi que le middleware est bien appliqué
);

export default store;

  
  