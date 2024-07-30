import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import '../node_modules/primereact/resources/themes/soho-dark/theme.css'
import '../node_modules/primereact/resources/primereact.min.css'
import '../node_modules/primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'animate.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
);