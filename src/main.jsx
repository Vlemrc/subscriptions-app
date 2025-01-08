import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/normalize.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/combineReducer.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <div className="relative h-full">
        <App />
      </div>
    </Provider>
  </StrictMode>,
)
