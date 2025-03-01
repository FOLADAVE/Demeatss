/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style.css'
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Demeatss">
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
