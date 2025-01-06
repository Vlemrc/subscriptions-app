import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './pages/Login';

function App() {
  return (
    <Provider store={store}>
      <div className="h-full bg-gray-100 flex items-center justify-center">
        <Login />
      </div>
    </Provider>
  );
}

export default App;