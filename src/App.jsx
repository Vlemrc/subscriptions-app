import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';

import Login from './pages/Login';
import Home from './pages/Home';
import Account from './pages/Account';
import PropTypes from 'prop-types';
import AddSubscription from './pages/AddSubscription';
import Register from './pages/Register';
import Subscription from './components/Subscription';
import store from './redux/combineReducer';

function App() {
  
  const PrivateRoute = ({ children }) => {
    const isAuthenticated = store.getState().reducer.login.isAuthenticated;
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<Subscription />} />
          <Route 
            path="/" 
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/account" 
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/add-subscription" 
            element={
              <PrivateRoute>
                <AddSubscription />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
