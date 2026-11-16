import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import ScrollToTop from './Components/ScrollToTop.js';
import { BrowserRouter } from 'react-router-dom';
import './Components/i18n.js';
// require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <ScrollToTop/>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

