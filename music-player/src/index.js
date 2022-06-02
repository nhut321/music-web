import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import AppContextProvider from './contexts/appContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <Router>
        <App /> 
      </Router>
    </AppContextProvider>
  </React.StrictMode>
);
